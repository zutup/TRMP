<template>
  <div>
    <div class="head">
      <img
        src="@/assets/css/images/ownFile.png"
        alt=""
        style="width: 45px; height: 45px; vertical-align: middle"
      />
      <b> 个人文件</b>
      <br /><br />
      <el-button>新建</el-button>
      <el-button type="primary">上传</el-button>
      <el-button
        type="danger"
        style="display: none/block"
        id="dbtn"
        class="batchDelete"
        @click="batchDelete()"
        >批量删除</el-button
      >
      <el-dialog
        title="批量删除"
        :visible.sync="deleteUserFormVisible"
        width="30%"
        class="deleteUserForm"
      >
        <span>是否批量删除文件?</span>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" @click="deleteUserFormVisible = false"
            >取 消</el-button
          >
          <el-button size="mini" type="primary" @click="submitDeleteUser"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <br />
    <el-card class="mycard" style="height: 740px">
      <el-table
        :data="tableData"
        style="width: 100%"
        ref="multipleTable"
        highlight-current-row
        @selection-change="handleSelectionChange"
        @current-change="handleCurrentChange"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="名称" sortable width="900">
          <template slot-scope="scope" class="rowText">
            <i></i>
            <div class="icon">
              <img
                class="fileimg"
                src="@/assets/css/images/fileimg.png"
                alt=""
              />
            </div>
            <div class="text">
              <b class="rowname" @click="preview(scope.row.name)">{{
                scope.row.name
              }}</b>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="修改时间" sortable width="180">
        </el-table-column>
        <el-table-column prop="storage" label="大小" sortable>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              icon="el-icon-edit"
              circle
              plain
            ></el-button>
            <el-button
              type="danger"
              plain
              icon="el-icon-delete"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              circle
            ></el-button>
            <el-button
              type="success"
              plain
              icon="el-icon-share"
              circle
              @click="getShareLink(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="warning"
              plain
              icon="el-icon-download"
              @click="download(scope.row.name)"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      title="文件重命名"
      :visible.sync="editFormVisible"
      :close-on-click-modal="false"
      class="edit-form"
      center
    >
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item label="名称" prop="Name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
          <el-input
            v-model="editForm.date"
            auto-complete="off"
            :disabled="true"
          ></el-input>
          <el-input
            v-model="editForm.storage"
            auto-complete="off"
            :disabled="true"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="handleCancel('editForm')">取 消 </el-button>
        <el-button type="primary" @click.native="handleUpdate('editForm')"
          >更 新 </el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="文件分享" :visible.sync="dialogShareFormVisible" center>
      <el-form :model="form" ref="form">
        <el-form-item label="分享链接：" :label-width="formLabelWidth">
          <el-input v-model="form"> </el-input>
        </el-form-item>
        <el-form-item
          label="链接有效期至："
          :rules="{
            required: true,
          }"
        >
          <el-col :span="11" class="timeCol">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
              required
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11" class="timeCol">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="提取码：">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogShareFormVisible = false"
          round
          plain
          >确 定</el-button
        >
      </div>
      <div slot="footer">tips: 若分享的文件是视频或音频,有效期仅为一小时</div>
    </el-dialog>
  </div>
</template>

