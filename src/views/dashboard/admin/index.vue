<template>
  <div class="dashbord">
    <!-- cardlist -->
    <el-row class="infoCrads">
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <p class="cardItem_p1">访问量</p>
            <count-to
              class="cardItem_p0 color-green1"
              :startVal="startVal"
              :endVal="vistors"
              :duration="2000"
            ></count-to>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user color-green1"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <p class="cardItem_p1">消息量</p>   
            <count-to
              class="cardItem_p0 color-blue"
              :startVal="startVal"
              :endVal="message"
              :duration="2000"
            ></count-to>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-s-comment color-blue"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <p class="cardItem_p1">销售额(￥)</p>
            <count-to
              class="cardItem_p0 color-red"
              :startVal="startVal"
              :endVal="order"
              :duration="2000"
            ></count-to>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-shopping-cart-2 color-red"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <p class="cardItem_p1">收藏数</p>
            <count-to
              class="cardItem_p0 color-green2"
              :startVal="startVal"
              :endVal="profit"
              :duration="2000"
            ></count-to>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-wallet color-green2"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- end -->
    <!-- lineEcharts -->
    <line-charts class="lCharts" :lineChartData="lineChartData"></line-charts>
    <!-- end -->
    <!-- table and pie -->
    <el-row class="tableChart">
      <el-col :span="16">
        <table-show :tableData="tableData" class="tableShow"></table-show>
      </el-col>
      <el-col :span="8">
        <pie-charts class="pieCharts"></pie-charts>
      </el-col>
    </el-row>
    <!-- end -->
    <!-- bar chart -->
    <bar-charts class="barCharts" :barData="barData"></bar-charts>
    <!-- end -->
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import LineCharts from './components/LineCharts'
import PieCharts from './components/PieCharts'
import TableShow from './components/TableShow'
import BarCharts from './components/BarCharts'
// import {
//   getCardsData,
//   getTableData,
//   getLineData,
//   getBarData
// } from '@/api/dashboard'
export default {
  data() {
    return {
      startVal: 0,
      vistors: 2310,
      message: 210,
      order: 1230,
      profit: 1230,
      tableData: [
        {
          id: '62000019761130154',
          name: '8AK!bzM',
          price: 7224,
          quantity: 39,
          status: 1
        },
        {
          id: '620000197611301',
          name: '8AK!M',
          price: 724,
          quantity: 9,
          status: 0
        },
        {
          id: '62000019761130154',
          name: '8AK!bzM',
          price: 7224,
          quantity: 39,
          status: 1
        },
        {
          id: '620000197611301',
          name: '8AK!M',
          price: 724,
          quantity: 9,
          status: 0
        },
        {
          id: '62000019761130154',
          name: '8AK!bzM',
          price: 7224,
          quantity: 39,
          status: 1
        },
        {
          id: '620000197611301',
          name: '8AK!M',
          price: 724,
          quantity: 9,
          status: 0
        },
        {
          id: '62000019761130154',
          name: '8AK!bzM',
          price: 7224,
          quantity: 39,
          status: 1
        },
        {
          id: '620000197611301',
          name: '8AK!M',
          price: 724,
          quantity: 9,
          status: 0
        }
      ],
      lineChartData: {
        inPrice: [86436, 78096, 79633, 87857, 33375, 76329],
        outPrice: [54476, 99294, 51568, 94282, 92459, 55151]
      },
      barData: {
        y2017: [105603, 278022, 146043, 218018, 289759],
        y2018: [293095, 196574, 154753, 232973, 242401]
      }
    }
  },
  // created() {
  //   this._getAllData()
  // },
  components: {
    CountTo,
    LineCharts,
    PieCharts,
    TableShow,
    BarCharts
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
$mgTop: 30px;

.dashbord {
  width: 12rem;
  margin: 0 auto;
}
.color-green1 {
  color: #40c9c6 !important;
}
.color-blue {
  color: #36a3f7 !important;
}
.color-red {
  color: #f4516c !important;
}
.color-green2 {
  color: #34bfa3 !important;
}
.infoCrads {
  margin: 0 -20px 0 -20px;
  .el-col {
    padding: 0 20px;
    .cardItem {
      height: 108px;
      background: #fff;
    }
  }
}
.cardItem {
  color: #666;
  .cardItem_txt {
    float: left;
    margin: 26px 0 0 20px;
    .cardItem_p0 {
      font-size: 20px;
      font-weight: bold;
    }
    .cardItem_p1 {
      font-size: 16px;
    }
  }
  .cardItem_icon {
    float: right;
    margin: 24px 20px 0 0;
    i {
      font-size: 55px;
    }
  }
}
.lCharts {
  background: #fff;
  margin-top: $mgTop;
  padding: 30px 0;
}
.barCharts {
  background: #fff;
  margin-top: $mgTop;
}
.pieCharts {
  background: #fff;
  padding: 20px 0;
}
.tableChart {
  margin-top: $mgTop;
}
</style>
