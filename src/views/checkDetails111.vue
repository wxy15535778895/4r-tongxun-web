
<template>
  <div class="assets-wrap">
    <tr class="title-p">
      <span style="display:inline-block;margin-bottom:20px;padding-right:675px;">>> 检查单详情</span>
      <td>
        <el-button type="primary" size="small" round>十二月</el-button>
        <el-button type="primary" size="small" round>十一月</el-button>
        <el-button type="primary" size="small" round>十月</el-button>
        <el-button type="primary" size="small" round>九月</el-button>
        <el-button type="primary" size="small" round>八月</el-button>
        <el-button type="primary" size="small" round>七月</el-button>
        <el-button type="primary" size="small" round>六月</el-button>
        <el-button type="primary" size="small" round>五月</el-button>
        <el-button type="primary" size="small" round>四月</el-button>
        <el-button type="primary" size="small" round>三月</el-button>
        <el-button type="primary" size="small" round>二月</el-button>
        <el-button type="primary" size="small" round>一月</el-button>
      </td>
      <!-- <el-button type="primary">打印</el-button> -->
    </tr>
    <!-- 内容展示 -->
    <!-- <el-form ref="addFormRef" :visible.sync="dialogFormVisible" v-if="addForm1.M0019_PART"> -->

    <h1 style="text-align:center;margin-bottom:20px;font-size:30px;">桥梁经常检查记录表</h1>
    <div style="margin-bottom:20px;">
      <tr>
        <td>检查单编号：</td>
        <td style="padding-right:20px;">
          <el-input type="text" v-model="addForm2.M0020_NUMBER"></el-input>
        </td>
        <td>
          <el-button type="primary" @click="backList()">返回</el-button>
          <el-button type="primary" @click="addSave('addFormRef')">保存</el-button>
          <el-button type="primary" @click="addSave('addFormRef')">打印</el-button>
        </td>
      </tr>
    </div>
    <div class="content">
      <el-form :inline="true" :model="addForm" class="demo-form-inline">
        <el-form-item label="路线编码">
          <el-input v-model="addForm.Lxcode" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="路线名称">
          <el-input v-model="addForm.uT0002_LOAD_NAMEser" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="桥位桩号">
          <el-input v-model="addForm.T0002_START_PILE" placeholder="审批人"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="addForm" class="demo-form-inline">
        <el-form-item label="桥梁编码">
          <el-input v-model="addForm.Qlcode" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="桥梁名称">
          <el-input v-model="addForm.T0002_ASSET_NAME" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="养护单位">
          <el-input v-model="addForm.T0002_CURING_UNIT" placeholder="审批人"></el-input>
        </el-form-item>
      </el-form>
      <tr>
        <td class="bg-td">序号</td>
        <td class="bg-td">部位</td>
        <td class="bg-td">部件名称</td>
        <td class="bg-td">部件权重</td>
        <td class="bg-td">新部件权重</td>
        <td class="bg-td">部件得分</td>
        <td class="bg-td">部位得分</td>
        <td class="bg-td">部位等级</td>
        <td class="bg-td">评定等级</td>
        <td class="bg-td">结构权重</td>
        <td class="bg-td">缺损内容</td>
        <td class="bg-td">总体技术状况评分</td>
        <td class="bg-td">技术状况等级评定</td>
        <td class="bg-td">保养措施及意见</td>
        <td class="bg-td">附件</td>
      </tr>
      <tr v-for="(item,index) in addForm1" :key="index">
        <td>{{index+1}}</td>
        <td rowspan>{{ item.M0019_PART }}</td>
        <td>{{ item.M0019_PART_NAME }}</td>
        <td>{{ item.M0019_PART_WEIGHT }}</td>
        <td>
          <!-- <el-form-item> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="item.M0021_RESET_PART_WEIGHT"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td>
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="item.M0021_PARTS_SCORE"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td>
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="item.M0021_POSITION_SCORE"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td>{{ item.M0019_PART_TECH }}</td>
        <td>
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="item.M0021_SCORE_TECH"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td>
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="item.M0021_ORGAN_WEIGHT"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td>
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="item.M0021_DEFECT_CONTENT"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td>
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="item.M0021_TOTAL_SCORE"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td>{{ item.T0006_TECHTYPE_NAME }}</td>
        <td>
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="item.M0021_KEEP_IDEA"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td>{{ item.Bujian11 }}</td>
      </tr>
      <tr>
        <td colspan="3" class="bg-td">养护负责人</td>
        <td colspan="2">
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="addForm2.M0020_CHARGE_PERSON"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td colspan="2" class="bg-td">记录人</td>
        <td colspan="2">
          <!-- <el-form-item prop> -->
          <el-input
            size="small"
            maxlength="50"
            v-model="addForm2.M0020_RECORD_PERSON"
            style="width:96%;text-indent:5px;"
          ></el-input>
          <!-- </el-form-item> -->
        </td>
        <td colspan="3" class="bg-td">最新检查日期</td>
        <td colspan="3">
          <el-date-picker v-model="addForm2.M0020_CHECK_DATE" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </td>
      </tr>
      <!-- </el-form> -->

      <table class="table-title add-table" style="color:#999">
        <tr>
          <td colspan="2" style="background: #f0f0f0;font-size:16px">检查结果说明：</td>
        </tr>
        <tr>
          <td class="title-info">上部结构</td>
          <td>本桥上部结构为钢筋混凝土板拱，现场检查主拱圈、腹拱圈均受水侵蚀、出现裂缝病害；拱上侧墙出现竖向开裂，滲水。病害详情请看附件图！</td>
        </tr>
        <tr>
          <td class="title-info">下部结构</td>
          <td>
            <p
              style="line-height:30px"
            >本桥下部结构为浆砌片石台身，扩大基础。本次现场检查台身存在渗水病害，砌体表面劣化，台背填料深陷，导致侧墙外侵，桥面开裂。病害详情请看附件图！</p>
            <p
              style="line-height:30px"
            >（1）一类桥梁为全新状态，功能完善。（2）二类桥梁为有轻微缺损，对桥梁使用功能无影响。（3）三类桥梁为有中等缺损，尚能维持正常使用功能。（4）四类桥梁为主要构件有大的缺损，严重影响桥梁使用功能，或影响承载能力，不能保证正常使用。（5）五类桥梁为主要构件存在严重缺损，不能正常使用，危及桥梁安全，桥梁处于危险状态。</p>
          </td>
        </tr>
        <tr>
          <td class="title-info">桥面系</td>
          <td>本桥桥面铺装为沥青混凝土装层，牛栏式护栏。本次现场检查桥面铺装出现3条横向裂缝，混凝土局部破损。病害详情请看附件图！</td>
        </tr>
        <tr>
          <td class="title-info">评定结果：</td>
          <td>
            根据《公路桥梁技术状况评定标准》（JTG/T H21-2011)评定，本桥技术状况评定为三类，但本桥拱上结构、桥台等病害非常严重，按评定标准4.1.8条规
            定，全桥总体技术状况评定时，当主要部件评分达到4类或5类且影响桥梁安全时，可按照桥梁主要部件最差的缺损状况评定，因此，本桥技术状况等级评定为：四类
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addForm: {
        T0002_LOAD_NAME: "",
        T0002_START_PILE: "",
        T0002_ASSET_NAME: "",
        T0002_CURING_UNIT: "",
        Lxcode: "",
        Qlcode: "",
      },
      addForm1: {
        // 'T0006_TECHTYPE_NAME':'',
        // 'Bujian11':'',
        // 'M0021_KEEP_IDEA':'',
        // 'M0021_TOTAL_SCORE':'',
        // 'M0021_DEFECT_CONTENT':'',
        // 'M0021_ORGAN_WEIGHT':'',
        // 'M0019_PART':'',
        // 'M0019_PART_NAME':'',
        // 'M0021_PART_WEIGHT': 0,
        // 'M0021_RESET_PART_WEIGHT':'',
        // 'M0021_PARTS_SCORE':'',
        // 'M0021_POSITION_SCORE':'',
        // 'M0021_POSITION_TECH':'',
        // 'M0021_SCORE_TECH':'',
        // 'M0019_PART_WEIGHT':'',
        // 'M0019_PART_TECH':'',
      },
      addForm2: {
        M0020_CHARGE_PERSON: "", //养护负责人
        M0020_CHECK_DATE: "", //最新检查日期
        M0020_NUMBER: "", //检查编码
        M0020_RECORD_PERSON: "", //记录人
      },
      M0019_ID: "",
      tableData: [],
      M0020_ID: "",
      T0002_ID: "425009560642650112",
      id: "",
      id1: "",
      dialogType: "",
      dialogFormVisible: false,
    };
  },
  methods: {
    backList() {
      this.$router.push({
        path: "/checkList",
      });
    },
    addSave(formName) {
      for (var i = 0; i < this.addForm1.length; i++) {
        this.addForm1[i].M0021_PART_WEIGHT = 0;
        this.addForm1[i].M0021_RESET_PART_WEIGHT = Number(
          this.addForm1[i].M0021_RESET_PART_WEIGHT
        );
        this.addForm1[i].M0021_ORGAN_WEIGHT = Number(
          this.addForm1[i].M0021_ORGAN_WEIGHT
        );
        this.addForm1[i].M0021_POSITION_SCORE = Number(
          this.addForm1[i].M0021_POSITION_SCORE
        );
        this.addForm1[i].M0021_TOTAL_SCORE = Number(
          this.addForm1[i].M0021_TOTAL_SCORE
        );
        this.addForm1[i].M0021_PARTS_SCORE = Number(
          this.addForm1[i].M0021_PARTS_SCORE
        );
      }
      var arr = [];
      var arr1 = [];
      arr.push(this.addForm2);
      arr1.push(this.addForm);
      var obj = {
        checkData: arr,
        checkDataDetail: this.addForm1,
        assetData: arr1,
      };
      console.log(obj);
      this.$api.post("/cycle/checkData/insert", obj, null, (r) => {
        if (r.data) {
          console.log(r.data);
          this.dialogFormVisible = false;
          this.getMessage();
          this.$router.push({ path: "/checkList" });
        }
      });
    },

    getMessage() {
      this.$api.post(
        "/cycle/checkData/goAddPage",
        { T0002_ID: this.id, M0020_ID: this.id1 },
        null,
        (res) => {
          // console.log(res.data);
          this.addForm = res.data.assetData[0];
          if (res.data.checkDataDetail) {
            this.addForm1 = res.data.checkDataDetail;
            // console.log(this.addForm1);
          }
          this.addForm2 = res.data.checkData[0];
        }
      );
    },
  },
  created() {
    console.log(this.$route.query.id);
    this.id = this.$route.query.id;
    this.id1 = this.$route.query.id1;
  },
  mounted() {
    this.getMessage();
  },
};
</script>
<style lang="scss">
.el-form-item {
  margin-bottom: 10px !important;
}
.bg-td {
  background: red;
  text-align: center;
  font-size: 14px;
  width: 20%;
}
.assets-wrap {
  .el-button--mini {
    padding: 4px 5px;
  }
  .add-table tr td {
    padding: 5px 10px !important;
  }
  td {
    text-align: center;
  }

  .add-table tr {
    background: #fff;
  }
  .add-table tr .bg-td {
    width: 7%;
    background: #f0f0f0;
  }
  .el-dialog__header {
    background: #f5f5f5;
  }
  .title-p {
    margin-bottom: 10px;
    button {
      float: right;
      margin-left: 10px;
    }
  }
  .table-title {
    margin-top: 25px;
    font-size: 13px;
    color: #666666;
    .title-info {
      width: 160px;
      text-align: center;
    }
  }
  .content {
    background: #fff;
    padding: 30px 20px;
    .el-form-item {
      margin-bottom: 0px !important;
    }
    .table-div {
      .el-button--mini {
        padding: 4px 5px;
      }
    }
    .div-btn {
      margin: 10px 0;
    }
  }
  .serach-span {
    margin-left: 20px;
    span + span {
      margin-right: 10px;
    }
  }
  .table-page {
    text-align: center;
    margin-top: 10px;
  }
  // .add-table {
  //   width: 100%;
  //   border-collapse: collapse;
  //   border: 1px solid #dcdfe6;
  //   tr {
  //     border: 1px solid #dcdfe6;
  //     td {
  //       border: 1px solid #dcdfe6;
  //       padding: 15px 10px;
  //     }
  //   }
  //   .bg-td {
  //     background: #f0f0f0;
  //     text-align: center;
  //   }
  // }
  // .el-table {
  //   td,
  //   th {
  //     text-align: center;
  //   }
  // }
  .dialog-div {
    width: 1000px;
    .el-form-item {
      margin-bottom: 0;
    }
  }
  .ul-img {
    display: inline;
    list-style: none;
    margin: 0;
  }
  .avatar-uploader {
    display: inline-block;
    margin-left: 10px;
    position: relative;
  }
  .actions-item {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    cursor: default;
    text-align: center;
    color: #fff;
    opacity: 0;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s;
    line-height: 110px;
    border-radius: 6px;
    span {
      display: inline-block;
      cursor: pointer;
    }
    span + span {
      margin-left: 15px;
    }
    i {
      font-size: 24px;
    }
  }
  .actions-item:hover {
    opacity: 1;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
}
</style>
