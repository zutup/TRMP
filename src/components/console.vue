<template>
  <el-container class="head-container">
    <!-- 头部区域 --><router-view
    ></router-view>
    <el-header>
      <div>
        <img src="../assets/css/images/logo2.png" alt="" />
        <span>教学资源管理系统&nbsp;&nbsp;<small>控制台</small></span>
      </div>
      <el-button type="primary" round plain @click="logoutPtf"
        >退出控制台</el-button
      >
    </el-header>
    <el-container>
      <el-aside width="250px">
        <h4>使用概况</h4>
        <el-tooltip
          class="item"
          effect="dark"
          content="已有成员账号数"
          placement="right"
        >
        <el-progress
          type="circle"
          :percentage="15"
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
      <el-main>
        <router-view></router-view>
        <h4>功能模块</h4>
        <el-row :gutter="6">
          <el-col
            :span="8"
            v-for="(items, indexs) in cardListrow1"
            :key="indexs"
            class="cardListrow1"
          >
            <el-card shadow="hover" class="card" @click.native="gotoManagement(items.path)">
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
        <el-row :gutter="12">
          <el-col :span="8" v-for="item in cardListrow2" :key="item.func">
            <el-card shadow="hover" class="card">
              <p class="cardfont">{{ item.func }}</p>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      cardListrow1: [
        {
          img: require("../assets/css/images/account.png"),
          title: "账号管理",
          text: "当前登录账号管理",
          path: 'accountManage'
        },
        {
          img: require("../assets/css/images/groups.png"),
          title: "群组管理",
          text: "创建群组、解散群组、群组成员管理",
          path:"groupsManage"
        },
        {
          img: require("../assets/css/images/users.png"),
          title: "用户管理",
          text: "平台用户管理",
          path: "userManage"
        },
      ],
      cardListrow2: [{ func: "1" }, { func: "2" }, { func: "3" }]
    };
  },
  methods: {
    logoutPtf() {
      this.$router.push("/system");
    },
    format1(num) {
      num = 1; //后台数据
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
    jump(index,path){
      
    },
    gotoManagement(path) {
      if(path == 'accountManage')
      this.$router.push('/management/accountManage');
      else if(path == 'groupsManage')
      this.$router.push('/management/groupsManage');
      else if(path == 'userManage')
      this.$router.push('/management/userManage');
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
.el-aside {
  background-color: #edeff1;
  text-align: center;
}
.el-main {
  background-color: #f5f7f8;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
