<template>
  <el-container class="head-container">
    <el-header>
      <div>
        <img src="../assets/css/images/logo2.png" alt="" />
        <span>教学资源管理系统&nbsp;&nbsp;<small>控制台</small></span>
      </div>
      <!-- <el-button class="button" type="primary" round plain @click="logoutPtf"
        >退出控制台</el-button
      > -->

      <el-dropdown>
        <el-avatar
          :src="require('../assets/css/images/panda.jpg')"
          style="margin-right: 20px"
        ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="gohome()">返回首页</el-dropdown-item>
          <el-dropdown-item @click.native="logoutPtf()"
            >退出控制台</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <!-- 侧边 -->
      <el-aside width="250px">
        <h1 style="font-size: 18px; margin-top: 25px; margin-bottom: 45px">
          <b>使用概况</b>
        </h1>
        <el-tooltip
          class="item"
          effect="dark"
          content="已有成员账号数"
          placement="right"
        >
          <el-progress
            type="circle"
            :percentage="30"
            :format="format1"
          ></el-progress>
        </el-tooltip>
        <p><small>成员账号（共10个）</small></p>
        <el-divider></el-divider>
        <el-progress
          type="circle"
          :percentage="1"
          :format="format2"
        ></el-progress>
        <p><small>存储空间（共100GB）</small></p>
        <el-divider></el-divider>
        <el-progress type="circle" :format="format3"></el-progress>
        <p><small>文件(夹)数量</small></p>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logoutPtf() {
      this.$router.push("/system");
    },
    gohome() {
      //清空token
      window.sessionStorage.clear();
      this.$router.push("/home");
    },
    format1(num) {
      num = 3; //后台数据
      return `已用` + num + "个";
    },
    format2(storage) {
      storage = 23.45; //后台数据
      return `已用` + storage + "MB";
    },
    format3(fileNum) {
      fileNum = 17; //后台数据
      return fileNum + "个";
    },
  },
};
</script>

<style lang="less" scoped>
.head-container {
  height: 100%;
}
.cardimgs {
  width: 64px;
  height: 64px;
}
.card {
  height: 300px;
  border-radius: 3%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  width: 400px;
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
.button {
  position: absolute;
  right: 6%;
}
.el-aside {
  background-color: #edeff1;
  text-align: center;
  // height: 100vh !important;
}
.el-main {
  background-color: #f5f7f8;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
