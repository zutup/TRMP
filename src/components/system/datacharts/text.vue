<template>
  <div class="ml20 mr20 mb20 colorFOp">
    <br />
    <h1>▎平台访问量统计</h1>
    <el-card>
    <div ref="test" class="testChart"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myTestChart: {},
    };
  },
  mounted() {
    this.testChart();
    window.onresize = () => {
      //窗口变化自动重载
      this.myTestChart.resize();
    };
  },
  methods: {
    //添加千分位
    formatCurrency(value) {
      if (value == 0) return 0;
      if (value == ".") return "";
      if (value == "N/A") return "N/A";
      if (!value) return "";
      let val = Number(value); // 提前保留两位小数
      let intPart = parseInt(val); // 获取整数部分
      let intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); // 将整数部分逢三一断
      let floatPart = "0"; // 预定义小数部分
      val = val.toString(); // 将number类型转为字符串类型，方便操作
      let value2Array = val.split(".");

      if (value2Array.length === 2) {
        // =2表示数据有小数位
        floatPart = value2Array[1].toString(); // 拿到小数部分
        return intPartFormat + "." + floatPart;
      } else {
        return intPartFormat;
      }
    },
    testChart() {
      this.myTestChart = echarts.init(this.$refs.test);
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "15",
          right: "15",
          bottom: "5",
          top: "60",
          containLabel: true, //防止标签溢出
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false, //设置x轴左右起始位置不留白，贴边展示
            splitLine: {
              //横线
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                type: "solid",
                color: "#fff", //左边线的颜色
                width: "1", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
            data: Array.from({ length: 4 }, (v, k) => `${k + 1}月`),
          },
        ],
        yAxis: [
          {
            name: "访问量",
            nameTextStyle: {
              color: "#65ABE7",
              fontSize: 12,
              padding: [0, 0, 0, -30],
            },
            type: "value",
            // inverse: true,//倒叙
            axisTick: {
              //隐藏刻度
              show: false,
            },
            splitLine: {
              //竖线
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                type: "solid",
                color: "#fff", //左边线的颜色
                width: "1", //坐标线的宽度
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
        ],
        color: ["#00CBDE", "#F00067"],
        series: [
          {
            name: "柱子",
            type: "line",
            symbol: "none", //线上原点
            smooth: true, //平滑
            data: [7, 17, 9, 13],
            areaStyle: {
              //设置渐变色
              /*
              真实环境使用往往是API读取数据，循环series，因此需要定义color数组利用index读取对应颜色
              let color = [
                {
                  a:'73, 213, 248, .5', 
                  b:'73, 213, 248, 0'
                },
                {
                  a:'250, 141, 21, .5' ,
                  b:'250, 141, 21, 0'
                },
                {
                  a:'160, 8, 73, .5' ,
                  b:'160, 8, 73, 0'
                }
              ]
              写法如下：
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: `rgba(${color[i].a})`}, 
                {offset: 1, color: `rgba(${color[i].b})`}
              ]),
            */
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(73, 213, 248, .5)" },
                { offset: 1, color: "rgba(73, 213, 248, 0)" },
              ]),
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 0.8, //线本身宽度
                },
              },
            },
          },
          {
            name: "折线",
            type: "line",
            symbol: "none", //线上原点
            smooth: true, //平滑
            data: [2, 12, 6, 2],
            areaStyle: {
              //设置渐变色
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(250, 141, 21, .5)" },
                { offset: 1, color: "rgba(250, 141, 21, 0)" },
              ]),
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 0.8, //线本身宽度
                },
              },
            },
          },
          {
            name: "折线",
            type: "line",
            symbol: "none", //线上原点
            smooth: true, //平滑
            data: [15, 18, 14, 16],
            areaStyle: {
              //设置渐变色
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(160, 8, 73, .5)" },
                { offset: 1, color: "rgba(160, 8, 73, 0)" },
              ]),
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 0.8, //线本身宽度
                },
              },
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      this.myTestChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.testChart {
  margin: 100px auto;
  width: 850px;
  height: 50vh;
}
.title {
  font-size: 16px;
  color: #00f8fd;
  line-height: 42px;
}
</style>
