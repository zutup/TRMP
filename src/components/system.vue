<template>
  <el-container class="home-container">
    <!-- 侧边栏 -->
    <el-aside width="auto">
      <menu-aside></menu-aside>
    </el-aside>

    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div>
          <el-button
            type="primary"
            @click="handleMenu"
            icon="el-icon-menu"
            size="mini"
            plain
            style="background:none; margin-left:10px;border-color:#8c939d"
          ></el-button>
          <small style="margin-left:15px"> <b> 主 页</b></small>
        </div>
        <div>
          <el-input
            placeholder="搜索文件"
            class="searchClass"
            @click.native="search"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              class="searchButton"
            ></el-button>
          </el-input>
        </div>
        <el-dropdown>
          <!-- <b style="color:white">admin</b> -->
          <!-- 头像 -->
          <el-avatar
            :src="require('../assets/css/images/panda.jpg')"
            style="margin-right: 20px"
            :fit="fill"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout()"
              >退出登录</el-dropdown-item
            >
            <el-dropdown-item @click.native="dialog = true"
              >个人信息</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 主体 -->
      <el-main>
        <!-- 渐变效果 -->
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <!-- 个人信息 -->
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
            <img
              :src="require('../assets/css/images/panda.jpg')"
              v-show="img"
              class="avatar"
              @click="selectFile"
            />
            <input
              type="file"
              ref="file"
              style="display:none;"
              @change="fileChange"
            />
            <!-- </el-upload> -->
            <br />
            <el-form :model="form">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" :label-width="formLabelWidth">
                <el-input v-model="form.mobile" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input
                  v-model="form.password"
                  autocomplete="off"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input
                  v-model="form.email"
                  autocomplete="off"
                  disabled
                ></el-input>
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
        <!-- 搜索对话框 -->
        <el-dialog
          title="全文搜索"
          :visible.sync="searchDialog"
          center
          class="searchDialog"
        >
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
            class="openSearch"
            @click.native="setStyle"
            clearable
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-autocomplete>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import menuAside from "../components/management/menuAside.vue";
import { component as VueContextMenu } from "@xunlei/vue-context-menu";
import { getSystem } from "../api/data.js";
export default {
  name: "system",
  components: { VueContextMenu, menuAside },
  data() {
    return {
      file: [],
      state: "",
      timeout: null,
      dialog: false,
      img: "../assets/css/images/panda.jpg",
      loading: false,
      form: {
        name: "zxc",
        mobile: "19939707043",
        password: "123456",
        email: "1252536388@qq.com",
        group: "计科181",
      },
      formLabelWidth: "80px",
      timer: null,
      contextMenuTarget: null,
      contextMenuVisible: false,
      searchDialog: false,
      tableData: [],
    };
  },
  created() {
    // this.getChartList()
  },
  methods: {
    selectFile() {
      this.$refs.file.click();
    },
    // 文件选择后触发
    fileChange(e) {
      // 通过DOM取文件数据
      const file = this.$refs.file.files[0];
      // 计算文件大小 KB
      const size = Math.floor(file.size / 1024);
      // 显示本地图片
      this.img = window.URL.createObjectURL(file);

      // 使用 FormData 构建表单数据
      const formData = new FormData();
      formData.append("file", file);
      // 这里使用 axios 上传文件
      this.$axios
        .post("common/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          // ...
        });
    },
    search() {
      this.searchDialog = true;
    },
    styleMenu(menu) {
      if (event.clientX > 1800) {
        menu.style.left = event.clientX - 100 + "px";
      } else {
        menu.style.left = event.clientX + 1 + "px";
      }
      document.addEventListener("click", this.foo); // 给整个document新增监听鼠标事件，点击任何位置执行foo方法
      if (event.clientY > 700) {
        menu.style.top = event.clientY - 30 + "px";
      } else {
        menu.style.top = event.clientY - 10 + "px";
      }
    },
    handleMenu() {
      this.$store.commit("collapesMenus");
    },
    click() {
      console.log(this.$route.path);
    },
    logout() {
      //清空token
      window.sessionStorage.clear();
      this.$router.push("/home");
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
      var file = this.file;
      var results = queryString
        ? file.filter(this.createStateFilter(queryString))
        : file;

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
              type: "success",
              message: "修改成功",
            });
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
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  mounted() {
    this.file = this.loadAll();
    getSystem().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        this.tableData = data.tableData;
      }
      console.log(this.tableData);
    });
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
  width: auto;
  justify-content: space-between;
  padding-left: 0;
  height: 50px !important;
  border: none;
  box-shadow: 0 2px 2px 1px rgb(59, 58, 58);
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
.openSearch {
  width: 100% !important;
  border-radius: 5px;
  box-shadow: 0 0 15px #c9d1d4;
}
/deep/.el-dialog {
  // height: 80%;
  border-radius: 10px !important;
  opacity: 0.9;
}
.el-aside {
  background-color: #545c64;
  border-right: none !important;
  overflow: hidden;
}
/deep/.searchClass {
  right: -200%;
  width: 200px;
  height: 35px !important;
  border-color: #8c939d !important;
  border-radius: 20px;
}
/deep/.searchClass:hover {
  width: 450px;
  right: -90%;
  transition: all 0.6s;
}
/deep/.searchClass .el-input-group__prepend {
  border: none;
  background-color: transparent;
  padding: 0 10px 0 30px;
}
/deep/.searchClass .el-input-group__append {
  border: none;
  border-color: #545c64;
  background-color: transparent;
}
/deep/.searchClass .el-input__inner {
  height: 36px;
  line-height: 36px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
}
/deep/.searchClass .el-icon-search {
  font-size: 16px;
}
/deep/.searchClass .centerClass {
  height: 100%;
  line-height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
}
/deep/.searchClass .line {
  width: 1px;
  height: 26px;
  background-color: #c5c5c5;
  margin-left: 14px;
}
/deep/.searchClass:hover {
  border: 1px solid #d5e3e8;
  background: #fff;
}
/deep/.searchClass:hover .line {
  background-color: #d5e3e8;
  border: none;
}
/deep/.searchClass:hover .el-icon-search {
  color: #409eff;
  border: none;
  font-size: 16px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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
