<template>
  <div id="personal">
    <!-- 我的资料列表 -->
    <el-row style="line-height:20px;" class="tbTitle">
      <el-col :span="4">
        <span style="font-size:20px;">>> 我的资料</span>
      </el-col>
      <el-col :span="20" style="text-align:right;padding-right:30px;">
        <!-- <el-table :data="form">
          <template slot-scope="scope"> -->
        <el-button
          type="primary"
          icon="el-icon-view"
          @click="openDialog('look')"
          >我的权限查看</el-button
        >
        <el-button
          type="primary"
          :disabled="isUpdate"
          icon="el-icon-edit-outline"
          @click="openDialog('edit')"
          >个人资料编辑</el-button
        >
        <!-- </template>
        </el-table> -->
      </el-col>
    </el-row>
    <el-row class="tbWrap">
      <el-col :span="18" :offset="3">
        <table class="perstable" style="width: 70%;margin:0 auto">
          <tr>
            <td class="bg-td">昵称：</td>
            <td style="text-align:left">
              {{ form.M0014_USER_CODE }}
            </td>
            <td class="bg-td">真实姓名：</td>
            <td style="text-align:left">
              {{ form.M0014_USER_NAME }}
            </td>
          </tr>
          <tr>
            <td class="bg-td">归属部门：</td>
            <td style="text-align:left">
              {{ form.DEPART_NAME }}
            </td>
            <td class="bg-td">职务：</td>
            <td style="text-align:left">
              {{ form.DUTY_NAME }}
            </td>
          </tr>
          <tr>
            <td class="bg-td">电子邮箱：</td>
            <td style="text-align:left">
              {{ form.M0014_USER_EMAIL }}
            </td>
            <td class="bg-td">手机号：</td>
            <td style="text-align:left">
              {{ form.M0014_USER_TEL }}
            </td>
          </tr>
          <tr>
            <td class="bg-td">是否激活：</td>
            <td style="text-align:left" colspan="3">
              <el-switch
                v-model="form.M0014_IS_AVTIVE"
                active-color="#409eff"
                size="small"
                inactive-color="#bbb"
                :disabled="isEdit"
              >
              </el-switch>
            </td>
          </tr>
          <tr>
            <td class="bg-td">备注：</td>
            <td colspan="3" style="text-align:left">
              {{ form.M0014_USER_REMARK }}
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>

    <!-- 修改个人资料弹框 -->
    <el-dialog
      title=">> 修改个人资料"
      :visible.sync="addShow"
      :close-on-click-modal="false"
      custom-class="dialog-div"
      :before-close="cancel"
    >
      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        size="small"
        class="demo-form-inline"
      >
        <table class="perstable">
          <tr>
            <td class="bg-td">昵称：</td>
            <td>
              <el-input
                type="text"
                v-model="form.M0014_USER_CODE"
                :disabled="isEdit"
                size="small"
              ></el-input>
            </td>
            <td class="bg-td">真实姓名：</td>
            <td>
              <el-input
                type="text"
                v-model="form.M0014_USER_NAME"
                size="small"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td class="bg-td">归属部门：</td>
            <td>
              <el-select
                v-model="form.M0016_ID"
                size="small"
                style="width:100%"
              >
                <el-option
                  v-for="item in mechans"
                  :key="item.M0016_ID"
                  :label="item.M0016_DEPART_NAME"
                  :value="item.M0016_ID"
                ></el-option>
              </el-select>
              <!-- <el-input
                type="text"
                v-model="form.DEPART_NAME"
                size="small"
              ></el-input> -->
            </td>
            <td class="bg-td">职务：</td>
            <td>
              <el-select
                v-model="form.M0015_ID"
                size="small"
                style="width:100%"
              >
                <el-option
                  v-for="item in positions"
                  :key="item.M0015_ID"
                  :label="item.M0015_DUTY_NAME"
                  :value="item.M0015_ID"
                ></el-option>
              </el-select>
              <!-- <el-input
                type="text"
                v-model="form.DUTY_NAME"
                size="small"
              ></el-input> -->
            </td>
          </tr>
          <tr>
            <td class="bg-td">电子邮箱：</td>
            <td>
              <el-form-item prop="M0014_USER_EMAIL">
                <el-input
                  type="text"
                  v-model="form.M0014_USER_EMAIL"
                  size="small"
                ></el-input>
              </el-form-item>
            </td>
            <td class="bg-td">手机号：</td>
            <td>
              <el-form-item prop="M0014_USER_TEL">
                <el-input
                  type="text"
                  v-model="form.M0014_USER_TEL"
                  size="small"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">是否激活：</td>
            <td style="text-align:left">
              <el-switch
                v-model="form.M0014_IS_AVTIVE"
                active-color="#409eff"
                size="small"
                inactive-color="#bbb"
                :disabled="isEdit"
              >
              </el-switch>
            </td>
            <td class="bg-td">原始密码</td>
            <td>
              <el-input
                type="password"
                v-model="form.oldpswd"
                size="small"
                show-password
              ></el-input>
            </td>
          </tr>
          <tr>
            <td class="bg-td">新密码：</td>
            <td>
              <el-form-item prop="newpswd">
                <el-input
                  type="password"
                  v-model="form.newpswd"
                  size="small"
                  show-password
                ></el-input>
              </el-form-item>
            </td>
            <td class="bg-td">再次确认新密码：</td>
            <td>
              <el-form-item prop="confirmpswd">
                <el-input
                  type="password"
                  v-model="form.confirmpswd"
                  size="small"
                  show-password
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">备注：</td>
            <td colspan="3">
              <el-input
                type="textarea"
                rows="5"
                v-model="form.M0014_USER_REMARK"
                size="small"
              ></el-input>
            </td>
          </tr>
        </table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="save">确 认</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 我的权限列表 -->
    <el-dialog
      title=">> 我的权限"
      :visible.sync="lookShow"
      :close-on-click-modal="false"
      custom-class="dialog-div"
    >
      <el-row>
        <el-col :span="18" :offset="3">
          <el-main id="authModel">
            <div v-for="item of permisionListData" :key="item.index">
              <p class="tabs">{{ item.M0004_NAME }}</p>
              <table class="perstable authTable">
                <thead>
                  <tr>
                    <th
                      width="10%"
                      style="text-align:center;background:#f5f5f5"
                    >
                      序号
                    </th>
                    <th
                      width="30%"
                      style="text-align:center;background:#f5f5f5"
                    >
                      模块名称
                    </th>
                    <th
                      width="60%"
                      style="text-align:center;background:#f5f5f5"
                    >
                      权限节点
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(child, index) of item.M0004_CHILD" :key="index">
                    <td v-text="index + 1" style="text-align:center">1</td>
                    <td class="chakan" style="text-align:left">
                      <el-checkbox
                        v-model="child.M0004_CHECKED"
                        @change="changeCheck(child)"
                        :disabled="islook"
                        >{{ child.M0004_NAME }}</el-checkbox
                      >
                      <!-- <el-checkbox v-model="child.M0004_CHECKED"></el-checkbox>  @change="handleCheckAllChange" :indeterminate="isIndeterminate"-->
                    </td>
                    <td style="text-align:left">
                      <el-checkbox-group
                        v-model="child.tableForm"
                        @change="changeAuths(child)"
                      >
                        <el-checkbox
                          v-for="item1 in child.M0004_CHILD"
                          :key="item1.$index"
                          :label="item1.M0004_NAME"
                          :disabled="islook"
                        ></el-checkbox>
                      </el-checkbox-group>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-main>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      isUpdate: true,
      lookShow: false,
      addShow: false,
      isEdit: true,
      form: {
        M0014_USER_CODE: '',
        M0014_USER_NAME: '',
        M0016_ID: '',
        M0015_ID: '',
        M0014_USER_EMAIL: '',
        M0014_USER_TEL: '',
        M0014_IS_AVTIVE: false,
        M0014_USER_REMARK: '',
        oldpswd: '',
        newpswd: '',
        confirmpswd: '',
        mytb: true,
        bigdata: false,
        yhCostIn: [],
        yhCostXq: [],
        dayCostIn: [],
        dayCostXq: [],
        techLevel: [],
        assetList: [],
        meters: [],
        highway: [],
        department: [],
        position: [],
        manager: [],
        authority: [],
        M0018_ID: '',
        M0014_ID: '',
        M0016_ID_PRE: '',
        M0015_ID_PRE: '',
      },
      permisionListData: [],
      islook: true,
      tokenID: '',
      userId: '',
      tip: '',
      rules: {
        M0014_USER_EMAIL: [
          // { required: true, message: '请输入电子邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
        ],
        M0014_USER_TEL: [
          // { required: true, message: '请输入电话号码', trigger: 'blur' },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: '请输入11位手机号码',
            trigger: 'blur',
          },
        ],
        newpswd: [
          {
            min: 6,
            max: 50,
            message: '密码长度在 6 到 50 个字符',
            trigger: 'blur',
          },
          {
            pattern: /^(\w){6,50}$/,
            message: '只能输入6-50个字母、数字、下划线',
            trigger: 'blur',
          },
        ],
      },
      mechans: [],
      positions: [],
    }
  },
  mounted() {
    this.getPermission()
    this.loadMsg()
    this.getState()
    this.loadSelect()
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
        { M0018_ID: sessionStorage.getItem('id') },
        null,
        (res) => {
          console.log(res)
          res.data.forEach((v) => {
            if (
              v.M0004_NAME === '修改' &&
              (v.M0005_STATE === '1' || v.M0005_STATE === 1)
            ) {
              this.isUpdate = false
            }
          })
        }
      )
    },
    // 获取部门和职位数据
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
    findChild(currentItem, list) {
      currentItem.M0004_CHILD = []
      // eslint-disable-next-line no-unneeded-ternary
      currentItem.M0004_CHECKED =
        currentItem.M0005_STATE === '1' || currentItem.M0005_STATE === 1
          ? true
          : false
      list.forEach((v) => {
        if (currentItem.M0004_ID === v.M0004_PID) {
          if (v.M0004_LEVEL !== 3 && v.M0004_LEVEL !== '3' && !v.M0004_CHILD) {
            this.findChild(v, list)
          }
          currentItem.M0004_CHILD.push(v)
        }
      })
    },
    getPermission() {
      this.form.M0018_ID = sessionStorage.getItem('id')
      // this.userId = JSON.parse(sessionStorage.getItem('currentUser')).UserId
      // this.$api.post('/cycle/roleGroupManagement/getPermissionByRoleId?ID=' + this.userId, {}, null, r => {
      //   this.permisionListData = r.data.filter(v => v.M0004_LEVEL === '1' || v.M0004_LEVEL === 1)
      //   this.permisionListData.forEach(v => {
      //     this.findChild(v, r.data)
      //   })
      // })
      this.$api.post(
        '/cycle/roleGroupManagement/getPermissionByTokenId',
        { M0018_ID: this.form.M0018_ID },
        null,
        (r) => {
          this.permisionListData = r.data.filter(
            (v) => v.M0004_LEVEL === '1' || v.M0004_LEVEL === 1
          )
          this.permisionListData.forEach((v) => {
            this.findChild(v, r.data)
          })
          this.setTableForm()
          // console.log(this.permisionListData)
        }
      )
    },
    setTableForm(send) {
      // 无send表示发送前，有send表示发送后
      this.listPromision = []
      this.permisionListData.forEach((v) => {
        if (v.M0004_CHILD && v.M0004_CHILD.length > 0) {
          v.M0004_CHILD.forEach((v1) => {
            if (!send) {
              v1.tableForm = []
            }
            if (v1.M0004_CHILD && v1.M0004_CHILD.length > 0) {
              v1.M0004_CHILD.forEach((v2) => {
                if (!send && (v2.M0005_STATE === '1' || v2.M0005_STATE === 1)) {
                  v1.tableForm.push(v2.M0004_NAME)
                }
                v2.M0005_STATE = v1.tableForm.includes(v2.M0004_NAME) ? 1 : 0
                v1.M0005_STATE = v1.tableForm.length > 0 ? 1 : 0
                v1.M0004_CHECKED = !!v1.M0005_STATE
                v.M0005_STATE = v1.M0005_STATE
                this.listPromision.push(v2)
              })
            }
            this.listPromision.push(v1)
          })
          this.listPromision.push(v)
        }
      })
    },
    save() {
      this.form.M0014_ID = JSON.parse(
        sessionStorage.getItem('currentUser')
      ).UserId
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.newpswd === this.form.confirmpswd) {
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
            // this.$api.post('/cycle/userManagement/updatePassword?userId=' +this.userId +'&oldPassword=' +this.form.oldpswd +'&newPassword=' +this.form.newpswd,
            this.$api.post(
              '/cycle/userManagement/updateInformation',
              this.form,
              null,
              (r) => {
                console.log(r)
                if (r.msg === 'success') {
                  Message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success',
                  })
                  this.cancel()
                } else {
                  Message({
                    showClose: true,
                    message: '原密码错误',
                    type: 'warning',
                  })
                }
              }
            )
          } else {
            Message({
              showClose: true,
              message: '两次密码不一致',
              type: 'warning',
            })
            return false
          }
        } else {
          return false
        }
      })
    },
    openDialog(type) {
      if (type === 'look') {
        this.lookShow = true
      }
      if (type === 'edit') {
        // 判断选择框内是否返回了0,如果是0就为空
        if (this.form.M0016_ID === '0' || this.form.M0016_PID === 0) {
          this.form.M0016_ID = ''
        }
        if (this.form.M0015_ID === '0' || this.form.M0016_PID === 0) {
          this.form.M0015_ID = ''
        }
        // 把M0016_ID和M0015_ID存起来
        this.form.M0016_ID_PRE = this.form.M0016_ID
        this.form.M0015_ID_PRE = this.form.M0015_ID
        // 解决编辑的时候展示的是ID,而不是名字
        this.form.M0016_ID = this.form.DEPART_NAME
        this.form.M0015_ID = this.form.DUTY_NAME
        this.isEdit = true
        this.addShow = true
        let userId = JSON.parse(sessionStorage.getItem('currentUser')).UserId
        // this.$api.post(
        //   '/cycle/userManagement/selectById?ID=' + userId,
        //   {},
        //   null,
        //   (r) => {
        //     if (r.data.M0014_IS_AVTIVE === 1) {
        //       r.data.M0014_IS_AVTIVE = true
        //     } else {
        //       r.data.M0014_IS_AVTIVE = false
        //     }
        //     this.form = r.data
        //   }
        // )
      }
    },
    cancel() {
      this.$refs['form'].resetFields()
      this.form = {}
      this.addShow = false
      this.isEdit = false
      this.loadMsg()
    },
    loadMsg() {
      let userId = JSON.parse(sessionStorage.getItem('currentUser')).UserId
      this.$api.post(
        '/cycle/userManagement/selectById?ID=' + userId,
        {},
        null,
        (r) => {
          console.log(r)
          if (r.data.M0014_IS_AVTIVE === 1) {
            r.data.M0014_IS_AVTIVE = true
          } else {
            r.data.M0014_IS_AVTIVE = false
          }
          this.form = r.data
        }
      )
    },
  },
}
</script>
<style lang="scss">
// #personal {
//   .el-dialog__header {
//     background: #f5f5f5;
//   }
//   .tbTitle {
//     padding: 0 30px;
//   }
//   .tabs {
//     padding: 8px 30px;
//     background: rgb(76, 195, 165);
//     color: #fff;
//   }
//   .authTable {
//     margin: 20px 0 30px 0;
//   }
//   .tbWrap {
//     background: #fff;
//     padding: 30px 0;
//     margin: 20px 0 50px 0;
//   }
//   .perstable {
//     width: 100%;
//     border-collapse: collapse;
//     border: 1px solid #dcdfe6;

