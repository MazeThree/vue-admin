<template>
  <div id="titlemes" :style="dialogStyle">
    <div class="guanBiBox"
         @click="close"><img src="../static/img/icon_close.png"
           alt=""></div>
    <div class="titlemesImg"><img src="../static/img/icon_triangle_down.png"
           alt=""></div>
    <div class="content"
         :class="rowDataList.length >=3 ? 'heightDiv' : '' ">
      <div v-for="(rowData,index) in rowDataList"
           id="titleTop"
           :key="index"
           class="Listtitle">
        <div class="title">
          <img src="../static/img/icon_arrow_1.png"
               alt="">
          <span>{{ rowData.communityName }}</span>
        </div>
        <div class="bottom">
          <span class="reason"
                :class="rowData.reason?'active':''">&nbsp;{{ rowData.reason !== null ? rowData.reason:'无问题' }}</span>
          <span class="detail">&nbsp;<a href="javascript:void(0);"
               @click="openDeatil(rowData)">详情</a></span>
        </div>
        <div v-show="index != rowDataList.length-1"
             class="line" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'titlemes',
  props: ['rowDataList', 'dialogStyle'],
  data () {
    return {}
  },
  methods: {
    close () {
      this.$emit('close', false)
    },
    openDeatil (rowData) {
      this.$emit('openDeatil', rowData)
    }
  }
}
</script>

<style lang="scss" scoped>
#titlemes {
  position: absolute;
  z-index: 999;
  .heightDiv {
    height: 233px;
  }
  .content {
    padding: 0;
    margin: 0;
    border: 2px solid #4285e4;
    background-color: rgba(4, 16, 77, 0.6);
    width: 195px;
    overflow-y: auto;
    overflow-x: hidden;
    .Listtitle {
      margin: 0px 10px;
      color: #fff;
      font-size: 14px;
      height: 77px;
      /*border-bottom: 2px solid #01C9FF;*/
      /*&:last-child {*/
      /*    border-bottom: none;*/
      /*}*/
      .title {
        height: 50px;
        padding-top: 8px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .bottom {
        overflow: hidden;
        margin-bottom: 5px;
        .active {
          color: red;
        }
        .reason {
          float: left;
        }
        .detail {
          float: right;
          color: #3388ff;
        }
      }
      .line {
        height: 2px;
        width: 175px;
        background: url("../static/img/map_line.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }

  .guanBiBox {
    position: absolute;
    top: -15px;
    right: -10px;
  }

  // 改变箭头颜色
  .el-popper[x-placement^="top"] .popper__arrow {
    bottom: -6px;
    left: 50%;
    margin-right: 3px;
    border-bottom-width: 0;
    border-top-color: rgba(255, 255, 255, 0.4);
  }

  .el-popper[x-placement^="top"] .popper__arrow::after {
    bottom: 1px;
    margin-left: -6px;
    border-bottom-width: 0;
    border-top-color: rgba(255, 255, 255, 0.4);
  }

  .titlemesImg {
    display: none;
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translate(-50%, 75%);
  }

  ::-webkit-scrollbar-track-piece {
    //滚动条凹槽的颜色，还可以设置边框属性
    // background-color:#f8f8f8;
    background-color: rgba(4, 16, 77, 0.6);
  }
  ::-webkit-scrollbar {
    //滚动条的宽度
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    //滚动条的设置
    background-color: #abd9ef;
    border-radius: 2px;
    background-clip: padding-box;
    min-height: 28px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }
  scrollbar-arrow-color: rgba(4, 16, 77, 0.6); /**/ /*三角箭头的颜色*/
  scrollbar-face-color: #abd9ef; /**/ /*立体滚动条的颜色*/
  scrollbar-3dlight-color: #abd9ef; /**/ /*立体滚动条亮边的颜色*/
  scrollbar-highlight-color: rgba(4, 16, 77, 0.6); /**/ /*滚动条空白部分的颜色*/
  scrollbar-shadow-color: #abd9ef; /**/ /*立体滚动条阴影的颜色*/
  scrollbar-darkshadow-color: #abd9ef; /**/ /*立体滚动条强阴影的颜色*/
  scrollbar-track-color: rgba(4, 16, 77, 0.6); /**/ /*立体滚动条背景颜色*/
  scrollbar-base-color: #abd9ef; /**/ /*滚动条的基本颜色*/
}
</style>
