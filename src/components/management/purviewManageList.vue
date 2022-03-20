<template>
  <div>
    <router-view></router-view>
     <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:16px">
      <el-breadcrumb-item :to="{ path: '/console' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br><br>
    <el-card class="box-card">
      <!-- 用户列表 -->
      <el-table :data="rightsList" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="name" label="权限名称"></el-table-column>
        <el-table-column prop="route" label="路径"></el-table-column>
        <el-table-column prop="level" label="等级">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.level === '0'">一级</el-tag>
            <el-tag type="warning" v-else-if="scope.row.level === '1'">二级</el-tag>
            <el-tag type="danger" v-else>三级</el-tag>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <!-- <el-pagination
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        @size-change="handleSizeChange"
        :page-size="queryInfo.pagesize"
        :page-sizes="[5, 9, 13, 15]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userData.total"
      >
      </el-pagination> -->
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      rightsList: [
        {
          name:'',
          route: '',
          level: ''
        }
      ]
    }
  },
  created(){
    this.getRightsList()
  },
  methods:{
    //获取权限列表
    async getRightsList(){
      const {data: res} = await this.$http.get('rights/list')
      if(res.meta.status != 200 ){
        return this.$message.error('获取权限列表失败')
      }
      this.rightsList = res.data
    }
  }
}
</script>

<style>

</style>