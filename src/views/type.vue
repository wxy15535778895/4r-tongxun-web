<template>
  <div class="assets-wrap">
    <p class="title-p">
      <span style="display:inline-block;margin-bottom:20px;">
        >> 部件类型
      </span>
      <el-button
        type="primary"
        icon="el-icon-plus"
         @click="openDialog('new')"
        >添加部件类型</el-button
      >
    </p>
    <div class="content">
      <el-row :gutter="0">
        <el-form :model="searchMap">
          <el-col :span="4">
              <el-form-item label="桥梁类型" :label-width="formLabelWidth">
              <el-select v-model="searchMap.T0006_ID" placeholder="请选择桥梁类型">
                <el-option
                  v-for="item in levelData"
                  :key="item.T0006_ID"
                  :label="item.T0006_TECHTYPE_NAME"
                  :value="item.T0006_ID"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="padding-top:4px;padding-left:10px">
            <el-button type="primary" @click="searchFun" size="small"
              >搜索</el-button
            >
            <el-button @click="resets" size="small">重置</el-button>
          </el-col>
        </el-form>
      </el-row>
    
  <div class="table-div">
    <el-table :data="tableData" border style="width: 100%" :header-cell-style="{ background: 'rgb(240,240,240)' }">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column label="序号" width="50" align="center">
        <template scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="T0006_TECHTYPE_NAME" label="桥梁类型" align="center"></el-table-column>
      <el-table-column prop="M0019_PART" label="部位" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="M0019_PART_NAME" label="部件名称" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="M0019_PART_WEIGHT" label="部件权重" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="M0019_PART_TECH" label="部位等级" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="200" fixed="right">
        <template slot-scope="scope">
          <el-button type="info" size="mini" @click="openDialog('look',scope.$index,scope.row)">查看</el-button>
          <el-button
            type="primary"
            size="mini"
            @click="openDialog('edit',scope.$index,scope.row)"
          >编辑</el-button>
          <el-button type="danger" size="mini" @click="deleteRow(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    class="table-page"
      @size-change="handleSizeChange"
      @current-change="currentChange"
      :current-page="condition.currentPage"
      :page-sizes="[10, 50, 100]"
      :page-size="condition.showCount"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    </div>
  </div>
    <!-- 新增窗口 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" :before-close="closeDialog">
      <el-form :model="formData" ref="form">
        <table class="add-table">
          <tr>
            <td class="bg-td">桥梁类型</td>
            <td>
              <el-form-item prop="T0006_ID">
              <el-select v-model="formData.T0006_ID" style="width:100%;" placeholder="请选择桥梁类型" :disabled="disabled">
                <el-option
                  v-for="item in levelData"
                  :key="item.T0006_ID"
                  :label="item.T0006_TECHTYPE_NAME"
                  :value="item.T0006_ID"
                ></el-option>
              </el-select>
            </el-form-item>
            </td>
            <td class="bg-td">部位</td>
            <td>
              <el-form-item prop="M0019_PART">
              <el-select v-model="formData.M0019_PART" style="width:100%;" placeholder="请选择部位类型" :disabled="disabled">
                <el-option
                  v-for="item in buweiData"
                  :key="item.value"
                  :label="item.type"
                  :value="item.type"
                ></el-option>
              </el-select>
            </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">部件名称</td>
            <td>
              <el-form-item prop="M0019_PART_NAME">
                <el-input v-model="formData.M0019_PART_NAME" autocomplete="off" :disabled="disabled"></el-input>
            </el-form-item>
            </td>
            <td class="bg-td">部件权重</td>
            <td>
              <el-form-item prop="M0019_PART_WEIGHT">
                <el-input
                v-model="formData.M0019_PART_WEIGHT"
                autocomplete="off"
                type="number"
                min="0"
                :disabled="disabled"
              ></el-input>
            </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">部位等级</td>
            <td>
              <el-form-item prop="M0019_PART_TECH" style="width:100%;">
                <el-select
                  v-model="formData.M0019_PART_TECH"
                  placeholder="请选择部位类型"
                  style="width:100%;"
                  :disabled="disabled"
                >
                  <el-option
                    v-for="item in buweiLevel"
                    :key="item.value"
                    :label="item.level"
                    :value="item.level"
                  ></el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">备注</td>
            <td colspan="3">
              <el-form-item prop="M0019_PART_REMARK" style="width:100%;">
                <el-input
                v-model="formData.M0019_PART_REMARK"
                autocomplete="off"
                type="textarea"
                style="width:100%;"
                :rows="4"
                :disabled="disabled"
              ></el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset('form')">取 消</el-button>
        <el-button type="primary" @click="save('form')" v-if="!disabled">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition: {
        currentPage: 1,
        showCount: 10
      },
      total: 0,
      searchMap:{
        T0006_ID:''
      },
      disabled: false,
      dialogType: "",
      dialogTitle: "",
      isSearch:false,
      tableData: [],
      levelData: {},
      buweiData: [
        {
          type: "上部结构",
          value: 1
        },
        {
          type: "下部结构",
          value: 2
        },
        {
          type: "桥面系",
          value: 3
        }
      ],
      buweiLevel: [
        {
          level: "一类",
          value: 1
        },
        {
          level: "二类",
          value: 2
        },
        {
          level: "三类",
          value: 3
        }
      ],
      bridge_id: "426497497934856110",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      formData: {
        T0006_ID: "",
        M0019_PART: "",
        M0019_PART_NAME: "",
        M0019_PART_WEIGHT: "",
        M0019_PART_TECH: "",
        M0019_PART_REMARK: ""
      }
    };
  },
  created() {
    this.initData();
    this.typeLevel();
  },
  methods: {
    //搜索
    searchFun(){
      this.isSearch = true
      this.initData()
    },
    //重置
    resets(){
      this.isSearch = false
      this.searchMap.T0006_ID = ''
    },
    initData() {
      this.$api.post("/cycle/partType/listPage", this.condition, null, r => {
        if (r.data) {
          this.tableData = r.data.returnParam;
          this.total = r.data.totalResult;
          // console.log(this.tableData);
        }
      });
    },
    typeLevel() {
      this.$api.post(
        "/cycle/techType/listAll",
        { T0001_ID: this.bridge_id },
        null,
        r => {
          if (r.data) {
            this.levelData = r.data;
            console.log(this.levelData);
          }
        }
      );
    },
    openDialog(type, index, row) {
      // console.log(type,index,row)
      this.dialogFormVisible = true;
      if (type == "new") {
        this.dialogType = "new";
        this.dialogTitle = "新增";
        this.disabled = false;
      }
      if (type == "look") {
        this.disabled = true;
        this.dialogType = "edit";
        this.dialogTitle = "查看";
        this.formData = row;
        this.disabled = true;
      }
      if (type == "edit") {
        // console.log(row)
        this.dialogType = "edit";
        this.dialogTitle = "编辑";
        this.formData = row;
        this.disabled = false;
      }
    },
    closeDialog() {
      this.formData = {
        T0006_ID: "",
        M0019_PART: "",
        M0019_PART_NAME: "",
        M0019_PART_WEIGHT: "",
        M0019_PART_TECH: "",
        M0019_PART_REMARK: ""
      };
      //  this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    },
    deleteRow(index, row) {
      var id = row.M0019_ID;
      this.$api.post(`/cycle/partType/deleteById?ID=${id}`, {}, null, r => {
        if (r.data) {
          // console.log(r.data);
          this.initData();
        }
      });
    },
    currentChange(val) {
      this.currentPage = val;
      this.initData();
    },
    handleSizeChange(val) {
      this.condition.showCount = val;
    },
    save(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            this.formData.M0019_PART_WEIGHT=Number(this.formData.M0019_PART_WEIGHT)
          if (this.dialogType == "new") {
            this.$api.post("/cycle/partType/insert", this.formData, null, r => {
              if (r.data) {
                // console.log(r.data);
                this.dialogFormVisible = false;
                this.initData();
              }
            });
          }
          if (this.dialogType == "edit") {
            this.$api.post("/cycle/partType/update", this.formData, null, r => {
              if (r.data) {
                // console.log(r.data);
                this.dialogFormVisible = false;
                this.initData();
              }
            });
          }
        }
      });
    },
    reset(formName) {
      this.formData = {
        T0006_ID: "",
        M0019_PART: "",
        M0019_PART_NAME: "",
        M0019_PART_WEIGHT: "",
        M0019_PART_TECH: "",
        M0019_PART_REMARK: ""
      };
      this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style lang="scss">
.assets-wrap {
  .el-button--mini {
    padding: 4px 5px;
  }
  .add-table tr td {
    padding: 5px 10px !important;
  }
  .el-dialog__header {
    background: #f5f5f5;
  }
  .title-p {
    margin-bottom: 10px;
    button {
      float: right;
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
      margin-bottom: 0;
    }
    .table-div {
      margin-top: 10px;
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