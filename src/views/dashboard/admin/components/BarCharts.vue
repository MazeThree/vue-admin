<template>
  <el-card shadow="hover">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div ref="myCharts" :style="{ width: width, height: height }"></div>
  </el-card>
</template>

<script>
import echarts from 'echarts'
// import resize from '@/mixins/resize'
require('echarts/theme/macarons')
export default {
  // mixins: [resize],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    barData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      mycharts: null
    }
  },
  watch: {
    barData: {
      deep: true,
      handler(val) {
        this._setOption(val.y2017, val.y2018)
      }
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      this.initEcharts()
    })
  },
  methods: {
    initEcharts() {
      this.mycharts = echarts.init(this.$refs.myCharts, 'macarons')
      if (Object.keys(this.barData).length > 0) {
        this._setOption(
          this.barData.y2017,
          this.barData.y2018,
          this.barData.y2019
        )
      }
    },
    _setOption(y2017, y2018) {
      this.mycharts.setOption({
        title: {
          text: 'Yearly Expense',
          left: '16'
        },
        legend: {
          data: ['2017', '2018']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '20',
          right: '20',
          bottom: '3',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar',
            name: '2017',
            data: y2017
          },
          {
            type: 'bar',
            name: '2018',
            data: y2018
          }
        ]
      })
    }
  }
}
</script>
