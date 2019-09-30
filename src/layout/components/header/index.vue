<template>
  <div class="header">
    <div class="head_logo">
      <!-- <a href="javascript:;"
         class="logoLink"><img src="./logo.png"
             alt="logo" />Vue Project</a> -->
      <a href="https://github.com/MazeThree/vue-admin" title="访问我的gitHub" target="_blank">
        <h1>Maze</h1>
      </a>
    </div>
    <div class="head_nav">
      <el-menu :default-active="this.activeMenu"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect"
               :background-color="menuColor"
               text-color="#fff"
               active-text-color="#ffd04b">
        <sidebar-item
          v-for="item in routesShow"
          :key="item.path"
          :item="item"
          :basePath="item.path"
        ></sidebar-item>
        <el-submenu index="2" v-show="routesHidden.length > 0">
          <template slot="title">更多</template>
          <sidebar-item
            v-for="item in routesHidden"
            :key="item.path"
            :item="item"
            :basePath="item.path"
          ></sidebar-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="head_info">
      <span>
        <i class="el-icon-search"></i>
      </span>
      <span>
        <i class="el-icon-search"></i>
      </span>
      <span>
        <i class="el-icon-search"></i>
      </span>
      <span>
        <i class="el-icon-search"></i>
      </span>
      <span>
        <el-menu class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                :background-color="menuColor"
                text-color="#fff"
                active-text-color="#ffd04b">
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </span>
    </div>
  </div>
</template>

<script>
import variable from '@/assets/css/variable.scss'
import SidebarItem from './SideBarItem'
import { mapGetters } from 'vuex'
export default {
  components: { 
    SidebarItem
  },
  data () {
    return {
      menuColor: variable.menuColor,
      routesShow: [],
      routesHidden: []
    }
  },
  computed: {
    ...mapGetters(['routes', 'opened']),
    activeMenu () {
      return this.$route.path
    }
  },
  mounted () {
    const nav = this.routes.filter(item => !item.hidden)
    this.routesShow = nav.slice(0,5)
    this.routesHidden = nav.slice(5)
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  max-width: 1400px;
  margin: auto;
  padding-left: 0;
  display: flex;
  .head_logo {
    width: 140px;
    height: 100%;
    & > a {
      display: block;
      height: 100%;
      line-height: 60px;
      text-align: center;
      cursor: pointer;
    }
  }
  .head_nav {
    flex: 1;
  }
  .head_info {
    width: 350px;
    span {
      display: block;
      float: left;
      cursor: pointer;
      height: 100%;
      padding: 0 14px;
      line-height: 60px;
    }
    span:hover {
      background: #1890ff;
    }
  }
}
</style>
<style>
.el-submenu .el-menu-item {
    height: 60px;
    line-height: 60px;
    padding: 0;
    min-width: unset;
}
</style>