<template>
    <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/css/images/logo2.png" alt="" />
        <span>教学资源管理系统</span>
      </div>
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="搜索文件"
        @select="handleSelect"
        style=" margin-left:55%;" 
        clearable
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-autocomplete>
      <el-button type="info" round @click="logout" plain>退出登录</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="$router.path"
          :default-openeds="['system', 'datacharts']"
          background-color="#f7f7f7"
        >
          <!-- 一级菜单 -->
          <el-submenu index="system">
            <!-- 图标、文本 -->
            <template slot="title"><i class="el-icon-folder"></i>文件</template>
            <!-- 二级菜单 -->
            <el-menu-item index="/system/file/mine">
              <template slot="title"
                ><i class="el-icon-s-cooperation"></i>我的账户</template
              >
            </el-menu-item>
            <el-menu-item index="/system/file/ownFile">
              <template slot="title"
                ><i class="el-icon-s-custom"></i>个人文件</template
              >
            </el-menu-item>
            <el-menu-item index="/system/file/cooperate">
              <template slot="title"
                ><i class="el-icon-connection"></i>与我协作</template
              >
            </el-menu-item>
            <el-menu-item index="/system/file/recent">
              <template slot="title"
                ><i class="el-icon-time"></i>最近使用</template
              >
            </el-menu-item>
            <el-menu-item index="/system/file/usual">
              <template slot="title"
                ><i class="el-icon-star-on"></i>常用文件</template
              >
            </el-menu-item>
            <el-menu-item index="/system/file/recycleBin">
              <template slot="title"
                ><i class="el-icon-delete-solid"></i>回收站</template
              >
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/system/message"
            ><i class="el-icon-message"></i>消息</el-menu-item
          >
          <el-menu-item index="/console"
            ><i class="el-icon-s-tools"></i>控制台</el-menu-item
          >
          <el-submenu index="datacharts">
            <template slot="title"><i class="el-icon-s-data"></i>数据报表</template>
            <el-menu-item index="/system/datacharts/resourceChart" router
            ><i class="iconfont icon-ziyuan"></i>资源点击</el-menu-item
          >
          <el-menu-item index="/system/datacharts/storageChart" router
            ><i class="iconfont icon-yuncunchu"></i>存储使用</el-menu-item
          >
          <el-menu-item index="/system/datacharts/stuchart" router
            ><i class="iconfont icon-xuexi"></i>站点访问</el-menu-item
          >
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主题 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
    };
  },
  methods: {
    logout() {
      this.$router.push("/home");
    },
    loadAll() {
      return [
        { value: "期末成绩单", format: "Word" },
        { value: "职位名单", format: "Word" },
        { value: "期末试题", format: "ppt" },
        { value: "教学书籍", format: "txt" },
        { value: "题库", format: "zip" },
        { value: "教学课程表", format: "xslx" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1200 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  overflow-x: hidden !important
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
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #f7f7f7;
}
.el-main {
  background-color: #f7f7f7;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.iconfont {
  padding-right: 10px;
}
</style>
