<template>
  <div class="login-register">
    <router-view></router-view>
    <img
      src="@/assets/css/images/leave.svg"
      alt=""
      @click="exit"
      style=" width: 50px;height:30px;cursor:pointer;margin-left:15px;margin-top:15px;overflow-x: hidden;border-radius:5px"
    />
    <div class="contain">
      <div class="big-box" :class="{ active: isLogin }">
        <div class="big-contain" v-if="isLogin">
          <div class="title">账户登录</div>
          <div class="bform">
            <input type="text" placeholder="用户名" v-model="form.username" />
            <span class="errTips" v-if="emailError">* 用户名填写错误 *</span>
            <input type="password" placeholder="密码" v-model="form.password" />
            <span class="errTips" v-if="emailError">* 密码填写错误 *</span>
          </div>
          <!-- TODO -->
          <button class="bbutton" @click="loginTest">登 录</button>
        </div>
        <div class="big-contain" v-else>
          <div class="title">创建账户</div>
          <div class="bform">
            <input type="text" placeholder="用户名" v-model="form.username" />
            <span class="errTips" v-if="existed">* 用户名已经存在！ *</span>
            <input type="email" placeholder="邮箱" v-model="form.useremail" />
            <input type="password" placeholder="密码" v-model="form.userpwd" />
          </div>
          <button class="bbutton" @click="register">注 册</button>
        </div>
      </div>
      <div class="small-box" :class="{ active: isLogin }">
        <div class="small-contain" v-if="isLogin">
          <div class="stitle">你好，朋友!</div>
          <p class="scontent">开始注册，和我们一起旅行</p>
          <button class="sbutton" @click="changeType">注 册</button>
        </div>
        <div class="small-contain" v-else>
          <div class="stitle">欢迎回来!</div>
          <p class="scontent">与我们保持联系，请登录你的账户</p>
          <button class="sbutton" @click="changeType">登 录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../api";
export default {
  name: "login-register",
  data() {
    return {
      isLogin: false,
      emailError: false,
      passwordError: false,
      existed: false,
      form: {
        username: "",
        useremail: "",
        password: "",
      },
      account: "",
      password: "",
    };
  },
  methods: {
    changeType() {
      this.isLogin = !this.isLogin;
      this.form.username = "";
      this.form.useremail = "";
      this.form.password = "";
    },
    exit() {
      this.$router.push("/home");
    },
    login() {
      // console.log(this.form);
      if (this.form.username != "" && this.form.password != "") {
        this.$http({
          method: "post",
          url: "http://127.0.0.1:8888/api/private/v1/login",
          data: {
            username: this.form.username,
            password: this.form.password,
          },
        })
          .then((res) => {
            switch (res.data) {
              case 0:
                {
                  alert("登陆成功！");
                  this.$router.push("/system");
                }
                break;
              case -1:
                this.emailError = true;
                break;
              case 1:
                this.passwordError = true;
                break;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("填写不能为空！");
      }
    },
    async loginTest() {
      // this.$message({
      //   type: "success",
      //   message: "登陆成功",
      // });
      // this.$router.push("/system");
      const { data: res } = await this.$http.post("login", this.form);
      console.log(res.data.token);
      if (res.meta.status != 200) {
        return this.$message.error("用户名或密码错误！");
      }
      this.$message.success("登录成功!");
      window.sessionStorage.setItem("token", res.data.token);
      //先token后跳转，否则报错
      this.$router.push("/system");
    },
    register() {
      const self = this;
      if (
        self.form.username != "" &&
        self.form.useremail != "" &&
        self.form.userpwd != ""
      ) {
        self
          .$axios({
            method: "post",
            // url: "http://127.0.0.1:10520/api/user/add",
            data: {
              username: self.form.username,
              email: self.form.useremail,
              password: self.form.userpwd,
            },
          })
          .then((res) => {
            switch (res.data) {
              case 0:
                alert("注册成功！");
                this.login();
                break;
              case -1:
                this.existed = true;
                break;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("填写不能为空！");
      }
    },
  },
};
</script>

<style scoped="scoped">
.login-register {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: url("../assets/css/images/loginImg4.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.contain {
  width: 758px;
  height: 420px;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25);
  background: url("../assets/css/images/loginImg4.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.big-box {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
}
.big-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-weight: 40;
  margin: 0;
  color: rgb(241, 244, 245);
  font-size: 25px;
  margin-bottom: 1.25rem;
}
.bform {
  width: 100%;
  height: 40%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bform .errTips {
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}
.bform input {
  width: 50%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
}
.bbutton {
  background-color: #0367a6;
  background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
  border-radius: 20px;
  border: 1px solid #0367a6;
  color: #e9e9e9;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
.small-box {
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg, rgb(178, 191, 192), rgb(56, 143, 183));
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  transform: translateX(0%);
  transition: all 1s;
}
.small-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stitle {
  font-weight: 300;
  margin: 0;
  font-size: 25px;
  margin-bottom: 1.25rem;
  /* color: #fff; */
}
.scontent {
  font-size: 0.8em;
  /* color: #fff; */
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
}
.sbutton {
  background-color: #0367a6;
  background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
  border-radius: 20px;
  border: 1px solid #0367a6;
  color: #e9e9e9;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.big-box.active {
  left: 0;
  transition: all 0.5s;
}
.small-box.active {
  left: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 1s;
}
</style>
