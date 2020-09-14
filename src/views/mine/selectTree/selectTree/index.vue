<!--
@author wupeng
@date   19.4.11
@description 封装的树形选择器组件
-->
<template>
  <div>
    <!-- <i class="el-input__icon el-icon-circle-close top"
       :class="{ show: hasData }"
    @click="reset"></i>-->
    <el-select :title="labelList"
               ref="select"
               v-model="checkData"
               :multiple="showCheckbox"
               :multiple-limit="multipleLimit"
               collapse-tags
               :clearable="clearable"
               :disabled="disabled"
               class="select-body"
               :placeholder="placeholder"
               @visible-change="mouseleave"
               @clear="cusclearable">
      <el-option :value="valueTitle"
                 :label="valueTitle">
        <el-tree ref="selectTree"
                 :class="[getLeaf ? 'my-tree' : '']"
                 :data="data"
                 :props="props"
                 :lazy="lazy"
                 :load="load"
                 :expand-on-click-node="false"
                 :check-strictly="getLeaf"
                 :node-key="props.value"
                 :show-checkbox="showCheckbox"
                 :render-content="defaultRender"
                 @check="handleCheck"
                 @node-click="handleNodeClick"
                 @init="init"></el-tree>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'asp-tree-select',
  props: {
    data: {
      type: Array, // 必须是树形结构的对象数组
      default: () => {
        return []
      }
    },
    props: {
      type: Object,
      default: () => {
        return {
          value: 'dictId', // ID字段名
          label: 'title', // 显示名称
          children: 'children' // 子级字段名
        }
      }
    },
    lazy: {
      type: Boolean,
      default: () => { }
    },
    load: { type: Function },
    placeholder: {
      type: String,
      default: '请选择'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 最大选择数量,多选可用
    multipleLimit: {
      type: Number,
      default: 0
    },
    // 是否显示多选
    showCheckbox: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    // 是否显示清除按钮
    clearable: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    // 是否只选子节点，单选可用
    checkLeaf: {
      type: Boolean,
      default: false
    },
    // 是否只返回叶子节点，多选可用
    getLeaf: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String, Object, Number],
      default: () => []
    },
    defaultCheckedKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
    defaultKeysType: {
      type: String,
      default: ''
    },
    thisRender: {
      type: Function
    },
    clickDisable: {
      type: Function
    }
  },
  data () {
    return {
      filterText: '',
      valueTitle: null,
      checkData: [],
      // 是否显示清空图标
      hasData: false,
      // 设置默认值
      valueId: this.value,
      // 是否是父级传过来的值
      flag: true,
      labelList: ''
    }
  },
  watch: {
    defaultCheckedKeys (val) {
      this.init(val)
    },
    // 监听实时改变文本框的值
    checkData (val) {
      if (this.showCheckbox) {
        this.$nextTick(() => {
          this.$refs.selectTree.setCheckedNodes(this.checkData)
          this.$emit('input', this.$refs.selectTree.getCheckedKeys())
          this.valueTitle = this.checkData.length ? this.checkData[0][this.props.label] : ''
          if (this.$refs.selectTree.getCheckedKeys() && this.$refs.selectTree.getCheckedKeys().length > 0) {
            let labelList = []
            this.$refs.selectTree.getCheckedNodes().forEach(item => {
              if (!(item[this.props.label] === '所有' || item[this.props.label] === '全部')) {
                if (item[this.props.label]) {
                  labelList.push(item[this.props.label])
                }
              }
            })
            this.labelList = labelList.join(',')
          } else {
            this.labelList = ''
          }
        })
      } else {
        this.$refs.select.blur()
        this.$emit('input', '')
        if (this.flag && this.checkData) {
          this.$emit('input', this.$refs.selectTree.getCurrentKey())
        }
      }
    },
    // 监听值的变化调用进行清空操作
    value (newValue, oldValue) {
      if (newValue !== null) {
        if (newValue === '' || (newValue.length === 0 && oldValue.length > 0)) {
          this.reset()
        }
      }
      // this.$emit('input', this.$refs.selectTree.getCheckedKeys())
      // this.valueTitle = this.checkData.length ? this.checkData[0][this.props.label] : ''
    }
  },
  methods: {
    handleCheck (data, data2) {
      this.checkData = data2.checkedNodes
      let maxLength = data2.checkedKeys.length
      if (this.multipleLimit !== 0 && maxLength > this.multipleLimit && this.getLeaf) {
        this.$message({
          message: `选中数不能超过${this.multipleLimit} !`,
          type: 'warning'
        })
        // 这样写是为了能够找到并删除最后一次勾选的目标节点并删除
        this.checkData.splice(data2.checkedKeys.indexOf(data[this.props.value]), 1)
      }
      // 不能直接传选中节点的name，因为不知道哪个是对应的label，所以用this.props.label
      this.valueTitle = this.checkData.length ? this.checkData[0][this.props.label] : ''
      this.$emit('input', data)
      this.$emit('check', this.$refs.selectTree.getCheckedNodes(this.getLeaf))
    },
    handleNodeClick (data, data1, data2) {
      if (typeof this.clickDisable === 'function') {
        let res = this.clickDisable(data, data1, data2)
        if (res) {
          return
        }
      }
      if (!this.showCheckbox) {
        if (this.checkLeaf) {
          if (data1.isLeaf) {
            this.flag = true
            this.checkData = ''
            this.checkData = data[this.props.label]
            // this.$emit('input', data)
          }
        } else {
          this.flag = true
          this.checkData = ''
          this.checkData = data[this.props.label]
          // this.$emit('input', data)
        }
      }
      this.$emit('node-click', data, data1, data2)
    },
    // 默认传值方法
    init (code, label) {
      if (this.showCheckbox && this.defaultKeysType !== 'lazy') {
        // this.$refs.selectTree.setCheckedKeys(code)
        this.checkData = code
      } else if (this.defaultKeysType === 'lazy') {
        this.$refs.selectTree.setCurrentKey(code[1])
        this.checkData = code[0]
      } else {
        // this.flag = false
        this.checkData = label
        this.$emit('input', code)
        this.$emit('getInput', code)
      }
    },
    reset () {
      this.valueTitle = ''
      if (this.showCheckbox) {
        this.checkData = []
        this.hasData = false
        this.$refs.selectTree.setCheckedNodes(this.checkData)
      } else {
        this.checkData = ''
      }
    },
    // 下拉是否展开，对应显示清空
    mouseleave (e) {
      if (e) {
        // 懒加载展开滚动条默认到底部问题修复
        let arr = document.getElementsByClassName('el-select-dropdown__wrap')
        arr.forEach(item => {
          setTimeout(function () { item.scrollTop = 0 }, 0)
        })
      }
      if (this.valueTitle) {
        this.hasData = true
      } else {
        this.hasData = false
      }
    },
    // 移除某个节点
    remove (data) {
      this.$refs.selectTree.remove(data)
    },
    // 默认渲染
    defaultRender (h, { node, data, store }) {
      if (typeof this.thisRender === 'function') {
        return this.thisRender(h, { node, data, store })
      } else {
        return (
          <span class="el-tree-node__label" >{node.label}</span>
        )
      }
    },
    // 默认清空的事件
    cusclearable () {
      this.$emit('cusclearable')
    }
  },
  mounted () {
    this.init(this.defaultCheckedKeys)
  }
}
</script>

<style lang="scss" scoped>
.select-body {
  width: 100%;
  >>> .el-select__tags {
    flex-wrap: nowrap !important;
    min-width: 120px !important;
    .el-tag--info {
      background-color: #f4f4f5;
      border-color: #e9e9eb;
      min-width: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #909399;
    }
  }
}
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  padding: 0;
}
>>> .el-tree {
  .el-tree-node__label {
    font-size: 12px;
  }
}
.el-select-dropdown__item.selected {
  font-weight: normal;
}
.top {
  display: none;
  position: absolute;
  color: #c0c4cc;
  cursor: pointer;
  opacity: 0;
  font-size: 14px;
  z-index: 999;
  right: 5px;
}
.show {
  display: none;
}
>>> .el-select .el-tag__close.el-icon-close {
  display: none;
}
</style>
<style lang="scss">
.el-tree-node__label {
  padding-right: 18px;
}
.my-tree .el-tree-node {
  .is-leaf + .el-checkbox .el-checkbox__inner {
    display: inline-block;
  }
  .el-checkbox .el-checkbox__inner {
    display: none;
  }
}
</style>>
