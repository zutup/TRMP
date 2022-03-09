<template>
  <el-container class="home_container">
    <!-- 头部信息 -->
    <el-aside>
      <div>
        <span>威胁情报分析系统</span>
      </div>
      <el-menu
        :default-active="$router.path"
        class="el-menu-demo"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#409eff"
        router
      >
            <template slot="title"><i class="el-icon-folder"></i>文件</template>
            <!-- 二级菜单 -->
            <el-menu-item index="mine">
              <template slot="title"
                ><i class="el-icon-s-cooperation"></i>我的</template
              >
            </el-menu-item>
            <el-menu-item index="ownFile">
              <template slot="title"
                ><i class="el-icon-s-custom"></i>个人文件</template
              >
            </el-menu-item>
        <!-- <router-link to="/workbench/person"> person </router-link> -->
        <el-submenu index="1">
          <template slot="title">我的工作台</template>
          <el-menu-item index="/datacharts/resourceChart" router>个人中心</el-menu-item>
          <el-menu-item index="/datacharts/storageChart" router
            >提交历史</el-menu-item
          >
          <el-menu-item index="/datacharts/stuchart" router
            >分析结果</el-menu-item
          >
        </el-submenu>
        <el-menu-item index="install">数据流程</el-menu-item>
        <el-menu-item index="cnvd">CNVD</el-menu-item>
        <el-menu-item index="message">消息中心</el-menu-item>
      </el-menu>
      <el-menu>
        <el-menu-item index="link"
          ><a href="https://attack.mitre.org/" target="_blank"
            >ATT&CK</a
          ></el-menu-item
        >
      </el-menu>
      <el-button type="info" @click="logout" round>退出</el-button>
    </el-aside>
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
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  color: aliceblue;
  font-size: 20px;
  div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 10px;
  }
}

.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.el-button {
  right: 100%;
  color: #46485f;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
