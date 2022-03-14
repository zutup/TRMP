<template>
  <div id="homepage">
    <router-view />
    <!-- 头部信息 -->
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
        :default-active="home"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#ffd04b"
        active="#home"
        router
      >
        <el-menu-item @click="goToAnchor('#home')"
          ><a
            href="javascript:void(0);"
            :class="active == '#home' ? 'active' : ''"
            >首页</a
          ></el-menu-item
        >
        <el-menu-item @click="goToAnchor('#sharing')"
          ><a
            href="javascript:void(0);"
            :class="active == '#sharing' ? 'active' : ''"
            >文件存储与共享</a
          ></el-menu-item
        >
        <el-menu-item @click="goToAnchor('#search')"
          ><a
            href="javascript:void(0);"
            :class="active == '#search' ? 'active' : ''"
            >文件查阅</a
          ></el-menu-item
        >
        <el-menu-item @click="goToAnchor('#management')"
          ><a
            href="javascript:void(0);"
            :class="active == '#management' ? 'active' : ''"
            >文件管理</a
          ></el-menu-item
        >
        <el-menu-item @click="goToAnchor('#preview')"
          ><a
            href="javascript:void(0);"
            :class="active == '#preview' ? 'active' : ''"
            >数据可视化</a
          ></el-menu-item
        >
        <el-menu-item @click="goToAnchor('#group')"
          ><a
            href="javascript:void(0);"
            :class="active == '#group' ? 'active' : ''"
            >组群管理</a
          ></el-menu-item
        >
      </el-menu>
      <el-button type="info" round @click="dialogFormVisible = true" plain
        >立即注册</el-button
      >
      <el-button type="primary" round @click="login" plain>登 录</el-button>
    </el-header>
    <!-- 主体区域 -->
    <el-main>
      <!-- 路由占位,切换渐变 -->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <div class="welcome" id="home">
        <img src="../assets/css/images/welimg.png" alt="" />
        <p
          type="text"
          plain
          class="welcomeText"
          style="text-align:center; position: absolute;top:30%;left:23%;font-size:50px;background-color:transparent;color:333333;"
        >
        Teaching resource management platform 
        </p>

        <el-button
          type="primary"
          @click="login"
          plain
          style="text-align:center; position: absolute; top:65%;left:45%;font-size:30px;border-radius: 6px;-moz-opacity:0.3;
    opacity:0.6; margin-top:4%"
          >登 录 Login</el-button
        >
      </div>
      <div id="sharing" title="存储共享">
        <el-container class="lefttext">
          <h5>
            <h1>存储共享<br /><small>文件实时同步,实现高效共享</small></h1>
            <p>
              无论是同步本地与云端文件，还是多人多端对同个文件<br />产生的修改版本，通过强大的文件同步能力，您和同事<br />都能及时看到一致的文件版本。
            </p>
          </h5>
          <img src="../assets/css/images/share.png" alt="" />
        </el-container>
        <el-image
          :src="require('../assets/css/images/permission.png')"
        ></el-image>
        <el-container class="righttext">
          <h4>
            <small>精细权限设置</small><br />
            <p>
              可以高效管理成员对文件的预览/编辑<br />/上传/下载/删除/分享等权限。
            </p>
          </h4>
        </el-container>
      </div>
      <div id="search">
        <el-container class="lefttext">
          <h5>
            <h1>文件查阅<br /><small>全文搜索功能</small></h1>
            <p>
              您可以通过多种筛选条件缩小搜索范围，即使<br />忘记文件名，您也可以通过全文搜索功能在茫<br />茫文库中快速找到目标文件。
            </p>
          </h5>
          <img src="../assets/css/images/searchbox.png" alt="" />
        </el-container>
        <el-image :src="require('../assets/css/images/survey.png')"></el-image>
        <el-container class="righttext">
          <h4>
            <small>在线预览多种文件格式</small><br />
            <p>
              除了常规格式的文件，您还可以在线预览专业的<br />文件格式，涵盖工程/制造、设计、项目管理和教<br />培行业。
            </p>
          </h4>
        </el-container>
      </div>
      <div id="management">
        <el-container class="lefttext">
          <h5>
            <h1>文件管理<br /><small>轻松管理相关文件</small></h1>
            <p>
              自由管理与自己相关的本地文件、云端文件、共享文件。<br />修改、上传、删除、共享等多种操作，都能及时看到<br />一致的文件版本。
            </p>
          </h5>
          <img src="../assets/css/images/management.png" alt="" />
        </el-container>
        <el-image :src="require('../assets/css/images/library.png')"></el-image>
        <el-container class="righttext">
          <h4>
            <small>资源库文件管理</small><br />
            <p>
              可以高效管理公共资源库的教学资源文件，对文件的<br />预览/编辑/上传/下载/删除/分享等权限。
            </p>
          </h4>
        </el-container>
      </div>
      <div id="preview">
        <el-container class="lefttext">
          <h5>
            <h1>数据可视化<br /><small>让数据更加直观生动</small></h1>
            <p>
              将平台数据用各种图标的形式表现，达到更加<br />直观高效的目的通过图形的长度、宽度、位置、<br />面积、角度、颜色等来展示数值
            </p>
          </h5>
          <img src="../assets/css/images/video.png" alt="" />
        </el-container>
        <el-image
          :src="require('../assets/css/images/chart.png')"
          lazy
        ></el-image>
        <el-container class="righttext">
          <h4>
            <small>图表多样化</small><br />
            <p>
              利用饼图、折线图、直方图、柱状图等多种图表<br />将平台数据可视化更直观表现趋势、数量、数值<br />差异、多标准等关系
            </p>
          </h4>
        </el-container>
      </div>
      <div id="group" class="foot">
        <el-container class="lefttext">
          <h5>
            <h1>组群管理<br /><small>轻松管理相关组群</small></h1>
            <p>
              组群成员管理、组群部门架构管理、组织管理；<br />成员统计、空间统计、文件统计；<br />相关成员查询操作日志
            </p>
          </h5>
          <img src="../assets/css/images/groupimg.png" alt="" />
        </el-container>
      </div>
      <div class="footer">
        <span>立即使用，开启简单工作</span>
        <br /><br />
        <el-button
          type="warning"
          plain
          class="register"
          @click="dialogFormVisible = true"
          >立即注册</el-button
        >
      </div>
      <el-dialog title="用户注册" :visible.sync="dialogFormVisible" center>
        <el-row type="flex" justify="center">
          <el-form
            ref="formData"
            :model="formData"
            :rules="rules"
            label-width="80px"
            @keyup.enter.native="register()"
          >
            <el-form-item prop="userName" label="用户名"
              ><el-input
                v-model="formData.userName"
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                clearable
              ></el-input
            ></el-form-item>
            <el-form-item prop="password" label="密码"
              ><el-input
                v-model="formData.password"
                placeholder="请输入密码"
                type="password"
                prefix-icon="iconfont icon-3702mima"
                clearable
              ></el-input
            ></el-form-item>
            <el-form-item prop="cheackPassword" label="确认密码"
              ><el-input
                v-model="formData.cheackPassword"
                placeholder="再次输入密码"
                type="password"
                prefix-icon="iconfont icon-3702mima"
                clearable
              ></el-input
            ></el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="register('formData')"
                icon="el-icon-upload"
                >注册</el-button
              >
              <el-button @click="resetForm('formData')"
                >重置</el-button
              ></el-form-item
            >
            <router-link to="login">已有账户？立即登录</router-link>
          </el-form>
        </el-row>
      </el-dialog>
      <el-backtop class="backtop">UP</el-backtop>
    </el-main>
  </div>
