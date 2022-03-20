<template>
  <div class="Roles">
    <router-view></router-view>
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      style="font-size: 16px"
    >
      <el-breadcrumb-item :to="{ path: '/console' }">控制台</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br /><br />
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row>
        <!-- 添加角色 -->
        <el-col>
          <el-button type="primary" @click="addDialogVisible = true"
            >添加角色</el-button
          >
        </el-col>
        <el-col>
          <!-- 角色列表 -->
          <el-table :data="rolesList" border stripe>
            <!-- 展开列 -->
            <el-table-column type="expand">
              <template v-slot="scope">
                <el-row
                  :class="['bdtop', i1 === 0 ? 'bdbottom' : '', 'vcenter']"
                  v-for="(item1, i1) in scope.row.children"
                  :key="item1.id"
                >
                  <!-- 渲染一级权限 -->
                  <el-col :span="5">
                    <el-tag
                      closable
                      @close="removeRightById(scope.row, item1.id)"
                      >{{ item1.authName }}</el-tag
                    >
                    <i class="el-icon-caret-right"></i>
                  </el-col>

                  <!-- 渲染二和三级权限 -->
                  <el-col :span="19">
                    <!-- 通过 for 嵌套 渲染二级权限 -->
                    <el-row
                      v-for="(item2, i2) in item1.children"
                      :key="item2.id"
                      :class="[i2 === 0 ? '' : 'bdtop', 'vcenter']"
                    >
                      <el-col :span="6">
                        <el-tag
                          type="success"
                          closable
                          @close="removeRightById(scope.row, item2.id)"
                        >
                          {{ item2.authName }}
                        </el-tag>
                        <i class="el-icon-caret-right"></i>
                      </el-col>
                      <el-col :span="18">
                        <el-tag
                          type="warning"
                          :class="[i3 === 0 ? '' : 'bdtop']"
                          v-for="(item3, i3) in item2.children"
                          :key="item3.id"
                          closable
                          @close="removeRightById(scope.row, item3.id)"
                        >
                          {{ item3.authName }}
                        </el-tag>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <!-- <pre>
                  {{ scope.row }}
                </pre> -->
              </template>
            </el-table-column>
            <!-- 索引列 -->
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column prop="roleName" label="角色名称"></el-table-column>
            <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
            <el-table-column label="操作">
              <template v-slot="scope">
                <el-button
                  size="mini"
                  type="primary"
                  icon="el-icon-edit"
                  @click="showEditDialog(scope.row.id)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="rolesdelete(scope.row.id)"
                  icon="el-icon-delete"
                  >删除</el-button
                >
                <el-button
                  size="mini"
                  @click="showSetRightDialog(scope.row)"
                  type="warning"
                  icon="el-icon-search"
                  >分配权限</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-card>
    <!-- 添加角色对话框 -->
    <el-dialog
      title="添加角色"
      :visible.sync="addDialogVisible"
      @close="addDislogClosed"
    >
      <el-form
        :model="addRolesForm"
        :rules="addFormRules"
        ref="addRolesForm"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addRolesForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addRolesForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRolesUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑对话框 -->
    <el-dialog title="修改角色" :visible.sync="editDialogVisible" width="30%">
      <el-form
        :model="editRolesForm"
        :rules="editFormRules"
        ref="editFormRef"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editRolesForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editRolesForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editFormInfo">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分配权限的对话框 -->
    <el-dialog
      title="分配权限"
      :visible.sync="SetRightDialogVisible"
      width="50%"
      @close="SetRightDialogVisibleClosed"
    >
      <!-- 树形控件 -->
      <el-tree
        :data="roleList"
        :props="treeProps"
        show-checkbox
        node-key="id"
        :default-expand-all="true"
        :default-checked-keys="defKeys"
        ref="treeRef"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="SetRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="allotRights">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 所有角色的列表
      rolesList: [
        {
          roleName: "admin",
          roleDesc: "超级管理员",
          id: "1",
          children: [
            {
              id: "51",
              authName: "权限管理",
              children: [
                {
                  id: "91",
                  authName: "角色列表",
                  children: [
                    {
                      id: "132",
                      authName: "添加角色",
                    },
                    {
                      id: "133",
                      authName: "删除角色",
                    },
                    {
                      id: "134",
                      authName: "角色授权",
                    },
                    {
                      id: "135",
                      authName: "取消授权",
                    },
                    {
                      id: "136",
                      authName: "获取角色列表",
                    },
                    {
                      id: "137",
                      authName: "获取角色详情",
                    },
                  ],
                },
                {
                  id: "91",
                  authName: "权限列表",
                  children: [
                    {
                      id: "131",
                      authName: "添加用户",
                    },
                  ],
                },
              ],
            },
            {
              id: "61",
              authName: "用户管理",
              children: [
                {
                  id: "101",
                  authName: "用户列表",
                  children: [
                    {
                      id: "121",
                      authName: "添加用户",
                    },
                    {
                      id: "122",
                      authName: "删除用户",
                    },
                    {
                      id: "123",
                      authName: "更新用户",
                    },
                    {
                      id: "124",
                      authName: "获取用户详情",
                    },
                    {
                      id: "125",
                      authName: "分配用户角色",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          roleName: "staff",
          roleDesc: "教师、工作人员",
          id: "2",
          children: [
            {
              id: "81",
              authName: "公共资源库文件管理",
              children: [
                {
                  id: "201",
                  authName: "资源库列表",
                  children: [
                    {
                      id: "151",
                      authName: "上传资源",
                    },
                    {
                      id: "152",
                      authName: "查看资源",
                    },
                    {
                      id: "153",
                      authName: "下载资源",
                    },
                  ],
                },
              ],
            },
            {
              id: "71",
              authName: "个人信息管理",
              children: [
                {
                  id: "101",
                  authName: "个人信息列表",
                  children: [
                    {
                      id: "151",
                      authName: "上传头像",
                    },
                    {
                      id: "152",
                      authName: "修改信息",
                    },
                    {
                      id: "153",
                      authName: "删除信息",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          roleName: "student",
          roleDesc: "学生",
          id: "3",
           children: [
            {
              id: "81",
              authName: "公共资源库文件管理",
              children: [
                {
                  id: "201",
                  authName: "资源库列表",
                  children: [
                    {
                      id: "152",
                      authName: "查看资源",
                    },
                    {
                      id: "153",
                      authName: "下载资源",
                    },
                  ],
                },
              ],
            },
            {
              id: "71",
              authName: "个人信息管理",
              children: [
                {
                  id: "101",
                  authName: "个人信息列表",
                  children: [
                    {
                      id: "151",
                      authName: "上传头像",
                    },
                    {
                      id: "152",
                      authName: "修改信息",
                    },
                    {
                      id: "153",
                      authName: "删除信息",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      // 所有权限的数据
      rightsList: [],
      // 添加角色对话框的显示和隐藏
      addDialogVisible: false,
      // 编辑对话框的显示和隐藏
      editDialogVisible: false,
      // 分配权限对话框的显示和隐藏
      SetRightDialogVisible: false,
      addRolesForm: {
        roleName: "",
        roleDesc: "",
      },
      editRolesForm: {},
      // 树形控件的绑定对象
      treeProps: {
        children: "children",
        label: "authName",
      },
      // 树形控件 -> 默认选中的节点id值数组
      defKeys: [],
      // 当前即将分配权限的角色的ID
      rolesId: "",
    };
  },
  created() {
    this.getRolesList();
  },
  methods: {
    // 获取角色列表
    //TODO接口
    async getRolesList() {
      const { data: res } = await this.$http.get("roles");
      if (res.meta.status !== 200) {
        return this.$message.error("获取角色列表失败!");
      }
      this.rolesList = res.data;
      console.log(this.rolesList.id, "getRoles");
    },
    // 添加角色
    addRolesUser() {
      this.$refs.addRolesForm.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("roles", this.addRolesForm); //TODO
        console.log(res);
        //TODO状态码
        if (res.meta.status !== 201) {
          return this.$message.error("添加角色失败!");
        }
        this.$message.success("添加角色成功!");
        this.getRolesList();
        this.addDialogVisible = false;
      });
      // console.log(this.addRolesForm)
    },
    // 清空添加角色对话框
    addDislogClosed() {
      this.$refs.addRolesForm.resetFields();
    },
    // 删除角色
    async rolesdelete(id) {
      const confirmRusult = await this.$confirm(
        "此操作将永久删除该角色, 是否继续?",
        "删除角色",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      // 没有使用await
      if (confirmRusult !== "confirm") {
        return this.$message.info("已取消该删除操作");
      }
      //TODO
      this.$http.delete("roles/" + id).then((res) => {
        const { data: response } = res;
        // console.log(response)
        if (response.meta.status !== 200) {
          return this.$message.error("该用户删除失败");
        }
        this.$message.success("该用户已经删除");
        this.getRolesList();
      });
    },

    // 得到修改用户的信息 //TODO
    async showEditDialog(id) {
      const { data: res } = await this.$http.get("roles/" + id);
      if (res.meta.status !== 200) {
        return this.$message.error("查询角色失败!");
      }
      this.editRolesForm = res.data;
      console.log(this.editRolesForm);
      this.editDialogVisible = true;
    },
    editFormInfo() {
      this.$refs.editFormRef.validate((valid) => {
        if (!valid) return;
        //TODO
        this.$http
          .put("roles/" + this.editRolesForm.roleId, {
            roleName: this.editRolesForm.roleName,
            roleDesc: this.editRolesForm.roleDesc,
          })
          .then((res) => {
            if (res.data.meta.status !== 200) {
              return this.$message.error("修改角色失败!");
            }
            this.$message.success("修改角色成功!");
            this.getRolesList();
          });
        this.editDialogVisible = false;
      });
    },
    // 根据ID删除对应的权限
    async removeRightById(roles, id) {
      // 弹框提示用户是否删除
      const confirmResult = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (confirmResult !== "confirm") {
        return this.$message.info("取消了删除!");
      }
      //TODO
      const { data: res } = await this.$http.delete(
        `roles/${roles.id}/rights/${id}`
      );
      if (res.meta.status !== 200) {
        return this.$message.error("删除权限失败!");
      }
      // this.getRolesList()
      // 直接调用获取用户的方法会导致展开栏的关闭,这样体验不好
      // 可以直接把返回的最新数据直接赋值
      roles.children = res.data;
      console.log("删除");
    },
    // 展示分配权限的对话框
    async showSetRightDialog(roles) {
      this.rolesId = roles.id;
      // 获取所有权限列表
      //TODO
      const { data: res } = await this.$http.get("rights/tree");
      if (res.meta.status !== 200) {
        return this.$message.error("获取权限列表失败!");
      }
      // 获取到的权限数据保存
      this.rightsList = res.data;
      console.log(this.rightsList);
      // 递归获取三级节点
      this.getLeafKeys(roles, this.defKeys);
      this.SetRightDialogVisible = true;
    },
    // 递归的形式,获取角色下所有的三级权限的id,并保存到 defKeys数组中
    getLeafKeys(node, arr) {
      // 如果当前node没有children属性则是三级节点
      if (!node.children) {
        return arr.push(node.id);
      }
      node.children.forEach((item) => this.getLeafKeys(item, arr));
    },
    // 监听分配权限对话框的关闭事件
    SetRightDialogVisibleClosed() {
      // 清空 defkeys 数组  避免累积
      this.defKeys = [];
    },
    // 点击为角色分配权限
    async allotRights() {
      const keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys(),
      ];
      const idStr = keys.join(",");
      //TODO
      const { data: res } = await this.$http.post(
        `roles/${this.rolesId}/rights`,
        { rids: idStr }
      );
      if (res.meta.status !== 200) {
        return this.$message.error("分配权限失败!");
      }
      this.$message.success("分配权限成功!");
      this.getRolesList();
      this.SetRightDialogVisible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 15px;
}
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>
