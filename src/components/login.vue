<template>
  <div class="login_container">
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <img
          src="../assets/css/images/logo2.png"
          alt=""
          style=" width: 65px;height: 65px"
        />
        <a>教学资源管理平台</a></div
      ></el-col>
    </el-row>
    <router-view></router-view>
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/css/images/login.png" alt="" />
      </div>
      <!-- 登录模块 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <br /><br />
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <br /><br />
        <!-- 按钮 -->
        <el-form-item label-width="0px" class="btns">
          <el-button type="primary" @click="login" round>登录</el-button>
          <el-button type="info" @click="resetLoginForm" round>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单的数据绑定对象
      loginForm: {
        username: "admin",
        password: "123456",
      },
      //表单验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在6到16个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //重置登录表单
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    // login() {
    //   this.$refs.loginFormRef.validate(async (valid) => {
    //     if (!valid) return;
    //     const { code } = await this.$http.post("system/login", this.loginForm);
    //     console.log(code);
    //     if (code == 1) {
    //       this.$message({
    //         message: '登录成功！',
    //         type: 'success'
    //       });
    //       window.sessionStorage.setItem("token","res.token");
    //       this.$router.push("/welcome");
    //     }else{
    //       this.$message({
    //         message: '登陆失败！',
    //         type: 'error'
    //       });
    //     }

    //   });
    // },
    login() {
      this.$router.push("/system");
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background: url("../assets/css/images/wallpaper1.png");
}
.avater_box {
  height: 80px;
  width: 160px;
  border: 1px solid #eee;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  border-radius: 45%;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
  img {
    width: 150px;
    height: 75px;
    border-radius: 25px;
    background-color: white;
  }
}
.login_box {
  width: 550px;
  height: 350px;
  background-color: aliceblue;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.el-row {
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  div {
    display: flex;
    align-items: center;
  }
  a {
    margin-left: 20px;
    font-size: 20px;
  }
  img{
    margin-left: 50px;
  }
}
.el-col {
  border-radius: 4px;
}
// .bg-purple-dark {
//   background: #99a9bf;
// }
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
