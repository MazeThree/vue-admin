<template>
  <div class="personal noPadding">
    <div class="personal_h">
      <div class="perh_d1">
        <div class="perh_img">
          <div class="img"></div>
        </div>
        <div class="perh_p0">{{ userName }}</div>
        <div class="perh_info">
          <div class="chatBox">
            <a href="javascript:;"><i class="iconfont el-icon-weixin"></i></a>
            <a href="javascript:;"><i class="iconfont el-icon-twitter"></i></a>
            <a href="javascript:;"><i class="iconfont el-icon-weibo"></i></a>
          </div>
          <!-- <div>{{ introduce }}</div> -->
        </div>
      </div>
    </div>
    <div class="personal_b">
      <el-card class="body_left"
               shadow="always">
        <div slot="header"
             class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0"
                     type="text">操作按钮</el-button>
        </div>
        <div>11111</div>
      </el-card>
      <el-card class="body_right"
               shadow="alaways">
        鼠标悬浮时显示
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName', 'introduce'])
  }
}
</script>
<style lang="scss" scoped>
.personal_h {
  width: 100%;
  height: 430px;
  background: url(../../assets/personal/mine.jpg) no-repeat center center;
  background-size: cover;
  .perh_d1 {
    width: 100%;
    height: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    .perh_img {
      height: 120px;
      .img {
        border-radius: 50%;
        height: 120px;
        width: 120px;
        margin: 0 auto;
        background: url(../../assets/personal/user01.jpg) no-repeat center
          center;
        background-size: cover;
      }
    }
    .perh_p0 {
      margin: 0 auto;
      font-size: 35px;
      margin-bottom: 6px;
    }
    .perh_info {
      flex: 1;
      text-align: right;
      padding: 60px 80px;
    }
    .chatBox {
      .iconfont {
        vertical-align: middle;
      }
      a {
        width: 30px;
        height: 30px;
        display: inline-block;
        background-color: #edf1f2;
        color: #58666e !important;
        border: 1px solid #e4e4e4;
        box-shadow: 0 1px 1px rgba(90, 90, 90, 0.1);
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        margin-right: 10px;
        margin-bottom: 12px;
        &:hover {
          background-color: #e4e4e4;
        }
      }
    }
  }
}
.personal_b {
  position: absolute;
  width: 80%;
  // height: calc(100% - 340px);
  top: 340px;
  left: 10%;
  display: flex;
  justify-content: space-around;
  .body_left {
    width: 30%;
    border-radius: 10px;
    background: rgb(255, 255, 255, 0.5);
  }
  .body_right {
    width: 65%;
    border-radius: 10px;
    background: rgb(255, 255, 255, 0.5);
  }
}
</style>
<style lang="scss">
.personal {
  height: 100%;
  width: 100%;
  position: relative;
  .el-tabs__header {
    padding: 15px 0;
    background: #fff;
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
  }
  .el-tabs__nav-wrap {
    padding-left: 20px;
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
  .el-tabs__content {
    padding: 0 20px;
  }
}
</style>
