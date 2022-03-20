<template>
  <div>
     <img
        src="@/assets/css/images/home.svg"
        alt=""
        style="width: 45px; height: 45px; vertical-align: middle"
      />
      <b> 主页 </b>
      <br><br>
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
    <el-card class="mycard">
      <div>
        <img class="emptyimg" src="@/assets/css/images/empty.jpg" alt="" />
        <p class="null">暂无数据</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
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
    };
  },
};
</script>

<style lang="less" scoped>
.mycard {
  box-shadow: 0 1px rgba(0, 0, 0, 0.15) !important;
  border-radius: 1%;
  text-align: center;
  vertical-align: middle;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
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
