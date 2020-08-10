<!-- 
@author wupeng
@date   19.9.23
@description 下拉树组件说明
-->
<template>
  <div>
    <h3>初版下拉树</h3>
    <selectTree></selectTree>
    <br>
    <h3>下拉树2.0</h3>
    <newSelectTree></newSelectTree>
  </div>
</template>

<script>
import selectTree from './selectTree/index'
import newSelectTree from './selectTree/selectTree2.0'
export default {
  components: {
    selectTree,
    newSelectTree
  },
  data () {
    return {
      filterText: ''
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.selectBody {
  width: 100%;
  >>> .el-tag.el-tag--info {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    max-width: 1rem;
    overflow: hidden;
    color: #909399;
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