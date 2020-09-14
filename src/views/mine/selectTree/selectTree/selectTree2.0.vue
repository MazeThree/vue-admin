<template>
  <el-select v-model="value"
  class="select-body"
             popper-class="asp-tree-popper"
             placeholder="请选择">
    <el-option label="item.label"
               value="item.value">
      <el-tree :data="data"
               :props="defaultProps"
               @node-click="handleNodeClick"></el-tree>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'asp-select-tree',
  data () {
    return {
      value1: ['11', '22'],
      input: '111',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  props: {
    value: {
      type: [Array, String, Object, Number],
      default: () => []
    }
  }
};
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
.asp-tree-popper {
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
}
</style>>