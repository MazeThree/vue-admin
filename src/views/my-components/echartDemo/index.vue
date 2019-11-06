<template>
  <div class="content-box">
    <div class="header">
      <div class="title">
        <span>静态echarts首页</span>
      </div>
    </div>
    <div class="content">
      <div class="content-item left">
        <div class="item"
             style="height: 45%;margin-bottom: 20px;">
          <div class="tit">MCES全网节能统计</div>
          <div class="item-body">
            <div class="body-item"
                 v-for="(item, index) in dataList"
                 :key="index">
              <span class="icon"><img :src="item.icon"
                     alt=""></span>
              <span class="label">{{ item.label }}</span>
              <span class="value">{{ item.value }}</span>
            </div>
          </div>
        </div>
        <div class="item no-high"
             style="height: 54%;">
          <div class="tit">异常告警</div>
          <div class="item-body">
            <div class="body-item"
                 v-for="(item, index) in dataList1"
                 :key="index">
                 <span class="address">
                   {{ item.label }}
                 </span>
                 <span class="error">
                   {{ item.value }}
                 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item middle">
        <div class="tabs">
          <!-- <el-radio-group v-model="radio" style="float:left">
            <el-radio-button label="2G">2G</el-radio-button>
            <el-radio-button label="4G">4G</el-radio-button>
            <el-radio-button label="5G">5G</el-radio-button>
          </el-radio-group> -->
          <el-date-picker style="float:right"
                          v-model="date"
                          type="date"
                          id="datepick"
                          placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="map">
          <chinamap ref="china" :date="date" :radio="radio"></chinamap>
        </div>
      </div>
      <div class="content-item right">
        <div class="item"
             style="margin-bottom: 10px;">
          <div class="tit">接入规模TOP5</div>
          <div class="item-body">
            <scale ref="scale" :date="date" :radio="radio"></scale>
          </div>
        </div>
        <div class="item"
             style="margin-bottom: 10px;">
          <div class="tit">休眠时长TOP5</div>
          <div class="item-body">
            <sleep ref="sleep" :date="date" :radio="radio"></sleep>
          </div>
        </div>
        <div class="item">
          <div class="tit">节电量TOP5</div>
          <div class="item-body">
            <power ref="power" :date="date" :radio="radio"></power>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chinamap from './map'
import power from './power'
import scale from './scale'
import sleep from './sleep'
export default {
  name: 'HelloWorld',
  components: {
    chinamap,
    power,
    scale,
    sleep
  },
  data () {
    return {
      date: '2019-07-24',
      dataList: [
        {
          icon: require('../../../assets/img/jieru.png'),
          label: '接入小区总数',
          value: '9057'
        },
        {
          icon: require('../../../assets/img/xiumian.png'),
          label: '休眠小区数',
          value: '2475'
        },
        {
          icon: require('../../../assets/img/shichang.png'),
          label: '平均休眠时长(小时)',
          value: '2475'
        },
        {
          icon: require('../../../assets/img/zhanbi.png'),
          label: '休眠小区占比',
          value: '14%'
        },
        {
          icon: require('../../../assets/img/jiedianliang.png'),
          label: '总节电量(度)',
          value: '341424123'
        },
      ],
      dataList1: [
        {
          label: '广东省广州市白云区精英园小区',
          value: '唤醒失败'
        },
        {
          label: '广西省',
          value: '节电后指标下降明显'
        },
        {
          label: '广东省广州市白云区精英园小区',
          value: '唤醒失败'
        },
        {
          label: '广东省广州市白云区精英园小区',
          value: '唤醒失败'
        },
        {
          label: '广东省广州市白云区精英园小区',
          value: '唤醒失败'
        }
      ],
      radio: '4G'
    }
  },
  watch: {
    radio (val) {
      this._getMainInfo()
    },
    date (val) {
      this._getMainInfo()
    }
  },
  methods: {
    _getMainInfo () {
      let obj ={
        optype: this.radio,
        analysistime: this.date
      }
      // getMainInfo(obj).then(res => {
      //   console.log(res)
      // })
      // getAlarmInfo(obj).then(res => {
      //   console.log(res)
      // })
    }
  },
  mounted() {
    this._getMainInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: url("../../../assets/img/bg.png");
  background-size: 100% 100%;
}
.header {
  width: 100%;
  height: 7.6%;
}
.header .title {
  display: flex;
  width: 34.8%;
  height: 100%;
  color: #fff;
  margin: 0 auto;
  background-image: url("../../../assets/img/header.png");
  background-size: 100% 100%;
}
.header .title span {
  margin: auto;
  font-size: 0.32rem;
}

.content {
  display: flex;
  width: 100%;
  flex: 1;
}
.content-item {
  flex: 1;
  margin: 20px;
}
.middle {
  display: flex;
  padding: 0.15rem;
  flex-direction: column;
  flex: 2;
  background-image: url("../../../assets/img/map.png");
  background-size: 100% 100%;
}
.middle .tabs {
  height: 0.4rem;
}
.middle .map {
  flex: 1;
}
.left,
.right {
  display: flex;
  flex-direction: column;
}
.left .item {
  display: flex;
  flex-direction: column;
  height: 0.45rem;
  font-size: 0.22rem;
  color: #fff;
  line-height: 0.45rem;
  text-align: left;
}
.left .no-high {
  line-height: unset;
}
.left .no-high .tit {
  line-height: .45rem;
}
.right .item {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 0.45rem;
  font-size: 0.22rem;
  color: #fff;
  line-height: 0.45rem;
  text-align: left;
}
.item .tit {
  padding-left: 1.1rem;
}
.item .item-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.05rem;
}
.item .item-body .body-item {
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: 0.1rem;
  margin: 0 0.15rem 0.1rem;
  padding: 0 0.1rem;
  border: 1px solid blueviolet;
}
span {
  display: flex;
  text-align: left;
  align-items: center;
  font-size: .15rem;
}
.label {
  flex: 1;
}
.value {
  width: 30%;
}
.icon {
  display: flex;
  min-width: 0.5rem;
  justify-content: center;
  align-items: center;
}
.address {
  width: 45%;
  line-height: unset;
}
.error {
  width: 24%;
  color: red;
}
.left .item {
  background-image: url("../../../assets/img/box.png");
  background-size: 100% 100%;
}
.right .item {
  background-image: url("../../../assets/img/box1.png");
  background-size: 100% 100%;
}
.chart {
  height: 100%;
  color: #fff;
}
</style>
<style>
.el-radio-group {
  height: 100%;
}
.el-radio-button {
  height: 100%;
  width: .8rem;
  line-height: .4rem;
}
.el-radio-group .el-radio-button .el-radio-button__inner {
    width: .8rem;
    height: 100%;
    color: #fff;
    font-size: .14rem;
    line-height: .4rem;
    padding: 0;
    background: rgb(12, 27, 100);
    border: none !important;
}
#datepick {
  width: 2.2rem;
  height: .4rem;
  line-height: .4rem;
  color: #fff;
  background: rgb(14, 36, 143);
}
</style>
