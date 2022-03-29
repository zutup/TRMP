<template>
  <div>
    <img
      src="@/assets/css/images/library.svg"
      alt=""
      style="width: 45px; height: 45px; vertical-align: middle"
    />
    <b> 题 库</b>

    <el-tooltip
      class="item"
      effect="dark"
      content="视频中弹出的问题"
      placement="right"
    >
      <img
        src="@/assets/css/images/doubt.svg"
        alt=""
        style="width: 15px; height: 15px; margin-left:5px;margin-top:5px"
      />
    </el-tooltip>
    <br /><br />
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="7">
          <!-- 搜索与添加区域 -->
          <el-input
            placeholder="请输入内容"
            clearable
            v-model="queryInfo.query"
            @clear="getquestionList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getquestionList"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <!-- 添加题目区域 -->
          <el-button
            type="primary"
            @click="gotoQuestion"
            round
            icon="el-icon-plus"
            >题目添加</el-button
          >
        </el-col>
      </el-row>
      <!-- 题目列表 -->
      <el-table
        :data="questionData.questionList"
        stripe
        style="width: 100%"
        border
      >
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="question_id" label="问题编号"></el-table-column>
        <el-table-column
          prop="question_type"
          label="问题类型"
        ></el-table-column>
        <el-table-column prop="questionor" label="出题人"></el-table-column>
        <el-table-column prop="video_name" label="所属视频"></el-table-column>
        <el-table-column label="状态">
          <template v-slot="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="questionStatuChanged(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template v-slot="scope">
            <!-- 修改按钮 -->
            <!-- @click="showEditDialog(scope.row.id)" -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              circle
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="removequestionById(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        @size-change="handleSizeChange"
        :page-size="queryInfo.pagesize"
        :page-sizes="[5, 9, 13, 15]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="questionData.total"
      >
      </el-pagination>
    </el-card>
    <!-- 修改题目信息对话框 -->
    <el-dialog
      title="修改题目"
      @close="aditClosed"
      :visible.sync="editDialogVisble"
      width="50%"
    >
      <el-form
        :model="editForm"
        :rules="addFormRules"
        ref="editFormRef"
        label-width="70px"
        ><el-form-item label="编号" prop="question_id">
          <el-input v-model="editForm.question_id" disabled></el-input>
        </el-form-item>
        <el-form-item label="题目类型">
          <el-input v-model="editForm.question_type"></el-input>
        </el-form-item>
        <el-form-item label="出题人" prop="questionor">
          <el-input v-model="editForm.questionor"></el-input>
        </el-form-item>
        <el-form-item label="题目内容" prop="context">
          <el-input v-model="editForm.context"></el-input>
        </el-form-item>
        <el-form-item label="答案" prop="answer">
          <el-input v-model="editForm.answer"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisble = false">取 消</el-button>
        <el-button type="primary" @click="editquestionInfo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import Breadcrumb from '../components/breadCrumb.vue'
export default {
  // components: {
  //   Breadcrumb
  // },
  data() {
    return {
      // 获取题目列表的参数对象
      queryInfo: {
        // 搜索值
        query: "",
        // 当前的页数
        pagenum: 1,
        // 当前每次显示多少条数据
        pagesize: 5,
      },
      // total: 3,
      // 存放题目的数据和数量
      questionData: {
        questionList: [
          {
            question_id: "2437",
            question_type: "单选题",
            questionor: "zxc",
            video_name: "数据结构.mp4",
            context: "以下符合红黑树定义的是",
            answer: "A",
            mg_state: true,
          },
          {
            question_id: "7327",
            question_type: "填空题",
            questionor: "admin",
            video_name: "计算机网络.mp4",
            context: "UDP协议是哪一层的协议",
            answer: "传输层",
            mg_state: true,
          },
          {
            question_id: "7678",
            question_type: "论述题",
            questionor: "sean",
            video_name: "操作系统.avi",
            context: "简述死锁产生的必要条件",
            answer: "null",
            mg_state: false,
          },
        ],
        total: 3  ,
      },
      // 控制题目对话框的显示和隐藏
      addDialogVisible: false,
      // 修改题目消息对话框
      editDialogVisble: false,
      // 分配角色对话框
      setRolesDialogVisible: false,
      // 查询
      editForm: {},
    };
  },
  created() {
    this.getquestionList();
  },
  methods: {
    handleEdit: function(index, row) {
      this.editDialogVisble = true; //dialog对话窗口打开
      this.editForm = Object.assign({}, row); //将数据传入dialog页面
      this.editForm.index = index; //传递当前index
    },
    //TODO接口
    async getQuestionList() {
      const { data: res } = await this.$http.get("question", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200) {
        this.$message.error("获取题目列表失败!");
      }
      this.$message.success("获取题目列表成功!");
      this.questionData.questionList = res.data.questions;
      this.questionData.total = res.data.total;
      // console.log(res)
    },
    gotoQuestion() {
      this.$router.push("/system/teacher/question");
    },
    // 监听 pagesize 改变事件 每页显示的个数
    handleSizeChange(newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize;
      this.getquestionList();
    },
    // 监听 页码值 改变的事件 当前页面值
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getquestionList();
    },
    // 监听Switch状态的改变
    async questionStatuChanged(questionInfo) {
      // console.log(questionInfo)
      const { data: res } = await this.$http.put(
        `questions/${questionInfo.id}/state/${questionInfo.mg_state}`
      );
      if (res.meta.status !== 200) {
        questionInfo.mg_state = !questionInfo.mg_state;
        return this.$message.error("更新题目状态失败!");
      }
      return this.$message.success("更新题目状态成功!");
    },
    // 监听添加题目的对话框关闭事件
    addDislogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    // 点击按钮,添加新题目
    addquestion() {
      this.$refs.addFormRef.validate(async (valid) => {
        console.log(valid);
        if (!valid) return;
        // 可以发起添加题目请求
        const { data: res } = await this.$http.post("questions", this.addForm);
        if (res.meta.status !== 201) {
          return this.$message.error("题目添加失败了~");
        }
        // 隐藏添加题目的对话框
        this.addDialogVisible = false;
        // 添加成后重新获取题目数据,不需要题目手动刷新
        this.getquestionList();
        return this.$message.success("题目添加成功了~");
      });
    },
    // 展示编辑用于的对话框
    async showEditDialog(id) {
      const { data: res } = await this.$http.get("questions/" + id);
      if (res.meta.status !== 200) {
        return this.$message.error("查询题目数据失败~");
      }
      this.editForm = res.data;
      console.log(res);
      this.editDialogVisble = true;
      return this.$message.success("查询题目数据成功~");
    },
    // 监听修改题目对话框的关闭事件
    aditClosed() {
      this.$refs.editFormRef.resetFields();
    },
    editquestionInfo() {
      this.$refs.editFormRef.validate(async (valid) => {
        console.log(valid);
        if (!valid) return;
        // 发起修改题目信息的数据请求
        const { data: res } = await this.$http.put(
          "questions/" + this.editForm.id,
          {
            email: this.editForm.email,
            mobile: this.editForm.mobile,
          }
        );
        if (res.meta.status !== 200) {
          this.$message.error("更新题目信息失败!");
        }
        this.editDialogVisble = false;
        this.getquestionList();
        this.$message.success("更新题目信息成功!");
      });
    },
    // 根据id删除对应的题目信息
    async removequestionById(id) {
      // 询问题目是否删除题目
      const confirmRusult = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "永久删除该题目",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      console.log(confirmRusult);
      // 题目点击了删除,则返回字符串 confirm
      // 题目取消了删除,则返回字符串 cancel
      if (confirmRusult !== "confirm") {
        return this.$message.info("已经取消了删除");
      }
      this.$http.delete("questions/" + id).then((res) => {
        const { data: response } = res;
        console.log(response);
        if (response.meta.status !== 200) {
          return this.$message.error("该题目删除失败");
        }
        this.$message.success("该题目已经删除");
        this.getquestionList();
      });
    },
  },
};
</script>

<style>
.el-table {
  margin-top: 25px;
}
.el-card {
  box-shadow: 0 1px rgba(0, 0, 0, 0.15) !important;
}
</style>
