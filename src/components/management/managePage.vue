<template>
  <div>
    <h1 style="font-size: 18px; margin-top: 5px; margin-bottom: 45px">
      <b>功能模块</b>
    </h1>
    <el-row :gutter="6" style="margin-left: 65px">
      <el-col
        :span="8"
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
    <el-divider></el-divider>
    <el-row :gutter="6" style="margin-left: 65px">
      <el-col
        :span="8"
        v-for="(items, indexs) in cardListrow2"
        :key="indexs"
        class="cardListrow2"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardListrow1: [
        {
          img: require("@/assets/css/images/account.png"),
          title: "用户管理",
          text: "平台用户信息管理",
          path: "userManage",
        },
        {
          img: require("@/assets/css/images/purview.svg"),
          title: "权限管理",
          text: "设置用户角色，用户权限管理",
          path: "purviewManage",
        },
        {
          img: require("@/assets/css/images/menu.svg"),
          title: "菜单管理",
          text: "系统功能菜单管理",
          path: "menuManage",
        },
      ],
      cardListrow2: [
        {
          img: require("@/assets/css/images/notice.svg"),
          title: "公告管理",
          text: "系统公告通知管理",
          path: "noticeManage",
        },
        {
          img: require("@/assets/css/images/journal.svg"),
          title: "日志管理",
          text: "平台登录、操作日志管理",
          path: "journalManage",
        },
        {
          img: require("@/assets/css/images/purviewList.svg"),
          title: "权限列表",
          text: "系统各个等级权限一目了然",
          path: "purviewManageList",
        },
      ],
    };
  },
  methods: {
    gotoManagement(path) {
      if (path == "userManage") this.$router.push("/management/userManage");
      else if (path == "purviewManage")
        this.$router.push("/management/purviewManage");
      else if (path == "menuManage")
        this.$router.push("/management/menuManage");
      else if (path == "noticeManage")
        this.$router.push("/management/noticeManage");
      else if (path == "journalManage")
        this.$router.push("/management/journalManage");
      else if (path == "purviewManageList")
        this.$router.push("/management/purviewManageList");
    },
  },
};
</script>

<style lang="less" scoped>
.cardimgs {
  width: 64px;
  height: 64px;
}
.card {
  height: 300px;
  border-radius: 5%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  width: 400px;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 0 50px rgba(184, 184, 194, 0.3) !important;
  -webkit-transform: scale(1.0001);
  transform: scale(1.0001);
}
</style>
