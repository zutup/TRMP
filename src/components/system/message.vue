<template>
  <div>
    <router-view/>
     <img
        src="@/assets/css/images/message.svg"
        alt=""
        style="width: 45px; height: 45px; vertical-align: middle"
      />
      <b> 消 息</b>
      <br /><br />
    <menubar v-show="this.$route.meta.leavel"></menubar>
    <el-card class="box-card" :body-Style="{ 'text-align': 'center' }">
      <div slot="header" class="clearfix">
        <span style="font-weight:bold;font-size:22px;">系统消息</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >全部标为已读</el-button
        >
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "未读消息 " + o }}
        <el-divider></el-divider>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.text {
  font-size: 18px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  min-width: 100%;
  min-height: 1000px;
  // margin-right: 450px;
  margin-top: 10px;
  // margin-left: 500px;
  transition: all 0.5s;
}
</style>
