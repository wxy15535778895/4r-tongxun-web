<template>
  <div id="manager">
    <el-row style="line-height:20px;">
      <el-col :span="4">
        <span style="font-size:20px;">>> 管理员列表</span>
      </el-col>
      <el-col :span="20" style="text-align:right;padding-right:30px;">
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="openDialog('add')"
          :disabled="isAdd"
          >添加管理员</el-button
        >
      </el-col>
    </el-row>
    <el-main id="tableWrap">
      <el-row>
        <el-col :span="24">
          <el-table
            :data="dpData"
            border
            style="width: 100%"
            :header-cell-style="{ background: 'rgb(240,240,240)' }"
          >
            <el-table-column label="序号" width="80" align="center">
              <template scope="scope"
                ><span>{{ scope.$index + 1 }}</span></template
              >
            </el-table-column>
            <el-table-column
              prop="M0014_SIMP_NAME"
              label="用户昵称"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="M0014_USER_NAME"
              label="真实姓名"
              width="100"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="DEPART_NAME" label="归属机构" align="center">
            </el-table-column>
            <el-table-column
              prop="DUTY_NAME"
              label="职务"
              width="100"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="ROLEGROUP_NAME"
              label="归属权限组"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="M0014_USER_TEL" label="手机" align="center">
            </el-table-column>
            <el-table-column
              prop="M0014_USER_EMAIL"
              label="邮箱"
              align="center"
            >
            </el-table-column>
            <el-table-column label="状态" align="center">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.M0014_IS_AVTIVE"
                  disabled
                  active-color="#409eff"
                  inactive-color="#bbb"
                >
                </el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="220" align="center">
              <template slot-scope="scope">
                <el-button
                  type="info"
                  size="mini"
                  :disabled="isChaxun"
                  @click="openDialog('look', scope.row)"
                  >查看</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  :disabled="isEdit"
                  @click="openDialog('edit', scope.row)"
                  >编辑</el-button
                >
                <el-button
                  type="danger"
                  size="mini"
                  :disabled="isDelete"
                  @click="deleteRow(scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row class="list-pagination-row">
        <!-- <el-pagination
                    @current-change="refreshTable"
                    layout="total, prev, pager, next"
                    :total="totalData"
                    :current-page.sync="pageIndex"
                    :page-size="this.preSetPageSize"
            ></el-pagination> -->
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
      </el-row>
    </el-main>
    <!-- 管理员添加 -->
    <el-row>
      <el-dialog
        :title="dialogName"
        id="disZbDialog"
        :fullscreen="false"
        :visible.sync="disVisible"
        width="60%"
        :before-close="closeDialog"
      >
        <el-main>
          <el-form
            :inline="true"
            ref="form"
            :rules="rules"
            :model="form"
            size="small"
            label-width="140px"
            class="demo-form-inline"
          >
            <table class="add-table">
              <tr>
                <td class="bg-td">昵称：</td>
                <td>
                  <el-form-item prop="M0014_SIMP_NAME">
                    <el-input
                      type="text"
                      v-model="form.M0014_SIMP_NAME"
                      :disabled="islook || isedit"
                      @change="isHaveName"
                      style="width:200px;"
                    ></el-input>
                  </el-form-item>
                </td>
                <!-- <td class="bg-td">昵称：</td>
                    <td><el-input type="text" v-model="form.M0014_SIMP_NAME" size="small" :disabled="islook"></el-input></td> -->
                <td class="bg-td">真实姓名：</td>
                <td>
                  <el-form-item prop="M0014_USER_NAME">
                    <el-input
                      type="text"
                      v-model="form.M0014_USER_NAME"
                      size="small"
                      :disabled="islook || isedit"
                      style="width:200px;"
                    ></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td class="bg-td">密码：</td>
                <td>
                  <el-form-item prop="M0014_PASS_WORD">
                    <el-input
                      type="password"
                      v-model="form.M0014_PASS_WORD"
                      size="small"
                      :disabled="islook"
                      show-password
                      style="width:200px;"
                    ></el-input>
                  </el-form-item>
                </td>
                <td class="bg-td">确认密码：</td>
                <td>
                  <el-form-item prop="Expassword">
                    <el-input
                      type="password"
                      v-model="Expassword"
                      size="small"
                      :disabled="islook"
                      show-password
                      style="width:200px;"
                    ></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td class="bg-td">归属部门：</td>
                <td>
                  <el-form-item prop="M0016_ID">
                    <el-select
                      v-model="form.M0016_ID"
                      size="small"
                      style="width:200px;"
                      :disabled="islook"
                    >
                      <el-option
                        v-for="item in mechans"
                        :key="item.M0016_ID"
                        :label="item.M0016_DEPART_NAME"
                        :value="item.M0016_ID"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </td>
                <td class="bg-td">职务：</td>
                <td>
                  <el-form-item prop="M0015_ID">
                    <el-select
                      v-model="form.M0015_ID"
                      size="small"
                      style="width:200px;"
                      :disabled="islook"
                    >
                      <el-option
                        v-for="item in positions"
                        :key="item.M0015_ID"
                        :label="item.M0015_DUTY_NAME"
                        :value="item.M0015_ID"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td class="bg-td">电子信箱：</td>
                <td>
                  <el-form-item prop="M0014_USER_EMAIL">
                    <el-input
                      type="email"
                      v-model="form.M0014_USER_EMAIL"
                      size="small"
                      :disabled="islook"
                      style="width:200px;"
                    ></el-input>
                  </el-form-item>
                </td>
                <td class="bg-td">手机号：</td>
                <td>
                  <el-form-item prop="M0014_USER_TEL">
                    <el-input
                      type="phone"
                      v-model="form.M0014_USER_TEL"
                      size="small"
                      :disabled="islook"
                      style="width:200px;"
                    ></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <td class="bg-td">是否激活：</td>
                <td>
                  <el-switch
                    v-model="form.M0014_IS_AVTIVE"
                    :disabled="islook"
                    active-color="#409eff"
                    inactive-color="#bbb"
                  >
                  </el-switch>
                </td>
                <td class="bg-td"></td>
                <td></td>
              </tr>
              <tr>
                <td class="bg-td">备注：</td>
                <td colspan="3">
                  <el-input
                    type="textarea"
                    rows="5"
                    v-model="form.M0014_USER_REMARK"
                    size="small"
                    :disabled="islook"
                  ></el-input>
                </td>
              </tr>
            </table>
          </el-form>
        </el-main>
        <div slot="footer" class="dialog-footer" v-show="isCheck">
          <el-button type="primary" @click="save" size="small">确认</el-button>
          <el-button @click="resetDialog" size="small">取消</el-button>
        </div>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      isCheck: true,
      pageIndex: 1,
      dpData: [
        {
          nickname: 'blue',
          realname: '1',
          mechanism: '1',
          position: '1',
          rights: '1',
          phone: '13333333333',
          email: '123@321.com',
          switch: true,
        },
        {
          nickname: 'red',
          realname: '1',
          mechanism: '1',
          position: '1',
          rights: '1',
          phone: '15665656565',
          email: '23@43.com',
          switch: false,
        },
      ],
      currentPage: 1,
      showCount: 10,
      total: 0,
      dialogName: '新增管理员',
      disVisible: false,
      islook: false,
      Expassword: '',
      isedit: false,
      form: {
        M0014_USER_CODE: '',
        M0014_SIMP_NAME: '',
        M0014_USER_NAME: '',
        M0014_PASS_WORD: '',
        M0016_ID: '',
        M0015_ID: '',
        M0014_ID: '',
        M0014_USER_EMAIL: '',
        M0014_USER_TEL: '',
        M0014_IS_AVTIVE: true,
        M0014_USER_REMARK: '',
        M0018_ID: '',
        M0016_DEPART_NAME: '',
        M0015_DEPART_NAME: '',
        M0016_ID_PRE: '',
        M0015_ID_PRE: '',
      },
      mechans: [],
      positions: [],
      rules: {
        M0014_SIMP_NAME: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
        ],
        M0014_USER_NAME: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur',
          },
          // { pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/, message: '姓名不支持特殊字符', trigger: 'blur' }
          { pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文' },
        ],
        M0014_PASS_WORD: [
          // { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 50, message: '长度在 6 到 50 个字符' },
          {
            pattern: /^(\w){6,50}$/,
            message: '只能输入6-50个字母、数字、下划线',
          },
        ],
        // Expassword: [
        //   { required: true, message: '请确认密码', trigger: 'blur' }
        // ],
        M0014_USER_EMAIL: [
          
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
        ],
        M0014_USER_TEL: [
          
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: '请输入11位手机号码',
            trigger: 'blur',
          },
        ],
        // M0015_ID: [
        //   { required: true, message: '请选择职务' }
        // ],
        // M0016_ID: [
        //   { required: true, message: '请选择归属部门' }
        // ]
      },
      isAdd: true,
      isDelete: true,
      isEdit: true,
      isChaxun: true,
    }
  },
  mounted() {
    this.refreshTable(1)
    this.loadSelect()
    this.getState()
  },
  methods: {
    // 获取增删改查按钮状态
    getState() {
      let _data = {
        M0018_ID: sessionStorage.getItem('id'),
        M0004_ID: this.$route.query.ID,
      }
      console.log(_data)
      this.$api.post(
        '/cycle/roleGroupManagement/getAuthByMenuId?M0004_ID=' +
          this.$route.query.ID,
        {},
        null,
        (res) => {
          console.log(res)
          res.data.forEach((v) => {
            if (
              v.M0004_NAME === '查询' &&
              (v.M0005_STATE === '1' || v.M0005_STATE === 1)
            ) {
              this.isChaxun = false
            } else if (
              v.M0004_NAME === '添加' &&
              (v.M0005_STATE === '1' || v.M0005_STATE === 1)
            ) {
              this.isAdd = false
            } else if (
              v.M0004_NAME === '修改' &&
              (v.M0005_STATE === '1' || v.M0005_STATE === 1)
            ) {
              this.isEdit = false
            } else if (
              v.M0004_NAME === '删除' &&
              (v.M0005_STATE === '1' || v.M0005_STATE === 1)
            ) {
              this.isDelete = false
            }
          })
        }
      )
    },
    // 分页
    sizeChange(val) {
      this.showCount = val
      this.refreshTable()
    },
    currentChange(val) {
      this.currentPage = val
      this.refreshTable()
    },
    refreshTable() {
      this.form.M0018_ID = sessionStorage.getItem('id')
      // eslint-disable-next-line no-unused-vars
      let _data = {
        currentPage: this.currentPage,
        showCount: this.showCount,
        searchMap: { M0018_ID: this.form.M0018_ID },
      }
      // let tabDatas = []
      this.$api.post('/cycle/userManagement/listPage', _data, null, (r) => {
        console.log(r)
        r.data.returnParam.forEach((element) => {
          if (element.M0014_IS_AVTIVE === 1) {
            element.M0014_IS_AVTIVE = true
          } else {
            element.M0014_IS_AVTIVE = false
          }
          if(element.M0014_SIMP_NAME === 'admin'){
            this.isDelete = true
          }else{
            this.isDelete = false
          }
        })
        this.dpData = r.data.returnParam
        this.total = r.data.totalResult
      })
    },
    isHaveName() {
      this.$api.post(
        '/cycle/userManagement/isExist?userName=' + this.form.M0014_SIMP_NAME,
        {},
        null,
        (r) => {
          console.log(r)
          if (r.data === true) {
            this.$message.warning('用户名已存在，请重新输入')
            this.form.M0014_SIMP_NAME = ''
          }
        }
      )
    },
    save() {
      this.form.M0018_ID = sessionStorage.getItem('id')
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.M0016_ID === '') {
            this.form.M0016_ID = '0'
          }
          if (this.form.M0015_ID === '') {
            this.form.M0015_ID = '0'
          }
          if (this.form.M0014_PASS_WORD === this.Expassword) {
            this.form.M0014_USER_CODE = this.form.M0014_SIMP_NAME
            if (this.dialogType === 'new') {
              // console.log(this.form)
              // if (this.form.M0014_IS_AVTIVE === true) {
              // this.form.M0014_IS_AVTIVE = 1
              // } else {
              // this.form.M0014_IS_AVTIVE = 0
              // }
              console.log(this.form)
              this.$api.post(
                '/cycle/userManagement/insert',
                this.form,
                '新增成功',
                (r) => {
                  this.closeDialog()
                }
              )
            }
            if (this.dialogType === 'edit') {
              if (!/^([0-9])*$/.test(this.form.M0016_ID)) {
                this.form.M0016_ID = this.form.M0016_ID_PRE
              }
              if (!/^([0-9])*$/.test(this.form.M0015_ID)) {
                this.form.M0015_ID = this.form.M0015_ID_PRE
              }
              // this.form.M0016_ID = this.form.M0016_ID_PRE
              // this.form.M0015_ID = this.form.M0015_ID_PRE
              if (this.form.M0016_ID === '') {
                this.form.M0016_ID = '0'
              }
              if (this.form.M0015_ID === '') {
                this.form.M0015_ID = '0'
              }
              this.$api.post(
                '/cycle/userManagement/update',
                this.form,
                '编辑成功',
                (r) => {
                  this.closeDialog()
                }
              )
            }
          } else {
            // alert('密码不一致')
            Message({
              showClose: true,
              message: '密码不一致',
              type: 'warning',
            })
            return false
          }
        } else {
          return false
        }
      })
    },
    openDialog(type, row) {
      this.disVisible = true
      console.log(row)
      if (type === 'add') {
        this.isCheck = true
        this.dialogName = '新增管理员'
        this.dialogType = 'new'
      }
      if (type === 'edit') {
        this.isCheck = true
        this.isedit = true
        this.Expassword = ''

        // if (row.M0014_IS_AVTIVE === 1) {
        //   row.M0014_IS_AVTIVE = true
        // } else {
        //   row.M0014_IS_AVTIVE = false
        // }
        // 判断选择框内是否返回了0,如果是0就为空
        if (row.M0016_ID === '0' || row.M0016_PID === 0) {
          row.M0016_ID = ''
        }
        if (row.M0015_ID === '0' || row.M0016_PID === 0) {
          row.M0015_ID = ''
        }
        this.dialogName = '编辑管理员'
        this.form = row
        this.form.M0014_PASS_WORD = ''
        this.dialogType = 'edit'
        // 把M0016_ID和M0015_ID存起来
        this.form.M0016_ID_PRE = this.form.M0016_ID
        this.form.M0015_ID_PRE = this.form.M0015_ID
        // 解决编辑的时候展示的是ID,而不是名字
        this.form.M0016_ID = row.DEPART_NAME
        this.form.M0015_ID = row.DUTY_NAME
      }
      if (type === 'look') {
        this.isCheck = false
        this.Expassword = ''

        if (row.M0014_IS_AVTIVE === 1) {
          row.M0014_IS_AVTIVE = true
        } else {
          row.M0014_IS_AVTIVE = false
        }
        this.dialogName = '查看部门'
        this.form = row
        this.form.M0014_PASS_WORD = ''
        this.islook = true
      }
    },
    closeDialog() {
      this.$refs['form'].resetFields()
      this.disVisible = false
      this.islook = false
      this.isedit = false
      this.form = {}
      this.refreshTable(1)
    },
    resetDialog() {
      this.$refs['form'].resetFields()
      this.closeDialog()
    },
    deleteRow(row) {
      // alert(1)
      // this.$api.post('', row.id, '删除成功', r => {})
      console.log(row.M0016_ID)
      this.$confirm('确认删除？此操作不可取消', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        // let form = {}
        // form.ID = row.M0016_ID
        this.$api.post(
          '/cycle/userManagement/deleteById?ID=' + row.M0014_ID,
          {},
          '删除成功',
          (r) => {
            if (this.dpData.length <= 1) {
              this.currentPage = this.currentPage - 1
            }
            this.refreshTable(1)
          }
        )
      })
    },
    loadSelect() {
      this.$api.post(
        '/cycle/departmentManagement/listAll',
        { M0018_ID: this.form.M0018_ID },
        null,
        (r) => {
          this.mechans = r.data
          r.data.forEach((item, index) => {
            if (item.M0016_PID !== '0') {
              item.M0016_DEPART_NAME = '-- ' + item.M0016_DEPART_NAME
            }
          })
        }
      )
      this.$api.post(
        '/cycle/dutyManagement/listAll',
        { M0018_ID: this.form.M0018_ID },
        null,
        (r) => {
          this.positions = r.data
        }
      )
    },
  },
}
</script>
<style lang="scss">
#manager {
  #tableWrap {
    background: #fff;
    margin-top: 20px;
  }
  .el-button--mini {
    padding: 4px 5px;
  }
  .add-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dcdfe6;
    tr {
      border: 1px solid #dcdfe6;
      height: 60px;
      td {
        border: 1px solid #dcdfe6;
        padding: 15px 15px;
      }
    }
    .bg-td {
      background: #f0f0f0;
      text-align: center;
    }
    .el-form-item {
      margin-bottom: 0;
    }
  }
  .table-page {
    text-align: center;
    margin-top: 10px;
  }
}
</style>
