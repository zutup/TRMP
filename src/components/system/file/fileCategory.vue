<template>
  <div>
      <router-view></router-view>
       <img
        src="@/assets/css/images/file.svg"
        alt=""
        style="width: 45px; height: 45px; vertical-align: middle"
      />
      <b> 文件分类</b>
      <br /><br />
      <el-card >
        <el-row>
           <tree-table 
          show-index 
          index-text="#" border 
          :selection-type=false 
          :expand-type=false 
          :data="catelist" 
          :columns="columns"
          >
          <template slot="isok" slot-scope="scope">
            <i class="el-icon-success" v-if="scope.row.cat_deleted === false" style="color: lightgreen"></i>
            <i class="el-icon-error" style="color: red" v-else></i>
          </template>
          <template slot="opt" slot-scope="scope">
            <el-button type="danger" @click="removeCate(scope.row.cat_id)" icon="el-icon-delete" round size="mini"> 删除 </el-button>
          </template>
          </tree-table>
           <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[3, 5, 10, 15]"
          :page-size="queryInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
        </el-row>
         
      </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      catelist: [
        {
          cat_id: "1",
          cat_name: "视频文件",
          cat_pid: "0",
          cat_level: "0",
          cat_deleted: false,
          children: [
            {
              cat_id: "11",
              cat_name: "mp4文件",
              cat_pid: "1",
              cat_level: "1",
              cat_deleted: false,
              children: [
                {
                  cat_id: "11",
                  cat_name: "数据结构.mp4",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
                {
                  cat_id: "11",
                  cat_name: "计算机组成原理.mp4",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
              ],
            },
            {
              cat_id: "12",
              cat_name: "avi文件",
              cat_pid: "1",
              cat_level: "1",
              cat_deleted: false,
              children: [
                {
                  cat_id: "21",
                  cat_name: "计算机网络.avi",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
                {
                  cat_id: "22",
                  cat_name: "操作系统.avi",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
              ],
            },
          ],
        },
        {
          cat_id: "2",
          cat_name: "图片文件",
          cat_pid: "0",
          cat_level: "0",
          cat_deleted: false,
          children: [
            {
              cat_id: "21",
              cat_name: "jpg文件",
              cat_deleted: false,
              children: [
                {
                  cat_id: "11",
                  cat_name: "111.jpg",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: true,
                },
              ],
            },
            {
              cat_id: "24",
              cat_name: "png文件",
              cat_pid: "1",
              cat_level: "1",
              cat_deleted: false,
              children: [
                {
                  cat_id: "76",
                  cat_name: "aag.png",
                  cat_deleted: false,
                },
              ],
            },
            {
              cat_id: "23",
              cat_name: "svg文件",
              cat_pid: "1",
              cat_level: "1",
              cat_deleted: false,
              children: [
                {
                  cat_id: "91",
                  cat_name: "panda.svg",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
              ],
            },
          ],
        },
        {
          cat_id: "3",
          cat_name: "office文件",
          cat_pid: "1",
          cat_level: "1",
          cat_deleted: false,
          children: [
            {
              cat_id: "31",
              cat_name: "word文件",
              cat_pid: "1",
              cat_level: "1",
              cat_deleted: false,
              children: [
                {
                  cat_id: "18",
                  cat_name: "数据结构.doc",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
                {
                  cat_id: "15",
                  cat_name: "计算机体系结构.docx",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
              ],
            },
            {
              cat_id: "32",
              cat_name: "excel文件",
              cat_pid: "1",
              cat_level: "1",
              cat_deleted: false,
              children: [
                {
                  cat_id: "86",
                  cat_name: "成绩单.xlsx",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
                {
                  cat_id: "51",
                  cat_name: "计算机导论.xlsx",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
              ],
            },
            {
              cat_id: "33",
              cat_name: "ppt文件",
              cat_pid: "1",
              cat_level: "1",
              cat_deleted: false,
              children: [
                {
                  cat_id: "16",
                  cat_name: "开题报告.ppt",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
                {
                  cat_id: "63",
                  cat_name: "中期报告.ppt",
                  cat_pid: "3",
                  cat_level: "2",
                  cat_deleted: false,
                },
              ],
            },
          ],
        },
      ],
      total: 3,//TODO默认0
      columns: [
        {
          label: '类别',
          prop: 'cat_name'
        },
        {
          label:'是否有效',
          type: 'template',
          template: 'isok'
        },
         {
          label:'操作',
          type: 'template',
          template: 'opt'
        }
      ]
    }
  },
  created(){
    this.getCateList()
  },
  methods: {
    //获取列表数据
    async getCateList(){
      const {data :res } = await this.$http.get("cataList");
      if(res.meta.status !== 200){
        return this.$message.error("获取文件分类列表失败");
      }
      this.cataList = res.data;
    },
    async removeCate(id){
      const confirmResult = await this.$confirm("删除此类文件，是否继续？","删除分类",{
        confirmButtonText: '确定',
        cancelButtonTest: '取消',
        type: 'warning'
      }).catch(err => err)
      if(confirmResult !== 'confirm'){
        return this.$message.info('已取消删除操作')
      }
      const {data: res} = await this.$http.delete('categories/' + id)
      if(res.meta.status !== 200){
        return this.$message("文件类别删除失败!")
      }
      this.$message.success("该文件类别已删除！")
      this.getCateList()
    },
     // 监听pagesize改变
    handleSizeChange(newValue) {
      this.queryInfo.pagesize = newValue
      this.getCateList()
    },
    // 监听页码的改变
    handleCurrentChange(newpage) {
      this.queryInfo.pagenum = newpage
      this.getCateList()
    },
  }
}
</script>

<style>

</style>