</template>

<script>
//网站访问量统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c06aacd8e1615fc1b57d838d1e946c23";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      active: "#home",
      scrollIntoViewOptions: {
        block: "start",
        behavior: "smooth",
      },
      formData: {
        userName: "",
        password: "",
        cheackPassword: "",
      },
      rules: {
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
        cheackPassword: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
      },
      registerForm: {
        username: "",
        password: "",
      },
      distance_team: 0,
      distance_contact: 0,
      distance_join: 0,
      distance_preview: 0,
      distance_group: 0,
      dialogTableVisible: false,
      dialogFormVisible: false,
    };
  },
  mounted() {
    //一次性计算赋值，减少滚动计算节点位置次数
    this.distance_team = document.querySelector("#sharing").offsetTop - 70;
    this.distance_contact = document.querySelector("#search").offsetTop - 70;
    this.distance_join = document.querySelector("#management").offsetTop - 60;
    this.distance_preview = document.querySelector("#preview").offsetTop - 60;
    this.distance_group = document.querySelector("#group").offsetTop - 60;
    this.$nextTick(function() {
      document
        .querySelector("#homepage")
        .addEventListener("scroll", this.onScroll);
    });
    window.addEventListener("scroll", this.onScroll, true);
  },
  methods: {
    login() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // register() {
    //   this.$router.push("/login")
    //   alert("注册成功!");
    // },
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type: "success",
            message: "注册成功",
          });
          this.$router.push("/login");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // gotoregister() {
    //   this.$router.push("/register");
    // },
    goToAnchor(target) {
      this.active = target;
      const toElement = document.querySelector(target);
      toElement.scrollIntoView(this.scrollIntoViewOptions);
    },
    onScroll() {
      let scrolled = Math.abs(
        document.getElementById("homepage").getBoundingClientRect().top
      );
      if (scrolled < this.distance_team) {
        this.active = "#home";
      } else if (
        scrolled >= this.distance_team &&
        scrolled < this.distance_contact
      ) {
        this.active = "#sharing";
      } else if (
        scrolled >= this.distance_contact &&
        scrolled < this.distance_join
      ) {
        this.active = "#search";
      } else if (
        scrolled >= this.distance_join &&
        scrolled < this.distance_preview
      ) {
        this.active = "#management";
      } else if (
        scrolled >= this.distance_preview &&
        scrolled < this.distance_group
      ) {
        this.active = "#preview";
      } else {
        this.active = "#group";
      }
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
  a {
    display: block;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #333333;
    text-decoration: none; //下划线
  }
  a:hover {
    color: red !important;
  }
  a.active {
    color: red;
  }
}
.title {
  display: flex;
  align-items: center;
  width: 400px;
}
.el-main {
  background-color: #e8eef5;
  > div {
    height: 900px;
    width: 1200px;
    text-align: center;
    margin: 0 auto;
    // border-radius: 2%;
    border: none;
  }
  h1 {
    width: 300px;
    height: 100px;
    float: left;
    font-size: 45px;
    color: #5146f3;
    margin-top: 55px;
  }
  h5 {
    font-weight: normal;
  }
  h4 {
    // font-weight: normal;
    float: right;
  }
  small {
    font-size: 22px;
    color: black;
  }
  img {
    float: right;
    height: 420px;
    width: 560px;
  }
  p {
    float: left;
    font-size: 18px;
    text-align: left;
    font-weight: normal;
    margin-top: 10%;
  }
  b {
    float: right;
    font-size: 18px;
    text-align: left;
  }
}
.righttext {
  float: right;
  margin-right: 80px;
  margin-top: 125px;
}
.lefttext {
  float: left;
  margin-left: 80px;
  margin-top: 50px;
}
.backtop {
  width: 45px !important;
  height: 45px !important;
}
.el-image {
  float: left;
  height: 420px;
  width: 560px;
}
.foot {
  height: 720px !important;
}
.office {
  width: 260px !important;
  height: 45px !important;
}
.welcome {
  background: url("../assets/css/images/07.png") center center no-repeat;
  background-size: 100% 100%;
  background-color: #e8eef5;

  img {
    float: right;
    width: 730px;
    height: 360px;
    position: absolute;
    top: 15%;
    left: 30%;
    font-size: 50px;
  }
}
.welcomeText {
  font-weight: lighter !important;
  font-style: italic !important;
  background: linear-gradient(to right, #ddd, rgb(130, 153, 133));
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 250% !important;
}
//文字渐变显示
// .welcomeText {
//   background: linear-gradient(to right, #ddd, black);
//   -webkit-background-clip: text;
//   color: transparent;
// }
.footer {
  width: 1903px !important;
  height: 180px !important;
  text-align: center;
  background-color: #373d3f !important;
  vertical-align: middle;
  display: table-cell; //垂直居中
  > span {
    color: white;
    // text-shadow: 5px 5px 5px red, 0px 0px 2px red;
    font-size: 30px;
    letter-spacing: 8px;
  }
  > .register {
    background: #222324;
  }
}
// .scrollbar {
//   scrollbar-face-color: #0099dd;
//   /*滚动条整体颜色*/
//   scrollbar-highlight-color: #0099dd;
//   scrollbar-arrow-color: rgb(226, 209, 209);
// }
</style>
