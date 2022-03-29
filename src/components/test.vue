<template>
  <div class="homepage" ref="homepage" style="overflow: hidden" id="homepage">
    <!-- 头部信息 -->
    <el-header>
      <div class="title">
        <img
          src="../assets/css/images/logo2.png"
          alt=""
          style="width: 45px; height: 45px"
        />
        <span> &nbsp;教学资源管理平台 </span>
      </div>
      <el-menu
        :default-active="home"
        class="el-menu"
        mode="horizontal"
        background-color="#122e29"
        text-color="#fff"
        active-text-color="#ffd04b"
        active="#home"
        router
        v-for="item in list"
        :key="item.name"
        style="border:none;"
      >
        <el-menu-item @click="goToAnchor('#'+item.url)"
          ><a
            href="javascript:void(0);"
            :class="active == '#' +item.url ? 'active' : ''"
            >{{ item.name }}
          </a></el-menu-item
        >
      </el-menu>
      <!-- <el-button type="info" round @click="dialogFormVisible = true" plain size="small"
        >立即注册</el-button
      > -->
      <div class="loginButton">
        <el-button
          type="primary"
          round
          @click="login"
          plain
          size="mini"
          class="wow slideInLeft"
          ><i class="el-icon-user"> 登 录 / 注 册 </i>
        </el-button>
      </div>
    </el-header>
    <!-- 主体区域 -->
    <div class="mainpage">
      <div class="bg-blur"></div>
      <el-main>
        <!-- 路由占位,切换渐变 -->
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <!-- 欢迎div -->
        <div class="welcome" id="home">
          <img src="../assets/css/images/hello.svg" alt="" />
          <p type="text" plain class="welcomeText">
            T e a c h i n g <span> ·</span> R e s o u r c e <span> ·</span> M a
            n a g e m e n t <span> ·</span> P l a t f o r m
          </p>
          <el-button
            type="primary"
            @click="login"
            plain
            class="wow pulse"
            style="
              text-align: center;
              position: absolute;
              top: 70%;
              left: 46%;
              font-size: 20px;
              border-radius: 6px;
              -moz-opacity: 0.3;
              opacity: 0.6;
            "
            >&nbsp; 登 录 Login &nbsp;</el-button
          >
        </div>
        <img
          src="../assets/css/images/mouse.svg"
          alt=""
          @click="goToAnchor('#sharing')"
          class="underscore wow bounceIn"
        />
        <!-- 功能介绍 -->
        <div id="sharing" title="存储共享">
          <el-container class="lefttext">
            <h5>
              <h1 class="wow slideInDown">存储共享<br /><small>文件实时同步,实现高效共享</small></h1>
              <p class="wow slideInUp">
                无论是同步本地与云端文件，还是多人多端对同个文件<br />产生的修改版本，通过强大的文件同步能力，您和同事<br />都能及时看到一致的文件版本。
              </p>
            </h5>
            <img
              src="../assets/css/images/sharing.png"  
              class="wow bounceInRight"
              alt=""
            />
          </el-container>
          <el-image
            class="wow slideInLeft"
            :src="require('../assets/css/images/permission.png')"
          ></el-image>
          <el-container class="righttext">
            <h4 class="wow slideInRight" data-wow-delay="0.3s">
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
              <h1 class="wow slideInDown">文件查阅<br /><small>全文搜索功能</small></h1>
              <p class="wow slideInUp">
                您可以通过多种筛选条件缩小搜索范围，即使<br />忘记文件名，您也可以通过全文搜索功能在茫<br />茫文库中快速找到目标文件。
              </p>
            </h5>
            <img src="../assets/css/images/searchbox.png" class="wow slideInUp" alt="" />
          </el-container>
          <el-image
          class="wow slideInLeft"
            :src="require('../assets/css/images/survey.png')"
          ></el-image>
          <el-container class="righttext">
            <h4 class="wow slideInRight" data-wow-delay="0.3s">
              <small>在线预览多种文件格式</small><br />
              <p>
                除了常规格式的文件，您还可以在线预览专业的<br />文件格式，涵盖工程/制造、设计、项目管理和教<br />培行业。
              </p>
            </h4>
          </el-container>
        </div>
        <div id="management">
          <el-container class="lefttext">
            <h5 class="wow slideInLeft">
              <h1>文件管理<br /><small>轻松管理相关文件</small></h1>
              <p>
                自由管理与自己相关的本地文件、云端文件、共享文件。<br />修改、上传、删除、共享等多种操作，都能及时看到<br />一致的文件版本。
              </p>
            </h5>
            <img src="../assets/css/images/management.png" class="wow bounceInRight" alt="" />
          </el-container>
          <el-image
          class="wow slideInLeft"
            :src="require('../assets/css/images/library.png')"
          ></el-image>
          <el-container class="righttext">
            <h4 class="wow slideInRight" data-wow-delay="0.3s">
              <small>资源库文件管理</small><br />
              <p>
                可以高效管理公共资源库的教学资源文件，对文件的<br />预览/编辑/上传/下载/删除/分享等权限。
              </p>
            </h4>
          </el-container>
        </div>
        <div id="preview">
          <el-container class="lefttext">
            <h5 class="wow slideInLeft">
              <h1>数据可视化<br /><small>让数据更加直观生动</small></h1>
              <p>
                将平台数据用各种图标的形式表现，达到更加<br />直观高效的目的通过图形的长度、宽度、位置、<br />面积、角度、颜色等来展示数值
              </p>
            </h5>
            <img src="../assets/css/images/video.png" class="wow slideInUp" alt="" />
          </el-container>
          <el-image
          class="wow slideInLeft"
            :src="require('../assets/css/images/chart.png')"
            lazy
          ></el-image>
          <el-container class="righttext">
            <h4 class="wow slideInRight" data-wow-delay="0.3s">
              <small>图表多样化</small><br />
              <p>
                利用饼图、折线图、直方图、柱状图等多种图表<br />将平台数据可视化更直观表现趋势、数量、数值<br />差异、多标准等关系
              </p>
            </h4>
          </el-container>
        </div>
        <div id="group" class="foot">
          <el-container class="lefttext">
            <h5 class="wow slideInDown">
              <h1>组群管理<br /><small>轻松管理相关组群</small></h1>
              <p>
                组群成员管理、组群部门架构管理、组织管理；<br />成员统计、空间统计、文件统计；<br />相关成员查询操作日志
              </p>
            </h5>
            <img src="../assets/css/images/groupimg.png" class="wow bounceInRight" alt="" />
          </el-container>
        </div>
        <el-backtop class="backtop">UP</el-backtop>
        <!-- 底部区域 -->
        <div class="footer">
          <span class="wow slideInDown">立即使用，开启简单工作</span>
          <br /><br />
          <el-button
            type="warning"
            plain
            size="mini"
            class="wow slideInUp"
            style="background: #222324;"
            @click="login()"
            >立即注册</el-button
          >
        </div>
      </el-main>
    </div>
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
    // var validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (value !== this.formData.password) {
    //     callback(new Error("两次输入密码不一致!"));
    //   } else {
    //     callback();
    //   }
    // };
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
      list: [
        {
          name: "首页",
          url: "home",
        },
        {
          name: "存储共享",
          url: "sharing",
        },
        {
          name: "文件查阅",
          url: "search",
        },

        {
          name: "文件管理",
          url: "management",
        },
        {
          name: "数据可视化",
          url: "preview",
        },
        {
          name: "组群管理",
          url: "group",
        },
      ],

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
    new this.$wow.WOW().init();
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
      this.$router.push("/loginReg");
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
    //TODO循环报错
    onScroll() {
      let scrolled = Math.abs(this.$refs.homepage.getBoundingClientRect().top);
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
.mainpage {
  background-size: 100% 100%;
  background: url("../assets/css/images/blurpage.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  height: 45px !important;
  width: 100%;
  background-color: #122e29;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 18px;
  z-index: 999; //最上层显示
  position: fixed;
  > span {
    margin-left: 25px;
  }
  a {
    display: block;
    width: 15px;
    height: 25px;
    text-align: center;
    margin-right: -100px;
    margin-left: -100px;
    line-height: 45px;
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
  width: 600px;
}
.loginButton {
  width: 430px;
  text-align: right;
}
.el-main {
  > div {
    height: 900px;
    width: 1200px;
    text-align: center;
    margin: 0 auto;
    // border-radius: 2%;
    border: none;
    z-index: 11;
  }
  h1 {
    width: 300px;
    height: 100px;
    float: left;
    font-size: 45px;
    color: #122e29;
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
    color: #00595f;
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
    font-size: 16px;
    text-align: left;
  }
}
.righttext {
  float: right;
  margin-right: 80px;
  margin-top: 125px;
}

.el-menu-item {
  border: none !important;
  height: 45px !important;
  vertical-align: middle;
}
.lefttext {
  float: left;
  margin-left: 80px;
  margin-top: 50px;
}

.underscore {
  width: 40px !important;
  height: 40px !important;
  vertical-align: middle;
  text-align: center;
  position: absolute;
  bottom: 15px;
  left: 49%;
  cursor: pointer;
}
.backtop {
  width: 45px !important;
  height: 45px !important;
  color: #008997 !important;
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
  img {
    float: right;
    width: 25%;
    height: 25%;
    position: absolute;
    top: 28%;
    left: 38%;
    font-size: 50px;
  }
}
.welcomeText {
  font-weight: lighter !important;
  font-style: italic !important;
  color: rgb(14, 48, 45) !important;
  background-clip: text;
  margin-bottom: 250% !important;
  text-align: center;
  position: absolute;
  top: 35.5%;
  left: 24%;
  font-size: 30px !important;
  letter-spacing: 2px;
  animation: fadeInDown 1s;
  -webkit-animation: fadeInDown 1s;
}
.fadeInDown {
  animation: fadeInDown 2s;
  -webkit-animation: fadeInDown 2s;
}

@keyframes fadeInDown {
  0% {
    margin-right: -200px;
    opacity: 0;
  }
  100% {
    margin-right: 0px;
    opacity: 1;
  }
}
@-webkit-keyframes fadeInDown {
  0% {
    margin-top: -200px;
    opacity: 0;
  }
  100% {
    margin-top: 0px;
    opacity: 1;
  }
}

.footer {
  width: 100vw !important;
  height: 100px !important;
  text-align: center;
  background-color: #122e29 !important;
  vertical-align: middle;
  display: table-cell; //垂直居中
  > span {
    color: white;
    // text-shadow: 5px 5px 5px red, 0px 0px 2px red;
    font-size: 20px;
    letter-spacing: 8px;
  }
}
// .scrollbar {
//   scrollbar-face-color: #0099dd;
//   /*滚动条整体颜色*/
//   scrollbar-highlight-color: #0099dd;
//   scrollbar-arrow-color: rgb(226, 209, 209);
// }
</style>
