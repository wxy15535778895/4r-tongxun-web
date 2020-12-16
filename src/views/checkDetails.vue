
<template>
  <div class="assets-wrap">
    <div style="display:flex">
      <span>>>检查记录表</span>
      <tr class="title-p" style="margin-left:auto">
        <td v-if="id2!=0">
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-12')? open==('2020-12')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >十二月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-11')? open==('2020-11')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >十一月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-10')? open==('2020-10')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >十月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-09')? open==('2020-09')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >九月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-08')? open==('2020-08')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >八月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-07')? open==('2020-07')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >七月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-06')? open==('2020-06')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >六月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-05')? open==('2020-05')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >五月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-04')? open==('2020-04')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >四月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-03')? open==('2020-03')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >三月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-02')? open==('2020-02')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >二月</el-button>
          <el-button
            type="primary"
            size="small"
            :style="{'background':time[0].includes('2020-01')? open==('2020-01')?'#FF6600':'#1FB5AC':'#CCCCCC'}"
            round
          >一月</el-button>
        </td>
        <!-- <el-button type="primary">打印</el-button> -->
      </tr>
    </div>
    <!-- 内容展示 -->
    <!-- <el-form ref="addFormRef" :visible.sync="dialogFormVisible" v-if="addForm1.M0019_PART"> -->

    <h1 style="text-align:center;margin-bottom:20px;font-size:30px;">桥梁经常检查记录表</h1>
    <div style="margin-bottom:20px;">
      <tr>
        <td>检查单编号：</td>
        <td style="padding-right:20px;" class="bcorlor">
          <el-input
            :disabled="id2!=0? true:false"
            :style="{'border-corlr':id2!=0? '#F5F7FA;':'sandybrown'}"
            type="text"
            v-model="addForm2.M0020_NUMBER"
          ></el-input>
        </td>
        <td>
          <el-button type="primary" @click="backList()">返回</el-button>
          <el-button v-if="this.id2!=1" type="primary" @click="addSave('addFormRef')">保存</el-button>
          <!-- <el-button type="primary" @click="addSave('addFormRef')">打印</el-button> -->
        </td>
      </tr>
    </div>
    <div class="content bcorlor">
      <el-form :inline="true" :model="addForm" class="demo-form-inline">
        <el-form-item label="路线编码:">
          <el-input v-model="addForm.Lxcode" disabled placeholder></el-input>
        </el-form-item>
        <el-form-item label="路线名称:">
          <el-input v-model="addForm.uT0002_LOAD_NAMEser" disabled placeholder></el-input>
        </el-form-item>
        <el-form-item label="桥位桩号:">
          <el-input v-model="addForm.T0002_START_PILE" disabled placeholder></el-input>
        </el-form-item>
      </el-form>
      <el-form
        :inline="true"
        :model="addForm"
        class="demo-form-inline"
        style="margin-top:1%;margin-bottom:1%"
      >
        <el-form-item label="桥梁编码:">
          <el-input v-model="addForm.Qlcode" disabled placeholder></el-input>
        </el-form-item>
        <el-form-item label="桥梁名称:">
          <el-input v-model="addForm.T0002_ASSET_NAME" disabled placeholder></el-input>
        </el-form-item>
        <el-form-item label="养护单位:">
          <el-input v-model="addForm.T0002_CURING_UNIT" disabled placeholder></el-input>
        </el-form-item>
      </el-form>
      <el-table :data="addForm1" border style="width: 100%;overflow:scroll;">
        <el-table-column prop="index" type="index" label="序号" style="100%"></el-table-column>
        <el-table-column prop="M0019_PART" label="部位"></el-table-column>
        <el-table-column prop="M0019_PART_NAME" label="部件名称"></el-table-column>
        <el-table-column prop="M0019_PART_WEIGHT" label="部件权重"></el-table-column>
        <el-table-column label="新部件权重">
          <template slot-scope="scope">
            <el-input
              :disabled="id2!=0? true:false"
              style="border-color:balck !important"
              v-model="scope.row.M0021_RESET_PART_WEIGHT"
            />
          </template>
        </el-table-column>
        <el-table-column prop="M0021_PARTS_SCORE" label="部件得分">
          <template slot-scope="scope">
            <el-input :disabled="id2!=0? true:false" v-model="scope.row.M0021_PARTS_SCORE" />
          </template>
        </el-table-column>
        <el-table-column prop="M0021_POSITION_SCORE" label="部位得分">
          <template slot-scope="scope">
            <el-input :disabled="id2!=0? true:false" v-model="scope.row.M0021_POSITION_SCORE" />
          </template>
        </el-table-column>
        <el-table-column prop="M0019_PART_TECH" label="部位等级"></el-table-column>
        <el-table-column prop="M0021_SCORE_TECH" label="评定等级">
          <template slot-scope="scope">
            <el-input :disabled="id2!=0? true:false" v-model="scope.row.M0021_SCORE_TECH" />
          </template>
        </el-table-column>
        <el-table-column prop="M0021_ORGAN_WEIGHT" label="结构权重">
          <template slot-scope="scope">
            <el-input :disabled="id2!=0? true:false" v-model="scope.row.M0021_ORGAN_WEIGHT" />
          </template>
        </el-table-column>
        <el-table-column prop="M0021_DEFECT_CONTENT" label="缺损内容" width="150">
          <template scope="scope">
            <el-select v-model="scope.row.M0021_DEFECT_CONTENT" :disabled="id2!=0? true:false">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="M0021_TOTAL_SCORE" label="总体技术状况评分">
          <template slot-scope="scope">
            <el-input :disabled="id2!=0? true:false" v-model="scope.row.M0021_TOTAL_SCORE" />
          </template>
        </el-table-column>
        <el-table-column prop="T0006_TECHTYPE_NAME" label="技术状况等级评定"></el-table-column>
        <el-table-column prop="M0021_KEEP_IDEA" label="保养措施及意见">
          <template slot-scope="scope">
            <el-input :disabled="id2!=0? true:false" v-model="scope.row.M0021_KEEP_IDEA" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="附件">
          <template slot-scope="scope">
            <el-upload
              class="upload-demo"
              action
              accept="image/*, .xls, .xlsx"
              :file-list="scope.row.files"
              :on-change="uploadInfo"
              :on-preview="uploadPrew"
              :on-remove="uploadRemove"
              :auto-upload="false"
            >
              <div style="display:flex;flex-direction:column">
                <el-button size="small" type="primary" @click="index=scope.$index">点击上传</el-button>
              </div>
            </el-upload>
          </template>
        </el-table-column>
      </el-table>
      <el-form :inline="true" :model="addForm2" class="demo-form-inline" style="margin-top:1%">
        <el-form-item label="路线编码:">
          <el-input
            :disabled="id2!=0? true:false"
            v-model="addForm2.M0020_CHARGE_PERSON"
            placeholder="请输入路线编码"
          ></el-input>
        </el-form-item>
        <el-form-item label="路线名称:">
          <el-input
            :disabled="id2!=0? true:false"
            v-model="addForm2.M0020_RECORD_PERSON"
            placeholder="请输入路线名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="记录时间 :">
          <el-date-picker
            :disabled="id2!=0? true:false"
            v-model="addForm2.M0020_CHECK_DATE"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
      </el-form>

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
      options: [
        {
          value: "1",
          label: "完好",
        },
        {
          value: "2",
          label: "有损坏",
        },
      ],
      addForm: {
        T0002_LOAD_NAME: "",
        T0002_START_PILE: "",
        T0002_ASSET_NAME: "",
        T0002_CURING_UNIT: "",
        Lxcode: "",
        Qlcode: "",
      },
      importFiles: [],
      dataParams: {
        TABLE_NAME: "CHECK_DETAILS",
        ID: "",
      },
      index: "",
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
      id2: "",
      dialogType: "",
      dialogFormVisible: false,
      time: [],
      open: "",
    };
  },
  methods: {
    backList() {
      this.$router.push({
        path: "/checkList",
        query: {
          id: this.id,
        },
      });
    },
    addSave(formName) {
      console.log(this.addForm1);
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
          this.$router.push({
            path: "/checkList",
            query: {
              id: this.id,
            },
          });
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
            if (this.id2 == "1") {
              res.data.checkDataDetail.forEach((ite) => {
                console.log(ite.files);
                ite.files.forEach((i) => {
                  this.$set(i, "name", i.M0013_REAL_NAME);
                  this.$set(i, "url", i.FILE_URL);
                });
              });
              this.addForm1 = res.data.checkDataDetail;
              console.log(this.addForm1);
            } else {
              this.addForm1 = res.data.checkDataDetail;
              console.log(this.addForm1);
            }
          }
          this.addForm2 = res.data.checkData[0];
        }
      );
    },
    // 上传附件
    uploadInfo(file) {
      this.dataParams.ID = this.addForm1[this.index].M0021_ID;
      let param = new FormData();
      param.append("files", file.raw);
      param.append("ID", this.dataParams.ID);
      param.append("TABLE_NAME", this.dataParams.TABLE_NAME);
      this.$api.post(`/cycle/fileInfo/uploadFile`, param, null, (r) => {
        console.log(r);
        this.$message.success("上传成功");
        console.log(this.index);
        // this.getCostBudgetList()
        this.$delete(this.addForm1, "files");
        this.$set(this.addForm1, "files", []);
        // this.addForm1[this.index].files.push(r.data[0]);
        r.data.forEach((v) => {
          this.addForm1[this.index].files.push(
            Object.assign(
              {
                name: v.M0013_REAL_NAME,
                url: v.FILE_URL,
                M0013_ID: v.M0013_ID,
              },
              r.data[0]
            )
          );
        });
        console.log(this.addForm1[this.index]);
      });
    },
    // 点击文件
    uploadPrew(file) {
      console.log(file);
      window.location.href = file.url;
    },
    // 文件删除
    uploadRemove(file, fileList) {
      this.$api.post(
        `/cycle/fileInfo/deleteById?ID=${file.M0013_ID}`,
        {},
        null,
        (r) => {
          this.$message.success("删除成功");
          this.getCostBudgetList();
          this.importFiles = this.importFiles.filter((item) => {
            return item.M0013_ID !== file.M0013_ID;
          });
        }
      );
    },
    clickImgFun(data) {
      this.imgShowUrl = data.FILE_URL;
      this.imgShow = true;
    },
    clickDeleteFun(data) {
      this.$confirm("确定要删除该图片?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$api.post(
          `/cycle/fileInfo/deleteById?ID=${data.M0013_ID}`,
          {},
          null,
          (r) => {
            this.$message.success("删除成功");
            this.getTechDataList();
            this.imageList = this.imageList.filter((item) => {
              return item.M0013_ID !== data.M0013_ID;
            });
          }
        );
      });
    },
  },
  created() {
    console.log(this.$route.query.id);
    this.id = this.$route.query.id;
    this.id1 = this.$route.query.id1;
    this.id2 = this.$route.query.id2;
    this.open = this.$route.query.time;
    let value = sessionStorage.getItem("time");
    this.time.push(value);
    console.log(this.time);
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
.title-p .el-button--primary {
  border: none;
}
.demo-form-inline .el-form-item {
  margin-right: 5% !important;
}
.bcorlor .el-input__inner {
  border: 1px solid #1fb5ac !important;
}
.el-input.is-disabled .el-input__inner {
  border-color: #e4e7ed !important;
}
body .el-table th.gutter {
  display: table-cell !important;
}
.el-table__header {
  width: 100% !important;
}
.el-table__body {
  width: 100% !important;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* 正常情况下滑块的样式 */
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

/* 鼠标悬浮在该类指向的控件上时滑块的样式 */
:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

/* 鼠标悬浮在滑块上时滑块的样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

/* 正常时候的主干部分 */
::-webkit-scrollbar-track {
  border-radius: 2px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: inherit;
}

/* 鼠标悬浮在滚动条上的主干部分 */
::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: inherit;
}
.el-table .cell{
    padding-right: 10px !important;
}
</style>
