<template>
  <div class="block">
    <router-view></router-view>
    <el-timeline style="width:1700px text-align:center; position: absolute;left:10%;right:10%;">
      <el-timeline-item timestamp="①" placement="top">
        <el-card >
          <h4>数据获取</h4>
          <p>通过爬虫获取威胁情报和漏洞信息</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="②" placement="top">
        <el-card>
          <h4>数据保存</h4>
          <p>将得到的json数据转化成sql存入数据库</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="③" placement="top">
        <el-card>
          <h4>数据处理</h4>
          <p>后台根据前端要求处理得到的情报信息</p>
        </el-card>
      </el-timeline-item>
    <el-timeline-item timestamp="④" placement="top">
      <el-card>
          <h4>数据展示</h4>
          <p>前端获取后台数据展示</p>
        </el-card>
    </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
