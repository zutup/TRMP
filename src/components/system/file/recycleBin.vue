<template>
  <el-card class="mycard">
    <div>
      <img class="emptyimg" src="@/assets/css/images/bin.png" alt="" />
      <p class="null">回收站为空</p>
    </div>
  </el-card>
</template>

<script>
export default {};
</script>

<style>
.mycard {
  box-shadow: 0 1px rgba(0, 0, 0, 0.15) !important;
  border-radius: 1%;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.null {
  text-align: center;
  font-weight: bold;
}
.emptyimg {
  vertical-align: middle;
  margin-top: 15%;
  height: 260px;
  width: 420px;
}
</style>
