<template>
  <div>
    <div class="head">
      <img
        src="@/assets/css/images/cooperate.png"
        alt=""
        style=" width: 45px;height: 45px;vertical-align:middle; border-radius:5px"
      />
      <b> 与我协作</b>
      <br /><br />
      <el-button type="primary">新建协作组</el-button>
    </div>
    <br />
    <el-card class="mycard">
      <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="学号">
              <span>{{ props.row.stuId }}</span>
            </el-form-item>
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="课题">
              <span>{{ props.row.task }}</span>
            </el-form-item>
            <el-form-item label="导师">
              <span>{{ props.row.sir }}</span>
            </el-form-item>

            <el-form-item label="负责部分">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="班级" prop="class"> </el-table-column>
      <el-table-column label="姓名" prop="name"> </el-table-column>
      <el-table-column label="职位" prop="desc"> </el-table-column>
    </el-table>
    </el-card>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          class: "计科181",
          name: "邹先辰",
          task: "教学资源管理系统——前端开发",
          desc: "前端开发",
          sir: "吴志刚",
          stuId: "201808064322",
        },
        {
          class: "计科182",
          name: "王强强",
          task: "教学资源管理系统——全文检索",
          desc: "全文检索",
          sir: "吴志刚",
          stuId: "201808064322",
        },
        {
          class: "计科181",
          name: "李炫良",
          task: "教学资源管理系统——后端开发",
          desc: "后端开发",
          sir: "吴志刚",
          stuId: "201808064322",
        },
        {
          class: "软件181",
          name: "赵江龙",
          task: "教学资源管理系统——资源处理",
          desc: "资源处理",
          sir: "吴志刚",
          stuId: "201808064322",
        },
      ],
    };
  },
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
