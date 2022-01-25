<template>
    <div>
        <router-view ></router-view>
        <el-menu-item index="welcome" >首页</el-menu-item>
    <el-breadcrumb separator="/" >
        <el-breadcrumb-item :to="{ path: '/Welcome' }">欢迎页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Welcome' }">我的工作台</el-breadcrumb-item>
        <el-breadcrumb-item>分析结果</el-breadcrumb-item>
    </el-breadcrumb>
    <br><br>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="情报 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="情报名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="危险等级">
            <span>{{ props.row.level }}</span>
          </el-form-item>
          <el-form-item label="情报类型">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="开发厂商">
            <span>{{ props.row.firm }}</span>
          </el-form-item>
          <el-form-item label="情报类别">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="情报编号"
      prop="id">
    </el-table-column>
    <el-table-column
      label="情报名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="类别"
      prop="desc">
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          id: '01',
          name: 'requests ',
          category: '资源管理错误',
          desc: '远程',
          firm: 'Google',
          level: '高危'
        }, {
          id: '02',
          name: 'ZEIT Next.js',
          category: '其他',
          desc: '本地',
          firm: 'MircoSoft',
          level: '中等'
        }]
      }
    }
  }
</script>

<style scoped>
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