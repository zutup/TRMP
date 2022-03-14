<template>
  <el-container class="head-container">
    <el-main>
      <img
        src="@/assets/css/images/recent.svg"
        alt=""
        style=" width: 45px;height: 45px;vertical-align:middle"
      />
      <b> 最近使用系统功能</b>
      <el-row :gutter="0" class="row">
        <el-col
          :span="6"
          v-for="(items, indexs) in cardListrow1"
          :key="indexs"
          class="cardListrow1"
        >
          <el-card
            shadow="hover"
            class="card"
            @click.native="gotoManagement(items.path)"
          >
            <div>
              <img :src="items.img" class="cardimgs" />
              <p class="title">
                <strong>{{ items.title }}</strong>
              </p>
              <p class="text">{{ items.text }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-divider></el-divider> -->
      <el-row :gutter="0">
        <el-col :span="6" v-for="item in cardListrow2" :key="item.func">
          <el-card shadow="hover" class="card">
            <p class="cardfont">{{ item.func }}</p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      cardListrow1: [
        {
          img: require("@/assets/css/images/my.svg"),
          title: "我的账户",
          path: "mine",
        },
        {
          img: require("@/assets/css/images/ownFile.png"),
          title: "个人文件",
          path: "ownFile",
        },
        {
          img: require("@/assets/css/images/cooperate.png"),
          title: "与我协作",
          path: "cooperate",
        },
        {
          img: require("@/assets/css/images/recent.svg"),
          title: "最近使用",
          path: "recent",
        },
      ],
      cardListrow2: [{ func: "" }, { func: "" }, { func: "" }, { func: "" }],
    };
  },
  methods: {
    gotoManagement(path) {
      if (path == "mine") this.$router.push("/system/file/mine");
      else if (path == "ownFile") this.$router.push("/system/file/ownFile");
      else if (path == "cooperate") this.$router.push("/system/file/cooperate");
      else if (path == "recent") this.$router.push("/system/file/recent");
    },
  },
};
</script>

<style lang="less" scoped>
.head-container {
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
  margin:0;
  padding: 0 10px; /* 给gutter留padding */
}
.cardimgs {
  width: 64px;
  height: 64px;
}
.card {
  height: 250px;
  border-radius: 15%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  width: 250px;
  opacity: 0.8;
  background: -webkit-gradient(
    linear,
    0% 100%,
    10% 0%,
    from(#85c5eb),
    to(#f6f6f8)
  );
}
.card:hover {
  box-shadow: 0 0 50px rgba(55, 55, 56, 0.3) !important;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  height: 260px;
  width: 255px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  background-color: #fcfcfc;
  align-items: center;
  color: rgb(0, 0, 0);
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    span {
      margin-left: 15px;
    }
    small {
      font-size: 14px;
    }
  }
}
.el-aside {
  background-color: #edeff1;
  text-align: center;
}
.row {
  margin-top: 5%;
  margin-bottom: 5%;
}
.el-row {
  left: 20px;
}
.el-main {
  background-color: #f5f7f8;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
