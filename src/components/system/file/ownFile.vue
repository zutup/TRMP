<template>
  <div>
    <div class="head">
      <img
        src="@/assets/css/images/ownFile.png"
        alt=""
        style=" width: 45px;height: 45px;vertical-align:middle"
      />
      <b> 个人文件</b>
      <br /><br />
      <el-button>新建</el-button>
      <el-button type="primary">上传</el-button>
    </div>
    <br />
    <el-card class="mycard" style="height:740px">
      <el-table
      :data="tableData"
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="name" label="名称" sortable width="1080">
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
            <b class="rowname" @click="preview(scope.row.name)">{{ scope.row.name }}</b>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="修改时间" sortable width="180">
      </el-table-column>
      <el-table-column prop="storage" label="大小" sortable> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    </el-card>
    
    <!-- <el-dialog title="预览" :visible.sync="previewFileShow" width="80%" :before-close="handleClose" style="height:auto">
      <PreviewFile :file="previewFile" v-if="previewFileShow"></PreviewFile>
    </el-dialog> -->
  </div>
</template>

<script>
import PreviewFile from "../../PreviewFile.vue";
export default {
  components: {
    PreviewFile, //组件注册
  },
  data() {
    return {
      tableData: [
        {
          date: "2022-05-02",
          name: "Resource.Management.in.Networked.Multimedia.Systems.pdf",
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
          name: "compressed.tracemonkey-pldi-09.pdf",
          storage: "1648KB",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
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
    preview(name){
      window.open('/static/pdf/web/viewer.html?file=' + name);
    }
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
.rowname{
  cursor: pointer;
}
</style>
