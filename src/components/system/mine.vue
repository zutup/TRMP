<template>
  <div>
    <img
      src="@/assets/css/images/home.svg"
      alt=""
      style="width: 45px; height: 45px; vertical-align: middle"
    />
    <b> 主页 </b>
    <el-carousel :interval="5000" type="card" height="420px">
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <a href="https://github.com/zutup/TRMP">
          <img
            :src="item.src"
            style="height: 100%; width: 100%"
            :title="item.title"
            class="image"
          />
        </a>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <!-- 用户信息 -->
      <el-col span="6">
        <el-card shadow="hover" style="height:360px">
          <div style="margin-top:10%">
            <img
              :src="userImg"
              alt=""
              style="border-radius:50%;width:30%;margin-left:20px"
            />
            <div style="float:right;margin-right:100px;">
              <h1 style="font-size:30px;height:20px">admin</h1>
              <p>超级管理员</p>
            </div>
          </div>
          <br />
          <el-divider></el-divider>
          <br />
          <div style="margin-left:20px">
            <small>上次登录时间：<span>2022-3-27</span></small>
            <br />
            <small>上次登录地点：<span>河南省郑州市</span></small>
          </div>
        </el-card>
      </el-col>
      <!-- 图表 -->
      <echart></echart>
    </el-row>
  </div>
</template>

<script>
import Echart from "./datacharts/Echarts.vue";
export default {
  components: {
    Echart,
  },
  data() {
    return {
      imgList: [
        {
          name: "01",
          src: require("@/assets/css/images/wallpaper1.png"),
          title: "",
        },
        {
          name: "01",
          src: require("@/assets/css/images/wel.png"),
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
      userImg: require("@/assets/css/images/panda.jpg"),
      allData: [],
    };
  },
};
</script>

<style lang="less" scoped>
.el-card {
  display: table-cell;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 450px;
  margin: 10%;
}
.image {
  border-radius: 3%;
}
.null {
  text-align: center;
}
.emptyimg {
  vertical-align: middle;
  height: 300px;
  width: 400px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #eaedf1;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #eaedf1;
}
</style>
