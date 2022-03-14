<template>
  <div class="com-container">
    <div class="title" :style="comStyle">
      <span><b>{{ "▎ " + showTitle }}</b></span>
      <span
        class="iconfont icon-xiala"
        @click="showChoice = !showChoice"
        >&#xe6eb;</span
      >
      <div class="select-con" v-show="showChoice" :style="marginStyle">
        <div
          class="select-item"
          v-for="item in selectTypes"
          :key="item.key"
          @click="handleSelect(item.key)"
        >
          <small>{{ item.text }}</small>
        </div>
      </div>
    </div>
    <br>
    <!-- <el-row>
      <el-col :span="12">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            {{ "▎ " + showTitle }}<i class="el-icon-arrow-down el-icon--right"
        @click="showChoice = !showChoice"></i>
          </span>
          <el-dropdown-menu slot="dropdown" v-show="showChoice">
            <el-dropdown-item :key="item.key"
          @click="handleSelect(item.key)">{{ item.text }}</el-dropdown-item>
            <el-dropdown-item :key="item.key"
          @click="handleSelect(item.key)">{{ item.text }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row> -->
    <div class="com-chart" id="trend" ref="trend_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstane: null,
      allData: null, // 从服务器中获取的所有数据
      showChoice: false, // 是否显示可选项
      choiceType: "system", // 显示的数据类型
      titleFontSize: 0, // 指明标题的字体大小
    };
  },
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
  },
  computed: {
    selectTypes() {
      if (!this.allData) {
        return [];
      } else {
        return this.allData.type.filter((item) => {
          return item.key !== this.choiceType;
        });
      }
    },
    showTitle() {
      if (!this.allData) {
        return "";
      } else {
        return this.allData[this.choiceType].title;
      }
    },
    //设置给标题的样式
    // comStyle() {
    //   return {
    //     fontSize: this.titleFontSize + "px",
    //   };
    // },
    marginStyle() {
      return {
        marginLeft: this.titleFontSize + "px",
      };
    },
  },
  methods: {
    initChart() {
      this.chartInstane = this.$echarts.init(
        document.getElementById("trend"),
        "vintage"
      );
      const initOption = {
        grid: {
          left: "5%",
          top: "30%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: 70,
          top: "15%",
          icon: "circle",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
        },
      };
      this.chartInstane.setOption(initOption);
    },
    async getData() {
      // await this.$http.get()
      // 对allData进行赋值
      const { data: ret } = await this.$http.get("trend");
      this.allData = ret;
      this.updateChart();
    },
    updateChart() {
      // 半透明的颜色值
      const colorArr1 = [
        "rgba(11, 168, 44, 0.5)",
        "rgba(44, 110, 255, 0.5)",
        "rgba(22, 242, 217, 0.5)",
        "rgba(254, 33, 30, 0.5)",
        "rgba(250, 105, 0, 0.5)",
      ];
      // 全透明的颜色值
      const colorArr2 = [
        "rgba(11, 168, 44, 0)",
        "rgba(44, 110, 255, 0)",
        "rgba(22, 242, 217, 0)",
        "rgba(254, 33, 30, 0)",
        "rgba(250, 105, 0, 0)",
      ];
      // 处理数据
      // 类目轴的数据
      const timeArr = this.allData.common.month;
      // y轴的数据 series下的数据
      const valueArr = this.allData[this.choiceType].data;
      const seriesArr = valueArr.map((item, index) => {
        return {
          name: item.name,
          type: "line",
          data: item.data,
          stack: this.choiceType,
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: colorArr1[index],
              }, // %0的颜色值
              {
                offset: 1,
                color: colorArr2[index],
              }, // 100%的颜色值
            ]),
          },
        };
      });
      // 图例的数据
      const legendArr = valueArr.map((item) => {
        return item.name;
      });
      const dataOption = {
        xAxis: {
          data: timeArr,
        },
        legend: {
          data: legendArr,
        },
        series: seriesArr,
      };
      this.chartInstane.setOption(dataOption);
    },
    screenAdapter() {
      this.titleFontSize = (this.$refs.trend_ref.offsetWidth / 100) * 2.6;
      const adapterOption = {
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
          itemGap: this.titleFontSize,
          textStyle: {
            fontSize: this.titleFontSize / 3,
          },
        },
      };
      this.chartInstane.setOption(adapterOption);
      this.chartInstane.resize();
    },
    handleSelect(currentType) {
      this.choiceType = currentType;
      this.updateChart();
      this.showChoice = false;
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  position: absolute;
  left: 20px;
  top: 5%;
  z-index: 10;
  font-size: 20px !important;
  color: black;
  .title-icon {
    margin-left: 10px;
    cursor: pointer;
  }
  .select-con {
    background-color: #ffffff;
    cursor: pointer;
  }
}
.icon-xiala{
  cursor: pointer !important;
}
// .el-dropdown-link {
//   cursor: pointer;
//   color: #409eff;
// }
// .el-icon-arrow-down {
//   font-size: 12px;
// }
// .demonstration {
//   display: block;
//   color: #8492a6;
//   font-size: 14px;
//   margin-bottom: 20px;
// }
</style>
