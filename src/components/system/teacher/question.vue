<template>
  <div>
    <img
      src="@/assets/css/images/question.svg"
      alt=""
      style="width: 45px; height: 45px; vertical-align: middle"
    />
    <b> 出 题</b>

    <el-tooltip
      class="item"
      effect="dark"
      content="设置视频中弹出的问题"
      placement="right"
    >
      <img
        src="@/assets/css/images/doubt.svg"
        alt=""
        style="width: 15px; height: 15px; margin-left:5px;margin-top:5px"
      />
    </el-tooltip>
    <br /><br />
    <el-card style="height:80%">
      <!-- 提示区-->
      <el-alert
        title="添加题目信息"
        type="info"
        center
        :closable="false"
        show-icon
      >
      </el-alert>
      <!--      步骤条区-->
      <el-steps align-center :active="activeIndex - 2" finish-status="success">
        <el-step title="基本信息"></el-step>
        <el-step title="题目图片"></el-step>
        <el-step title="题目内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!--      table --- > tab栏区域-->
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-position="top"
        label-width="100px"
      >
        <el-tabs
          :tab-position="'left'"
          v-model="activeIndex"
          :before-leave="beforeTabLevae"
          @tab-click="tabClicked"
        >
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="插入视频名称" prop="video_name" required>
              <el-input v-model="addForm.video_name"></el-input>
            </el-form-item>
            <el-form-item label="出题人" prop="questioner">
              <el-input v-model="addForm.questioner"></el-input>
            </el-form-item>
           
            <el-form-item label="题目编号" prop="question_num">
              <el-input v-model="addForm.question_num" placeholder="随机生成"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="题目图片" name="3">
            <!--
             action 表示图片要上传到的后台API地址
             handlePreview 点击预览触发
             handleRemove 删除图片触发
             fileList 指定文件列表
             list-type 指定预览组件的呈现方式
            -->
            <el-upload
              class="upload-demo"
              :action="uploadURL"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              list-type="picture"
              :headers="headersObj"
              :on-success="handleSuccess"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="题目内容" name="4">
            <!-- 富文本编辑器组件 Two-way Data-Binding -->
            <el-form-item label="问题插入时间点" required>
                <template>
                <el-time-picker
                  v-model="value"
                  :picker-options="{
                    selectableRange: '00:00:00 - 03:59:59',
                  }"
                  placeholder="任意时间点"
                  style="margin-left:15px"
                >
                </el-time-picker>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="时间点不超过四小时"
                  placement="right"
                >
                  <img
                    src="@/assets/css/images/doubt.svg"
                    alt=""
                    style="width: 15px; height: 15px; vertical-align: top;margin-left:5px;margin-top:5px"
                  />
                </el-tooltip>
              </template>
            </el-form-item>
            
               <!-- 级联选择器 -->
            <el-form-item label="题目类型" prop="question_cat">
              <el-cascader
                v-model="addForm.question_cat"
                :options="cateList"
                :show-all-levels="false"
                :props="{ expandTrigger: 'hover', ...cateProps }"
              ></el-cascader>
            </el-form-item>
            <quill-editor
              ref="myQuillEditor"
              v-model="addForm.goods_introduce"
            />
            <!--            添加按钮-->
            <el-button type="primary" class="AddBtn" @click="addShop"
              >添加题目</el-button
            >
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
    <!--    图片预览-->
    <el-dialog
      title="图片预览"
      :visible.sync="previewDialogVisible"
      width="50%"
    >
      <img :src="previewPath" alt="" class="perviewImg" />
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      activeIndex: "0",
      // 添加题目的表单数据对象
      addForm: {
        video_name: "",
        questioner: "",
        // 题目所属的分类数组
        question_cat: [{}],
        //问题数
        value: new Date(2022, 9, 10, 18, 40),
        question_num: "",
        // 图片的数组
        pics: [],
        // 题目的详情描述
        question_introduce: "",
        attrs: [],
      },
      // 存放题目列表数据
      cateList: [
        {
          cat_id: 1,
          cat_name: "题目类型",
          children: [
            {
              cat_id: 3,
              cat_name: "选择题",
              children: [
                {
                  cat_id: 8,
                  cat_name: "单选题",
                },
                {
                  cat_id: 9,
                  cat_name: "多选题",
                },
              ],
            },
            {
              cat_id: 4,
              cat_name: "填空题",
            },
            {
              cat_id: 5,
              cat_name: "论述题",
            },
          ],
        },
      ],
      cateProps: {
        label: "cat_name",
        value: "cat_id",
        children: "children",
      },
      // 动态参数列表数据
      manyTableData: [],
      // 静态参数列表数据
      onlyTableData: [],
      //TODO 上传图片的URL地址
      uploadURL: "https://lianghj.top:8888/api/private/v1/upload",
      // 图片上传组件的headers请求头对象
      headersObj: {
        Authorization: window.sessionStorage.getItem("token"),
      },
      // 预览图片的路径
      previewPath: "",
      // 图片预览的对话框
      previewDialogVisible: false,
    };
  },
  created() {
    this.getCateList();
  },
  methods: {
    async getCateList() {
      const { data: res } = await this.$http.get("categories");
      if (res.meta.status !== 200) {
        return this.$message.error("获取题目列表失败!");
      }
      this.cateList = res.data;
      console.log(this.cateList);
    },
    // 离开当前 Tabs 页
    beforeTabLevae(activeName, oldActiveName) {
      // console.log('即将离开标签页的名字: ', oldActiveName)
      // console.log('即将进入标签页的名字: ', activeName)
      if (this.addForm.video_name === "") {
        this.$message.error("请先填写视频名称");
        return false;
      }
    },
    async tabClicked() {
      // 证明访问的是动态列表
      if (this.activeIndex === "1") {
        console.log("动态参数");
        const { data: res } = await this.$http.get(
          `categories/${this.cateId}/attributes`,
          {
            params: { sel: "many" },
          }
        );
        if (res.meta.status !== 200) {
          return this.$message.error("获取动态列表失败!");
        }
        res.data.forEach(
          (item) =>
            (item.attr_vals =
              item.attr_vals.length === 0 ? [] : item.attr_vals.split(" "))
        );
        // console.log(res)
        this.manyTableData = res.data;
      }
      if (this.activeIndex === "2") {
        const { data: res } = await this.$http.get(
          `categories/${this.cateId}/attributes`,
          {
            params: { sel: "only" },
          }
        );
        if (res.meta.status !== 200) {
          return this.$message.error("获取静态列表失败!");
        }
        this.onlyTableData = res.data;
        console.log(this.onlyTableData);
      }
    },
    // 点击图片预览时触发
    handlePreview(file) {
      this.previewPath = file.response.data.url.replace(
        "http://127.0.0.1",
        "https://lianghj.top"
      );
      this.previewDialogVisible = true;
      console.log("预览图片", file.response.data.url);
    },
    // 处理移除图片的操作
    handleRemove(file) {
      // 1. 获取将要删除的图片的临时路径
      const filePath = file.response.data.tmp_path;
      // 2. 从 pics 数组中找到这个图片的对应的索引值
      const index = this.addForm.pics.findIndex((x) => x.pic === filePath);
      // 3. 调用数组的splice方法,把图片信息对象,从pics数组中移除
      this.addForm.pics.splice(index, 1);
      console.log("移除图片", file, this.addForm);
    },
    // 监听图片上传成功的事件
    handleSuccess(resposne) {
      // 1. 拼接得到一个图片信息对象
      const picInfo = { pic: resposne.data.tmp_path };
      // 2. 将图片信息对象push到pics数组中
      this.addForm.pics.push(picInfo);
      console.log(resposne);
      console.log(this.addForm);
    },
    addShop() {
      this.activeIndex = 4
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) {
          return this.$message.error("请填写必要的表单项");
        }
        // 执行添加的业务逻辑
        const form = _.cloneDeep(this.addForm);
        form.question_cat = form.question_cat.join(",");
        // 处理动态参数
        this.manyTableData.forEach((item) => {
          const newInfo = { attr_id: item.attr_id, attr_vals: item.attr_vals };
          this.addForm.attrs.push(newInfo);
        });
        // 处理静态参数
        this.onlyTableData.forEach((item) => {
          const newInfo = { attr_id: item.attr_id, attr_vals: item.attr_vals };
          this.addForm.attrs.push(newInfo);
        });
        form.attrs = this.addForm.attrs;
        // console.log(form)
        // 发起请求添加题目数据
        // 题目的名称必须是唯一的
        const { data: res } = await this.$http.post("questions", form);
        console.log(res);
        if (res.meta.status !== 201) {
          return this.$message.error("添加题目失败!");
        }
        this.$message.success("添加题目成功!");
        //TODO
        this.$router.push("/system/teacher/questionList");
        // 不能直接做转换因为在 级联选择器 中双向绑定了 question_cat 作为key
        // this.addForm.question_cat = this.addForm.question_cat.join(',')
      });
    },
  },
  computed: {
    cateId() {
      if (this.addForm.question_cat.length === 3) {
        return this.addForm.question_cat[2];
      }
      return null;
    },
  },
};
</script>

<style lang="less" scoped>
.el-steps {
  margin: 15px 0;
}
.el-step__title {
  font-size: 13px;
}
.el-checkbox {
  margin: 0 5px 0 0 !important;
}
.perviewImg {
  width: 100%;
}
.AddBtn {
  margin-top: 15px;
}
</style>
