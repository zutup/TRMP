<!-- 热销商品图表 -->
<template>
  <div class="com-container">
    <h1>▎存储使用统计</h1>
    <div class="com-chart" id="pie" ref="hot_ref"></div>
    <span class="iconfont icon-zuo" @click="toLeft" :style="comStyle"
      >&#xe6ef;</span
    >
    <span class="iconfont icon-you" @click="toRight" :style="comStyle"
      >&#xe6ed;</span
    >
    <span class="cat-name" :style="comStyle">{{ catName }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
      allData: [
        {
          name: "个人文件",
          children: [
            {
              name: "office文件",
              value: 20,
              children: [
                {
                  name: "Word文档",
                  value: 10,
                },
                {
                  name: "PPT演示文稿",
                  value: 4,
                },
                {
                  name: "excel表格",
                  value: 6,
                },
              ],
            },
            {
              name: "音视频文件",
              value: 13,
              children: [
                {
                  name: "MP3文件",
                  value: 7,
                },
                {
                  name: "MP4文件",
                  value: 4,
                },
                {
                  name: "avi文件",
                  value: 2,
                },
              ],
            },
            {
              name: "图片文件",
              value: 21,
              children: [
                {
                  name: "PNG文件",
                  value: 8,
                },
                {
                  name: "JPG文件",
                  value: 6,
                },
                {
                  name: "SVG文件",
                  value: 7,
                },
              ],
            },
            {
              name: "其他文件",
              value: 30,
              children: [
                {
                  name: "txt文件",
                  value: 10,
                },
                {
                  name: "exe文件",
                  value: 6,
                },
                {
                  name: "html文件",
                  value: 4,
                },
                {
                  name: "pdf文件",
                  value: 10,
                },
              ],
            },
          ],
        },
        {
          name: "公共资源库",
          children: [
            {
              name: "office文件",
              value: 20,
              children: [
                {
                  name: "Word文档",
                  value: 10,
                },
                {
                  name: "PPT演示文稿",
                  value: 4,
                },
                {
                  name: "excel表格",
                  value: 6,
                },
              ],
            },
            {
              name: "音视频文件",
              value: 13,
              children: [
                {
                  name: "MP3文件",
                  value: 7,
                },
                {
                  name: "MP4文件",
                  value: 4,
                },
                {
                  name: "avi文件",
                  value: 2,
                },
              ],
            },
            {
              name: "图片文件",
              value: 21,
              children: [
                {
                  name: "PNG文件",
                  value: 8,
                },
                {
                  name: "JPG文件",
                  value: 6,
                },
                {
                  name: "SVG文件",
                  value: 7,
                },
              ],
            },
            {
              name: "其他文件",
              value: 30,
              children: [
                {
                  name: "txt文件",
                  value: 10,
                },
                {
                  name: "exe文件",
                  value: 6,
                },
                {
                  name: "html文件",
                  value: 4,
                },
                {
                  name: "pdf文件",
                  value: 10,
                },
              ],
            },
            {
              name: "程序文件",
              value: 30,
              children: [
                {
                  name: ".c文件",
                  value: 10,
                },
                {
                  name: ".cpp文件",
                  value: 6,
                },
                {
                  name: ".asm文件",
                  value: 4,
                },
                {
                  name: ".dat文件",
                  value: 10,
                },
              ],
            },
          ],
        },
        {
          name: "文件统计",
          children: [
            {
              name: "资源库文件",
              value: 104,
              children: [
                {
                  name: "资源库文件",
                  value: 30291,
                },
              ],
            },
            {
              name: "个人文件",
              value: 74,
              children: [
                {
                  name: "个人文件",
                  value: 20,
                },
              ],
            },
          ],
        },
      ],
      currentIndex: 0, // 当前所展示出的一级分类数据
      titleFontSize: 0,
    };
  },
  computed: {
    catName() {
      if (!this.allData) {
        return "";
      } else {
        return this.allData[this.currentIndex].name;
      }
    },
    comStyle() {
      return {
        fontSize: this.titleFontSize / 2 + "px",
      };
    },
  },
  // created() {
  //   // 在组件创建完成之后 进行回调函数的注册
  //   this.$socket.registerCallBack('hotData', this.getData)
  // },
  mounted() {
    this.initChart();
    this.getData();
    // 发送数据给服务器, 告诉服务器, 我现在需要数据
    // this.$socket.send({
    //   action: 'getData',
    //   socketType: 'hotData',
    //   chartName: 'hotproduct',
    //   value: ''
    // })
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
    // 在组件销毁的时候, 进行回调函数的取消
    // this.$socket.unRegisterCallBack('hotData')
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(
        document.getElementById("pie"),
        "vintage"
      );
      const initOption = {
        legend: {
          top: "10%",
          icon: "circle",
        },
        tooltip: {
          show: true,
          formatter: (arg) => {
            // console.log(arg)
            const thirdCategory = arg.data.children;
            // 计算出所有三级分类的数值总和
            let total = 0;
            thirdCategory.forEach((item) => {
              total += item.value;
            });
            let retStr = "";
            thirdCategory.forEach((item) => {
              retStr += `
              ${item.name}:${parseInt((item.value / total) * 100) + "%"}
              <br/>
              `;
            });
            return retStr;
          },
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            data: [
              { value: 40, name: " 1" },
              { value: 38, name: " 2" },
              { value: 32, name: " 3" },
              { value: 30, name: " 4" },
              { value: 28, name: " 5" },
              { value: 26, name: " 6" },
              { value: 22, name: " 7" },
              { value: 18, name: " 8" },
            ],
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
              labelLine: {
                show: false,
              },
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      // 获取服务器的数据, 对this.allData进行赋值之后, 调用updateChart方法更新图表
      const { data: ret } = await this.$http.get("hotproduct");
      this.allData = ret;
      console.log(this.allData);
      this.updateChart();
    },
    updateChart() {
      // 处理图表需要的数据
      const legendData = this.allData[this.currentIndex].children.map(
        (item) => {
          return item.name;
        }
      );
      const seriesData = this.allData[this.currentIndex].children.map(
        (item) => {
          return {
            name: item.name,
            value: item.value,
            children: item.children, // 新增加children的原因是为了在tooltip中的formatter的回调函数中,来拿到这个二级分类下的三级分类数据
          };
        }
      );
      const dataOption = {
        legend: {
          data: legendData,
        },
        series: [
          {
            data: seriesData,
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      this.titleFontSize = (this.$refs.hot_ref.offsetWidth / 100) * 3.0;
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: this.titleFontSize,
          },
        },
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
          itemGap: this.titleFontSize / 2,
          textStyle: {
            fontSize: this.titleFontSize / 3.0,
          },
        },
        series: [
          {
            radius: this.titleFontSize * 3.5,
            center: ["50%", "55%"],
          },
        ],
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    toLeft() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.allData.length - 1;
      }
      this.updateChart();
    },
    toRight() {
      this.currentIndex++;
      if (this.currentIndex > this.allData.length - 1) {
        this.currentIndex = 0;
      }
      this.updateChart();
    },
  },
  // watch: {
  //   theme() {
  //     console.log('主题切换了')
  //     this.chartInstance.dispose() // 销毁当前的图表
  //     this.initChart() // 重新以最新的主题名称初始化图表对象
  //     this.screenAdapter() // 完成屏幕的适配
  //     this.updateChart() // 更新图表的展示
  //   }
  // }
};
</script>

<style lang="less" scoped>
.icon-zuo {
  position: absolute;
  left: 25%;
  top: 60%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 50px;
  color: rgb(195, 202, 224);
}
.icon-you {
  position: absolute;
  right: 23%;
  top: 60%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 50px;
  color: rgb(195, 202, 224);
}
.cat-name {
  position: absolute;
  left: 80%;
  bottom: 20%;
  color: black;
}
</style>
