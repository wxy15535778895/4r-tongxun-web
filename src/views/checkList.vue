<template>
  <div class="assets-wrap">
    <p class="title-p">
      <span style="display:inline-block;margin-bottom:20px;">>> 检查单列表</span>
    </p>
    <div class="content">
      <div class="div-btn">
        <el-button type="primary" icon="el-icon-delete" @click="delListFun" size="small">批量删除</el-button>
        <el-button
          type="primary"
          style="float:right;margin-right:20px;"
          @click="goBack"
          size="small"
        >返回</el-button>
        <el-button type="primary" style="float:right;" @click="addList" size="small">新增列表</el-button>
      </div>
      <div class="table-div">
        <el-table
          :model="checkListForm"
          :data="tableData"
          border
          style="width: 100%"
          highlight-current-row
          @select="selectTable"
          @select-all="selectAll"
          :header-cell-style="{ background: '#f0f0f0' }"
        >
          >
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="序号" width="50" align="center">
            <template scope="scope">
              <span>{{ scope.$index + 1 }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="M0020_NUMBER" label="检查单编号" show-overflow-tooltip min-width="70"></el-table-column>
          <el-table-column label="桥梁名称" show-overflow-tooltip min-width="70">
            <template scope="scope">
              <span @click="qlList(scope.row)">{{ scope.row.T0002_ASSET_NAME }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="M0020_CODE" label="桥梁编码" min-width="70"></el-table-column>
          <el-table-column prop="M0020_CHARGE_PERSON" label="养护负责人" min-width="70"></el-table-column>
          <el-table-column prop="M0020_RECORD_PERSON" label="记录人" min-width="70"></el-table-column>
          <el-table-column prop="M0020_RECORD_PERSON" label="检查结果" min-width="70">
            <template>
              <el-button type="primary" size="small" round>完好</el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="M0020_CHECK_DATE"
            label="最新检查日期"
            min-width="70"
            :formatter="setTime"
          ></el-table-column>
          <el-table-column fixed="right" width="150" label="操作">
            <template slot-scope="scope">
              <el-button type="info" size="mini" @click="qlList(scope.row)">查看</el-button>
              <el-button type="primary" size="mini" @click="selectChakan(scope.row)">编辑</el-button>
              <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="table-page"
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-sizes="[10, 50, 100]"
          :page-size="showCount"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
      <div class="content">
        <table class="table-title add-table" style="color:#999">
          <tr>
            <td colspan="2" style="text-align:center;background: #f0f0f0;font-size:16px">小贴士</td>
          </tr>
          <tr>
            <td class="title-info">收费站等级</td>
            <td>各收费站按星级标准区分：一星级收费站、二星级收费站、三星级收费站、四星级收费站、五星级收费站。</td>
          </tr>
          <tr>
            <td class="title-info">桥梁技术等级</td>
            <td>
              <p style="line-height:30px">桥梁技术状况等级分为五类，分别为一类、二类、三类、四类、五类。</p>
              <p
                style="line-height:30px"
              >（1）一类桥梁为全新状态，功能完善。（2）二类桥梁为有轻微缺损，对桥梁使用功能无影响。（3）三类桥梁为有中等缺损，尚能维持正常使用功能。（4）四类桥梁为主要构件有大的缺损，严重影响桥梁使用功能，或影响承载能力，不能保证正常使用。（5）五类桥梁为主要构件存在严重缺损，不能正常使用，危及桥梁安全，桥梁处于危险状态。</p>
            </td>
          </tr>
          <tr>
            <td class="title-info">隧道技术等级</td>
            <td>隧道工程专业承包企业资质等级标准，是隧道工程专业承包企业资质分为一级、二级、三级。</td>
          </tr>
          <tr>
            <td class="title-info">涵洞技术等级</td>
            <td>好、较好、较差、差、危险五类。</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 编辑 -->
    <el-dialog title=">> 编辑列表" :visible.sync="infoShow" custom-class="dialog-div">
      <div style="height:300px">
        <el-form :label-position="labelPosition" label-width="25%" :model="infoForm">
          <el-form-item label="检查单编号:">
            <el-input v-model="infoForm.M0020_NUMBER"></el-input>
          </el-form-item>
          <el-form-item label="桥梁名称:">
            <el-input v-model="infoForm.T0002_ASSET_NAME"></el-input>
          </el-form-item>
          <el-form-item label="桥梁编码:">
            <el-input v-model="infoForm.M0020_CODE"></el-input>
          </el-form-item>
          <el-form-item label="养护负责人:">
            <el-input v-model="infoForm.M0020_CHARGE_PERSON"></el-input>
          </el-form-item>
          <el-form-item label="记录人:">
            <el-input v-model="infoForm.M0020_RECORD_PERSON"></el-input>
          </el-form-item>
          <el-form-item label="检查日期:">
            <el-date-picker
              style="width:100%"
              v-model="infoForm.M0020_CHECK_DATE"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="infoShow = false">取 消</el-button>
        <el-button type="primary" @click="edit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      labelPosition: "right",
      checkListForm: {
        id: "",
        M0020_NUMBER: "",
        T0002_ASSET_NAME: "",
        M0020_CODE: "",
        M0020_CHARGE_PERSON: "",
        M0020_RECORD_PERSON: "",
        M0020_CHECK_DATE: "",
      },
      infoForm: {},
      tableData: [],
      showCount: 10,
      currentPage: 1,
      total: 0,
      isSearch: false, // 是否搜索
      searchVal: "", // 显示搜索内容
      infoShow: false,
      selectList: [],
      T0002_ID: "425009560642650112",
      id: "",
    };
  },
  methods: {
    //处理日期格式
    setTime: function (row, column) {
      // console.log(row)
      var newdate = row.M0020_CHECK_DATE;
      if (newdate == undefined) {
        return;
      }
      return moment(newdate).format("YYYY-MM-DD HH:mm:ss");
    },
    // 分页
    sizeChange(val) {
      this.showCount = val;
      this.checkTypeList();
    },
    currentChange(val) {
      this.currentPage = val;
      this.checkTypeList();
    },
    selectTable(selection) {
      this.selectList = selection;
    },
    selectAll(selection) {
      this.selectList = selection;
    },
    // 搜索
    searchFun() {
      this.isSearch = true;
      this.checkTypeList();
    },

    // 点击新增跳转
    addList() {
      console.log(this.id);
      this.$router.push({
        path: "/checkDetails",
        query: {
          id: this.id,
          id2: "0",
        },
      });
    },
    qlList(row) {
      console.log(row);
      this.$router.push({
        path: "/checkDetails",
        query: {
          id: this.id,
          id1: row.M0020_ID,
          id2: "1",
          time: row.M0020_CHECK_DATE.substring(0, 7),
        },
      });
    },
    //返回
    goBack() {
      this.$router.push({
        path: "/bridgeList",
      });
    },
    // 分页列表
    checkTypeList() {
      let _data = {
        currentPage: this.currentPage,
        showCount: this.showCount,
        searchMap: {
          T0002_ID: this.id,
          M0018_ID: sessionStorage.getItem("id"),
        },
      };
      this.$api.post("/cycle/checkData/listPage", _data, null, (r) => {
        console.log(r);
        this.tableData = r.data.returnParam;
        let Arrtime = [];
        this.tableData.forEach((element) => {
          element.M0020_CHECK_DATE = element.M0020_CHECK_DATE.substring(0, 7);
          Arrtime.push(element.M0020_CHECK_DATE);
        });
        sessionStorage.setItem("time", Arrtime);
        this.total = r.data.totalResult;
        this.searchVal = r.search_val;
      });
    },
    // 查看列表
    selectChakan(row) {
      this.infoShow = true;
      this.$api.post(
        "/cycle/checkData/goAddPage",
        {
          T0002_ID: row.T0002_ID,
          M0020_ID: row.M0020_ID,
        },
        null,
        (r) => {
          console.log(r);
          this.infoForm = Object.assign(
            r.data.assetData[0],
            r.data.checkData[0]
          );
        }
      );
    },
    //编辑
    handleEdit() {
      this.infoShow = true;
    },
    edit() {
      this.$api.post(`/cycle/checkData/update`, this.infoForm, null, (r) => {
        this.$message.success("修改成功");
        this.infoShow = false;
        this.checkTypeList();
      });
    },
    //删除
    handleDelete(data) {
      this.$confirm("确定要删除该条记录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$api.post(
          `/cycle/checkData/deleteById?ID=${data.M0020_ID}`,
          {},
          null,
          (r) => {
            if (this.tableData.length <= 1) {
              this.currentPage = this.currentPage - 1;
            }
            this.$message.success("删除成功");
            this.checkTypeList();
          }
        );
      });
    },
    // 批量删除
    delListFun() {
      let _list = [];
      if (this.selectList.length > 0) {
        for (let i = 0; i < this.selectList.length; i++) {
          _list.push(this.selectList[i].M0020_ID);
        }
        this.$confirm("确定要删除这些记录?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          this.$api.post(
            `/cycle/checkData/deleteByIds?IDS=${_list}`,
            {},
            null,
            (r) => {
              if ((this.tableData.length = this.selectList.length)) {
                this.currentPage = this.currentPage - 1;
              }
              this.$message.success("删除成功");
              this.checkTypeList();
              this.selectList = [];
            }
          );
        });
      } else {
        this.$message.warning("请选择要删除的数据！");
      }
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.checkTypeList();
    console.log(this.id);
  },
};
</script>


<style scoped>
.dialog-div .el-form-item {
  width: 40%;
  float: left;
  margin-right: 3%;
  margin-left: 3%;
  margin-top: 4%;
}
</style>