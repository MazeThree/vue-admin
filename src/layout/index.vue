<template>
  <el-container>
    <el-header>
      <m-header></m-header>
    </el-header>
    <el-main>
      <div class="pageMain">
        <transition name="fade-page" mode="out-in">
          <keep-alive>
            <router-view v-if="!$route.meta.noCache"></router-view>
          </keep-alive>
          <router-view v-if="$route.meta.noCache"></router-view>
        </transition>
      </div>
      <el-footer>Footer</el-footer>
    </el-main>
  </el-container>
</template>

<script>
import MHeader from './components/header'
// 消息中心
import NotificatBar from '@/components/NotificatBar'
import { mapGetters } from 'vuex'
import driver from '@/mixins/useDriver'
export default {
  name: 'layout',
  mixins: [driver],
  mounted() {
    if (this.showDriver === 'yes') {
      this.guide()
      this.$store.commit('app/SET_DRIVER', 'no')
    }
  },
  computed: {
    ...mapGetters(['opened', 'msgIsShow', 'showDriver'])
  },
  components: {
    MHeader,
    NotificatBar
  }
}
</script>
