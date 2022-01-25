<template>
  <div class="index">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <el-container id="center_container">
      <el-header>
        <div>
          <img
            src="../assets/css/images/logo2.png"
            alt=""
            style=" width: 65px;height: 65px"
          />
          <span>处理中心</span>
        </div>
        <el-button type="info" @click="gotoMenu" round>返回首页</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px"> 上传可疑威胁情报</el-aside>
        <el-container>
          <el-main>
            <el-col :span="8">
              <el-card
                body-style="font-size:20px;text-align:20px"
                shadow="hover"
                class="card"
              >
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="情报名称">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="危险级别">
                    <el-select
                      v-model="form.level"
                      placeholder="请选择危险级别"
                    >
                      <el-option label="高危" value="高危"></el-option>
                      <el-option label="中危" value="中高危"></el-option>
                      <el-option label="低危" value="低危"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="发现时间">
                    <el-col :span="11">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="form.discoverTime"
                        value-format="yyyy-MM-dd"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="情报类别">
                    <el-select
                        v-model="form.category"
                        placeholder="请选择情报类别"
                    >
                      <el-option label="IP/Domain 信誉类情报" value="IP/Domain 信誉类情报"></el-option>
                      <el-option label="网络通信流量数据" value="网络通信流量数据"></el-option>
                      <el-option label="事件分类（Incident Pulse）数据" value="事件分类（Incident Pulse）数据"></el-option>
                      <el-option label="蜜罐数据" value="蜜罐数据"></el-option>
                      <el-option label="被动流量解析（Passive DNS）数据" value="被动流量解析（Passive DNS）数据"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="是否修复">
                    <el-switch v-model="form.isFixed"
                               active-value="1"
                               inactive-value="0">
                    </el-switch>
                  </el-form-item>

                  <el-form-item label="情报标签">
                    <el-checkbox-group v-model="tags" @change="changeCheckB0x">
                      <el-checkbox label="恶意木马"></el-checkbox>
                      <el-checkbox label="DDOS" ></el-checkbox>
                      <el-checkbox label="SQL注入" ></el-checkbox>
                      <el-checkbox label="流量" ></el-checkbox>
                      <el-checkbox label="其他" ></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>

                  <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.comment"></el-input>
                  </el-form-item>
                  <br>
                  <el-upload
                    class="upload-demo"
                    drag
                    :action="uploadAction"
                    multiple
                    :on-success="afterUploadSuccess"
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                      将文件拖到此处，或<em>点击上传</em>
                    </div>
                    <div class="el-upload__tip" slot="tip">
                      <h5>尽情上传吧！</h5>
                    </div>
                  </el-upload>

                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="gotoMenu">取消</el-button>
                  </el-form-item>
                </el-form>
              </el-card>
            </el-col>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tags:[],
      form: {
        name: "",
        fileIdList: "",
        discoverTime: "",
        isFixed: "",
        tag: [],
        level: "",
        category: "",
        vendor: "",
        comment: "",
      },
      uploadAction : this.$http.defaults.baseURL + "system/upload",
    };
  },
  methods: {
    async onSubmit() {
      this.form.fileIdList = this.form.fileIdList.substring(0,this.form.fileIdList.length-1)
      this.form.tag = this.tags.join()
      // console.log(this.tags)
      const {code} = await this.$http.post("workbench/addIntelligence", this.form);
      if(code == 1){
        this.$message({
          message: '提交成功！',
          type: 'success'
        });
      }else{
        this.$message({
          message: '提交失败！',
          type: 'error'
        });
      }

    },
    gotoMenu() {
      //指定跳转的地址
      this.$router.replace("/Welcome");
    },
    afterUploadSuccess(response, file, fileList){
      // console.log(response["code"] )
      if(response["code"] == 1){
        this.form.fileIdList += (response["info"]["fileId"] + ",")
      }
      // console.log(this.form.fileIdList)
    },
    changeCheckB0x(s){
      // console.log("123")
      // console.log(this.tags)
    }
  },
};
</script>

<style lang="less" scoped>
.center_container {
  height: 100%;
}
.index {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  color: aliceblue;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 10px;
  }
}

.el-aside {
  background-color: #4a4b4e;
  font-size: 18px;
  position: flex;
  color: white;
  text-align: center;
  line-height: 100vh;
}
.el-main {
  background-color: #ccced6;
}
.el-button {
  right: 100%;
  color: #3f4368;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.card {
  position: absolute;
  min-width: 87.5%;
  min-height: 95%;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s;
}
</style>
