<template>
  <div class="custom-tree-container">
    <img
      src="@/assets/css/images/filelist.svg"
      alt=""
      style=" width: 42px;height: 42px;vertical-align:middle; border-radius:5px"
    />
    <b> 文件目录</b>
    <br /><br />
    <el-card>
      <el-input
        class="filterInput"
        placeholder="输入关键字进行过滤"
        v-model="filterText"
      >
      </el-input>

      <div class="block">
        <br />
        <el-tree
          :indent="0"
          :data="data"
          node-key="id"
          default-expand-all
          :highlight-current="true"
          class="tree-line"
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          ref="tree"
          icon-class="el-icon-folder-opened"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button
                v-if="node.childNodes.length > 0"
                type="text"
                icon="el-icon-folder-add"
                circle
                @click="() => append(data)"
              >
              </el-button>
              <el-button
                type="text"
                icon="el-icon-delete"
                circle
                @click="() => remove(node, data)"
              >
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </el-card>
  </div>
</template>

<script>
let id = 1000;

export default {
  data() {
    const data = [
      {
        id: 1,
        label: "视频文件",
        children: [
          {
            id: 4,
            label: "mp4文件",
            children: [
              {
                id: 9,
                label: "数据结构.mp4",
              },
              {
                id: 10,
                label: "计算机组成原理.mp4",
              },
            ],
          },
          {
            id: 12,
            label: "avi文件",
            children: [
              {
                id: 15,
                label: "计算机网络.avi",
              },
              {
                id: 16,
                label: "操作系统.avi",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "office文件",
        children: [
          {
            id: 5,
            label: "Word文档",
            children: [
              {
                id: 5,
                label: "abc.doc",
              },
              {
                id: 6,
                label: "panda.docx",
              },
            ],
          },
          {
            id: 6,
            label: "PPT演示文稿",
            children: [
              {
                id: 5,
                label: "abc.ppt",
              },
              {
                id: 6,
                label: "中期答辩.ppt",
              },
            ],
          },
          {
            id: 6,
            label: "Excel表格",
            children: [
              {
                id: 5,
                label: "abc.xlsx",
              },
              {
                id: 6,
                label: "成绩单.xlsx",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: "图片文件",
        children: [
          {
            id: 7,
            label: "jpg文件",
            children: [
              {
                id: 5,
                label: "abc.jpg",
              },
              {
                id: 6,
                label: "panda.jpg",
              },
            ],
          },
          {
            id: 8,
            label: "png文件",
            children: [
              {
                id: 5,
                label: "脑图.png",
              },
              {
                id: 6,
                label: "操作系统.png",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        label: "其他文件",
        children: [
          {
            id: 59,
            label: "winxsx.dat",
          },
        ],
      },
    ];
    return {
      filterText: "",
      //删除树形数组内容
      deleteList:[],
      //编辑树形结构数组内容
      editList:[],
      //新增
      addList:[],
      // data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  updated() {
    this.changeColor();
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },
    // 隔行变色
    // changeColor() {
    //   var content = document.getElementsByClassName("el-tree-node__content");
    //   for (var i = 0; i < content.length; i++) {
    //     if (i % 2 === 0) {
    //       content[i].style.background = '#ebeef5';
    //     } else {
    //       content[i].style.background = '';
    //     }
    //   }
    // },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
};
</script>
<style lang="less" scope>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding-right: 8px;
}
.filterInput {
  width: 80% !important;
  margin-left: 10%;
  margin-bottom: 20px;
}
// 重新修改tree组件样式
.tree-line {
  .el-tree-node {
    position: relative;
    padding-left: 16px;
  }
  .el-tree-node__content {
    margin-top: 10px;
  }
  .el-tree-node__children {
    padding-left: 16px;
  }

  .el-tree-node::before {
    content: "";
    height: 100%;
    width: 1px;
    position: absolute;
    left: -3px;
    top: -26px;
    border-width: 1px;
    border-left: 1px dashed #52627c;
  }

  .el-tree-node:last-child::before {
    height: 38px;
  }

  .el-tree-node::after {
    content: "";
    width: 24px;
    height: 20px;
    position: absolute;
    left: -3px;
    top: 12px;
    border-width: 1px;
    border-top: 1px dashed #52627c;
  }

  & > .el-tree-node::after {
    border-top: none;
  }
  & > .el-tree-node::before {
    border-left: none;
  }

  .el-tree-node__expand-icon {
    font-size: 18px;
    color: #000;
    &.is-leaf {
      color: transparent;
      // display: none;
    }
  }
}
</style>
