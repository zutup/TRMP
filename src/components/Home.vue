<template>
  <el-container class="home_container">
    <!-- 头部信息 -->
    <el-header>
      <div>
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
        <el-menu-item index="welcome">首页</el-menu-item>
        <!-- <el-menu-item index="center">产品</el-menu-item> -->
        <!-- <el-menu-item index="repository">攻击知识库</el-menu-item> -->
        <!-- <router-link to="/workbench/person"> person </router-link> -->
        <!-- <el-submenu index="1">
          <template slot="title">我的工作台</template>
          <el-menu-item index="/mine" router>个人中心</el-menu-item>
          <el-menu-item index="/workbench/history" router
            >提交历史</el-menu-item
          >
          <el-menu-item index="/workbench/analysis" router
            >分析结果</el-menu-item
          >
        </el-submenu>
        <el-menu-item index="install">数据流程</el-menu-item> -->
        <!-- <el-menu-item index="cnvd">CNVD</el-menu-item> -->
         <!--<el-menu-item index="message">消息中心</el-menu-item> -->
      </el-menu>
      <el-button type="info" round @click="register" plain>立即注册</el-button>
      <el-button  type="primary" round @click="login" plain>登 录</el-button>
    </el-header>
    <el-container>
      <!-- 主体区域 -->
      <el-main>
        <!-- 路由占位,切换渐变 -->
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
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
    }
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  background-color: #373d3f;
  align-items: center;
  color: rgb(255, 255, 255);
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
      margin-left: 25px;
    }
  }
}
.el-main {
  background-color: #eaedf1;
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
