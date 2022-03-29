<template>
  <div>
    <el-col span="9">
      <el-card shadow="hover">
        <div style="height:320px;width:580px" id="main"></div>
      </el-card>
    </el-col>
    <el-col span="9">
      <el-card shadow="hover">
        <div style="height:320px;width:580px" id="last"></div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myChart1: null,
      myChart2: null,
    };
  },
  mounted() {
    this.initChart();
    this.init();
  },
  methods: {
    initChart() {
      this.myChart1 = this.$echarts.init(
        document.getElementById("main"),
        "vintage"
      );

      const option = {
        title: {
          // text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["视频", "音频", "图片", "文档", "其他"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "视频",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "音频",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "图片",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "文档",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "其他",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };

      this.myChart1.setOption(option);
    },
    init() {
      this.myChart2 = this.$echarts.init(
        document.getElementById("last"),
        "vintage"
      );
      const lastOption = {
        // title: {
        //   text: "Rainfall vs Evaporation",
        //   subtext: "Fake Data",
        // },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        legend: {
          data: ["新增用户", "活跃用户"],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "新增用户",
            type: "bar",
            data: [5, 6, 9, 13, 12, 4, 6],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "Avg" }],
            },
          },
          {
            name: "活跃用户",
            type: "bar",
            data: [26, 30, 75, 82, 48, 16],
            markPoint: {
              data: [
                { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "Min", value: 2.3, xAxis: 11, yAxis: 3 },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "Avg" }],
            },
          },
        ],
      };
      this.myChart2.setOption(lastOption);
    },
  },
};
</script>

<style></style>
