/* * @Author: liuhaosheng * @Description：资产列表管理 */
<template>
  <div class="assets-wrap">
    <p class="title-p">
      <span style="display:inline-block;margin-bottom:20px;">
        >> 资产列表管理
      </span>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="addFun"
        :disabled="isAdd"
        >新增</el-button
      >
    </p>
    <div class="content">
      <div class="table-div">
        <el-table
          v-loading.body="loading"
          :data="tableData"
          border
          style="width: 100%"
          highlight-current-row
          @select="selectTable"
          @select-all="selectAll"
          :header-cell-style="{ background: '#f0f0f0' }"
        >
          >
          <el-table-column type="selection" width="40"> </el-table-column>
          <el-table-column label="序号" width="50" align="center">
            <template scope="scope"
              ><span>{{ scope.$index + 1 }}</span></template
            >
          </el-table-column>
          <el-table-column
            prop="T0002_ASSET_NAME"
            label="桥梁类型"
            show-overflow-tooltip
            min-width="70"
          >
          </el-table-column>
          <el-table-column
            prop="T0001_ASSETTYPE_NAME"
            label="部位"
            show-overflow-tooltip
            min-width="70"
          >
          </el-table-column>
          <el-table-column prop="T0002_ASSET_AMOUNT" label="部件名称"
            min-width="70">
          </el-table-column>
          <el-table-column prop="T0002_LOAD_NAME" label="部件权重"
            min-width="70">
          </el-table-column>
          <el-table-column prop="T0002_TECH_STATE" label="部位等级">
          </el-table-column>
          <el-table-column prop="T0002_ASSET_DATE" label="备注" width="120">
          </el-table-column>
          <el-table-column fixed="right" width="150" label="操作">
            <template slot-scope="scope">
              <el-button
                type="info"
                size="mini"
                @click="handleInfo(scope.row)"
                :disabled="isChaxun"
                >查看</el-button
              >
              <el-button
                type="primary"
                size="mini"
                :disabled="isEdit"
                @click="handleEdit(scope.row)"
                >编辑</el-button
              >
              <el-button
                type="danger"
                size="mini"
                :disabled="isDelete"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
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
    </div>
    <!-- 新建 -->
    <el-dialog
      title=">> 新增部件类型"
      :visible.sync="addShow"
      :close-on-click-modal="false"
      custom-class="dialog-div"
    >
      <el-form :model="addForm" :rules="rules" ref="addFormRef">
        <table class="add-table">
          <tr>
            <td class="bg-td">桥梁类型</td>
            <td>
              <el-form-item prop="T0001_ID">
                <el-select
                  v-model="addForm.T0001_ID"
                  size="small"
                  style="width:96%;text-indent:5px;"
                >
                  <el-option
                    v-for="item in assetTypeList"
                    :key="item.T0001_ID"
                    :label="item.T0001_ASSETTYPE_NAME"
                    :value="item.T0001_ID"
                  ></el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">部位</td>
            <td colspan="3">
              <el-form-item prop="T0002_LOAD_NAME">
                <el-select
                  v-model="addForm.T0002_LOAD_NAME"
                  style="width:32%;text-indent:5px;"
                  size="small"
                >
                  <el-option
                    v-for="(item, index) in listNameList"
                    :key="index"
                    :label="item.M0010_LOAD_NAME"
                    :value="item.M0010_LOAD_NAME"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">部件名称</td>
            <td>
              <el-form-item prop="T0002_START_PILE">
                <el-input
                  v-model.trim="addForm.T0002_START_PILE"
                  size="small"
                  maxlength="20"
                  style="width:96%;text-indent:5px;"
                ></el-input>
              </el-form-item>
            </td>
            <td class="bg-td">部件权重</td>
            <td>
              <el-form-item prop="T0002_ASSET_AMOUNT">
                <el-input
                  v-model.trim="addForm.T0002_ASSET_AMOUNT"
                  size="small"
                  style="width:96%;text-indent:5px;"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">部位等级</td>
            <td style="text-indent:10px;">
              <el-form-item prop="T0002_LOAD_NAME">
                <el-select
                  v-model="addForm.T0002_LOAD_NAME"
                  style="width:32%;text-indent:5px;"
                  size="small">
                  <el-option
                    v-for="(item, index) in listNameList"
                    :key="index"
                    :label="item.M0010_LOAD_NAME"
                    :value="item.M0010_LOAD_NAME"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
            <td class="bg-td">备注</td>
            <td>
              <el-form-item prop="T0002_DUTY_PERSON">
                <el-input
                  v-model.trim="addForm.T0002_DUTY_PERSON"
                  size="small"
                  maxlength="20"
                  style="width:96%;text-indent:5px;"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addSaveFun">确 认</el-button>
        <el-button @click="addShow = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog
      title=">> 修改资产"
      :visible.sync="editShow"
      :close-on-click-modal="false"
      custom-class="dialog-div"
    >
      <el-form :model="addForm" :rules="rules" ref="addFormRef">
        <table class="add-table">
          <tr>
            <td class="bg-td">桥梁类型</td>
            <td>
              <el-form-item prop="T0001_ID">
                <el-select
                  v-model="addForm.T0001_ID"
                  size="small"
                  style="width:96%;text-indent:5px;"
                >
                  <el-option
                    v-for="item in assetTypeList"
                    :key="item.T0001_ID"
                    :label="item.T0001_ASSETTYPE_NAME"
                    :value="item.T0001_ID"
                  ></el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">部位</td>
            <td colspan="3">
              <el-form-item prop="T0002_LOAD_NAME">
                <el-select
                  v-model="addForm.T0002_LOAD_NAME"
                  style="width:32%;text-indent:5px;"
                  size="small"
                >
                  <el-option
                    v-for="(item, index) in listNameList"
                    :key="index"
                    :label="item.M0010_LOAD_NAME"
                    :value="item.M0010_LOAD_NAME"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">部件名称</td>
            <td>
              <el-form-item prop="T0002_START_PILE">
                <el-input
                  v-model.trim="addForm.T0002_START_PILE"
                  size="small"
                  maxlength="20"
                  style="width:96%;text-indent:5px;"
                ></el-input>
              </el-form-item>
            </td>
            <td class="bg-td">部件权重</td>
            <td>
              <el-form-item prop="T0002_ASSET_AMOUNT">
                <el-input
                  v-model.trim="addForm.T0002_ASSET_AMOUNT"
                  size="small"
                  style="width:96%;text-indent:5px;"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td class="bg-td">部位等级</td>
            <td style="text-indent:10px;">
              <el-form-item prop="T0002_LOAD_NAME">
                <el-select
                  v-model="addForm.T0002_LOAD_NAME"
                  style="width:32%;text-indent:5px;"
                  size="small">
                  <el-option
                    v-for="(item, index) in listNameList"
                    :key="index"
                    :label="item.M0010_LOAD_NAME"
                    :value="item.M0010_LOAD_NAME"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </td>
            <td class="bg-td">备注</td>
            <td>
              <el-form-item prop="T0002_DUTY_PERSON">
                <el-input
                  v-model.trim="addForm.T0002_DUTY_PERSON"
                  size="small"
                  maxlength="20"
                  style="width:96%;text-indent:5px;"
                ></el-input>
              </el-form-item>
            </td>
          </tr>
        </table>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editSaveFun">确 认</el-button>
        <el-button @click="editShow = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 查看 -->
    <el-dialog
      title=">> 查看资产"
      :visible.sync="infoShow"
      custom-class="dialog-div"
    >
      <table class="add-table">
        <tr>
          <td class="bg-td">资产名称：</td>
          <td>
            {{ infoForm.T0002_ASSET_NAME }}
          </td>
          <td class="bg-td">资产类别：</td>
          <td>
            {{ infoForm.T0001_ASSETTYPE_NAME }}
          </td>
        </tr>
        <tr>
          <td class="bg-td">所属路段：</td>
          <td colspan="3">
            {{ infoForm.T0002_LOAD_NAME }}
          </td>
        </tr>
        <tr>
          <td class="bg-td">起点桩号：</td>
          <td>
            {{ infoForm.T0002_START_PILE }}
          </td>
          <td class="bg-td">终点桩号：</td>
          <td>
            {{ infoForm.T0002_END_PILE }}
          </td>
        </tr>
        <tr>
          <td class="bg-td">数量：</td>
          <td>
            {{ infoForm.T0002_ASSET_AMOUNT }}
          </td>
          <td class="bg-td">归属年份：</td>
          <td>
            {{ infoForm.T0002_ASSET_DATE }}
          </td>
        </tr>
        <tr>
          <td class="bg-td">归属公司：</td>
          <td>
            {{ infoForm.T0002_ASSET_COMPANY }}
          </td>
          <td class="bg-td">所属养管公司：</td>
          <td>
            {{ infoForm.T0002_CURING_UNIT }}
          </td>
        </tr>
        <tr>
          <td class="bg-td">责任人：</td>
          <td>
            {{ infoForm.T0002_DUTY_PERSON }}
          </td>
          <td class="bg-td">联系电话：</td>
          <td>
            {{ infoForm.T0002_TOUCH_TEL }}
          </td>
        </tr>
        <tr>
          <td class="bg-td">经度：</td>
          <td>
            {{ infoForm.T0002_ASSET_PRECI }}
          </td>
          <td class="bg-td">纬度：</td>
          <td>
            {{ infoForm.T0002_ASSET_LATI }}
          </td>
        </tr>
        <tr>
          <td class="bg-td">图片：</td>
          <td colspan="3">
            <ul class="ul-img">
              <li
                class="avatar-uploader"
                v-for="(item, index) in imageList"
                :key="index"
              >
                <img :src="item.FILE_URL" class="el-upload avatar" />
                <span class="actions-item">
                  <span>
                    <i
                      class="el-icon-zoom-in"
                      @click.stop="clickImgFun(item)"
                    ></i>
                  </span>
                </span>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="bg-td">费用况详情（备注）：</td>
          <td colspan="3">
            {{ infoForm.T0002_ASSET_REAMRK }}
          </td>
        </tr>
      </table>
      <div slot="footer" class="dialog-footer"></div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    const validOrder = (rule, value, callback) => {
      let reg = /^[1-9]\d*$/
      if (!reg.test(value)) {
        callback(new Error('数量必须是正整数'))
      } else {
        callback()
      }
    }
    // 电话验证
    const validTel = (rule, value, callback) => {
      let regPhone = /^1[3456789]\d{9}$/ // 手机
      // let regTel = /^((0\d{2,3}-\d{7,8})|(1{2}]\d{9}))$/ // 固定
      if (!regPhone.test(value)) {
        callback(new Error('请输入正确的11位联系电话'))
      } else {
        callback()
      }
    }
    // 起点终点桩号
    const validPile = (rule, value, callback) => {
      let reg = /[0-9a-zA-Z]|[+,-]/
      if (!reg.test(value)) {
        callback(new Error('桩号只能输入英文，数字，+，-'))
      } else {
        callback()
      }
    }
    // 经度正则表达式（-180 至 180）
    const validPreci = (rule, value, callback) => {
      let reg = /^-?((0|1?[0-8]?[0-9]?)(([.][0-9]{1,10})?)|180(([.][0]{1,10})?))$/
      if (!reg.test(value)) {
        callback(new Error('请输入正确的经度(-180 至 180)'))
      } else {
        callback()
      }
    }
    // 纬度正则表达式(-90 至 90)
    const validLati = (rule, value, callback) => {
      let reg = /^-?((0|[1-8]?[0-9]?)(([.][0-9]{1,10})?)|90(([.][0]{1,10})?))$/
      if (!reg.test(value)) {
        callback(new Error('请输入正确的纬度(-90 至 90)'))
      } else {
        callback()
      }
    }
    return {
      mapShow: false, // 地图是否显示
      mapData: {
        zoom: 12, // 当前地图缩放比列
        position: [],
        title: [],
        contentRender: (h, instance) => {
          return h(
            'div',
            {
              style: {
                height: '26px',
                lineHeight: '26px',
                background: 'red',
                whiteSpace: 'nowrap',
                color: '#fff',
                letterSpacing: '2px',
                padding: '0 10px',
              },
            },
            this.mapData.title
          )
        },
      },
      loclabel: {
        content: '',
        offset: [10, -20],
      },
      imageList: [],
      imgShow: false,
      imgShowUrl: '', // 预览图片
      imageUrl: '',
      header: {
        TokenId: sessionStorage.getItem('TokenId'), // 上传文件token
      },
      dataParams: {
        ID: '',
        TABLE_NAME: 'ASSET_DATA',
      },
      loading: true,
      addShow: false,
      editShow: false,
      infoShow: false,
      editForm: {},
      addForm: {
        T0002_ASSET_NAME: '',
        T0001_ID: '',
        T0002_LOAD_NAME: '',
        T0002_START_PILE: '',
        T0002_END_PILE: '',
        T0002_ASSET_AMOUNT: '',
        T0002_ASSET_DATE: '',
        T0002_ASSET_COMPANY: '',
        T0002_CURING_UNIT: '',
        T0002_DUTY_PERSON: '',
        T0002_TOUCH_TEL: '',
        T0002_ASSET_PRECI: '',
        T0002_ASSET_LATI: '',
        T0002_ASSET_REAMRK: '',
        M0018_ID: '',
      },
      rules: {
        T0002_ASSET_NAME: [
          { required: true, message: '请填写资产名称', trigger: 'blur' },
        ],
        T0001_ID: [
          { required: true, message: '请选择资产类别', trigger: 'change' },
        ],
        T0002_LOAD_NAME: [
          { required: true, message: '请选择所属路段', trigger: 'change' },
        ],
        T0002_START_PILE: [
          { required: true, message: '请填写起点桩号', trigger: 'blur' },
          { validator: validPile, trigger: 'blur' },
        ],
        T0002_END_PILE: [
          { required: true, message: '请填写起点桩号', trigger: 'blur' },
          { validator: validPile, trigger: 'blur' },
        ],
        T0002_ASSET_AMOUNT: [
          { required: true, message: '请填写数量', trigger: 'blur' },
          { validator: validOrder, trigger: 'blur' },
        ],
        T0002_ASSET_DATE: [
          {
            required: true,
            message: '请选择归属年份',
            trigger: 'change',
          },
        ],
        T0002_CURING_UNIT: [
          { required: true, message: '请填写所属养管公司', trigger: 'blur' },
        ],
        T0002_DUTY_PERSON: [
          { required: true, message: '请填写责任人', trigger: 'blur' },
        ],
        T0002_TOUCH_TEL: [
          { required: true, message: '请填写联系电话', trigger: 'blur' },
          { validator: validTel, trigger: 'blur' },
        ],
        T0002_ASSET_PRECI: [
          { required: true, message: '请填写经度', trigger: 'blur' },
          { validator: validPreci, trigger: 'blur' },
        ],
        T0002_ASSET_LATI: [
          { required: true, message: '请填写纬度', trigger: 'blur' },
          { validator: validLati, trigger: 'blur' },
        ],
      },
      infoForm: {},
      showCount: 10,
      currentPage: 1,
      total: 0,
      searchMap: {
        T0001_ID: '',
        YEAR: '',
        SEARCH_KEY: '',
        T0002_START_PILE: '',
        T0002_END_PILE: '',
        M0018_ID: '',
      },
      tableData: [],
      selectList: [],
      assetTypeList: [], // 资产类别
      listNameList: [], // 所属路段
      pileList: [], // 起点 / 终点桩号
      isSearch: false, // 是否搜索
      searchVal: '', // 显示搜索内容
      isAdd: true,
      isDelete: true,
      isEdit: true,
      isChaxun: true,
    }
  },
  methods: {
    // 请求所有的起点 / 终点桩号
    assetDataFun() {
      this.$api.post(
        '/cycle/assetData/getPileList',
        { M0018_ID: sessionStorage.getItem('id') },
        null,
        (r) => {
          this.pileList = r.data
        }
      )
    },
    // 点击地图
    locationFun(data) {
      console.log(data)
      this.loclabel = {
        content:
          '<div style="background:red;color:#fff;padding:3px;letter-spacing:2px;">' +
          data.T0002_ASSET_NAME +
          '</div>',
        offset: [-20, -22],
      }
      this.mapData.title = []
      this.mapShow = true
      this.mapData.position = [data.T0002_ASSET_PRECI, data.T0002_ASSET_LATI]
      this.mapData.title.push(data.T0002_ASSET_NAME)
    },
    // 根据 资产类别 请求 起点 / 终点桩号
    changeSelect(val) {
      let _data = {
        T0001_ID: val,
        M0018_ID: sessionStorage.getItem('id'),
      }
      this.searchMap.T0002_START_PILE = ''
      this.searchMap.T0002_END_PILE = ''
      this.$api.post('/cycle/assetData/getPileList', _data, null, (r) => {
        this.pileList = r.data
      })
    },
    // 搜索
    searchFun() {
      this.isSearch = true
      this.getAssetList()
    },
    // 重置
    reset() {
      this.isSearch = false
      this.pileList = []
      this.searchMap.T0001_ID = ''
      this.searchMap.YEAR = ''
      this.searchMap.SEARCH_KEY = ''
      this.searchMap.T0002_START_PILE = ''
      this.searchMap.T0002_END_PILE = ''
      this.showCount = 10
      this.currentPage = 1
      this.getAssetList()
    },
    // 分页
    sizeChange(val) {
      this.showCount = val
      this.getAssetList()
    },
    currentChange(val) {
      this.currentPage = val
      this.getAssetList()
    },
    selectTable(selection) {
      this.selectList = selection
    },
    selectAll(selection) {
      this.selectList = selection
    },
    // 添加资产时验证资产是否存在
    isHaveAssets() {
      let _data = {
        M0018_ID: sessionStorage.getItem('id'),
        T0002_ASSET_NAME: this.addForm.T0002_ASSET_NAME,
      }
      console.log(_data)
      this.$api.post('/cycle/assetData/isExist', _data, null, (r) => {
        console.log(r)
        if (r.data === true) {
          this.$message.warning('资产名称已存在，请重新输入')
          this.addForm.T0002_ASSET_NAME = ''
        }
      })
    },
    addFun() {
      this.addShow = true
      this.imageUrl = ''
      this.dataParams.ID = ''
      this.imageList = []
      this.addForm.T0002_ASSET_COMPANY = JSON.parse(
        sessionStorage.getItem('currentUser')
      ).COMPANY_NAME
      // console.log(sessionStorage.getItem('currentUser'))
      this.$nextTick(() => {
        this.$refs['addFormRef'].resetFields()
      })
      this.$api.post(
        `/cycle/utilData/getId`,
        { M0018_ID: sessionStorage.getItem('id') },
        null,
        (r) => {
          this.dataParams.ID = r.data
          this.addForm.T0002_ID = r.data
        }
      )
    },
    // 新增保存
    addSaveFun() {
      this.addForm.M0018_ID = sessionStorage.getItem('id')
      this.$refs['addFormRef'].validate((valid) => {
        if (valid) {
          this.$api.post(`/cycle/assetData/insert`, this.addForm, null, (r) => {
            this.$message.success('新增成功')
            this.getAssetList()
            this.addShow = false
          })
        }
      })
    },
    handleInfo(data) {
      this.infoShow = true
      this.imageList = []
      this.$api.post(
        `/cycle/assetData/selectById?ID=${data.T0002_ID}`,
        {},
        null,
        (r) => {
          this.imageList = r.data.files
          this.infoForm = Object.assign({}, r.data)
          this.infoForm.T0002_ASSET_COMPANY = JSON.parse(
            sessionStorage.getItem('currentUser')
          ).COMPANY_NAME
        }
      )
    },
    handleEdit(data) {
      this.editShow = true
      this.imageUrl = ''
      this.imageList = []
      this.dataParams.ID = data.T0002_ID
      this.$api.post(
        `/cycle/assetData/selectById?ID=${data.T0002_ID}`,
        {},
        null,
        (r) => {
          console.log(r)
          this.imageList = r.data.files
          this.editForm = Object.assign({}, r.data)
          this.editForm.T0002_ASSET_COMPANY = JSON.parse(
            sessionStorage.getItem('currentUser')
          ).COMPANY_NAME
        }
      )
    },
    // 修改保存
    editSaveFun() {
      this.$refs['editFormRef'].validate((valid) => {
        if (valid) {
          this.$api.post(
            `/cycle/assetData/update`,
            this.editForm,
            null,
            (r) => {
              this.$message.success('修改成功')
              this.editShow = false
              this.getAssetList()
            }
          )
        }
      })
    },
    // 获取资产类别 list
    getAssetTypeList() {
      this.$api.post(
        `/cycle/assetType/listAll`,
        { M0018_ID: sessionStorage.getItem('id') },
        null,
        (r) => {
          r.data.forEach((ele) => {
            if (ele.T0001_PID !== '0') {
              ele.T0001_ASSETTYPE_NAME = '--' + ele.T0001_ASSETTYPE_NAME
            }
          })
          this.assetTypeList = r.data
        }
      )
    },
    // 请求select 的所属路段
    getListNameList() {
      this.$api.post(
        '/cycle/load/listLoadName',
        { M0018_ID: sessionStorage.getItem('id') },
        null,
        (r) => {
          this.listNameList = r.data
        }
      )
    },
    // 资产信息list
    getAssetList() {
      this.searchMap.M0018_ID = sessionStorage.getItem('id')
      let _data = {
        currentPage: this.currentPage,
        showCount: this.showCount,
        searchMap: this.searchMap,
      }
      this.$api.post(`/cycle/assetData/listPage`, _data, null, (r) => {
        console.log(r)
        this.loading = false
        for (let i = 0; i < r.data.returnParam.length; i++) {
          if (r.data.returnParam[i].files.length > 0) {
            r.data.returnParam[i].pic = r.data.returnParam[i].files[0].FILE_URL
            r.data.returnParam[i].srcList = []
            for (let k = 0; k < r.data.returnParam[i].files.length; k++) {
              r.data.returnParam[i].srcList.push(
                r.data.returnParam[i].files[k].FILE_URL
              )
            }
          } else {
            r.data.returnParam[i].pic = ''
          }
        }
        this.tableData = r.data.returnParam
        this.total = r.data.totalResult
        this.searchVal = r.search_val
      })
    },
    handleDelete(data) {
      this.$confirm('确定要删除该条记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$api.post(
          `/cycle/assetData/deleteById?ID=${data.T0002_ID}`,
          {},
          null,
          (r) => {
            if (this.tableData.length <= 1) {
              this.currentPage = this.currentPage - 1
            }
            this.$message.success('删除成功')
            this.getAssetList()
          }
        )
      })
    },
    // 批量删除
    delListFun() {
      let _list = []
      if (this.selectList.length > 0) {
        for (let i = 0; i < this.selectList.length; i++) {
          _list.push(this.selectList[i].T0002_ID)
        }
        this.$confirm('确定要删除这些记录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.$api.post(
            `/cycle/assetData/deleteByIds?IDS=${_list}`,
            {},
            null,
            (r) => {
              if ((this.tableData.length = this.selectList.length)) {
                this.currentPage = this.currentPage - 1
              }
              this.$message.success('删除成功')
              this.getAssetList()
              this.selectList = []
            }
          )
        })
      } else {
        this.$message.warning('请选择要删除的数据！')
      }
    },
    // 文件状态改变
    imgChange(file) {
      if (this.dataParams.ID === '') {
        this.$message.warning('请先增加资产信息')
        return false
      }
      this.imageUrl = URL.createObjectURL(file.raw)
      if (file.size > 5 * 1024 * 1024) {
        this.$message.warning('上传图片不能超过 5MB')
        return false
      }
      this.uploadImgFun(file)
    },
    // 上传文件
    uploadImgFun(file) {
      let param = new FormData()
      param.append('files', file.raw)
      param.append('ID', this.dataParams.ID)
      param.append('TABLE_NAME', this.dataParams.TABLE_NAME)
      this.$api.post(`/cycle/fileInfo/uploadFile`, param, null, (r) => {
        this.$message.success('上传图片成功')
        this.imageUrl = ''
        this.getAssetList()
        this.imageList.push(Object.assign({}, r.data[0]))
      })
    },
    clickImgFun(data) {
      this.imgShowUrl = data.FILE_URL
      this.imgShow = true
    },
    clickDeleteFun(data) {
      this.$confirm('确定要删除该图片?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$api.post(
          `/cycle/fileInfo/deleteById?ID=${data.M0013_ID}`,
          {},
          null,
          (r) => {
            this.$message.success('删除成功')
            this.getAssetList()
            this.imageList = this.imageList.filter((item) => {
              return item.M0013_ID !== data.M0013_ID
            })
          }
        )
      })
    },
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
  },
  created() {
    this.getAssetTypeList()
    this.getAssetList()
    this.getListNameList()
    this.assetDataFun()
    this.getState()
  },
}
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
