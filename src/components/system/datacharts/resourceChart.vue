<template>
  <div class="com-container">
    <!-- <el-card id="my" ref="sellerRef"> -->
    <br />
    <h1>▎资源点击量统计</h1>
    <div id="main" ref="sellerRef" style="height: 730px"></div>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      myChart: null,
      allData: [
        {
          name: "期末成绩单.xslx",
          value: 99,
        },
        {
          name: "职位名单.doc",
          value: 102,
        },
        {
          name: "期末试题.pptx",
          value: 83,
        },
        {
          name: "教学书籍.txt",
          value: 49,
        },
        {
          name: "题库.zip",
          value: 200,
        },
        {
          name: "教学课程表.xslx",
          value: 152,
        },
        {
          name: "Resource_Systems.pdf",
          value: 76,
        },
        {
          name: "毕业设计开题报告.doc",
          value: 23,
        },
        {
          name: "毕业实习报告.pdf",
          value: 87,
        },
        {
          name: "compressed_tracemonkey.pdf",
          value: 223,
        },
        {
          name: "课程表.png",
          value: 145,
        },
        {
          name: "校标.jpg",
          value: 187,
        },
        {
          name: "计科教学计划.docx",
          value: 127,
        },
        {
          name: "信安教学计划.docx",
          value: 57,
        },
        {
          name: "软工教学计划.docx",
          value: 99,
        },
      ], //服务器返回数据
      currentPage: 1,
      totalPage: 0,
      timerId: null, //定时器标识
    };
  },
  mounted() {
    this.initChart();
    this.getData();
    // setTimeout(() => {
    //   window.addEventListener("resize", this.screenAdapter);
    // }, 1000);
    window.addEventListener("resize", this.screenAdapter);
    //页面加载完主动适配
    this.screenAdapter();
  },
  methods: {
    initChart() {
      this.myChart = this.$echarts.init(
        document.getElementById("main"),
        "vintage"
      );
      //图表初始化配置
      const initOption = {
        title: {
          // text: "▎资源访问统计",
          left: "35%",
        },
        grid: {
          right: "15%",
          x: 60,
          y: 60,
          x2: 0,
          y2: 15,
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            z: 0,
            lineStyle: {
              color: "#d3d7d4",
            },
          },
        },
        series: [
          {
            type: "bar",
            data: [
              {
                name: "课程表.png",
                value: 145,
              },
              {
                name: "校标.jpg",
                value: 187,
              },
              {
                name: "计科教学计划.docx",
                value: 127,
              },
              {
                name: "信安教学计划.docx",
                value: 57,
              },
              {
                name: "软工教学计划.docx",
                value: 99,
              },
            ],
            label: {
              show: true,
              position: "right",
              textStyle: {
                color: "black",
              },
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#5052EE",
                },
                {
                  offset: 1,
                  color: "#AB6EE5",
                },
              ]),
            },
          },
        ],
      };
      this.myChart.setOption(initOption);
      //图表鼠标监听事件
      this.myChart.on("mousein", () => {
        clearInterval(this.timerId);
      });
      this.myChart.on("mouseout", () => {
        this.startInterval();
      });
    },
    async getData() {
      const { data: ret } = await this.$http.get("resourceClick");
      this.allData = ret;
      //数据排序
      this.allData.sort((a, b) => {
        return a.value - b.value;
      });
      //分页、向上取整
      this.totalPage = Math.ceil(this.allData.length / 5);
      // this.totalPage = this.allData.length % 5 ===0 ? this.allData.length / 5  : this.allData.length * 5 + 1
      this.updateChart();
      //定时器
      this.startInterval();
    },
    updateChart() {
      const start = (this.currentPage - 1) * 5;
      const end = this.currentPage * 5;
      const showData = this.allData.slice(start, end);
      const sellerNames = showData.map((item) => {
        return item.name;
      });
      const sellerValues = showData.map((item) => {
        return item.value;
      });
      const dataOption = {
        yAxis: {
          data: sellerNames,
        },

        series: [
          {
            data: sellerValues,
          },
        ],
      };
      this.myChart.setOption(dataOption);
    },
    startInterval() {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      this.timerId = setInterval(() => {
        this.currentPage++;
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1;
        }
        this.updateChart();
      }, 3000);
    },
    //屏幕适配
    screenAdapter() {
      // console.log(this.$refs.sellerRef.clientWidth);
      const titleFontSize = (this.$refs.sellerRef.clientWidth / 100) * 3.0;
      const adpterOption = {
        title: {
          // text: "▎资源访问统计",
          left: "35%",
        },
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize,
            },
          },
        },
        series: [
          {
            barWidth: titleFontSize,
            itemStyle: {
              barBorderRadius: [0, titleFontSize / 2, titleFontSize / 2, 0],
            },
          },
        ],
      };
      this.myChart.setOption(adpterOption);
      this.myChart.resize();
    },
  },
  destroyed() {
    clearInterval();
  },
};
</script>

<style lang="less" scoped>
.com-container,
.my {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#main {
  margin-top: 4.5%;
}
</style>
