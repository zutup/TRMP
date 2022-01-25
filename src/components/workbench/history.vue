<template>

    <div>
        <router-view ></router-view>
        <el-menu-item index="welcome" >首页</el-menu-item>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }">欢迎页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Welcome' }">我的工作台</el-breadcrumb-item>
        <el-breadcrumb-item>提交历史</el-breadcrumb-item>
    </el-breadcrumb>
    <br><br>
    <div class="tableMain">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="请报名称" width="180"></el-table-column>
        <el-table-column prop="format" label="格式"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 点击编辑进入编辑页面进行编辑表格数据 -->
            <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
    </div>
</template>

<script>
    export default {
    data() {
      return {
        loading: true,
        tableData: [{
          date: '2019-06-02',
          name: 'ZEIT Next',
          format: 'zip',
          tag: '高危'
        }, {
          date: '2020-06-04',
          name: 'Oracle GlassFish',
          format: 'sql',
          tag: '中等'
        }, {
          date: '2021-06-01',
          name: 'pandorafms',
          format: 'html',
          tag: '一般'
        }, {
          date: '2021-06-29',
          name: 'Linux kernel',
          format: 'tar',
          tag: '高危'
        }],
         nameList: [
        { name: "ZEIT Next" },
        { name: "Oracle GlassFish" },
        { name: "pandorafms" },
        { name: "Linux kernel" },
      ],
      dialogFormVisible: false,
      formLabelWidth: "80px",
      // 设置form用于进行添加的时候绑定值
      form: {},
      value6: "",
      currentPage3: 1,
      currentIndex: ""
      }
    },
    created() {
    //延时1.5s
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
    methods: {
      showTime() {
      this.$alert(this.value6, "起止时间", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: "已显示"
          });
        }
      });
    },
    handleDelete(index, row) {
      // 设置类似于console类型的功能
      this.$confirm("永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.format;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style scoped>
.text {
    font-size: 18px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>