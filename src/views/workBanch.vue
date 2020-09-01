<template>
  <div id="workBanck">
    <el-dialog :visible.sync="fgsShow" :before-close="closeDialog" width="50%">
      <el-form ref="form" :show-message="false" size="mini">
        <table class="fgstb">
          <tr>
            <td rowspan="4" class="imgWrap">
              <img src="" alt="" />
            </td>
            <td class="right">简称：</td>
            <td class="left jc"></td>
          </tr>
          <tr>
            <td class="right">起终点桩号：</td>
            <td class="left fgszh"></td>
          </tr>
          <tr>
            <td class="right">经度：</td>
            <td class="left fgslg"></td>
          </tr>
          <tr>
            <td class="right">纬度：</td>
            <td class="left fgslat"></td>
          </tr>
        </table>

        <table class="bdtable" id="fgsCost">
          <thead>
            <tr>
              <th style="min-width:160px;">日常费用盈余（万元）</th>
              <th>收入（万元）</th>
              <th>支出（万元）</th>
              <th>年份</th>
              <th>详细</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fgsyy"></td>
              <td class="fgssr"></td>
              <td class="fgszc"></td>
              <td class="fgsnf"></td>
              <td style="min-width:113px">
                <el-button type="primary" size="small">详细</el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog" size="mini">取 消</el-button>
        <el-button type="primary" @click="save" :loading="loading" size="mini"
          >确 定</el-button
        >
      </div> -->
    </el-dialog>
    <div id="mkDialog">
      <div id="mkBox">
        <span class="el-icon-close close" @click="closeMk"></span>
        <p
          class="mkTitle"
          style="width:100%;text-align:center;font-size:18px;margin-bottom:20px;background:#f5f5f5;line-height:40px;height:40px;"
        >
          <input type="hidden" id="assetsId" v-model="sab" ref="assetsId" />
        </p>

        <table class="fgstb">
          <tr>
            <td rowspan="4" class="imgWrap">
              <img src="" alt="" />
            </td>
            <td class="right">简称：</td>
            <td class="left jc"></td>
          </tr>
          <tr>
            <td class="right">起终点桩号：</td>
            <td class="left fgszh"></td>
          </tr>
          <tr>
            <td class="right">经度：</td>
            <td class="left fgslg"></td>
          </tr>
          <tr>
            <td class="right">纬度：</td>
            <td class="left fgslat"></td>
          </tr>
        </table>

        <table class="baseTb">
          <tr>
            <td rowspan="7" class="imgWrap">
              <img src="" alt="" />
            </td>
            <td class="right">类别：</td>
            <td class="left type"></td>
          </tr>
          <tr>
            <td class="right">起终点桩号：</td>
            <td class="left seZh"></td>
          </tr>
          <tr>
            <td class="right">归属年份：</td>
            <td class="left year"></td>
          </tr>
          <tr>
            <td class="right">管理公司：</td>
            <td class="left glgs"></td>
          </tr>
          <tr>
            <td class="right">养管单位：</td>
            <td class="left ygdw"></td>
          </tr>
          <tr>
            <td class="right">责任人：</td>
            <td class="left zrr"></td>
          </tr>
          <tr>
            <td class="right">联系电话：</td>
            <td class="left phone"></td>
          </tr>
        </table>

        <p class="remark"></p>
        <table class="bdtable" id="techLevel">
          <thead>
            <tr>
              <th>技术等级</th>
              <th style="min-width:165px">检测公司</th>
              <th style="min-width:160px">检测时间</th>
              <th style="min-width:113px">详细</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="techlevel"></td>
              <td class="techcomp"></td>
              <td class="techtime"></td>
              <td style="min-width:113px">
                <el-button type="primary" size="small" @click="toTech()"
                  >详细</el-button
                >
              </td>
            </tr>
          </tbody>
        </table>
        <table class="bdtable" id="fgsCost">
          <thead>
            <tr>
              <th style="min-width:160px;">日常费用盈余（万元）</th>
              <th>收入（万元）</th>
              <th>支出（万元）</th>
              <th>年份</th>
              <th>详细</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fgsyy"></td>
              <td class="fgssr"></td>
              <td class="fgszc"></td>
              <td class="fgsnf"></td>
              <td style="min-width:113px">
                <el-button type="primary" size="small">详细</el-button>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="bdtable" id="dailyCost">
          <thead>
            <tr>
              <th style="min-width:130px;">日常费用（万元）</th>
              <th>收入</th>
              <th>支出</th>
              <th>年份</th>
              <th style="min-width:113px">详细</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="day_cost"></td>
              <td class="in_money"></td>
              <td class="out_money"></td>
              <td class="day_year"></td>
              <td style="width:113px">
                <el-button type="primary" size="small" @click="toDayliCost"
                  >详细</el-button
                >
              </td>
            </tr>
          </tbody>
        </table>
        <table class="bdtable" id="yhCost">
          <thead>
            <tr>
              <th style="min-width:130px;">养护费用（万元）</th>
              <th>年份</th>
              <th>基本明细（万元）</th>
              <th style="min-width:113px">详细</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="yh_cost"></td>
              <td class="yh_year"></td>
              <td>
                日常养护（<span class="rc_detail"></span>）小修保养（<span
                  class="xx_detail"
                ></span
                >）中修工程（<span class="zx_detail"></span>）大修工程（<span
                  class="dx_detail"
                ></span
                >）
              </td>
              <td style="min-width:113px">
                <el-button type="primary" size="small" @click="toConsCost"
                  >详细</el-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <el-main id="topItems">
      <el-row :gutter="30">
        <el-col :span="4">
          <div
            class="topItem"
            style="background:rgb(114, 212, 223)"
            @click="toBaseData"
          >
            <div class="ticon" style="font-size:50px;">
              <i class="ri-align-justify"></i>
            </div>
            <div class="ttile">公路基础数据</div>
          </div>
        </el-col>
        <el-col :span="4"
          ><div
            class="topItem"
            style="background:rgb(143, 199, 64)"
            @click="toAssets"
          >
            <div class="ticon" style="font-size:50px;">
              <i class="el-icon-s-data"></i>
            </div>
            <div class="ttile">公路资产数据</div>
          </div></el-col
        >
        <el-col :span="4">
          <div
            class="topItem"
            style="background:rgb(104, 204, 166)"
            @click="toTech"
          >
            <div class="ticon" style="font-size:50px;">
              <i class="el-icon-s-operation"></i>
            </div>
            <div class="ttile">路产技术状况</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div
            class="topItem"
            style="background:rgb(255, 204, 102)"
            @click="toDayliCost"
          >
            <div class="ticon" style="font-size:50px;">
              <i class="ri-money-dollar-circle-fill"></i>
            </div>
            <div class="ttile">日常费用收支</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div
            class="topItem"
            style="background:rgb(114, 212, 223)"
            @click="toConsCost"
          >
            <div class="ticon" style="font-size:50px;">
              <i class="ri-money-dollar-circle-fill"></i>
            </div>
            <div class="ttile">养护费用管理</div>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-main>
      <el-row style="margin-bottom:20px;" :gutter="0">
        <el-col :span="5">
          <span class="mapSercLabel">资产类别 </span>
          <el-select
            v-model="condition.T0001_ID"
            size="small"
            style="width:70%"
          >
            <el-option
              v-for="item in zctypeArr"
              :key="item.T0001_ID"
              :value="item.T0001_ID"
              :label="item.T0001_ASSETTYPE_NAME"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <span class="mapSercLabel">起点桩号 </span>
          <el-select
            v-model="condition.START_PILE"
            size="small"
            style="width:70%"
          >
            <el-option
              v-for="item in startzhArr"
              :key="item.$index"
              :value="item"
              :label="item"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <span class="mapSercLabel">终点桩号 </span>
          <el-select
            v-model="condition.END_PILE"
            size="small"
            style="width:70%"
          >
            <el-option
              v-for="item in endzhArr"
              :key="item.$index"
              :value="item"
              :label="item"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <span class="mapSercLabel">归属年份 </span>
          <el-select v-model="condition.YEAR" size="small" style="width:70%">
            <el-option
              v-for="item in yearArr"
              :key="item.$index"
              :value="item"
              :label="item"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="4">
          <el-button
            type="primary"
            size="small"
            @click="changeMarkers('')"
            :disabled="isChaxun"
            >搜索</el-button
          >
          <el-button @click="reset" size="small">重置</el-button>
        </el-col>
      </el-row>
      <el-row>
        <div id="assetsMap">
          <div id="astList">
            <table style="border-collapse: collapse;">
              <thead>
                <tr>
                  <th colspan="2" style="background:#f0f0f0;">图例</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr
                  v-for="item in Assets"
                  :key="item.id"
                  @click="changeMarkers(item.id)"
                > -->
                <tr
                  v-for="item in Assets"
                  :key="item.id"
                  @click="changeMarkers(item.name)"
                >
                  <td><img :src="item.src" alt="" /></td>
                  <td>{{ item.name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="amap-wrapper">
            <el-amap
              class="amap-box"
              vid="astmap"
              zoom="11"
              :events="mapEvents"
              :center="astCenter"
              v-if="assAmap"
            >
              <el-amap-marker
                :vid="marker.vid"
                v-for="marker in astMarkers"
                :key="marker.T0002_ID"
                :icon="marker.icon"
                :position="marker.location"
                :label="marker.label"
                :events="markerEvents"
              >
              </el-amap-marker>
            </el-amap>
          </div>
        </div>
      </el-row>
    </el-main>
    <el-row class="assetsWrap">
      <el-col :span="12">
        <el-main>
          <el-row class="itemTh">
            公路资产
            <el-button type="info" class="more" size="mini" @click="toAssets"
              >查看 >></el-button
            >
          </el-row>
          <el-row>
            <template>
              <el-table
                :data="zcTable"
                border
                style="width: 100%;"
                :header-cell-style="{ background: 'rgb(240,240,240)' }"
              >
                <el-table-column
                  label="序号"
                  type="index"
                  align="center"
                  width="50"
                >
                </el-table-column>
                <el-table-column prop="name" label="资产名称" align="center">
                </el-table-column>
                <el-table-column prop="zh" label="桩号" align="center">
                </el-table-column>
                <!-- <el-table-column prop="num" label="数量" width="50" align="center">
                </el-table-column> -->
                <el-table-column label="图片" align="center">
                  <template slot-scope="scope">
                    <el-image
                      v-if="scope.row.pic.length > 0"
                      style="width: 24px; height: 24px;"
                      :src="scope.row.pic"
                      :preview-src-list="srcList"
                    >
                    </el-image>
                  </template>
                </el-table-column>
                <el-table-column prop="year" label="归属年份" align="center">
                </el-table-column>
                <el-table-column label="位置" align="center" width="50">
                  <template slot-scope="scope">
                    <i
                      class="el-icon-location"
                      @click="openDialog(scope.row)"
                    ></i>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-row>
        </el-main>
      </el-col>
      <el-col :span="12">
        <el-main>
          <el-row class="itemTh">
            技术等级
            <el-button type="info" class="more" size="mini" @click="toTech"
              >查看 >></el-button
            >
          </el-row>
          <el-row>
            <template>
              <el-table
                :data="techTable"
                border
                style="width: 100%"
                :header-cell-style="{ background: 'rgb(240,240,240)' }"
              >
                <el-table-column
                  label="序号"
                  type="index"
                  align="center"
                  width="50"
                >
                </el-table-column>
                <el-table-column prop="name" label="资产名称" align="center">
                </el-table-column>
                <el-table-column label="检查报告" align="center">
                  <template slot-scope="scope">
                    <el-button
                      type="primary"
                      size="small"
                      :btitle="scope.row.report"
                      @click="imgDialog(scope.row.report, scope.row, '1')"
                      >报告查看</el-button
                    >
                  </template>
                </el-table-column>
                <el-table-column label="技术状况" align="center">
                  <template slot-scope="scope">
                    <span>{{ scope.row.tech }}</span>
                    <span class="dTech" v-if="scope.row.tech.indexOf('四') > -1"
                      >危</span
                    >
                  </template>
                </el-table-column>
                <el-table-column label="检查时间" align="center">
                  <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                    <!-- <span class="dTech" v-if="scope.row.tech.indexOf('四')>-1">检</span> -->
                  </template>
                </el-table-column>
                <el-table-column prop="year" label="归属年份" align="center">
                </el-table-column>
              </el-table>
            </template>
          </el-row>
        </el-main>
      </el-col>
    </el-row>
    <el-row class="assetsWrap">
      <el-col :span="12">
        <el-main>
          <el-row class="itemTh">
            日常费用收支
            <el-button type="info" class="more" size="mini" @click="toDayliCost"
              >查看 >></el-button
            >
          </el-row>
          <el-row>
            <template>
              <el-table
                :data="dayliTable"
                border
                style="width: 100%"
                :header-cell-style="{ background: 'rgb(240,240,240)' }"
              >
                <el-table-column
                  label="序号"
                  type="index"
                  align="center"
                  width="50"
                >
                </el-table-column>
                <el-table-column prop="name" label="资产名称" align="center">
                </el-table-column>
                <el-table-column
                  prop="income"
                  label="收入（元）"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="expenditure"
                  label="支出（元）"
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="date" label="发生时间" align="center">
                </el-table-column>
                <el-table-column label="票据查看" align="center">
                  <template slot-scope="scope">
                    <el-button
                      type="primary"
                      size="small"
                      :btitle="scope.row.bill"
                      @click="imgDialog(scope.row.bill, scope.row, '2')"
                      >票据查看</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-row>
        </el-main>
      </el-col>
      <el-col :span="12">
        <el-main>
          <el-row class="itemTh">
            养护费用管理
            <el-button type="info" class="more" size="mini" @click="toConsCost"
              >查看 >></el-button
            >
          </el-row>
          <el-row>
            <template>
              <el-table
                :data="conservTable"
                border
                style="width: 100%"
                :header-cell-style="{ background: 'rgb(240,240,240)' }"
              >
                <el-table-column
                  label="序号"
                  type="index"
                  align="center"
                  width="50"
                >
                </el-table-column>
                <el-table-column prop="name" label="资产名称" align="center">
                </el-table-column>
                <el-table-column
                  prop="cost"
                  label="费用（万元）"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="engineering"
                  label="养护工程"
                  align="center"
                >
                </el-table-column>
                <!-- <el-table-column
                  prop="date"
                  label="发生时间"
                  align="center"
                >
                </el-table-column> -->
                <el-table-column label="票据查看" align="center">
                  <template slot-scope="scope">
                    <el-button
                      type="primary"
                      size="small"
                      :btitle="scope.row.bill"
                      @click="imgDialog(scope.row.bill, scope.row, '3')"
                      >票据查看</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-row>
        </el-main>
      </el-col>
    </el-row>
    <el-row>
      <el-dialog
        title="地图位置"
        :visible.sync="locationDialog"
        width="60%"
        :before-close="closeLoclDialog"
      >
        <el-row>
          <div id="localMap">
            <div class="amap-wrapper">
              <el-amap
                class="amap-box"
                vid="loclmap"
                :zoom="loclZoom"
                :center="loclCenter"
              >
                <el-amap-marker
                  vid="loclmarker"
                  :position="locMcenter"
                  :label="loclabel"
                >
                </el-amap-marker>
              </el-amap>
            </div>
          </div>
        </el-row>
      </el-dialog>
      <!-- <el-dialog
        :visible.sync="mapShow"
        custom-class="dialog-div"
        title="地图位置"
      >
        <div style="height: 400px;">
          <el-amap
            vid="amapDiv"
            :center="mapData.position"
            :zoom="mapData.zoom"
            class="amap-demo"
          >
            <el-amap-marker
              vid="component-marker"
              :position="mapData.position"
              :content-render="mapData.contentRender"
              :icon="locIcon"
            ></el-amap-marker>
            <el-amap-marker
              vid="component-marker"
              :position="mapData.position"
              :icon="locIcon"
            ></el-amap-marker>
          </el-amap>
        </div>
      </el-dialog> -->
    </el-row>
    <el-row>
      <el-dialog
        :title="portName"
        :visible.sync="portDialog"
        width="60%"
        :before-close="closeImgDialog"
      >
        <!-- <el-main> -->
        <el-row>
          <div id="report" style="text-align:center;">
            <img :src="imgUrl" alt="" style="height:300px;" />
          </div>
        </el-row>
        <!-- </el-main> -->
      </el-dialog>
    </el-row>
  </div>
</template>
<script>
import 'remixicon/fonts/remixicon.css'
import router from '../router/index.js'
import { Message } from 'element-ui'
import VueAMap from 'vue-amap'
export default {
  data() {
    return {
      fgsShow: false,
      isChaxun: false,
      T0002_ID: '',
      sab: '',
      mapShow: false, // 地图是否显示
      astCenter: [108.648315, 35.037025],
      locationDialog: false,
      loclZoom: 7,
      loclCenter: [108.860159, 34.978],
      // loclicon: '../assets/map.png',
      locMcenter: [108.860159, 34.978],
      loclabel: {
        content: '',
        offset: [10, -20],
      },
      assAmap: false,
      portName: '',
      portDialog: false,
      imgUrl: '',
      Assets: [
        { id: '1', name: '分公司', src: require('../assets/fgs.jpg') },
        // { id: '2', name: '加油站', src: require('../assets/addoil.png') },
        { id: '3', name: '桥梁', src: require('../assets/bridge.png') },
        { id: '4', name: '互通立交', src: require('../assets/htlj.png') },
        { id: '5', name: '收费站', src: require('../assets/sfz.png') },
        { id: '6', name: '隧道', src: require('../assets/tenant.png') },
        { id: '7', name: '涵洞', src: require('../assets/tunnel.png') },
      ],
      astMarkers: [],
      zctypeArr: [],
      startzhArr: [],
      endzhArr: [],
      ZHS: [],
      yearArr: ['2017', '2018', '2019', '2020', '2021'],
      zcTable: [],
      techTable: [],
      dayliTable: [],
      conservTable: [],
      srcList: [],
      mapEvents: {
        init(o) {
          AMap.service('AMap.DistrictSearch', function() {
            //回调函数
            var district = null
            var polygons = []
            //加载行政区划插件
            if (!district) {
              //实例化DistrictSearch
              var opts = {
                subdistrict: 0, //获取边界不需要返回下级行政区
                extensions: 'all', //返回行政区边界坐标组等具体信息
                level: 'province', //查询行政级别为 市
              }
              district = new AMap.DistrictSearch(opts)
            }
            //行政区查询
            district.search('陕西省', function(status, result) {
              // console.log(result)
              o.remove(polygons) //清除上次结果
              polygons = []
              var bounds = result.districtList[0].boundaries
              if (bounds) {
                for (var i = 0, l = bounds.length; i < l; i++) {
                  var polygon = new AMap.Polyline({
                    path: bounds[i],
                    strokeColor: 'rgb(140,147,250)',
                    strokeWeight: 3,
                    strokeStyle: 'dashed',
                    map: o,
                  })
                }
              }
              /*  map.add(polygons); */
              /* map.setFitView(polygons);//视口自适应 */
            })

            let polylines = [
              {
                id: '1',
                color: '#000',
                name: '铜旬分公司管辖路段',
                path: [
                  [108.405016, 35.013049],
                  [108.405569, 35.013501],
                  [108.406067, 35.013844],
                  [108.4067, 35.01424],
                  [108.407264, 35.014529],
                  [108.407827, 35.014802],
                  [108.408583, 35.015149],
                  [108.409249, 35.015421],
                  [108.409785, 35.015654],
                  [108.410729, 35.016094],
                  [108.411287, 35.016366],
                  [108.411604, 35.016546],
                  [108.412473, 35.017073],
                  [108.41288, 35.017332],
                  [108.413272, 35.017614],
                  [108.413835, 35.018049],
                  [108.414345, 35.018484],
                  [108.414806, 35.018896],
                  [108.415461, 35.019454],
                  [108.415959, 35.019889],
                  [108.416523, 35.020403],
                  [108.417134, 35.020944],
                  [108.418046, 35.02173],
                  [108.418282, 35.021937],
                  [108.418534, 35.022152],
                  [108.418899, 35.022437],
                  [108.41935, 35.02278],
                  [108.419591, 35.022978],
                  [108.419945, 35.023224],
                  [108.420444, 35.023562],
                  [108.420836, 35.023821],
                  [108.421764, 35.024362],
                  [108.422552, 35.024788],
                  [108.423389, 35.025187],
                  [108.423845, 35.025394],
                  [108.424285, 35.025543],
                  [108.42473, 35.025728],
                  [108.425224, 35.025917],
                  [108.425862, 35.026132],
                  [108.426715, 35.026391],
                  [108.427284, 35.026536],
                  [108.427981, 35.026699],
                  [108.428679, 35.026839],
                  [108.429354, 35.026967],
                  [108.43017, 35.027068],
                  [108.431162, 35.02723],
                  [108.431978, 35.027344],
                  [108.433651, 35.027573],
                  [108.434129, 35.027652],
                  [108.434756, 35.027748],
                  [108.43518, 35.027841],
                  [108.435915, 35.02799],
                  [108.436403, 35.028117],
                  [108.436934, 35.028267],
                  [108.437406, 35.028412],
                  [108.43798, 35.028592],
                  [108.43841, 35.02875],
                  [108.438833, 35.028913],
                  [108.439391, 35.029141],
                  [108.439756, 35.029312],
                  [108.440148, 35.029492],
                  [108.440673, 35.029752],
                  [108.441231, 35.030063],
                  [108.441998, 35.030485],
                  [108.442594, 35.030815],
                  [108.443806, 35.031504],
                  [108.444782, 35.032062],
                  [108.445163, 35.032268],
                  [108.445893, 35.032686],
                  [108.447465, 35.033577],
                  [108.448666, 35.034271],
                  [108.44909, 35.034495],
                  [108.449745, 35.034873],
                  [108.450217, 35.035159],
                  [108.450871, 35.035602],
                  [108.451204, 35.035853],
                  [108.451408, 35.03602],
                  [108.451762, 35.036292],
                  [108.451826, 35.036397],
                  [108.452073, 35.036626],
                  [108.452298, 35.036863],
                  [108.452593, 35.037184],
                  [108.45277, 35.037408],
                  [108.452985, 35.037667],
                  [108.453151, 35.037935],
                  [108.453376, 35.03826],
                  [108.45358, 35.03858],
                  [108.453854, 35.039055],
                  [108.454272, 35.039788],
                  [108.45475, 35.040561],
                  [108.45505, 35.041093],
                  [108.455324, 35.041563],
                  [108.45564, 35.042072],
                  [108.455919, 35.042454],
                  [108.456139, 35.042722],
                  [108.456488, 35.043117],
                  [108.45674, 35.04335],
                  [108.456949, 35.043543],
                  [108.457169, 35.043715],
                  [108.457464, 35.043921],
                  [108.457598, 35.044009],
                  [108.457839, 35.044154],
                  [108.458, 35.044255],
                  [108.458161, 35.044338],
                  [108.458306, 35.044431],
                  [108.458494, 35.044483],
                  [108.45865, 35.04458],
                  [108.458907, 35.04469],
                  [108.459191, 35.044799],
                  [108.459427, 35.044896],
                  [108.459846, 35.045015],
                  [108.460211, 35.045107],
                  [108.460543, 35.045177],
                  [108.460817, 35.045221],
                  [108.461149, 35.045261],
                  [108.461562, 35.0453],
                  [108.461975, 35.045348],
                  [108.462292, 35.045362],
                  [108.462807, 35.045388],
                  [108.463424, 35.045427],
                  [108.463799, 35.045449],
                  [108.464202, 35.045489],
                  [108.464668, 35.045533],
                  [108.465248, 35.045616],
                  [108.465602, 35.045682],
                  [108.466144, 35.045818],
                  [108.466594, 35.045937],
                  [108.467029, 35.046091],
                  [108.467705, 35.046385],
                  [108.468182, 35.046622],
                  [108.468761, 35.046969],
                  [108.469153, 35.047228],
                  [108.469486, 35.047435],
                  [108.469915, 35.047729],
                  [108.470344, 35.047988],
                  [108.470961, 35.048317],
                  [108.471277, 35.048493],
                  [108.471717, 35.048664],
                  [108.472055, 35.048796],
                  [108.472533, 35.048932],
                  [108.473026, 35.049059],
                  [108.473423, 35.04913],
                  [108.473793, 35.049169],
                  [108.474056, 35.049204],
                  [108.474346, 35.049218],
                  [108.474888, 35.049248],
                  [108.475483, 35.049244],
                  [108.476036, 35.049253],
                  [108.476513, 35.049231],
                  [108.477033, 35.049235],
                  [108.477516, 35.049257],
                  [108.477833, 35.049257],
                  [108.478267, 35.049319],
                  [108.478643, 35.049371],
                  [108.478884, 35.049411],
                  [108.479136, 35.049468],
                  [108.479362, 35.049516],
                  [108.47963, 35.049595],
                  [108.479919, 35.04967],
                  [108.480231, 35.04978],
                  [108.480574, 35.049903],
                  [108.480976, 35.050065],
                  [108.481303, 35.05021],
                  [108.48169, 35.050412],
                  [108.482054, 35.050614],
                  [108.48243, 35.050842],
                  [108.482827, 35.051106],
                  [108.483154, 35.051343],
                  [108.483433, 35.051563],
                  [108.483835, 35.051888],
                  [108.48405, 35.052081],
                  [108.484495, 35.052485],
                  [108.484919, 35.052867],
                  [108.485616, 35.053482],
                  [108.486051, 35.053886],
                  [108.486641, 35.054404],
                  [108.487827, 35.05548],
                  [108.488562, 35.056143],
                  [108.489329, 35.056802],
                  [108.490192, 35.057526],
                  [108.490503, 35.05775],
                  [108.490847, 35.058],
                  [108.491512, 35.058435],
                  [108.491861, 35.058637],
                  [108.492204, 35.058826],
                  [108.492596, 35.059028],
                  [108.49293, 35.059203],
                  [108.493423, 35.059423],
                  [108.494078, 35.059669],
                  [108.494507, 35.059805],
                  [108.495199, 35.060029],
                  [108.496138, 35.060248],
                  [108.496851, 35.060411],
                  [108.497479, 35.060503],
                  [108.497994, 35.060564],
                  [108.49853, 35.060626],
                  [108.499093, 35.060661],
                  [108.499474, 35.06067],
                  [108.499946, 35.06067],
                  [108.500408, 35.060674],
                  [108.501132, 35.060652],
                  [108.502092, 35.060617],
                  [108.503052, 35.060591],
                  [108.504029, 35.060608],
                  [108.505627, 35.060643],
                  [108.50648, 35.060714],
                  [108.507338, 35.060784],
                  [108.508132, 35.060867],
                  [108.509205, 35.060999],
                  [108.510412, 35.061157],
                  [108.511206, 35.06128],
                  [108.512547, 35.061478],
                  [108.513985, 35.061693],
                  [108.514956, 35.061842],
                  [108.515948, 35.061956],
                  [108.516694, 35.062044],
                  [108.517268, 35.062079],
                  [108.518024, 35.06211],
                  [108.51899, 35.062114],
                  [108.519537, 35.062097],
                  [108.520186, 35.062057],
                  [108.520841, 35.062013],
                  [108.521581, 35.061921],
                  [108.522332, 35.061846],
                  [108.522981, 35.061776],
                  [108.523732, 35.06168],
                  [108.524424, 35.061609],
                  [108.52524, 35.061508],
                  [108.526001, 35.061438],
                  [108.52665, 35.061346],
                  [108.527176, 35.061302],
                  [108.527831, 35.061214],
                  [108.528437, 35.061126],
                  [108.529182, 35.060964],
                  [108.529488, 35.060872],
                  [108.530003, 35.0607],
                  [108.530588, 35.060459],
                  [108.531071, 35.060213],
                  [108.531586, 35.059914],
                  [108.532192, 35.059493],
                  [108.532793, 35.059019],
                  [108.533195, 35.058654],
                  [108.533587, 35.058307],
                  [108.533962, 35.057956],
                  [108.534252, 35.057693],
                  [108.534461, 35.057451],
                  [108.534713, 35.057205],
                  [108.534987, 35.056911],
                  [108.535427, 35.056428],
                  [108.535625, 35.056226],
                  [108.535861, 35.055949],
                  [108.536204, 35.055576],
                  [108.536596, 35.055141],
                  [108.536816, 35.0549],
                  [108.537036, 35.054627],
                  [108.537256, 35.054381],
                  [108.537508, 35.054127],
                  [108.537792, 35.053797],
                  [108.538141, 35.053415],
                  [108.538565, 35.052954],
                  [108.538844, 35.052673],
                  [108.539085, 35.052432],
                  [108.539589, 35.051949],
                  [108.540013, 35.05154],
                  [108.540426, 35.051176],
                  [108.540673, 35.050978],
                  [108.540888, 35.050785],
                  [108.54114, 35.050592],
                  [108.541553, 35.050267],
                  [108.541832, 35.050052],
                  [108.542186, 35.04981],
                  [108.542572, 35.049533],
                  [108.543028, 35.04923],
                  [108.543328, 35.049011],
                  [108.543698, 35.048817],
                  [108.544069, 35.048607],
                  [108.544417, 35.04844],
                  [108.54483, 35.048251],
                  [108.545367, 35.048062],
                  [108.545925, 35.047882],
                  [108.546418, 35.047785],
                  [108.546971, 35.047689],
                  [108.547454, 35.047619],
                  [108.548017, 35.04757],
                  [108.548494, 35.047539],
                  [108.548703, 35.047539],
                  [108.549025, 35.047553],
                  [108.549508, 35.047557],
                  [108.549835, 35.047588],
                  [108.550168, 35.04761],
                  [108.550431, 35.047649],
                  [108.550699, 35.047693],
                  [108.550962, 35.047746],
                  [108.551225, 35.047816],
                  [108.551557, 35.047904],
                  [108.551847, 35.048005],
                  [108.552228, 35.048119],
                  [108.552641, 35.048247],
                  [108.553092, 35.0484],
                  [108.55344, 35.048519],
                  [108.553837, 35.048659],
                  [108.554315, 35.048804],
                  [108.554765, 35.048962],
                  [108.555645, 35.049261],
                  [108.556139, 35.049441],
                  [108.556852, 35.049683],
                  [108.557265, 35.049814],
                  [108.557474, 35.049889],
                  [108.558145, 35.050104],
                  [108.55874, 35.050293],
                  [108.559293, 35.050469],
                  [108.559663, 35.05057],
                  [108.560087, 35.050666],
                  [108.560607, 35.050776],
                  [108.560977, 35.050838],
                  [108.561519, 35.050925],
                  [108.561964, 35.050969],
                  [108.562383, 35.051009],
                  [108.562833, 35.051018],
                  [108.563466, 35.051035],
                  [108.563708, 35.05104],
                  [108.564056, 35.051031],
                  [108.56441, 35.051009],
                  [108.564684, 35.051018],
                  [108.564909, 35.050987],
                  [108.565183, 35.050956],
                  [108.565451, 35.050934],
                  [108.565666, 35.05089],
                  [108.565972, 35.050846],
                  [108.566245, 35.050789],
                  [108.566717, 35.050701],
                  [108.567002, 35.050631],
                  [108.567302, 35.050552],
                  [108.567549, 35.050486],
                  [108.567844, 35.050403],
                  [108.568123, 35.050319],
                  [108.568359, 35.050236],
                  [108.568723, 35.050117],
                  [108.568981, 35.050016],
                  [108.569475, 35.04981],
                  [108.569866, 35.049656],
                  [108.57015, 35.04952],
                  [108.570397, 35.049415],
                  [108.570649, 35.049283],
                  [108.570907, 35.049169],
                  [108.571239, 35.049015],
                  [108.571502, 35.048892],
                  [108.571894, 35.048712],
                  [108.5722, 35.048589],
                  [108.572538, 35.048409],
                  [108.572924, 35.048238],
                  [108.573997, 35.047746],
                  [108.577189, 35.046283],
                  [108.57853, 35.045669],
                  [108.579721, 35.045111],
                  [108.581292, 35.044386],
                  [108.58221, 35.043956],
                  [108.583438, 35.043402],
                  [108.584699, 35.042818],
                  [108.585986, 35.042212],
                  [108.586818, 35.041834],
                  [108.588014, 35.041277],
                  [108.588604, 35.041022],
                  [108.589017, 35.040833],
                  [108.589495, 35.040644],
                  [108.589682, 35.040574],
                  [108.590015, 35.040451],
                  [108.590272, 35.040367],
                  [108.590503, 35.040297],
                  [108.590884, 35.040187],
                  [108.591233, 35.0401],
                  [108.591737, 35.039972],
                  [108.592064, 35.039915],
                  [108.592354, 35.039854],
                  [108.592751, 35.039779],
                  [108.59304, 35.039753],
                  [108.593384, 35.039709],
                  [108.593743, 35.039691],
                  [108.594151, 35.039656],
                  [108.594526, 35.039643],
                  [108.594784, 35.039647],
                  [108.595245, 35.039643],
                  [108.595551, 35.039669],
                  [108.596044, 35.039687],
                  [108.596543, 35.039717],
                  [108.597176, 35.039792],
                  [108.597863, 35.039845],
                  [108.59833, 35.039906],
                  [108.598861, 35.039946],
                  [108.599451, 35.039972],
                  [108.60017, 35.039999],
                  [108.600808, 35.039994],
                  [108.601489, 35.039963],
                  [108.602358, 35.039871],
                  [108.603099, 35.039748],
                  [108.60364, 35.03966],
                  [108.604268, 35.03952],
                  [108.604842, 35.039362],
                  [108.605341, 35.039208],
                  [108.605797, 35.039063],
                  [108.60635, 35.038843],
                  [108.606924, 35.038602],
                  [108.607465, 35.03833],
                  [108.608007, 35.038053],
                  [108.608629, 35.037693],
                  [108.609493, 35.03717],
                  [108.610078, 35.036801],
                  [108.610663, 35.036428],
                  [108.611049, 35.03619],
                  [108.611676, 35.035817],
                  [108.612213, 35.035514],
                  [108.612588, 35.035365],
                  [108.612926, 35.035202],
                  [108.613538, 35.035009],
                  [108.613967, 35.03489],
                  [108.614262, 35.034842],
                  [108.614659, 35.034767],
                  [108.614986, 35.034719],
                  [108.615346, 35.034697],
                  [108.615764, 35.034697],
                  [108.616263, 35.034701],
                  [108.616601, 35.034737],
                  [108.617196, 35.034785],
                  [108.617636, 35.034838],
                  [108.618141, 35.034868],
                  [108.618661, 35.034921],
                  [108.619321, 35.034947],
                  [108.619744, 35.034961],
                  [108.620099, 35.034934],
                  [108.620576, 35.034908],
                  [108.620828, 35.034851],
                  [108.621161, 35.034798],
                  [108.621343, 35.034763],
                  [108.621504, 35.034723],
                  [108.621638, 35.034675],
                  [108.621837, 35.034631],
                  [108.621971, 35.034587],
                  [108.622137, 35.034535],
                  [108.622319, 35.034469],
                  [108.622459, 35.034412],
                  [108.622604, 35.034359],
                  [108.622743, 35.034293],
                  [108.622861, 35.034253],
                  [108.622979, 35.034192],
                  [108.623124, 35.034122],
                  [108.623333, 35.034029],
                  [108.623542, 35.033893],
                  [108.623714, 35.033805],
                  [108.623923, 35.033674],
                  [108.624057, 35.033577],
                  [108.624315, 35.033423],
                  [108.624637, 35.033186],
                  [108.62498, 35.032949],
                  [108.6255, 35.03258],
                  [108.625855, 35.032356],
                  [108.626091, 35.032211],
                  [108.626273, 35.032106],
                  [108.626514, 35.031983],
                  [108.626879, 35.031798],
                  [108.627062, 35.031723],
                  [108.627324, 35.031627],
                  [108.627737, 35.031486],
                  [108.627888, 35.031438],
                  [108.628081, 35.031376],
                  [108.62829, 35.031328],
                  [108.628773, 35.031245],
                  [108.629191, 35.031187],
                  [108.629513, 35.031161],
                  [108.629792, 35.031152],
                  [108.630125, 35.031161],
                  [108.630581, 35.031187],
                  [108.631155, 35.031236],
                  [108.63175, 35.031363],
                  [108.632077, 35.031442],
                  [108.632501, 35.031574],
                  [108.632785, 35.031666],
                  [108.633064, 35.031789],
                  [108.633799, 35.032127],
                  [108.634303, 35.032369],
                  [108.63469, 35.032576],
                  [108.63513, 35.0328],
                  [108.635559, 35.033019],
                  [108.636063, 35.033287],
                  [108.636717, 35.033608],
                  [108.6372, 35.03388],
                  [108.637581, 35.034069],
                  [108.638536, 35.034548],
                  [108.63933, 35.034961],
                  [108.639759, 35.035176],
                  [108.640199, 35.035387],
                  [108.640902, 35.035751],
                  [108.641191, 35.035914],
                  [108.641513, 35.036059],
                  [108.641916, 35.036248],
                  [108.64228, 35.036388],
                  [108.642763, 35.036577],
                  [108.643171, 35.0367],
                  [108.643616, 35.036805],
                  [108.644083, 35.036915],
                  [108.644512, 35.036994],
                  [108.644828, 35.037056],
                  [108.645102, 35.037078],
                  [108.645445, 35.037113],
                  [108.645751, 35.03713],
                  [108.646003, 35.037135],
                  [108.646331, 35.037152],
                  [108.646567, 35.037139],
                  [108.646776, 35.037157],
                  [108.647135, 35.037139],
                  [108.647495, 35.037108],
                  [108.647908, 35.037078],
                  [108.648315, 35.037025],
                  [108.648669, 35.036985],
                  [108.649174, 35.036911],
                  [108.649753, 35.036792],
                  [108.650456, 35.036643],
                  [108.650772, 35.036555],
                  [108.651679, 35.03634],
                  [108.652274, 35.03619],
                  [108.652591, 35.036107],
                  [108.65317, 35.035962],
                  [108.653503, 35.035879],
                  [108.65398, 35.03576],
                  [108.654774, 35.035558],
                  [108.655305, 35.035435],
                  [108.65589, 35.035303],
                  [108.656169, 35.035237],
                  [108.656501, 35.035176],
                  [108.657247, 35.035044],
                  [108.657885, 35.034978],
                  [108.658406, 35.034925],
                  [108.658819, 35.034899],
                  [108.659264, 35.034882],
                  [108.659747, 35.03486],
                  [108.660257, 35.034868],
                  [108.660552, 35.034882],
                  [108.660927, 35.034895],
                  [108.66148, 35.034943],
                  [108.662054, 35.035013],
                  [108.662842, 35.035097],
                  [108.663363, 35.035193],
                  [108.664274, 35.0354],
                  [108.664698, 35.035501],
                  [108.66517, 35.035646],
                  [108.666066, 35.035936],
                  [108.666533, 35.03612],
                  [108.667305, 35.036445],
                  [108.668228, 35.036876],
                  [108.668646, 35.037078],
                  [108.668872, 35.037183],
                  [108.669242, 35.037368],
                  [108.669612, 35.037535],
                  [108.669977, 35.03771],
                  [108.670417, 35.037886],
                  [108.670959, 35.03807],
                  [108.67127, 35.038171],
                  [108.671425, 35.038211],
                  [108.671726, 35.038303],
                  [108.671887, 35.038343],
                  [108.67209, 35.038373],
                  [108.672632, 35.038453],
                  [108.673249, 35.03851],
                  [108.673474, 35.038505],
                  [108.673786, 35.038514],
                  [108.674252, 35.038496],
                  [108.674714, 35.038461],
                  [108.675116, 35.038426],
                  [108.675518, 35.038351],
                  [108.675862, 35.038277],
                  [108.676157, 35.038198],
                  [108.676403, 35.038132],
                  [108.676757, 35.038013],
                  [108.677079, 35.037912],
                  [108.67738, 35.037767],
                  [108.677787, 35.037592],
                  [108.67812, 35.037412],
                  [108.678501, 35.037201],
                  [108.678742, 35.037034],
                  [108.67893, 35.036893],
                  [108.679188, 35.036713],
                  [108.67945, 35.03652],
                  [108.679719, 35.036327],
                  [108.679906, 35.036164],
                  [108.680293, 35.035892],
                  [108.680652, 35.035606],
                  [108.680942, 35.035422],
                  [108.681248, 35.035207],
                  [108.681467, 35.035066],
                  [108.681854, 35.034833],
                  [108.682165, 35.034644],
                  [108.682519, 35.034473],
                  [108.682825, 35.034302],
                  [108.683157, 35.03413],
                  [108.683747, 35.03388],
                  [108.683994, 35.033779],
                  [108.684354, 35.033647],
                  [108.684928, 35.03341],
                  [108.685437, 35.033204],
                  [108.685829, 35.033072],
                  [108.686371, 35.032822],
                  [108.686837, 35.032619],
                  [108.687277, 35.032373],
                  [108.68761, 35.032193],
                  [108.68776, 35.03207],
                  [108.688028, 35.031908],
                  [108.68827, 35.031715],
                  [108.68864, 35.03142],
                  [108.688951, 35.031148],
                  [108.689192, 35.030911],
                  [108.689444, 35.030638],
                  [108.68968, 35.03037],
                  [108.689916, 35.030076],
                  [108.69019, 35.029712],
                  [108.690431, 35.029404],
                  [108.690694, 35.029048],
                  [108.690936, 35.028736],
                  [108.691225, 35.028372],
                  [108.691429, 35.028157],
                  [108.691617, 35.027937],
                  [108.691982, 35.027555],
                  [108.692153, 35.027432],
                  [108.692395, 35.027195],
                  [108.692647, 35.026992],
                  [108.69284, 35.026804],
                  [108.693028, 35.026694],
                  [108.693264, 35.026505],
                  [108.693521, 35.026338],
                  [108.693773, 35.026167],
                  [108.694036, 35.026],
                  [108.694358, 35.025833],
                  [108.69468, 35.025653],
                  [108.694943, 35.025543],
                  [108.695168, 35.025415],
                  [108.695592, 35.02524],
                  [108.695984, 35.025064],
                  [108.69652, 35.024875],
                  [108.696928, 35.024752],
                  [108.697319, 35.024625],
                  [108.697743, 35.024515],
                  [108.698274, 35.024401],
                  [108.698816, 35.024317],
                  [108.699406, 35.024225],
                  [108.699824, 35.024185],
                  [108.70013, 35.024168],
                  [108.700441, 35.024137],
                  [108.700897, 35.024111],
                  [108.701332, 35.024115],
                  [108.701766, 35.024089],
                  [108.702501, 35.024071],
                  [108.704062, 35.02401],
                  [108.704636, 35.02401],
                  [108.706176, 35.023961],
                  [108.707179, 35.023926],
                  [108.707962, 35.023891],
                  [108.708794, 35.023847],
                  [108.709497, 35.023803],
                  [108.709899, 35.023746],
                  [108.710398, 35.023698],
                  [108.710897, 35.023619],
                  [108.711471, 35.023518],
                  [108.712147, 35.023395],
                  [108.712903, 35.023206],
                  [108.713455, 35.023065],
                  [108.714164, 35.022854],
                  [108.714652, 35.022683],
                  [108.715574, 35.022362],
                  [108.716089, 35.022151],
                  [108.716771, 35.021848],
                  [108.717119, 35.021695],
                  [108.71779, 35.021405],
                  [108.718493, 35.021101],
                  [108.719533, 35.020631],
                  [108.720252, 35.020324],
                  [108.721051, 35.019959],
                  [108.722049, 35.019529],
                  [108.723256, 35.018997],
                  [108.72375, 35.018782],
                  [108.724045, 35.018646],
                  [108.724254, 35.018571],
                  [108.724833, 35.018312],
                  [108.725322, 35.018136],
                  [108.725751, 35.017973],
                  [108.726116, 35.017837],
                  [108.726765, 35.017622],
                  [108.727306, 35.017468],
                  [108.728122, 35.017271],
                  [108.728685, 35.017152],
                  [108.729388, 35.016967],
                  [108.729983, 35.016809],
                  [108.730863, 35.016585],
                  [108.73156, 35.016401],
                  [108.73273, 35.016054],
                  [108.733041, 35.015948],
                  [108.733363, 35.015834],
                  [108.733712, 35.015702],
                  [108.734564, 35.015368],
                  [108.735047, 35.015175],
                  [108.735455, 35.015017],
                  [108.736029, 35.014762],
                  [108.73634, 35.014626],
                  [108.737064, 35.014301],
                  [108.737633, 35.014059],
                  [108.738802, 35.013576],
                  [108.739983, 35.013128],
                  [108.740417, 35.012974],
                  [108.741002, 35.01278],
                  [108.741994, 35.012468],
                  [108.743099, 35.012161],
                  [108.743909, 35.011946],
                  [108.744853, 35.011735],
                  [108.745862, 35.011502],
                  [108.746532, 35.011379],
                  [108.746988, 35.011265],
                  [108.747343, 35.011172],
                  [108.748131, 35.010988],
                  [108.748662, 35.010847],
                  [108.749134, 35.010685],
                  [108.749665, 35.010518],
                  [108.749998, 35.010412],
                  [108.750175, 35.010329],
                  [108.750588, 35.010175],
                  [108.751259, 35.009889],
                  [108.751827, 35.009643],
                  [108.75216, 35.009476],
                  [108.752508, 35.009305],
                  [108.753002, 35.009059],
                  [108.75349, 35.008839],
                  [108.753925, 35.008611],
                  [108.754681, 35.008251],
                  [108.755448, 35.007877],
                  [108.756044, 35.007583],
                  [108.756607, 35.007315],
                  [108.757063, 35.007082],
                  [108.757685, 35.00677],
                  [108.758329, 35.00637],
                  [108.758737, 35.006097],
                  [108.75908, 35.005821],
                  [108.759568, 35.00539],
                  [108.759718, 35.005223],
                  [108.759927, 35.004999],
                  [108.760115, 35.004792],
                  [108.76026, 35.004612],
                  [108.760582, 35.004155],
                  [108.760855, 35.003742],
                  [108.761188, 35.003193],
                  [108.761499, 35.002653],
                  [108.762223, 35.001409],
                  [108.763216, 34.999713],
                  [108.763532, 34.999177],
                  [108.763736, 34.99886],
                  [108.763961, 34.998509],
                  [108.764047, 34.998381],
                  [108.764289, 34.998061],
                  [108.764503, 34.997797],
                  [108.764782, 34.997481],
                  [108.765034, 34.997226],
                  [108.765329, 34.996949],
                  [108.765662, 34.99665],
                  [108.765936, 34.996435],
                  [108.766231, 34.996189],
                  [108.766585, 34.995903],
                  [108.767271, 34.995376],
                  [108.76777, 34.994967],
                  [108.768221, 34.994598],
                  [108.768505, 34.994382],
                  [108.768983, 34.994004],
                  [108.769406, 34.993662],
                  [108.769862, 34.993306],
                  [108.770404, 34.992879],
                  [108.77086, 34.992532],
                  [108.771085, 34.992334],
                  [108.771359, 34.992128],
                  [108.771724, 34.99182],
                  [108.77204, 34.991587],
                  [108.772373, 34.99128],
                  [108.772689, 34.990994],
                  [108.772942, 34.990761],
                  [108.77329, 34.990392],
                  [108.773735, 34.9899],
                  [108.774191, 34.989337],
                  [108.774851, 34.988511],
                  [108.775404, 34.987808],
                  [108.775849, 34.987237],
                  [108.776391, 34.986573],
                  [108.777008, 34.985843],
                  [108.777319, 34.985509],
                  [108.777689, 34.985136],
                  [108.77792, 34.984925],
                  [108.778215, 34.98467],
                  [108.778816, 34.984226],
                  [108.779304, 34.983905],
                  [108.779867, 34.983562],
                  [108.78065, 34.983175],
                  [108.781047, 34.982991],
                  [108.781739, 34.982718],
                  [108.782308, 34.982538],
                  [108.782624, 34.98245],
                  [108.783386, 34.982266],
                  [108.7841, 34.982112],
                  [108.784952, 34.981936],
                  [108.785902, 34.981747],
                  [108.786605, 34.981593],
                  [108.787377, 34.981439],
                  [108.788638, 34.981193],
                  [108.7897, 34.980987],
                  [108.790167, 34.980912],
                  [108.790778, 34.980828],
                  [108.791454, 34.980767],
                  [108.791792, 34.980749],
                  [108.792377, 34.98074],
                  [108.793021, 34.980749],
                  [108.793873, 34.980811],
                  [108.794372, 34.980864],
                  [108.794641, 34.98089],
                  [108.795123, 34.980982],
                  [108.795762, 34.981114],
                  [108.796228, 34.981202],
                  [108.796867, 34.981343],
                  [108.797419, 34.981475],
                  [108.797983, 34.981584],
                  [108.798562, 34.981694],
                  [108.799206, 34.981778],
                  [108.799731, 34.981835],
                  [108.800225, 34.981866],
                  [108.80096, 34.981888],
                  [108.801609, 34.981874],
                  [108.80207, 34.981839],
                  [108.802596, 34.981809],
                  [108.803095, 34.981743],
                  [108.803739, 34.981655],
                  [108.804393, 34.981567],
                  [108.805096, 34.981483],
                  [108.805954, 34.981426],
                  [108.806533, 34.981395],
                  [108.807183, 34.981409],
                  [108.807783, 34.981435],
                  [108.808454, 34.981514],
                  [108.808835, 34.981571],
                  [108.809403, 34.981672],
                  [108.810036, 34.981817],
                  [108.810616, 34.981954],
                  [108.811276, 34.982121],
                  [108.8123, 34.982384],
                  [108.813244, 34.982626],
                  [108.814221, 34.982885],
                  [108.814977, 34.983066],
                  [108.815546, 34.983206],
                  [108.815948, 34.983272],
                  [108.816399, 34.983351],
                  [108.816999, 34.98343],
                  [108.817713, 34.983492],
                  [108.8184, 34.983536],
                  [108.81892, 34.98354],
                  [108.819537, 34.983523],
                  [108.82002, 34.983505],
                  [108.820658, 34.983461],
                  [108.821205, 34.983386],
                  [108.821602, 34.983329],
                  [108.822369, 34.983197],
                  [108.822745, 34.98311],
                  [108.823244, 34.983],
                  [108.823973, 34.982806],
                  [108.824805, 34.982578],
                  [108.826505, 34.982125],
                  [108.827385, 34.981888],
                  [108.828211, 34.981672],
                  [108.828839, 34.981505],
                  [108.829627, 34.981303],
                  [108.829912, 34.98122],
                  [108.830496, 34.981083],
                  [108.831065, 34.980951],
                  [108.832052, 34.980754],
                  [108.832771, 34.980617],
                  [108.833779, 34.980455],
                  [108.834133, 34.980398],
                  [108.834697, 34.980327],
                  [108.835228, 34.980257],
                  [108.836134, 34.980173],
                  [108.836794, 34.980116],
                  [108.837588, 34.98005],
                  [108.838344, 34.979941],
                  [108.83901, 34.979866],
                  [108.839653, 34.97976],
                  [108.840399, 34.979628],
                  [108.841005, 34.979501],
                  [108.841558, 34.979378],
                  [108.842218, 34.979233],
                  [108.842566, 34.979141],
                  [108.843269, 34.978965],
                  [108.843891, 34.97878],
                  [108.844412, 34.978622],
                  [108.844632, 34.978547],
                  [108.845098, 34.97842],
                  [108.845774, 34.978244],
                  [108.846225, 34.978138],
                  [108.846783, 34.978024],
                  [108.847158, 34.977967],
                  [108.847421, 34.977914],
                  [108.848097, 34.977804],
                  [108.848934, 34.977673],
                  [108.849926, 34.977545],
                  [108.850709, 34.977448],
                  [108.851466, 34.977378],
                  [108.852748, 34.977255],
                  [108.853832, 34.977149],
                  [108.854561, 34.977075],
                  [108.855076, 34.976996],
                  [108.855436, 34.976943],
                  [108.855838, 34.976864],
                  [108.856203, 34.97678],
                  [108.856621, 34.976688],
                  [108.857104, 34.976538],
                  [108.857538, 34.976393],
                  [108.857978, 34.976231],
                  [108.858515, 34.976015],
                  [108.859148, 34.975708],
                  [108.859786, 34.975374],
                  [108.860226, 34.97511],
                  [108.860784, 34.974741],
                  [108.861079, 34.974538],
                  [108.86154, 34.974196],
                  [108.861894, 34.973954],
                  [108.862586, 34.97347],
                  [108.86293, 34.973251],
                  [108.863611, 34.972833],
                  [108.864378, 34.972433],
                  [108.864791, 34.972222],
                  [108.865108, 34.972077],
                  [108.865789, 34.971796],
                  [108.866272, 34.971607],
                  [108.866781, 34.9714],
                  [108.867361, 34.971154],
                  [108.867908, 34.970916],
                  [108.86831, 34.970714],
                  [108.869067, 34.97031],
                  [108.869453, 34.970064],
                  [108.87, 34.969677],
                  [108.870456, 34.969316],
                  [108.871078, 34.968762],
                  [108.871733, 34.968081],
                  [108.872253, 34.96747],
                  [108.872875, 34.966701],
                  [108.873154, 34.966371],
                  [108.873272, 34.966213],
                  [108.873621, 34.965778],
                  [108.873658, 34.965738],
                ],
              },
            ]
            AMapUI.loadUI(['misc/PathSimplifier'], function(PathSimplifier) {
              if (!PathSimplifier.supportCanvas) {
                alert('当前环境不支持 Canvas！')
                return
              }
              var pathSimplifierIns = new PathSimplifier({
                zIndex: 100,
                //autoSetFitView:false,
                map: o, //所属的地图实例
                getPath: function(pathData, pathIndex) {
                  return pathData.path
                },
                getHoverTitle: function(pathData, pathIndex, pointIndex) {
                  // if (pointIndex >= 0) {
                  //   return pathData.name
                  // }
                  return (
                    '<div style="color:red;font-weight:600;font-size:15px;">' +
                    pathData.name +
                    '</div>'
                  )
                },
                renderOptions: {
                  renderAllPointsIfNumberBelow: -1, //绘制路线节点，如不需要可设置为-1
                  pathLineStyle: {
                    dirArrowStyle: true,
                  },
                  getPathStyle: function(pathItem, zoom) {
                    let lineWidth = 6
                    let color = 'rgba(204,63,88,0.8)'
                    return {
                      pathLineStyle: {
                        strokeStyle: color,
                        lineWidth: lineWidth,
                      },
                      pathLineSelectedStyle: {
                        lineWidth: lineWidth + 1,
                      },
                      pathNavigatorStyle: {
                        fillStyle: color,
                      },
                    }
                  },
                },
              })

              window.pathSimplifierIns = pathSimplifierIns
              //设置数据
              pathSimplifierIns.setData(polylines)
              o.setZoom(11)
              // pathSimplifierIns.on('pointClick', function(e, info) {
              //   console.log(info.pathData);
              // });
            })
          })
        },
      },
      markerEvents: {
        click: (e) => {
          console.log(e)
          // console.log(router)
          let data = e.target.F ? e.target.F : e.target.w
          if (data.label.content.indexOf('分公司') > -1) {
            // this.$api.post(
            //   '/cycle/desktopData/getInfoByCompany',
            //   data.vid,
            //   null,
            //   (res) => {
            //     console.log(res)
            //   }
            // )
            document
              .getElementById('mkBox')
              .getElementsByClassName('baseTb')[0].style.display = 'none'
            document.getElementById('techLevel').style.display = 'none'
            document.getElementById('dailyCost').style.display = 'none'
            document.getElementById('yhCost').style.display = 'none'
            document
              .getElementById('mkBox')
              .getElementsByClassName('fgstb')[0].style.display = 'block'
            document.getElementById('fgsCost').style.display = 'block'
            let token = JSON.parse(sessionStorage.getItem('currentUser'))
              .TokenId
            let id = data.vid
            // 1.创建ajax对象(此处兼容性的创建)
            let xhr = new XMLHttpRequest()
            // 2.调用open方法（true----异步）
            xhr.open(
              'post',
              this.url + '/cycle/desktopData/getInfoByCompany',
              true
            )
            // 3.发送数据
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('TokenId', token)
            xhr.send(id)
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  let mkdt = JSON.parse(xhr.responseText)
                  document.getElementById('mkDialog').style.display = 'block'
                  console.log(mkdt)
                  if (!mkdt.COMPANY_INFO[0].M0018_SIMPLE_NAME)
                    mkdt.COMPANY_INFO[0].M0018_SIMPLE_NAME = ''
                  if (!mkdt.COMPANY_INFO[0].M0008_START_PILE)
                    mkdt.COMPANY_INFO[0].M0008_START_PILE = ''
                  if (!mkdt.COMPANY_INFO[0].M0008_END_PILE)
                    mkdt.COMPANY_INFO[0].M0008_END_PILE = ''
                  if (!mkdt.COMPANY_INFO[0].M0018_COMPANY_PRECI)
                    mkdt.COMPANY_INFO[0].M0018_COMPANY_PRECI = ''
                  if (!mkdt.COMPANY_INFO[0].M0018_COMPANY_LATI)
                    mkdt.COMPANY_INFO[0].M0018_COMPANY_LATI = ''
                  if (!mkdt.COMPANY_INFO[0].M0018_COMPANY_REMARK)
                    mkdt.COMPANY_INFO[0].M0018_COMPANY_REMARK = ''
                  if (mkdt.COMPANY_INFO[0].files.length > 0) {
                    document
                      .getElementsByClassName('fgstb')[0]
                      .getElementsByTagName('img')[0]
                      .setAttribute(
                        'src',
                        mkdt.COMPANY_INFO[0].files[0].FILE_URL
                      )
                  } else {
                    document
                      .getElementsByClassName('fgstb')[0]
                      .getElementsByTagName('img')[0]
                      .setAttribute('src', '')
                  }
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('mkTitle')[0].innerText =
                    mkdt.COMPANY_INFO[0].M0018_COMPANY_NAME
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('jc')[0].innerText =
                    mkdt.COMPANY_INFO[0].M0018_SIMPLE_NAME
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('fgszh')[0].innerText =
                    mkdt.COMPANY_INFO[0].M0008_START_PILE +
                    '~' +
                    mkdt.COMPANY_INFO[0].M0008_END_PILE
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('fgslg')[0].innerText =
                    mkdt.COMPANY_INFO[0].M0018_COMPANY_PRECI
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('fgslat')[0].innerText =
                    mkdt.COMPANY_INFO[0].M0018_COMPANY_LATI
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('remark')[0].innerText =
                    mkdt.COMPANY_INFO[0].M0018_COMPANY_REMARK
                  let trs = ''
                  // 铜旬分公司，日常费用盈余
                  mkdt.CURING_COST.forEach((element, index) => {
                    console.log(index)
                    sessionStorage.setItem('YEAR' + index + '', element.YEAR)
                    if (!element.INCOME_MONEY) element.INCOME_MONEY = 0
                    if (!element.TOCOME_MONEY) element.TOCOME_MONEY = 0
                    if (!element.YEAR) element.YEAR = ''
                    trs +=
                      '<tr><td>' +
                      (element.INCOME_MONEY - element.TOCOME_MONEY) +
                      '</td><td>' +
                      element.INCOME_MONEY +
                      '</td><td>' +
                      element.TOCOME_MONEY +
                      '</td><td>' +
                      element.YEAR +
                      '</td><td><button type="primary" class="el-button el-button--primary el-button--small fgsBtn">详细</button></td></tr>'
                  })
                  document
                    .getElementById('fgsCost')
                    .getElementsByTagName('tbody')[0].innerHTML = trs
                }
              }
              // console.log(document.getElementsByClassName('fgsBtn')[0])
              for (
                var i = 0;
                i < document.getElementsByClassName('fgsBtn').length;
                i++
              ) {
                ;(function(n) {
                  n = i
                  document.getElementsByClassName('fgsBtn')[
                    n
                  ].onclick = function() {
                    // router.push('/dailyCostList')
                    router.push({
                      path: '/dailyCostList',
                      query: {
                        YEAR: sessionStorage.getItem('YEAR' + n + ''),
                      },
                    })
                  }
                })(i)
              }
            }
          } else {
            document
              .getElementById('mkBox')
              .getElementsByClassName('baseTb')[0].style.display = 'block'
            document.getElementById('techLevel').style.display = 'block'
            document.getElementById('dailyCost').style.display = 'block'
            document.getElementById('yhCost').style.display = 'block'
            document
              .getElementById('mkBox')
              .getElementsByClassName('fgstb')[0].style.display = 'none'
            document.getElementById('fgsCost').style.display = 'none'
            // getInfoByCompany
            let token = JSON.parse(sessionStorage.getItem('currentUser'))
              .TokenId
            let id = data.vid
            // 1.创建ajax对象(此处兼容性的创建)
            let xhr = new XMLHttpRequest()
            // 2.调用open方法（true----异步）
            xhr.open(
              'post',
              this.url + '/cycle/desktopData/getInfoByAsset',
              true
            )
            // 3.发送数据
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.setRequestHeader('TokenId', token)
            xhr.send(id)
            // { M0018_ID: sessionStorage.getItem('id') },
            // 4.请求状态改变事件
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  let mkdt = JSON.parse(xhr.responseText)
                  console.log(mkdt)
                  var storage = window.sessionStorage
                  storage.setItem('assetsId', mkdt.ASSET_INFO[0].T0002_ID)
                  // console.log(document.getElementById('assetsId'))
                  // document.getElementById('assetsId').value =
                  //   mkdt.ASSET_INFO[0].T0002_ID

                  document.getElementById('mkDialog').style.display = 'block'
                  if (mkdt.ASSET_INFO.length === 0) mkdt.ASSET_INFO[0] = {}
                  if (mkdt.TECH_DATA.length === 0) mkdt.TECH_DATA[0] = {}
                  if (mkdt.CURING_COST.length === 0) mkdt.CURING_COST[0] = {}
                  if (mkdt.COST_BUDGET.length === 0) mkdt.COST_BUDGET[0] = {}
                  if (!mkdt.ASSET_INFO) mkdt.ASSET_INFO = []
                  if (!mkdt.ASSET_INFO[0].T0002_ASSET_NAME)
                    mkdt.ASSET_INFO[0].T0002_ASSET_NAME = ''
                  if (!mkdt.ASSET_INFO[0].T0002_START_PILE)
                    mkdt.ASSET_INFO[0].T0002_START_PILE = ''
                  if (!mkdt.ASSET_INFO[0].T0002_ASSET_DATE)
                    mkdt.ASSET_INFO[0].T0002_ASSET_DATE = ''
                  if (!mkdt.ASSET_INFO[0].T0002_LOAD_NAME)
                    mkdt.ASSET_INFO[0].T0002_LOAD_NAME = ''
                  if (!mkdt.ASSET_INFO[0].T0002_CURING_UNIT)
                    mkdt.ASSET_INFO[0].T0002_CURING_UNIT = ''
                  if (!mkdt.ASSET_INFO[0].T0002_DUTY_PERSON)
                    mkdt.ASSET_INFO[0].T0002_DUTY_PERSON = ''
                  if (!mkdt.ASSET_INFO[0].T0002_TOUCH_TEL)
                    mkdt.ASSET_INFO[0].T0002_TOUCH_TEL = ''
                  if (!mkdt.ASSET_INFO[0].T0002_ASSET_REAMRK)
                    mkdt.ASSET_INFO[0].T0002_ASSET_REAMRK = ''
                  if (!mkdt.TECH_DATA[0].T0006_TECHTYPE_NAME)
                    mkdt.TECH_DATA[0].T0006_TECHTYPE_NAME = ''
                  if (!mkdt.TECH_DATA[0].T0003_CHECK_UNIT)
                    mkdt.TECH_DATA[0].T0003_CHECK_UNIT = ''
                  if (!mkdt.TECH_DATA[0].T0003_CHECK_TIME)
                    mkdt.TECH_DATA[0].T0003_CHECK_TIME = ''
                  if (mkdt.ASSET_INFO[0].files.length > 0) {
                    document
                      .getElementsByClassName('baseTb')[0]
                      .getElementsByTagName('img')[0]
                      .setAttribute('src', mkdt.ASSET_INFO[0].files[0].FILE_URL)
                  } else {
                    document
                      .getElementsByClassName('baseTb')[0]
                      .getElementsByTagName('img')[0]
                      .setAttribute('src', '')
                  }
                  // 日常费用表
                  mkdt.CURING_COST.forEach((v) => {
                    if (!v.INCOME_MONEY) {
                      v.INCOME_MONEY = 0
                    }
                    if (!v.TOCOME_MONEY) {
                      v.TOCOME_MONEY = 0
                    }
                    if (!v.YEAR) {
                      v.YEAR = ''
                    }
                    document
                      .getElementById('dailyCost')
                      .getElementsByClassName('day_cost')[0].innerHTML =
                      v.TOCOME_MONEY + v.INCOME_MONEY
                    document
                      .getElementById('dailyCost')
                      .getElementsByClassName('in_money')[0].innerHTML =
                      v.INCOME_MONEY
                    document
                      .getElementById('dailyCost')
                      .getElementsByClassName('out_money')[0].innerHTML =
                      v.TOCOME_MONEY
                    document
                      .getElementById('dailyCost')
                      .getElementsByClassName('day_year')[0].innerHTML = v.YEAR
                  })
                  // 养护费用表
                  mkdt.COST_BUDGET.forEach((v) => {
                    if (!v.SUM_MOENY) v.SUM_MOENY = 0
                    if (!v.YEAR) v.YEAR = ''
                    if (!v.RCYH) v.RCYH = 0
                    if (!v.XXBY) v.XXBY = 0
                    if (!v.ZXGC) v.ZXGC = 0
                    if (!v.DXGC) v.DXGC = 0
                    document
                      .getElementById('yhCost')
                      .getElementsByClassName('yh_cost')[0].innerHTML =
                      v.SUM_MOENY
                    document
                      .getElementById('yhCost')
                      .getElementsByClassName('yh_year')[0].innerHTML = v.YEAR
                    document
                      .getElementById('yhCost')
                      .getElementsByClassName('rc_detail')[0].innerHTML = v.RCYH
                    document
                      .getElementById('yhCost')
                      .getElementsByClassName('xx_detail')[0].innerHTML = v.XXBY
                    document
                      .getElementById('yhCost')
                      .getElementsByClassName('zx_detail')[0].innerHTML = v.ZXGC
                    document
                      .getElementById('yhCost')
                      .getElementsByClassName('dx_detail')[0].innerHTML = v.DXGC
                  })
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('mkTitle')[0].innerText =
                    mkdt.ASSET_INFO[0].T0002_ASSET_NAME
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('type')[0].innerText =
                    mkdt.ASSET_INFO[0].T0001_ASSETTYPE_NAME
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('seZh')[0].innerText =
                    mkdt.ASSET_INFO[0].T0002_START_PILE
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('year')[0].innerText =
                    mkdt.ASSET_INFO[0].T0002_ASSET_DATE
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('glgs')[0].innerText =
                    mkdt.ASSET_INFO[0].T0002_LOAD_NAME
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('ygdw')[0].innerText =
                    mkdt.ASSET_INFO[0].T0002_CURING_UNIT
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('zrr')[0].innerText =
                    mkdt.ASSET_INFO[0].T0002_DUTY_PERSON
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('phone')[0].innerText =
                    mkdt.ASSET_INFO[0].T0002_TOUCH_TEL
                  document
                    .getElementById('mkBox')
                    .getElementsByClassName('remark')[0].innerText =
                    mkdt.ASSET_INFO[0].T0002_ASSET_REAMRK
                  document
                    .getElementById('techLevel')
                    .getElementsByClassName('techlevel')[0].innerText =
                    mkdt.TECH_DATA[0].T0006_TECHTYPE_NAME
                  document
                    .getElementById('techLevel')
                    .getElementsByClassName('techcomp')[0].innerText =
                    mkdt.TECH_DATA[0].T0003_CHECK_UNIT
                  document
                    .getElementById('techLevel')
                    .getElementsByClassName('techtime')[0].innerText =
                    mkdt.TECH_DATA[0].T0003_CHECK_TIME
                  // if (mkdt.ASSET_INFO[0].files.length > 0) {
                  //   document.getElementsByClassName('baseTb')[0].getElementsByTagName('img')[0].setAttribute('src', mkdt.ASSET_INFO[0].files[0].FILE_URL)
                  // } else {
                  //   document.getElementsByClassName('baseTb')[0].getElementsByTagName('img')[0].setAttribute('src', '')
                  // }
                } else {
                  alert('错误' + xhr.status)
                }
              }
            }
          }
        },
      },
      condition: {
        T0001_ID: '',
        START_PILE: '',
        END_PILE: '',
        YEAR: '',
        M0018_ID: '',
      },
      searchMap: {
        M0018_ID: '',
      },
    }
  },
  mounted() {
    this.chartMap = true
    this.assAmap = true
    this.loadMarkers()
    this.loadSelect()
    this.loadTableData()
    this.getState()
  },
  methods: {
    // 获取增删改查按钮状态
    getState() {
      // let _data = {
      //   M0018_ID: sessionStorage.getItem('id'),
      //   M0004_ID: this.$route.query.ID,
      // }
      // console.log(_data)
      // this.$api.post(
      //   '/cycle/roleGroupManagement/getAuthByMenuId?M0004_ID=' +
      //     this.$route.query.ID,
      //   { M0018_ID: sessionStorage.getItem('id') },
      //   null,
      //   (res) => {
      //     console.log(res)
      //     res.data.forEach((v) => {
      //       if (
      //         v.M0004_NAME === '查询' &&
      //         (v.M0005_STATE === '1' || v.M0005_STATE === 1)
      //       ) {
      //         this.isChaxun = false
      //       }
      //     })
      //   }
      // )
    },
    // 重置
    reset() {
      this.condition = {}
      this.loadSelect()
      this.loadMarkers()
    },
    // 关闭弹框
    closeDialog() {
      this.fgsShow = false
    },
    loadMarkers() {
      // let token = JSON.parse(sessionStorage.getItem('currentUser')).TokenId
      this.$api.post(
        '/cycle/desktopData/getListAll',
        { M0018_ID: sessionStorage.getItem('id') },
        null,
        (r) => {
          // console.log(r)
          let marks = []
          r.ASSET_List.forEach(function(item, index) {
            // console.log(item)
            if (item.T0002_ASSET_NAME.indexOf('加油站') > -1) {
              item.icon = require('../assets/addoil.png')
            } else if (
              item.T0002_ASSET_NAME.indexOf('桥') > -1 &&
              item.T0002_ASSET_NAME.indexOf('收费站') === -1
            ) {
              item.icon = require('../assets/bridge.png')
            } else if (item.T0002_ASSET_NAME.indexOf('互通立交') > -1) {
              item.icon = require('../assets/htlj.png')
            } else if (item.T0002_ASSET_NAME.indexOf('收费站') > -1) {
              item.icon = require('../assets/sfz.png')
            } else if (item.T0002_ASSET_NAME.indexOf('隧道') > -1) {
              item.icon = require('../assets/tenant.png')
            } else if (item.T0002_ASSET_NAME.indexOf('涵洞') > -1) {
              item.icon = require('../assets/tunnel.png')
            } else {
            }
            item.location = [item.T0002_ASSET_PRECI, item.T0002_ASSET_LATI]
            item.label = { content: item.T0002_ASSET_NAME, offset: [10, -20] }
            item.vid = item.T0002_ID
            marks.push(item)
          })
          r.COMPANY_List.forEach(function(item, index) {
            // console.log(item)
            item.icon = require('../assets/fgs.jpg')
            item.location = [item.M0018_COMPANY_PRECI, item.M0018_COMPANY_LATI]
            item.label = { content: item.M0018_SIMPLE_NAME, offset: [10, -20] }
            item.vid = item.M0018_ID
            item.T0002_ASSET_NAME = item.M0018_SIMPLE_NAME
            marks.push(item)
          })
          this.astMarkers = marks
        }
      )
    },
    toBaseData() {
      this.$bus.$emit('changeActMenu', '/metersPile')
      this.$router.push('/metersPileList')
    },
    toAssets() {
      this.$bus.$emit('changeActMenu', '/Assets')
      this.$router.push('/AssetsList')
    },
    toTech() {
      this.$bus.$emit('changeActMenu', '/techGrade')
      // this.$router.push('/techGradeList')
      this.$router.push({
        path: '/techGradeList',
        query: {
          // T0002_ID: this.$refs.assetsId.value
          T0002_ID: sessionStorage.getItem('assetsId'),
        },
      })
    },
    toDayliCost() {
      this.$bus.$emit('changeActMenu', '/dailyCost')
      this.$router.push('/dailyCostList')
    },
    toConsCost() {
      this.$bus.$emit('changeActMenu', '/yhCostList')
      this.$router.push('/yhCostList')
    },
    // 位置信息
    openDialog(data) {
      this.locationDialog = true
      this.locMcenter = [data.location[0], data.location[1]]
      this.loclCenter = [data.location[0], data.location[1]]
      this.loclabel = {
        content:
          '<div style="background:red;color:#fff;padding:3px;letter-spacing:2px;">' +
          data.name +
          '</div>',
        offset: [-20, -22],
      }
      // this.mapData.title = []
      // this.mapShow = true
      // this.mapData.position = [data.T0002_ASSET_PRECI, data.T0002_ASSET_LATI]
      // this.mapData.title.push(data.T0002_ASSET_NAME)
    },
    changeMarkers(name) {
      // console.log(this.condition)
      // let token = JSON.parse(sessionStorage.getItem('currentUser')).TokenId
      // this.condition.TokenId = token
      console.log(name)
      if (name) {
        if (name.indexOf('分公司') !== -1) {
          this.$api.post(
            '/cycle/desktopData/getListAll',
            { M0018_ID: sessionStorage.getItem('id') },
            null,
            (r) => {
              let marks = []
              r.COMPANY_List.forEach(function(item, index) {
                // console.log(item)
                item.icon = require('../assets/fgs.jpg')
                item.location = [
                  item.M0018_COMPANY_PRECI,
                  item.M0018_COMPANY_LATI,
                ]
                item.label = {
                  content: item.M0018_SIMPLE_NAME,
                  offset: [10, -20],
                }
                item.vid = item.M0018_ID
                item.T0002_ASSET_NAME = item.M0018_SIMPLE_NAME
                marks.push(item)
              })
              this.astMarkers = marks
            }
          )
        } else {
          if (name.indexOf('桥梁') !== -1) {
            this.condition.T0001_ID = '426497497934856110'
          } else if (name.indexOf('隧道') !== -1) {
            this.condition.T0001_ID = '426497497934856120'
          } else if (name.indexOf('涵洞') !== -1) {
            this.condition.T0001_ID = '426497497934856130'
          } else if (name.indexOf('立交') !== -1) {
            this.condition.T0001_ID = '426497497934856210'
          } else if (name.indexOf('收费站') !== -1) {
            this.condition.T0001_ID = '426497497934856140'
          } else {
            this.condition.T0001_ID = ''
          }
          this.condition.M0018_ID = sessionStorage.getItem('id')
          this.$api.post(
            '/cycle/desktopData/getListAll',
            this.condition,
            null,
            (r) => {
              console.log(r.ASSET_List)
              r.ASSET_List.forEach(function(item, index) {
                // console.log(item)
                // if (item.T0002_ASSET_NAME.indexOf('加油站') > -1) {
                //   item.icon = require('../assets/addoil.png')
                // } else if (item.T0002_ASSET_NAME.indexOf('桥') > -1) {
                //   item.icon = require('../assets/bridge.png')
                // } else if (item.T0002_ASSET_NAME.indexOf('互通立交') > -1) {
                //   item.icon = require('../assets/htlj.png')
                // } else if (item.T0002_ASSET_NAME.indexOf('收费站') > -1) {
                //   item.icon = require('../assets/sfz.png')
                // } else if (item.T0002_ASSET_NAME.indexOf('隧道') > -1) {
                //   item.icon = require('../assets/tenant.png')
                // } else if (item.T0002_ASSET_NAME.indexOf('涵洞') > -1) {
                //   item.icon = require('../assets/tunnel.png')
                // } else {
                // }
                if (item.T0001_ASSETTYPE_NAME == '加油站') {
                  item.icon = require('../assets/addoil.png')
                } else if (item.T0001_ASSETTYPE_NAME == '桥梁') {
                  item.icon = require('../assets/bridge.png')
                } else if (item.T0001_ASSETTYPE_NAME == '互通立交') {
                  item.icon = require('../assets/htlj.png')
                } else if (item.T0001_ASSETTYPE_NAME == '收费站') {
                  item.icon = require('../assets/sfz.png')
                } else if (item.T0001_ASSETTYPE_NAME == '隧道') {
                  item.icon = require('../assets/tenant.png')
                } else if (item.T0001_ASSETTYPE_NAME == '涵洞') {
                  item.icon = require('../assets/tunnel.png')
                } else {
                }
                item.location = [item.T0002_ASSET_PRECI, item.T0002_ASSET_LATI]
                item.label = {
                  content: item.T0002_ASSET_NAME,
                  offset: [10, -20],
                }
              })
              this.astMarkers = r.ASSET_List
            }
          )
        }
      }
    },
    closeMk() {
      document.getElementById('mkDialog').style.display = 'none'
    },
    imgDialog(img, row, type) {
      if (img) {
        this.portDialog = true
        this.imgUrl = img
        if (type === '1') {
          this.portName = row.name + '--技术等级--报告查看'
        } else if (type === '2') {
          this.portName = row.name + '--日常费用--票据查看'
        } else {
          this.portName = row.name + '--养护费用--票据查看'
        }
      } else {
        Message({
          showClose: true,
          message: '无票据报告信息!!!',
          type: 'warning',
        })
      }
    },
    closeLoclDialog() {
      this.locationDialog = false
      this.loclZoom = 10
      this.loclCenter = [108.860159, 34.978]
      this.loclicon = ''
      this.locMcenter = [108.860159, 34.978]
      this.loclabel = {
        content: '',
        offset: [10, -20],
      }
    },
    closeImgDialog() {
      this.portDialog = false
      this.imgUrl = ''
    },
    loadSelect() {
      // let token = JSON.parse(sessionStorage.getItem('currentUser')).TokenId
      this.$api.post(
        '/cycle/assetData/listAll',
        { M0018_ID: sessionStorage.getItem('id') },
        null,
        (r) => {
          let arr1 = []
          let arr2 = []
          r.data.forEach((item, index) => {
            if (arr1.indexOf(item.T0002_START_PILE) < 0)
              arr1.push(item.T0002_START_PILE)
            if (arr2.indexOf(item.T0002_END_PILE) < 0)
              arr2.push(item.T0002_END_PILE)
          })
          this.startzhArr = arr1
          this.endzhArr = arr2
        }
      )
      this.$api.post(
        '/cycle/assetType/listAll',
        { M0018_ID: sessionStorage.getItem('id') },
        null,
        (r) => {
          console.log(r)
          this.zctypeArr = r.data
          r.data.forEach((item, index) => {
            if (item.T0001_PID !== '0') {
              item.T0001_ASSETTYPE_NAME = '-- ' + item.T0001_ASSETTYPE_NAME
            }
          })
        }
      )
    },
    loadTableData() {
      // let token = JSON.parse(sessionStorage.getItem('currentUser')).TokenId
      // console.log(token)
      this.searchMap.M0018_ID = sessionStorage.getItem('id')
      this.$api.post(
        '/cycle/assetData/listPage',
        { searchMap: this.searchMap },
        null,
        (r) => {
          r.data.returnParam.forEach((item, index) => {
            // if (item.T0002_ASSET_NAME.indexOf('加油站') > -1) {
            //   item.pic = require('../assets/addoil.png')
            // } else if (item.T0002_ASSET_NAME.indexOf('桥') > -1) {
            //   item.pic = require('../assets/bridge.png')
            // } else if (item.T0002_ASSET_NAME.indexOf('互通立交') > -1) {
            //   item.pic = require('../assets/htlj.png')
            // } else if (item.T0002_ASSET_NAME.indexOf('收费站') > -1) {
            //   item.pic = require('../assets/sfz.png')
            // } else if (item.T0002_ASSET_NAME.indexOf('隧道') > -1) {
            //   item.pic = require('../assets/tenant.png')
            // } else if (item.T0002_ASSET_NAME.indexOf('涵洞') > -1) {
            // item.pic = item.files[0].FILE_URL
            // } else {

            // }
            if (!item.T0002_START_PILE) item.T0002_START_PILE = ''
            if (!item.T0002_ASSET_NAME) item.T0002_ASSET_NAME = ''
            if (!item.T0002_ASSET_AMOUNT) item.T0002_ASSET_AMOUNT = ''
            if (!item.T0002_ASSET_DATE) item.T0002_ASSET_DATE = ''
            if (!item.T0002_ASSET_PRECI) item.T0002_ASSET_PRECI = ''
            if (!item.T0002_ASSET_LATI) item.T0002_ASSET_LATI = ''
            if (item.files.length > 0) {
              item.pic = item.files[0].FILE_URL
              this.srcList.push(item.pic)
            } else {
              item.pic = ''
            }
            item.zh = item.T0002_START_PILE
            item.name = item.T0002_ASSET_NAME
            item.num = item.T0002_ASSET_AMOUNT
            item.year = item.T0002_ASSET_DATE
            item.location = [item.T0002_ASSET_PRECI, item.T0002_ASSET_LATI]
          })
          this.zcTable = r.data.returnParam.slice(0, 5)
        }
      )
      this.$api.post(
        '/cycle/techData/listPage',
        { searchMap: this.searchMap },
        null,
        (r) => {
          // console.log(r)
          r.data.returnParam.forEach((item, index) => {
            if (!item.T0002_ASSET_NAME) item.T0002_ASSET_NAME = ''
            if (!item.T0006_TECHTYPE_NAME) item.T0006_TECHTYPE_NAME = ''
            if (!item.T0003_CHECK_TIME) item.T0003_CHECK_TIME = ''
            // item.report = require('../assets/logo.png')
            item.name = item.T0002_ASSET_NAME
            item.tech = item.T0006_TECHTYPE_NAME
            item.date = item.T0003_CHECK_TIME
            item.year = item.T0003_CHECK_TIME.split('-')[0]
            if (item.files.length > 0) {
              item.report = item.files[0].FILE_URL
            } else {
              item.report = ''
            }
          })
          this.techTable = r.data.returnParam.slice(0, 5)
        }
      )
      this.$api.post(
        '/cycle/curingCost/listPage',
        { searchMap: this.searchMap },
        null,
        (r) => {
          // console.log(r)
          r.data.returnParam.forEach((item, index) => {
            if (!item.T0002_ASSET_NAME) item.T0002_ASSET_NAME = ''
            if (!item.T0006_TECHTYPE_NAME) item.T0006_TECHTYPE_NAME = ''
            if (!item.T0004_CURINGCOST_MONEY)
              item.T0004_CURINGCOST_MONEY = '0.00'
            if (!item.T0003_CHECK_TIME) item.T0003_CHECK_TIME = ''
            item.name = item.T0002_ASSET_NAME
            if (item.T0004_CURINGCOST_TYPE === 1) {
              item.income = item.T0004_CURINGCOST_MONEY
              item.expenditure = '--'
            } else {
              item.income = '--'
              item.expenditure = item.T0004_CURINGCOST_MONEY
            }
            item.date = item.T0004_CURINGCOST_TIME
            // item.bill = require('')
            if (item.files.length > 0) {
              item.bill = item.files[0].FILE_URL
            } else {
              item.bill = ''
            }
          })
          this.dayliTable = r.data.returnParam.slice(0, 5)
        }
      )
      this.$api.post(
        '/cycle/costBudget/listPage',
        { searchMap: this.searchMap },
        null,
        (r) => {
          // console.log(r)
          r.data.returnParam.forEach((item, index) => {
            if (!item.T0002_ASSET_NAME) item.T0002_ASSET_NAME = ''
            if (!item.T0001_ASSETTYPE_NAME) item.T0001_ASSETTYPE_NAME = ''
            if (!item.T0005_COSTBUDGET_MONEY)
              item.T0005_COSTBUDGET_MONEY = '0.00'
            if (!item.T0003_CHECK_TIME) item.T0003_CHECK_TIME = ''
            item.name = item.T0002_ASSET_NAME
            item.cost = item.T0005_COSTBUDGET_MONEY
            switch (item.T0005_ENGIN_MAINT) {
              case 1:
                item.engineering = '日常养护'
                break
              case 2:
                item.engineering = '小修保养'
                break
              case 3:
                item.engineering = '中修工程'
                break
              case 4:
                item.engineering = '大修工程'
                break
            }
            item.date = item.T0005_COSTBUDGET_TIME
            // item.bill = require('../assets/logo.png')
            if (item.files.length > 0) {
              item.bill = item.files[0].FILE_URL
            } else {
              item.bill = ''
            }
          })
          this.conservTable = r.data.returnParam.slice(0, 5)
        }
      )
    },
  },
}
</script>
<style lang="scss">
.el-icon-circle-close {
  color: #fff;
}
.amap-marker-label {
  padding: 0;
  border: none;
}
#workBanck {
  position: relative;
  .el-dialog__header {
    background: #f5f5f5;
  }
  .remark {
    text-indent: 2rem;
    margin: 20px auto;
    font-size: 14px;
    line-height: 26px;
    width: 94%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  // .el-dialog__title{color:#FFF;}
  // .el-dialog__headerbtn .el-dialog__close{color: #fff;}
  .el-select-dropdown__wrap {
    margin-bottom: 0 !important;
  }
  .el-scrollbar__wrap {
    margin-bottom: 0 !important;
  }
  .el-main {
    background: #fff;
    margin: 15px 10px;
  }
  .assetsWrap .el-main {
    height: 400px;
  }
  .assetsWrap .el-table .cell {
    line-height: 29px;
  }
  .assetsWrap .el-table th,
  .assetsWrap .el-table td {
    padding: 8px 0;
  }
  @media screen and (max-width: 1500px) {
    .assetsWrap .el-main {
      height: 382px;
    }
    .assetsWrap .el-main {
      margin: 15px 5px;
      padding: 10px;
    }
    .assetsWrap .el-table th,
    .assetsWrap .el-table td {
      font-size: 12px;
    }
    .assetsWrap .el-table td .el-button {
      padding: 5px;
    }
  }
  #topItems .el-col-4 {
    width: 20%;
  }
  .topItem {
    width: 100%;
    height: 80px;
    background: #bbb;
    color: #fff;
    line-height: 80px;
    cursor: pointer;
  }
  .topItem .ttile {
    width: 60%;
    text-align: left;
    font-size: 18px;
    float: left;
  }
  @media screen and (max-width: 1500px) {
    .topItem .ttile {
      width: 60%;
      text-align: left;
      font-size: 14px;
      float: left;
    }
    .mapSercLabel {
      font-size: 14px;
    }
  }
  .topItem .ticon {
    width: 40%;
    text-align: center;
    height: 80px;
    float: left;
  }
  .more {
    float: right;
  }
  .itemTh {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
  }
  .el-icon-location {
    font-size: 20px;
    color: red;
    cursor: pointer;
  }
  .dTech {
    background: red;
    color: #fff;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: inline-block;
    line-height: 20px;
  }
  .amap-wrapper {
    height: 500px;
  }
  #assetsMap {
    position: relative;
  }
  #assetsMap #astList {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    text-align: center;
    background: #fff;
    border-right: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    border-collapse: collapse;
    height: 213px;
    overflow-y: auto;
    min-width: 100px;
  }
  #assetsMap #astList::-webkit-scrollbar {
    width: 5px;
  }
  #assetsMap #astList::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  #assetsMap #astList::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  #assetsMap #astList tr {
    cursor: pointer;
  }
  #assetsMap #astList td,
  #assetsMap #astList th {
    text-align: center;
    border-left: 1px solid #bbb;
    font-size: 14px;
    vertical-align: middle;
    border-top: 1px solid #bbb;
    padding: 3px 10px;
  }
  #assetsMap #astList td img {
    height: 20px;
  }
  #mkDialog {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    transition: all 1s;
    display: none;
  }
  #mkDialog #mkBox {
    width: 620px;
    background: #fff;
    position: absolute;
    left: 25%;
    top: 80px;
    box-shadow: 0 0 5px #bbb;
    // padding:0 8px;
  }
  .baseTb,
  .fgstb {
    padding: 0 15px;
  }
  @media screen and (max-width: 1500px) {
    #mkDialog #mkBox {
      width: 58%;
      left: 10%;
    }
  }
  #mkDialog #mkBox .close {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
  #mkDialog #mkBox table {
    width: 100%;
  }
  #mkDialog #mkBox table td.left {
    text-align: left;
  }
  #mkDialog #mkBox table td.right {
    text-align: right;
    min-width: 100px;
  }
  #mkDialog #mkBox table td.imgWrap {
    width: 55%;
    text-align: center;
  }
  #mkDialog #mkBox .baseTb td.imgWrap img {
    height: 170px;
    width: 80%;
  }
  #mkDialog #mkBox .fgstb td.imgWrap img {
    height: 100px;
    width: 80%;
  }
  #mkDialog #mkBox .bdtable {
    width: 584px;
    border-top: 1px solid #bbb;
    border-left: 1px solid #bbb;
    border-collapse: collapse;
    margin: 0 auto 20px auto;
  }
  #mkDialog #mkBox .bdtable th,
  #mkDialog #mkBox .bdtable td {
    text-align: center;
    border-right: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    padding: 5px 8px;
    font-size: 14px;
  }
  table thead th {
    background: #f5f5f5;
  }
  #techLevel th,
  #techLevel td {
    min-width: 146px;
  }
  #dailyCost th,
  #dailyCost td {
    min-width: 113px;
  }
  #yhCost th,
  #yhCost td {
    min-width: 100px;
  }
  #fgsCost th,
  #fgsCost td {
    min-width: 106px;
  }
  .el-table .cell {
    text-overflow: clip !important;
  }
}
</style>
