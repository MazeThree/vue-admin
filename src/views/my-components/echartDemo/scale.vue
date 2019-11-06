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
            right: '8%',
            bottom: '-4%',
            top: '0%',
            containLabel: true
          },
          yAxis: [
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
            {
              type: 'category',
              data: [10, 52, 200, 334, 390],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                margin: 12,
                color: '#e2e9ff',
                formatter: '{value} 个小区',
                textStyle: {
                  fontSize: 14
                }
              },
            },
          ],
          xAxis: [
            {
              show: false,
              type: 'value',
            }
          ],          
          visualMap: {
            show: false,
            orient: 'horizontal',
            min: 0,
            max: 1000,
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: ['#0076e7', '#7ee552', '#00e6ba', '#2eb8f4']
            }
          },
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390]
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