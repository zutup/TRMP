<template>
  <div>
    <router-view></router-view>
      <!-- <h3>以下是</h3> -->
      <el-card><a href="https://attack.mitre.org/" target="_blank"><h3>MITRE ATT&CK</h3></a>
      <h3>中文知识库，欢迎使用和分享</h3>
      
    <div class="column-container thead">
      <div v-for="(item,index) in this.menulist" class="column" :key="index">
        {{ item.name }}
        <br>
      </div>
    </div>
    <br>
    <div class="column-container" @click="gourl">
      <div v-for="(item,index) in this.menulist" class="column1" :key="index">
        <div v-for="item1 in item.methods" :key="item1.name">
          <a :href="'http://localhost:8080/sys-admin#/'+ item1.id + '.html'">{{ item1.name }}</a>
          <br><br>
        </div>
      </div>
    </div>
     </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //引用前声明
      menulist:true,
      json: {
				'初始访问': ['初始访问值1', '初始访问值2', '初始访问值3'],
				'执行': ['执行1', '执行2', '执行3'],
				'执行1': ['执行1', '执行2', '执行3'],
				'执行2': ['执行1', '执行2', '执行3'],
				'执行3': ['执行1', '执行2', '执行3']
			},
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    async getMenuList() {
      var res = await this.$http.get("http://mb1314.ngrok2.xiaomiqiu.cn/repository/getFormInfo");
      if (res.status !== 200) return this.$message.error(res.msg);
      this.menulist = res.data;
      console.info(this.menulist);
    },
    gourl() {
      var itemID = this.$route.query.item.id;
      var item1ID = this.$route.query.item1.id;
      this.$http.get(this.$store.state.index.ip + "repository/" + itemID + item1ID)
        .then((response) => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.thead {
  background-color: skyblue;
}
.column-container {
  display: flex;
  width: 100%;
  text-align: center;
}
.column {
  flex: 1;
  font-size: 20px;
}
.column1 {
  flex: 1;
}
/deep/.el-menu-item {
  font-size: 15px;
  text-align: center;
}
.tac {
  width: 10px;
}
.card1 {
  background-color: skyblue;
}
.th {
  font-size: 14px;
}
</style>
