<template>
  <div>
    <router-view></router-view>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:16px">
      <el-breadcrumb-item :to="{ path: '/console' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br /><br />
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="7">
          <!-- 搜索与添加区域 -->
          <el-input
            placeholder="请输入内容"
            clearable
            v-model="queryInfo.query"
            @clear="getUserList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserList"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <!-- 添加用户区域 -->
          <el-button
            type="primary"
            @click="addDialogVisible = true"
            round
            icon="el-icon-plus"
            >用户添加</el-button
          >
        </el-col>
      </el-row>
      <!-- 用户列表 -->
      <el-table :data="userData.userList" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="user_id" label="用户id"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>

        <!-- <el-table-column label="状态">
          <template v-slot="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="userStatuChanged(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column> -->
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="userStorage" label="存储容量"></el-table-column>
        <el-table-column label="操作" width="180px">
          <template v-slot="scope">
            <!-- 修改按钮 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="showEditDialog(scope.row.id)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="removeUserById(scope.row.id)"
            ></el-button>
            <!-- 分配角色按钮 -->
            <el-tooltip
              effect="dark"
              content="分配角色"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="warning"
                icon="el-icon-setting"
                circle
                @click="setRoles(scope.row)"
              ></el-button>
            </el-tooltip>
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
        :total="userData.total"
      >
      </el-pagination>
    </el-card>
    <!-- 添加用户对话框 -->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDislogClosed"
    >
      <!-- 内容主题区域 -->
      <el-form
        label-width="70px"
        ref="addFormRef"
        :model="addForm"
        :rules="addFormRules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="id" prop="user_id">
          <el-input v-model="addForm.user_id"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部按钮区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户信息对话框 -->
    <el-dialog
      title="修改用户"
      @close="aditClosed"
      :visible.sync="editDialogVisble"
      width="50%"
    >
      <el-form
        :model="editForm"
        :rules="addFormRules"
        ref="editFormRef"
        label-width="70px"
      >
        <el-form-item label="用户名">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisble = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分配角色 -->
    <el-dialog
      title="分配角色"
      :visible.sync="setRolesDialogVisible"
      @close="setRolesDialogClosed"
      width="50%"
    >
      <el-form :model="userList" label-width="80px" ref="editForm">
        <div>
          <p>当前的用户 : {{ userInfo.username }}</p>
          <p>当前的角色 : {{ userInfo.role_name }}</p>
          <template>
            <p>
              分配新角色:
              <el-select v-model="selectRoleId" placeholder="请选择">
                <el-option
                  v-for="item in roleOptions"
                  :key="item.value"
                  :label="item.role_name"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </p>
          </template>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRolesDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveRolesInfo">确 定</el-button>
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
      // 获取用户列表的参数对象
      queryInfo: {
        // 搜索值
        query: "",
        // 当前的页数
        pagenum: 1,
        // 当前每次显示多少条数据
        pagesize: 5,
      },
      // 存放用户的数据和数量
      userData: {
        userList: [
          {
            username: "zxc",
            user_id: "1",
            email: "1252536388@qq.com",
            mobile: "19939707043",
            role_name: "admin",
            userStorage: "max",
            // mg_state: true
          },
          {
            username: "奥特曼",
            user_id: "126",
            email: "24236388@qq.com",
            mobile: "124378634242",
            role_name: "staff",
            userStorage: "10GB",
            // mg_state: true
          },
          {
            username: "波比",
            user_id: "12423",
            email: "76352432578@qq.com",
            mobile: "17387344242",
            role_name: "student",
            userStorage: "1GB",
            // mg_state: false
          },
        ],
        total: 0,
      },
      // 控制用户对话框的显示和隐藏
      addDialogVisible: false,
      // 添加用户数据的对象
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      // 修改用户消息对话框
      editDialogVisble: false,
      // 分配角色对话框
      setRolesDialogVisible: false,
      // 分配角色用户信息
      userInfo: {},
      // 分配角色列表
      roleOptions: [
        {
          value: "管理员",
          role_name: "admin",
        },

        {
          value: "教职工",
          role_name: "staff",
        },
        {
          value: "学生",
          role_name: "student",
        },
      ],
      value: "",
      // 保存已经选中的角色id值
      selectRoleId: "",
      // 查询用户的对象
      editForm: {},
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    //TODO
    async getUserList() {
      const { data: res } = await this.$http.get("users", {
        params: this.queryInfo,
      });
      // if (res.meta.status !== 200) {
      //   this.$message.error("获取用户列表失败!");
      // }
      this.$message.success("获取用户列表成功!");
      // this.userData.userList = res.data.users; //TODOdata中user字段
      // this.userData.total = res.data.total;
      // console.log(res)
    },
    // 监听 pagesize 改变事件 每页显示的个数
    handleSizeChange(newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize;
      this.getUserList();
    },
    // 监听 页码值 改变的事件 当前页面值
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getUserList();
    },
    // 监听Switch状态的改变
    async userStatuChanged(userInfo) {
      // console.log(userInfo)
      const { data: res } = await this.$http.put(
        `users/${userInfo.user_id}/state/${userInfo.mg_state}`
      );
      if (res.meta.status !== 200) {
        userInfo.mg_state = !userInfo.mg_state;
        return this.$message.error("更新用户状态失败!");
      }
      return this.$message.success("更新用户状态成功!");
    },
    // 监听添加用户的对话框关闭事件
    addDislogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    // 点击按钮,添加新用户
    addUser() {
      this.$refs.addFormRef.validate(async (valid) => {
        console.log(valid);
        if (!valid) return;
        // 可以发起添加用户请求
        const { data: res } = await this.$http.post("users", this.addForm);
        if (res.meta.status !== 201) {
          return this.$message.error("用户添加失败了~");
        }
        // 隐藏添加用户的对话框
        this.addDialogVisible = false;
        // 添加成后重新获取用户数据,不需要用户手动刷新
        this.getUserList();
        return this.$message.success("用户添加成功了~");
      });
    },
    // 展示编辑用于的对话框
    async showEditDialog(id) {
      const { data: res } = await this.$http.get("users/" + id);
      // if (res.meta.status !== 200) {
      //   return this.$message.error("查询用户数据失败~");
      // }
      this.editForm = res.data;
      console.log(res);
      this.editDialogVisble = true;
      return this.$message.success("查询用户数据成功~");
    },
    // 监听修改用户对话框的关闭事件
    aditClosed() {
      this.$refs.editFormRef.resetFields();
    },
    editUserInfo() {
      this.editDialogVisble = true;
      this.$refs.editFormRef.validate(async (valid) => {
        console.log(valid);
        if (!valid) return;
        // 发起修改用户信息的数据请求
        const { data: res } = await this.$http.put(
          "users/" + this.editForm.user_id,
          {
            email: this.editForm.email,
            mobile: this.editForm.mobile,
          }
        );
        if (res.meta.status !== 200) {
          this.$message.error("更新用户信息失败!");
        }
        this.editDialogVisble = false;
        this.getUserList();
        this.$message.success("更新用户信息成功!");
      });
    },
    // 根据id删除对应的用户信息
    async removeUserById(id) {
      // 询问用户是否删除用户
      const confirmRusult = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "永久删除该用户",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      console.log(confirmRusult);
      // 用户点击了删除,则返回字符串 confirm
      // 用户取消了删除,则返回字符串 cancel
      if (confirmRusult !== "confirm") {
        return this.$message.info("已经取消了删除");
      }
      this.$http.delete("users/" + id).then((res) => {
        const { data: response } = res;
        console.log(response);
        if (response.meta.status !== 200) {
          return this.$message.error("该用户删除失败");
        }
        this.$message.success("该用户已经删除");
        this.getUserList();
      });
    },
    // 展示分配角色的对话框
    async setRoles(userInfo) {
      this.userInfo = userInfo;
      // 再展示对话框之前获取所有的角色列表
      //TODO接口
      const { data: res } = await this.$http.get("roles");
      // if (res.meta.status !== 200) {
      //   return this.$message.error("获取角色列表失败!");
      // }
      this.rolesList = res.data;
      this.setRolesDialogVisible = true;
    },
    // 点击按钮,分配角色
    async saveRolesInfo() {
      if (!this.selectRoleId) {
        return this.$message.error("请选择要分配的角色!");
      }
      const { data: res } = await this.$http.put(
        `users/${this.userInfo.user_id}/role`,
        {
          rid: this.selectRoleId,
        }
      );
      if (res.meta.status !== 200) {
        return this.$message.error("更新角色失败!");
      }
      this.$message.success("更新角色成功!");
      this.getUserList();
      this.setRolesDialogVisible = false;
    },
    // 分配角色对话框关闭
    setRolesDialogClosed() {
      this.selectRoleId = "";
      this.userInfo = "";
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
