<template>
  <el-dialog
    title="文件重命名"
    :visible.sync="dialogEditFormVisible"
    :close-on-click-modal="false"
    class="edit-form"
    center
  >
    <el-form :model="editForm" label-width="80px" ref="editForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="editForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="修改日期" prop="date">
        <el-input
          v-model="editForm.date"
          auto-complete="off"
          :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item label="大小" prop="storage">
        <el-input
          v-model="editForm.storage"
          auto-complete="off"
          :disabled="true"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <!-- <el-button @click.native="handleCancel('editForm')">取消</el-button> -->
      <el-button type="primary" @click.native="handleUpdate('editForm')"
        >确认</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
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
      form: {},
      editForm: {
        name: "",
        date: "",
        storage: "",
        index: 0,
      },
      name: undefined,
      multipleSelection: [],
      dialogEditFormVisible: false,
    };
  },
  methods:{
      handleUpdate(forName) {
      //dialog页面数据写入到tableData页面上
      //this.$set(tableName,talbeIndex,data)
      this.$set(this.tableData, this.editForm.index, {
        name: this.editForm.name
      });
      this.dialogEditFormVisible = false;
    },
  }
};
</script>

<style></style>