//     tr {
//       border: 1px solid #dcdfe6;
//       td,
//       th {
//         border: 1px solid #dcdfe6;
//         padding: 5px 10px;
//         text-align: left !important;
//       }
//     }
//     .bg-td {
//       background: #f0f0f0;
//       text-align: center;
//     }
//     //   .el-col-18 {
//     //   width: 90%;
//     // }
//     // .el-col-offset-3 {
//     //   margin-left: 0 !important;
//     // }
//   }
// }
#personal {
  // .el-dialog__body{
  //   padding-top:0 !important;
  // }
  .el-col-18 {
    width: 100%;
  }
  .el-col-offset-3 {
    margin-left: 0;
  }
  .el-dialog__header {
    background: #f5f5f5;
  }
  .tbTitle {
    padding: 0 30px;
  }
  .tabs {
    text-align: center;
    padding: 8px 30px;
    background: rgb(76, 195, 165);
    color: #fff;
    width: 160px;
  }
  .authTable {
    margin: 20px 0 30px 0;
  }
  .tbWrap {
    background: #fff;
    padding: 30px 0;
    margin: 20px 0 50px 0;
  }
  .perstable {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dcdfe6;
    tr {
      border: 1px solid #dcdfe6;
      td,
      th {
        border: 1px solid #dcdfe6;
        padding: 10px 10px;
        text-align: center;
      }
    }
    .bg-td {
      background: #f0f0f0;
      text-align: center;
    }
  }
}
</style>
