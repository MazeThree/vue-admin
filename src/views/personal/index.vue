<template>
  <div class="personal">
    <div class="personal_head">
      <a href="javascript:;"><i class="iconfont el-icon-weixin"></i></a>
      <a href="javascript:;"><i class="iconfont el-icon-twitter"></i></a>
      <a href="javascript:;"><i class="iconfont el-icon-weibo"></i></a>
    </div>
    <div class="personal_body">
      <el-card class="body_left content-item"
               shadow="always">
        <div slot="header"
             class="clearfix">
          <span>关于我</span>
          <el-button style="float: right; padding: 3px 0"
                     type="text">操作按钮</el-button>
        </div>
        <div>11111</div>
      </el-card>
      <el-tabs class="body_right content-item" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName', 'introduce'])
  },
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style lang="scss" scoped>
.personal {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  // background: url(../../assets/personal/mine.jpg) no-repeat center
  //   center;
  // background-size: cover;
  .personal_head {
    height: 50px;
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
  .personal_body {
    height: 400px;
    display: flex;
    flex: 1;
    .body_left {
      height: 300px;
      width: 200px;
      margin-right: 30px;
      flex: 1;
    }
    .body_right {
      width: 400px;
      flex: 2;
    }
  }
}
</style>

