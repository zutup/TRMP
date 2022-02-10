<template>
  <div id="home">
    <!-- 渐进动画 -->
    <transition :name="switchTransition">
      <router-view />
    </transition>
    <menubar v-show="this.$route.meta.leavel"></menubar>
    <div>
          <p
      type="text"
      plain
      style="text-align:center; position: absolute;top:30%;left:30%;font-size:50px;background-color:transparent;color:333333;"
    >
      WELCOME<br /><br />欢 迎 使 用 教 学 资 源 管 理 平 台
    </p>

    <el-button
      type="success"
      round
      @click="gotoMenu"
      plain
      style="text-align:center; position: absolute; top:70%;left:47%;font-size:30px;"
      >开 始</el-button
    >
    </div>
    <div
      plain
      style="text-align:center; position: absolute; top:95%;font-size:20px;"
    >
      <!-- <el-popover
        placement="top-start"
        title="中原工学院"
        width="300"
        trigger="hover"
        content="计算机学院"
      >
        <el-button
          style="background-color:transparent;border:0;font-size:17px;color:#2a5caa;overflow:visible;padding:0"
          slot="reference"
          >关于我们</el-button
        >
      </el-popover> -->
    </div>
  </div>
  
</template>

<script>
import menubar from "../components/Home";
export default {
  components: {
    menubar,
  },
  data() {
    return {
      switchTransition: "onefade",
      visible: false,
      show: false
    };
  },
  methods: {
    gotoMenu() {
      //指定跳转的地址
      this.$router.replace("/register");
    },
  },
  watch: {
    $route(to, from) {
      const isBack = this.$router.isBack;
      if (from.meta.leavel && to.meta.leavel) {
        // 说明是一级到一级
        this.switchTransition = "onefade";
      } else if (!to.meta.leavel) {
        // 说明到的是二级
        this.switchTransition = "twofade";
      }
      if (isBack) {
        this.switchTransition = "threefade";
      }
      this.$router.isBack = false; //监听路由后重置 isBack 用于判断如何跳转动画；
    },
  },
};
</script>

<style>
#home {
  width: 100%;
  height: 100vh;
  background: url("../assets/css/images/07.png") center center no-repeat;
  background-size: 100% 100%;
  /* position:absolute; */
}

#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: absolute;
}

.onefade-enter {
  opacity: 0;
}
.onefade-enter-active,
.onefade-leave-active {
  transition: all 0;
}
.onefade-leave-to {
  opacity: 0;
}
.twofade-enter-active,
.twofade-leave-active {
  transition: all 1s;
  position: absolute;
}

.twofade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.twofade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.threefade-enter-active,
.threefade-leave-active {
  transition: all 1s;
  position: absolute;
}
.threefade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.threefade-enter {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
