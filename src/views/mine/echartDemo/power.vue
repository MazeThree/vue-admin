<template>
  <div ref="chart"
       class="chart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ["date", "radio"],
  data () {
    return {
      chart: null
    }
  },
  methods: {
    initChart () {
      try {
        const option = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '17%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['广东', '江苏', '浙江', '云南', '四川'],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                margin: 12,
                color: '#e2e9ff',
                textStyle: {
                  fontSize: 14
                }
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '度/天',
              splitLine: {//去除网格线
                show: false
              },
              nameTextStyle: {
                color: '#fff'
              },
              axisLabel: {
                margin: 12,
                color: '#e2e9ff',
                textStyle: {
                  fontSize: 14
                }
              }
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '30%',
              data: [900, 800, 600, 500, 200]
            }
          ]
        }
        this.chart = echarts.init(this.$refs.chart)
        this.chart.setOption(option)
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted () {
    this.initChart()
  }
}
</script>
<style>
</style>