<script>
import PreviewFile from "../../PreviewFile.vue";
const axios = require("axios");
export default {
  components: {
    PreviewFile, //组件注册
  },
  data() {
    return {
      tableData: [
        {
          date: "2022-05-02",
          name: "Resource_Systems.pdf",
          storage: "2568KB",
        },
        {
          date: "2022-03-04",
          name: "毕业设计开题报告.doc",
          storage: "168KB",
        },
        {
          date: "2022-03-01",
          name: "毕业实习报告.pdf",
          storage: "68KB",
        },
        {
          date: "2022-04-03",
          name: "compressed_tracemonkey.pdf",
          storage: "1648KB",
        },
        {
          date: "2022-03-13",
          name: "2022毕业设计相关文档模板.zip",
          storage: "708KB",
        },
      ],
      form: {
        name:''
      },
      editForm: {
        name: "",
        date: "",
        storage: "",
        index: 0,
      },
      //定义属性
      name: undefined,
      date: undefined,
      storage: undefined,
      editFormVisible: false,
      multipleSelection: [],
      dialogShareFormVisible: false,
    };
  },
  methods: {
    handleEdit: function (index, row) {
      this.editFormVisible = true; //dialog对话窗口打开
      this.editForm = Object.assign({}, row); //将数据传入dialog页面
      this.editForm.index = index; //传递当前index
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleCancel(formName) {
      this.editFormVisible = false;
    },
    handleUpdate(formName) {
      //dialog页面数据写入到tableData页面上
      //this.$set(tableName,talbeIndex,data)
      this.$set(this.tableData, this.editForm.index, {
        name: this.editForm.name,
        date: this.editForm.date,
        storage: this.editForm.storage,
      });
      this.editFormVisible = false;
    },
    handleSelectionChange(val) {
      var deletebtn = document.getElementById("dbtn");
      deletebtn.style.opacity = 1;
      this.multipleSelection = val;
    },
    //TODO 文件损坏
    download(item) {
      axios({
        url: "http://localhost:8080/static/pdf/web/viewer.html?file=" + item,
        method: "GET",
        responseType: "blob",
        headers: {
          "Content-Type": "application/json; application/octet-stream",
        },
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileUrl;

        fileLink.setAttribute("download", item);
        document.body.appendChild(fileLink);

        fileLink.click();
        URL.revokeObjectURL(fileUrl);
        // resolve(response);
      });
    },
    batchDelete() {
      this.deleteUserFormVisible = true;
      for (var i = 0; i < this.multipleSelection.length; i++) {
        var j = i;
        var name = this.multipleSelection[j].name;
        this.tableData.push(name);
      }
      this.tableData = this.tableData.toString();
    },

    // 提交删除用户
    submitDeleteUser() {
      // this.deleteMenuFormVisible = false;
      let param = {
        token: this.$store.state.token,
        name: this.tableData,
      };
      //clientDelete为接口
      clientDelete(param).then((res) => {
        if (res.data.respCode == "200") {
          this.$message.success(res.data.respDesc);
        } else {
          this.$message.error(res.data.respDesc);
        }
        this.reload();
      });
    },
    preview(name) {
      window.open("/static/pdf/web/viewer.html?file=" + name);
    },
    getEditName(name, date, storage) {
      this.editForm.name = name;
      this.editForm.date = date;
      this.editForm.storage = storage;
    },
    getShareLink: function (index,row) {
      this.dialogShareFormVisible = true; //dialog对话窗口打开
      var url = Object.assign({}, row); 
      var fileurl = "http://localhost:8080/static/pdf/web/viewer.html?file="
      this.form = fileurl + url.name //将数据传入dialog页面
      // console.log(url)
    },
  },
};
</script>

<style lang="less" scoped>
.fileimg {
  width: 40px;
  height: 37px;
}
.rowText {
  display: table-cell;
  text-align: center;
}
.icon,
.text {
  display: table-cell;
  vertical-align: middle;
  margin-right: 5px;
}
.opbutton {
  display: table-cell;
  vertical-align: middle;
  margin-right: 15px !important;
}
.share {
  opacity: 1;
  display: table-cell;
  vertical-align: middle;
  > .shareimg {
    width: 25px;
    height: 30px;
  }
}
// .share:hover{
//   opacity: 1;
// }
.svg {
  width: 100px;
}
.dialog-footer {
  margin-bottom: 20px;
  margin-top: -40px;
}
.rowname {
  cursor: pointer;
}
.batchDelete {
  opacity: 0;
}
.batchDelete1 {
  opacity: 1;
}
.timeCol {
  width: 230px;
}
.line {
  width: 5px;
}
</style>
