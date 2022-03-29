<template>
  <el-container>
    <el-aside width="200px">
      <menu-aside>

      </menu-aside>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import menuAside from "./menuAside.vue";
export default {
  components: {
    menuAside,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-header{
  background-color: rgb(105, 93, 93);
}
</style>
