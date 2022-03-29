<template>
  <!-- <div>
          <div>
          <img src="../assets/css/images/logo2.png" alt="" />
          <span>教学资源管理系统 </span>
          <img
            src="../assets/css/images/aside.svg"
            style="width:30px;height:30px;border-radius:5px;margin-left:10px"
            alt=""
          />
        </div> -->
  <el-menu
    active-text-color="#409EFF"
    :unique-opened="true"
    :collapse="isCollapse"
    :collapse-transition="true"
    router
    class="menu"
    @select="select"
    :default-active="$route.path"
    :default-openeds="['/4', '/1', '/9']"
    background-color="#545c64"
    text-color="white"
    oncontextmenu="rightClick"
  >
    <div class="asideMenuHead">
      <img
        src="@/assets/css/images/logo2.png"
        style="width: 45px;height: 45px;border-radius:50%;margin-left:10px;margin-top:5px"
        alt=""
      />
      <span class="asideSpan">{{ isCollapse ? "" : "教学资源管理系统" }}</span>
    </div>

    <!-- 无子菜单 -->
    <el-menu-item
      v-for="item in noChildren"
      :key="item.path"
      :index="item.path"
      @click="clickMenu(item)"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 有子菜单 -->
    <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="subItem in item.children"
        :key="subItem.path"
        :index="subItem.path"
        @click="clickSubmenu(subItem)"
      >
        <el-menu-item :index="subItem.path"
          ><i :class="subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span></el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          url: "/mine",
          name: "mine",
          label: "主页",
          icon: "el-icon-s-home",
          path: "/system/mine",
        },
        {
          path: "/1",
          name: "file",
          label: "文件",
          icon: "el-icon-folder",
          children: [
            {
              url: "/ownFile",
              name: "ownFile",
              label: "我的文件",
              path: "/system/file/ownFile",
              icon: "el-icon-s-cooperation",
            },
            {
              url: "/cooperate",
              name: "cooperate",
              label: "与我协作",
              path: "/system/file/cooperate",
              icon: "el-icon-connection",
            },
            {
              url: "/recent",
              name: "recent",
              label: "最近使用",
              path: "/system/file/recent",
              icon: "el-icon-time",
            },
            {
              url: "/usual",
              name: "usual",
              label: "文件目录",
              path: "/system/file/usual",
              icon: "el-icon-s-fold",
            },
            {
              url: "/fileCategory",
              name: "fileCategory",
              label: "文件分类",
              path: "/system/file/fileCategory",
              icon: "el-icon-files",
            },
            {
              url: "/recycleBin",
              name: "recycleBin",
              label: "回收站",
              path: "/system/file/recycleBin",
              icon: "el-icon-delete-solid",
            },
          ],
        },
        {
          url: "/2",
          name: "message",
          label: "消息",
          icon: "el-icon-message",
          path: "/system/message",
        },
        {
          url: "/3",
          name: "console",
          label: "控制台",
          icon: "el-icon-s-tools",
          path: "/console",
        },
        {
          path: "/4",
          name: "staff",
          label: "教工服务",
          icon: "el-icon-user-solid",
          children: [
            {
              url: "/5",
              name: "question",
              label: "出题",
              icon: "el-icon-message",
              path: "/system/teacher/question",
            },
            {
              url: "/6",
              name: "questionList",
              label: "题库",
              icon: "el-icon-s-tools",
              path: "/system/teacher/questionList",
            },
          ],
        },
        {
          path: "/9",
          name: "dataCharts",
          label: "数据图表",
          icon: "el-icon-data",
          children: [
            {
              url: "/resourceChart",
              name: "resourceChart",
              label: "资源点击",
              icon: "iconfont icon-ziyuan",
              path: "/system/datacharts/resourceChart",
            },
            {
              url: "/storageChart",
              name: "storageChart",
              label: "存储使用",
              icon: "iconfont icon-yuncunchu",
              path: "/system/datacharts/storageChart",
            },
            {
              url: "/text",
              name: "text",
              label: "站点访问",
              icon: "iconfont icon-xuexi",
              path: "/system/datacharts/text",
            },
          ],
        },
      ],
    };
  },
  methods: {
    clickMenu(item) {
      // this.$router.push(item.path);
      console.log(this.$route.path);
    },
    clickSubmenu(subItem) {
      // this.$router.push(subItem.path);
      console.log(this.$route.path);
    },
    select(index) {
      console.log(index);
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>

<style>
.menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  translate: 0.3s;
}
.asideSpan {
  position: absolute;
  height: 30px;
  top: 17px;
  font-size: 16px;
  color: aliceblue;
}
.el-menu {
  border: none !important;
}
.asideMenuHead {
  height: 60px;
  width: 199px;
}
</style>
