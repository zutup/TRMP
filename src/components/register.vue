<template>
  <div>
    <el-header>
      <div class="title">
        <img
          src="../assets/css/images/logo2.png"
          alt=""
          style=" width: 65px;height: 65px"
        />
        <span>教学资源管理平台</span>
      </div>
      <el-menu
        :default-active="$router.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#409eff"
        router
      >
        <el-menu-item @click="goToAnchor('#sharing')"
          >文件存储共享</el-menu-item
        >
        <el-menu-item @click="goToAnchor('#search')">文件查阅</el-menu-item>
        <el-menu-item @click="goToAnchor('#management')">文件管理</el-menu-item>
        <el-menu-item @click="goToAnchor('#preview')">文件预览</el-menu-item>
      </el-menu>
      <el-button type="info" round @click="register" plain class="reg"
          >立即注册</el-button
        >
        <el-button type="primary" round @click="login" plain>登 录</el-button>
    </el-header>
    <el-main>
      <transition name="fade" mode="out-in"> </transition>
      <router-view></router-view>
      <div id="sharing">
        <img src="../assets/css/images/share.png" alt="" />
      </div>
      <div id="search">
        <img src="../assets/css/images/searchimg.png" alt="" />
      </div>
      <div id="management">
        <img src="../assets/css/images/management.png" alt="" />
      </div>
      <div id="preview">
        <img src="../assets/css/images/video.png" alt="" />
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // window.sessionStorage.clear();
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    goToAnchor(selector) {
      this.$el.querySelector(selector).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  width: 100%;
  background-color: #373d3f;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 20px;
  z-index: 999; //最上层显示
  position: fixed;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  span {
    margin-left: 25px;
  }
}
.title {
  display: flex;
  align-items: center;
  width: 300px;
}
.el-menu {
  width: 70%;
}
.el-menu-item {
  font-size: 15px;
}
.el-main {
  background-color: #ffffff;
}
.iconfont {
  padding-right: 10px;
}
.toggle-button {
  background: #4a5064;
  font-size: 10px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
