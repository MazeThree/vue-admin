<template>
  <div class="content">
    <baidu-map class="bm-view"
               :center="center"
               :zoom="zoom"
               @ready="handler"
               :mapStyle="mapStyle">
      <!-- <bm-boundary name="北京市"
                   :strokeWeight="2"
                   strokeColor="blue"></bm-boundary> -->
      <bml-heatmap :data="data1"
                   :max="100"
                   :radius="20">
      </bml-heatmap>
    </baidu-map>
    <!--点击弹窗-->
    <titl-emes v-show="mesFalse2 && rowDataList.length > 0"
               :row-data-list="rowDataList"
               :dialogStyle="dialogStyle"
               @close="mesFalse2 = false">
    </titl-emes>
  </div>
</template>

<script>
import { BmlHeatmap } from 'vue-baidu-map'
import mapStyle from './static/mapStyle.json'
import mapFlag from './static/mapFlag.js'
import titlEmes from './components/detialDialog'
// import mapv from  './static/mapv.js'
// import *as mapv from 'mapv'
export default {
  name: 'gis',
  components: {
    // BaiduMap,
    BmlHeatmap,
    titlEmes
  },
  data () {
    return {
      data1: [
        { lng: 116.418261, lat: 39.921984, count: 50 },
        { lng: 116.423332, lat: 39.916532, count: 51 },
        { lng: 116.419787, lat: 39.930658, count: 15 }
        // ...此处添加更多的数据集
      ],
      dialogStyle: {},
      map: undefined,
      mesFalse2: false,
      rowDataList: [],
      center: { lng: 116.40292747621524, lat: 39.915083429464296 },
      zoom: 16,
      mapStyle: {
        style: 'midnight'
      },
      // 地图数据
      data: mapFlag.mapFlagStaticData,
      options: {
        draw: 'icon',
        size: 260,
        mixBlendMode: 'normal',
        unit: 'm',
        fillStyle: 'rgba(55, 50, 250, 1)',
        label: { // 网格中显示累加的值总和
          show: true
        },
        methods: {
          click: (item, event) => {
            if (item && item !== null) {
              this.clickmarker(item, event)
            }
          }
        }
      },
      // 栅格图参数
      gridOptions: {
        fillStyle: 'rgba(55, 50, 250, 0.8)',
        shadowColor: 'rgba(255, 250, 50, 1)',
        shadowBlur: 20,
        size: 60,
        globalAlpha: 0.5,
        label: {
          show: true,
          fillStyle: 'white',
          // shadowColor: 'yellow',
          // font: '20px Arial',
          // shadowBlur: 10,
        },
        gradient: { 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1.0: "rgb(255,0,0)" },
        draw: 'grid'
      }
    }
  },
  watch: {
  },
  methods: {
    handler ({ BMap, map }) {
      // mapv需要在百度地图SDK渲染完成后才能加载，否则有部分方法会报错
      var mapv = require('mapv')
      // map.setDefaultCursor("url('bird.cur')")
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      console.log(BMap, map)
      // this.center.lng = 105.403119
      // this.center.lat = 38.028658
      this.map = map
      this.zoom = 12
      this.setMapData(this.data, mapv)

      // 绘制自定义canvas
      var list = [
        {
          "eci": "73097-57",
          "communityName": "西城全国人大机关办公楼HL-57", "provinceName": "北京",
          "city": "北京",
          "longitude": "116.388333",
          "latitude": "39.90001",
          "lngBd": "116.40095515410182",
          "latBd": "39.90774404019003",
          "azimuth": "60",
          "nettype": "TD-LTE",
          "earfcn": "39800",
          "parameter": "1",
          "dateTime": "2019-09-20T14:15:00"
        },
        {
          "eci": "73097-58",
          "communityName": "西城全国人大机关办公楼HL-58", "provinceName": "北京",
          "city": "北京",
          "longitude": "116.388333",
          "latitude": "39.90001",
          "lngBd": "116.40095515410182",
          "latBd": "39.90774404019003",
          "azimuth": "180",
          "nettype": "TD-LTE",
          "earfcn": "39850",
          "parameter": "1",
          "dateTime": "2019-09-20T14:15:00"
        }
      ]
      var canvas = document.createElement('canvas');
      var t = canvas.getContext('2d');
      canvas.style.position = "absolute";
      canvas.style.top = 0;
      canvas.style.left = 0;
      canvas.width = map.getSize().width;
      canvas.height = map.getSize().height;
      map.getPanes().mapPane.appendChild(canvas);
      for (let i = 0; list.length > i; i++) {
        var a = 5
        var b = 6 * a
        var ox = 0.5 * a,
          oy = 0.6 * b
        var deg = list[i].azimuth
        t.save()
        t.translate(list[i].lngBd, list[i].latBd)
        if (deg) {
          t.rotate(deg * Math.PI / 180)
        }
        t.beginPath()
        t.moveTo(0, 0)
        t.bezierCurveTo(2 * a, -oy, 2 * ox, -b, 0, -b)
        t.bezierCurveTo(2 * -ox, -b, 2 * -a, -oy, 0, 0)
        t.strokeStyle = "red";
        t.fillStyle = "red";
        t.closePath()
        t.fill()
        t.restore()
      }

    },
    // 边界界定函数
    boundary (province) {
      var self = this
      var bdary = new BMap.Boundary();
      // console.log(province, 'province')
      bdary.get(province, function (rs) {                 //获取行政区域
        // self.map.clearOverlays();        //清除地图覆盖物
        // 东西经南北纬的范围
        var EN_JW = "180, 90;";         //东北角
        var NW_JW = "-180,  90;";       //西北角
        var WS_JW = "-180, -90;";       //西南角
        var SE_JW = "180, -90;";        //东南角
        var data = ''
        if (rs.boundaries.length === 1) {
          data = rs.boundaries[0]
        } else {
          self.objLength(rs.boundaries)
        }
        //4.添加环形遮罩层
        var ply1 = new BMap.Polygon(data + SE_JW + SE_JW + WS_JW + NW_JW + EN_JW + SE_JW,
          { strokeColor: "none", fillColor: "rgb(0,0,0,.6)", fillOpacity: 1, strokeOpacity: 0.5 }); //建立多边形覆盖物
        self.map.addOverlay(ply1); //002f47
        //5. 给目标行政区划添加边框，其实就是给目标行政区划添加一个没有填充物的遮罩层
        var ply = new BMap.Polygon(data, { strokeWeight: 4, strokeColor: "rgb(0,0,0,.6)", fillColor: "" });
        self.map.addOverlay(ply);
        // var b = new BMap.Bounds(new BMap.Point(58.940232, 9.259493), new BMap.Point(173.886542, 61.148978))
        // try {
        //     BMapLib.AreaRestriction.setBounds(self.map, b)
        // } catch (e) {
        //     // alert(e);
        // }
        //  map.setViewport(ply.getPath());    //调整视野
        //  loadCityMapInfo(map);
      });
    },
    // 设置地图标注点
    setMapData (res, mapv, kind = "4G") {
      // alert(0)
      var arr = []
      var data = []
      let img = new Image()
      if (res.data.retCode === 0) {
        arr = res.data.data.datas
        //                console.log(res,'res');
        this.$emit('proNumber', res.data.data.total)
        for (var i = 0; i < arr.length; i++) {
          img.src = require('./static/img/icon_lan.png')
          for (var j = 0; j < arr[i].length; j++) {
            if (kind === '4G') {
              img.src = require('./static/img/icon_hon.png')
            }
          }
          data.push({
            geometry: {
              type: 'Point',
              coordinates: [arr[i][0].lng - 0, arr[i][0].lat - 0]
            },
            deg: arr[i][0].azimuth - 0,
            // colorStyle: arr[i][0].type,
            icon: img,
            count: 30,
            content: arr[i]
          })
          // }
        }
        // console.log('进来了', img, data)
        new mapv.baiduMapLayer(this.map, new mapv.DataSet(data), this.options)
        new mapv.baiduMapLayer(this.map, new mapv.DataSet(data), this.gridOptions)
      }
    },
    // 点击弹窗
    clickmarker (item, event) {
      console.log(event)
      this.mesFalse2 = true
      // let markerLeft = 0;  //居左边距离
      // let markerTop = 0;  //居上边距离
      const num = item.content.length >= 3 ? 3 : item.content.length;
      //保持弹窗在视野内
      let offsetTop = event.clientY
      let offsetLeft = event.clientX
      this.dialogStyle = {
        top: `${offsetTop + 30}px`, // 往下偏移 30
        left: `${offsetLeft - 10}px` // 往右偏移 10
      }
      this.rowDataList = item.content
      // 小区级地图的，点击花瓣
      // if (this.activeType === '小区') {
      //   this.$emit('getRowDataList', item.content)
      // }
    }
  },
  mounted () {
    // console.log(OpenlayersLayer, DataSet, utilCityCenter)
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 60%;
  margin: 0 auto;
  background: red;
  display: flex;
  flex-direction: column;
  .bm-view {
    width: 100%;
    height: 81vh;
  }
}
</style>
<style>
/*去除百度地图版权*/

.anchorBL {
  display: none;
}
</style>