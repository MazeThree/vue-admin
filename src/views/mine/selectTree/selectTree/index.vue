<template>
  <div classs="asp-select-tree__wrapper">
    <el-select v-model="value11"
               popper-class="asp-select-tree__popper"
               placeholder="请选择">
      <el-option :label="title"
                 :value="title">
        <el-tree :data="data"
                 :props="defaultProps"
                 node-key="label"
                 empty-text="暂无数据"
                 show-checkbox
                 @check="handleCheck"
                 @check-change="handleCheckChange">
        </el-tree>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'asp-select-tree',
  props: {
    item: {
      type: Object,
      default: () => { }
    },
    value: Array
  },
  data () {
    return {
      title: '',
      props: {
        label: 'name',
        children: 'zones'
      },
      value11: [],
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleCheckChange (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    handleNodeClick (data) {
      console.log(data)
    },
    handleCheck (data1, data2) {
      console.log(data1)
      console.log(data2)
    },
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region1' }, { name: 'region2' }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }
      setTimeout(() => {
        var data
        if (hasChild) {
          data = [{
            name: 'zone' + this.count++
          }, {
            name: 'zone' + this.count++
          }]
        } else {
          data = []
        }
        resolve(data)
      }, 500)
    }
  }
}
</script>

<style lang="scss" scope>
.asp-select-tree__popper {
  .el-select-dropdown__item {
    padding: 0;
    height: auto;
  }
}
</style>