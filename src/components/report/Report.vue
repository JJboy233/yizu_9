<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div id="main" style="width: 1000px;height:400px;"></div>
    </el-card>
  </div>
</template>
<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  data() {
    return {
      // 自己修改的数据
      options: {
        title: {
          text: "用户来源",
        },
        // 
        tooltip: {
          trigger: "axis",
         
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
      },
    };
  },
  //在created中dom还没用创建不能进行获取
  created() {},

  async mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    const { data: res } = await this.$http.get("reports/type/1");
    if (res.meta.status !== 200) return this.$message("获取折线图数据失败!");
    // 4.准备数据项和配置项

    // 数据合并
    const result = _.merge(res.data, this.options);
    // 5.展示数据
    myChart.setOption(result);
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>