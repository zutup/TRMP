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
        style="margin-left: 55%"
        clearable
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-autocomplete>
      <!-- <el-button type="info" round @click="logout" plain>退出登录</el-button> -->
      <el-dropdown>
        <!-- <b style="color:white">admin</b> -->
        <el-avatar
          :src="require('../assets/css/images/panda.jpg')"  
          style="margin-right: 20px"
          :fit="fill"
        ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout()">退出登录</el-dropdown-item>
          <el-dropdown-item @click.native="dialog = true"
            >个人信息</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
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
          :default-active="$route.path"
          :default-openeds="['system', 'datacharts']"
          background-color="#f7f7f7"
        >
          <el-menu-item index="/system/file/mine">
            <template slot="title"
              ><i class="el-icon-s-custom"></i>主页</template
            >
          </el-menu-item>

          <el-submenu index="system">
            <template slot="title"><i class="el-icon-folder"></i>文件</template>
            <el-menu-item
              :index="'/system/file/' + item.index"
              v-for="item in menuList"
              :key="item.id"
            >
              <template slot="title"
                ><i :class="item.icon"></i>{{ item.authName }}</template
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
            <template slot="title"
              ><i class="el-icon-s-data"></i>数据报表</template
            >
            <el-menu-item
              :index="'/system/datacharts/' + item.url"
              router
              v-for="item in chartList"
              :key="item.id"
              ><i :class="item.icon"></i>{{ item.chartName }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主题 -->
      <el-main>
        <!-- 路由占位符 -->
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <el-drawer
          title="个人信息"
          :before-close="handleClose"
          :visible.sync="dialog"
          direction="rtl"
          custom-class="drawer"
          ref="drawer"
          style="text-align:center"
        >
          <div class="ddrawer_content">
            <!-- TODO头像接口 -->
            <!-- <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            > -->
            <!-- <i class="el-icon-plus avatar-uploader-icon"  @click="selectFile"></i> -->
            <!-- TODO图片路径 -->
              <img :src="require('../assets/css/images/panda.jpg')" v-show="img" class="avatar" @click="selectFile"/>
              <input type="file" ref="file" style="display:none;" @change="fileChange">
            <!-- </el-upload> -->
            <br>
            <el-form :model="form">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" :label-width="formLabelWidth">
                <el-input v-model="form.mobile" autocomplete="off"></el-input>
              </el-form-item>
               <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off" show-password></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.email" autocomplete="off" disabled></el-input>
              </el-form-item>
              <el-form-item label="组群" :label-width="formLabelWidth">
                <el-input v-model="form.group" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div class="drawer_footer">
              <el-button @click="cancelForm">返 回</el-button>
              <el-button
                type="primary"
                @click="$refs.drawer.closeDrawer()"
                :loading="loading"
                >{{ loading ? "提交中 ..." : "确 定" }}</el-button
              >
            </div>
          </div>
        </el-drawer>
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
      //左侧菜单数据
      menuList: [
        {
          id: "1",
          authName: "我的文件",
          index: "ownFile",
          icon: "el-icon-s-cooperation",
        },
        {
          id: "2",
          authName: "与我协作",
          index: "cooperate",
          icon: "el-icon-connection",
        },
        {
          id: "3",
          authName: "最近使用",
          index: "recent",
          icon: "el-icon-time",
        },
        {
          id: "4",
          authName: "常用文件",
          index: "usual",
          icon: "el-icon-star-on",
        },
        {
          id: "5",
          authName: "文件分类",
          index: "fileCategory",
          icon: "el-icon-files",
        },
        {
          id: "6",
          authName: "回收站",
          index: "recycleBin",
          icon: "el-icon-delete-solid",
        },
        
      ],
      chartList: [
        {
          id: "101",
          chartName: "资源点击",
          url: "resourceChart",
          icon: "iconfont icon-ziyuan",
        },
        {
          id: "102",
          chartName: "存储使用",
          url: "storageChart",
          icon: "iconfont icon-yuncunchu",
        },
        {
          id: "103",
          chartName: "站点访问",
          url: "stuchart",
          icon: "iconfont icon-xuexi",
        },
      ],
      dialog: false,
      img: '../assets/css/images/panda.jpg',
      loading: false,
      form: {
        name: "zxc",
        mobile: "19939707043",
        password: '123456',
        email: "1252536388@qq.com",
        group: "计科181",
      },
      formLabelWidth: "80px",
      timer: null,
    };
  },
  created() {
    // this.getMenuList()
    // this.getChartList()
  },
  methods: {
    selectFile(){
      this.$refs.file.click()
    },
    // 文件选择后触发
    fileChange(e){
      // 通过DOM取文件数据
      const file = this.$refs.file.files[0]
      // 计算文件大小 KB
      const size = Math.floor(file.size / 1024)
      // 显示本地图片
      this.img = window.URL.createObjectURL(file)

      // 使用 FormData 构建表单数据
      const formData = new FormData()
      formData.append('file', file)
      // 这里使用 axios 上传文件
      this.$axios.post('common/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        // ...
      })
    },
    logout() {
      this.$router.push("/home");
    },
    //获取菜单数据
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.data.status !== 200) return this.$message.error(res.mata.msg);
      this.menuList = res.data;
    },
    //获取图表数据
    async getChartList() {
      const { data: res } = await this.$http.get("charts");
      if (res.data.status !== 200) return this.$message.error(res.meta.msg);
      this.chartList = res.data;
    },
    loadAll() {
      return [
        { value: "期末成绩单", format: "Word" },
        { value: "职位名单", format: "Word" },
        { value: "期末试题", format: "ppt" },
        { value: "教学书籍", format: "txt" },
        { value: "题库", format: "zip" },
        { value: "教学课程表", format: "xslx" },
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
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定修改个人信息吗？")
        .then((_) => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            this.$message({
              type:"success",
              message:"修改成功"
            })
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 1000);
        })
        .catch((_) => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  overflow-x: hidden !important;
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    margin-left: 30%;
    cursor: pointer;
  }
.el-main {
  background-color: #f7f7f7;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.iconfont {
  padding-right: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
