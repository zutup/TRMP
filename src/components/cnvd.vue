<template>
  <div>
    <!-- <img
      src="../assets/css/images/loudong.png"
      style="width: 40px;height: 40px"
    /> -->
    <!-- <h3>热点漏洞</h3> -->
    <el-carousel :interval="4000" type="card" height="420px">
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <a href="https://www.cnvd.org.cn/">
          <img
            :src="item.src"
            style="height:100%;width:100%;"
            alt="图片丢失了"
            :title="item.title"
          />
        </a>
      </el-carousel-item>
    </el-carousel>
    <h3>漏洞列表</h3>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      :stripe="true"
      :border="true"
      style="width: 100%"
    >
      <el-table-column label="Id" prop="id"> </el-table-column>
      <el-table-column label="CNVDId" prop="cnvdid"> </el-table-column>
      <el-table-column label="Name" prop="name"> </el-table-column>
      <el-table-column label="level" prop="level"> </el-table-column>
      <el-table-column label="Type" prop="type"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        @current-change="page"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="807" 
       >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total:null,
      tableData: [null], //不加[]有filter报错
      imgList: [
        {
          name: "01",
          src: require("@/assets/css/images/01.jpg"),
          title: "cnvd",
        },
        {
          name: "02",
          src: require("@/assets/css/images/02.jpg"),
        },
        {
          name: "03",
          src: require("@/assets/css/images/welcome1.png"),
        },
        {
          name: "04",
          src: require("@/assets/css/images/welcome.gif"),
        },
      ],
      search: "",
    };
  },
  methods: {
      
      async page(currentPage){
        var resp = await this.$http.get('http://mb1314.ngrok2.xiaomiqiu.cn/cnvd/getInfo?pageNum='+currentPage+'&pageSize=10')
        this.tableData = resp
        this.currentPage = currentPage 
        console.log(this.currentPage)
      },
      
      async getinfo() {
    //const _this = this
      var res = await this.$http.get("http://mb1314.ngrok2.xiaomiqiu.cn/cnvd/getInfo?pageNum=1&pageSize=10")
      this.tableData = res
      },
    //   async getcount() {
    //     var co = await this.$http.get('http://mb1314.ngrok2.xiaomiqiu.cn/cnvd/getCount')
    //     console.log(co)
    //   }
  },
  created() {
    //   this.page();
      this.getinfo();
    //   this.getcount();
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #293b55;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
