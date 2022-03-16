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
      <el-button>新建 </el-button>
      <!-- <el-dialog :visible.sync="uploadDlg" title="文件上传">
        <el-dropdown class="upload-drop" trigger="hover">
        <el-button
          type="primary"
          icon="el-icon-upload2"
          id="uploadFileId"
          style="margin-left:15px;margin-right:15px"
          >上传<i class="el-icon-arrow-down el-icon--right"></i
        ></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handleUploadFileBtnClick()">
            <el-upload
              class="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button class="uploadbtn" size="small" type="primary"
                >点击上传</el-button
              >
            </el-upload>
          </el-dropdown-item>
          <el-dropdown-item @click.native="handleUploadFileBtnClick()">
            <el-upload
              class="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button class="uploadbtn" size="small" type="primary"
                >上传文件夹</el-button
              ></el-upload>
            </el-dropdown-item
          >
          <el-dropdown-item
            @click.native="pullUpload()"
            title="截图粘贴或拖拽上传"
            :disabled="screenWidth <= 520"
            ><el-button class="uploadbtn" size="small" type="primary"
                >拖拽上传</el-button></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      </el-dialog> -->

      <el-button
        type="primary"
        @click="uploadShow()"
        style="margin-right: 10px"
      >
        <i class="el-icon-upload"></i>上传
      </el-button>
      <el-dialog :visible.sync="uploadDlg" title="文件上传">
        <uploader
          :options="options"
          class="uploader-example"
          :limit="3"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-exceed="handleExceed"
          multiple
          @files-added="handleFilesAdded"
        >
          <uploader-unsupport></uploader-unsupport>
          <uploader-drop>
            <uploader-btn style="border: none">上传文件</uploader-btn>
            <uploader-btn :directory="true" style="border: none"
              >上传文件夹</uploader-btn
            >
            <el-button
              @click.native="pullUpload()"
              style="backgroundcolor: #f5f5f5"
              size="medium"
              >拖拽上传</el-button
            >
          </uploader-drop>
          <uploader-list v-show="panelShow">
            <template v-slot:default="props">
              <div class="file-panel">
                <div class="file-title">
                  <span class="title-span">
                    上传列表<span class="count"
                      >（{{ props.fileList.length }}）</span
                    >
                  </span>
                </div>
                <!-- 正在上传的文件列表 -->
                <el-collapse-transition>
                  <ul class="file-list" v-show="!collapse">
                    <li
                      class="file-item"
                      :class="{ 'custom-status-item': file.statusStr !== '' }"
                      v-for="file in props.fileList"
                      :key="file.id"
                    >
                      <uploader-file
                        ref="fileItem"
                        :file="file"
                        :list="true"
                      ></uploader-file>
                      <!-- 自定义状态 -->
                      <span class="custom-status">{{ file.statusStr }}</span>
                    </li>
                    <div class="no-file" v-if="!props.fileList.length">
                      <i class="icon-empty-file"></i> 暂无待上传文件
                    </div>
                  </ul>
                </el-collapse-transition>
              </div>
            </template>
          </uploader-list>
        </uploader>
      </el-dialog>

      <el-dialog
        :visible.sync="uploadDialog"
        width="40%"
        style="text-align: center"
      >
        <el-upload
          class="upload"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-dialog>
      <el-button
        type="danger"
        style="display: none/block"
        id="dbtn"
        class="batchDelete"
        @click="batchDelete()"
        >批量删除</el-button
      >
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
        <el-table-column prop="name" label="名称" sortable width= "700">
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
        <el-table-column prop="date" label="修改时间" sortable width="280">
        </el-table-column>
        <el-table-column prop="storage" label="大小" sortable width="200">
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
          >确 定
        </el-button>
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
      options: {
        target: `http://localhost:8082/system/file/ownFile`, // 上传文件-目标 URL
        chunkSize: 1024 * 1024, //  每个分片的大小
        fileParameterName: "file", //  上传文件时文件的参数名，默认 file
        maxChunkRetries: 3, //  并发上传数，默认 3
        testChunks: true, //  是否开启分片已存在于服务器的校验
        // 服务器分片校验函数，秒传及断点续传基础
        // checkChunkUploadedByResponse: function (chunk, message) {
        // 	let objMessage = JSON.parse(message)
        // 	if (objMessage.success) {
        // 		let data = objMessage.data
        // 		if (data.skipUpload) {
        // 			// 分片已存在于服务器中
        // 			return true
        // 		}
        // 		return (data.uploaded || []).indexOf(chunk.offset + 1) >= 0
        // 	} else {
        // 		console.log(objMessage.message)
        // 		return true
        // 	}
        // },
        query() {},
        multipleSelection: [],
      },
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
        name: "",
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
      dialogShareFormVisible: false,
      uploadDialog: false,
      panelShow: false,
      uploadDlg: false,
      fileStatusText: {
        success: "上传成功",
        error: "error",
        uploading: "上传中",
        paused: "暂停中",
        waiting: "等待中",
      },
    };
  },
  created() {
    this.tableData.map((i) => {
      i.show = false;
      return i;
    });
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
      this.$message({
        type: "success",
        message: "删除成功，可在回收站查看!",
      });
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
      this.$message({
        type: "success",
        message: "文件重命名成功",
      });
    },
    handleSelectionChange(val) {
      var deletebtn = document.getElementById("dbtn");
      deletebtn.style.opacity = 1;
      this.multipleSelection = val;
    },
    //TODO文件损坏
    download(item) {
      axios({
        url: "http://localhost:8082/static/pdf/web/viewer.html?file=" + item,
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
      for (let i = 0; i < this.tableData.length; i++) {
        const element = this.tableData[i];
        element.id = i;
      }
      if (this.multipleSelection.length == 0)
        this.$message.error("请先至少选择一项");

      this.$confirm("此操作会删除这些文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.multipleSelection.forEach((element) => {
            this.tableData.forEach((e, i) => {
              if (element.id == e.id) {
                this.tableData.splice(i, 1);
              }
            });
          });
          this.$message({
            type: "success",
            message: "批量删除成功，可在回收站查看!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleFilesAdded() {
      this.panelShow = true;
    },
    // 提交删除用户
    // submitDeleteUser() {
    //   // this.deleteMenuFormVisible = false;
    //   let param = {
    //     token: this.$store.state.token,
    //     name: this.tableData,
    //   };
    //   //clientDelete为接口
    //   clientDelete(param).then((res) => {
    //     if (res.data.respCode == "200") {
    //       this.$message.success(res.data.respDesc);
    //     } else {
    //       this.$message.error(res.data.respDesc);
    //     }
    //     this.reload();
    //   });
    // },
    pullUpload() {
      this.uploadDialog = true;
    },
    uploadShow(rootFile, file, response) {
      this.uploadDlg = true;
      if (response == "") {
        file.statusStr = "上传失败";
        this.callback(false);
        return;
      }
      // let result = JSON.parse(response)
      // if (result.success) {
      // 	file.statusStr = ''
      // 	if (this.filesLength === 1) {
      // 		// 本次所有的文件均已上传完毕
      // 		this.$message.success(`上传完毕`)
      // 		this.serviceEl.$emit('getTableDataByType')
      // 		this.serviceEl.$store.dispatch('showStorage')
      // 		this.callback(true)
      // 	}
      // } else {
      // 	this.$message.error(result.message)
      // 	file.statusStr = '上传失败'
      // }
      // this.filesLength--
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    preview(name) {
      window.open("/static/pdf/web/viewer.html?file=" + name);
    },
    getEditName(name, date, storage) {
      this.editForm.name = name;
      this.editForm.date = date;
      this.editForm.storage = storage;
    },
    getShareLink: function (index, row) {
      this.dialogShareFormVisible = true; //dialog对话窗口打开
      var url = Object.assign({}, row);
      var fileurl = "http://localhost:8080/static/pdf/web/viewer.html?file=";
      this.form = fileurl + url.name; //将数据传入dialog页面
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
/deep/ .el-dialog {
  border-radius: 8px;
}
.uploadbtn {
  background-color: white;
  border: none;
  color: black;
  width: 100%;
  font-size: 14px;
  text-align: center;
}
.uploadbtn:hover {
  background-color: rgb(235, 247, 252);
  color: rgb(89, 193, 235);
}
</style>
