<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 拉片试图区域 -->
    <el-card>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 订单列表数据 -->
    <el-table :data="orderList" boeder stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="订单编号" prop="order_number"></el-table-column>
        <el-table-column label="订单价格" prop="order_price"></el-table-column>
        <el-table-column label="是否付款" prop="pay_status"></el-table-column>
        <el-table-column label="订单编号" prop="order_price"></el-table-column>
    </el-table>

    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      queryParams: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      total: 0,
      orderList: [],
    };
  },
  created() {
    this.getOrderList();
  },
  methods: {
    async getOrderList() {
      const { data: res } = await this.$http.get("orders", {
        params: this.queryParams,
      });
      console.log("getOrderList -> res", res);
      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg);
      }
      this.total = res.data.total;
      this.orderList = res.data.goods;
    },
  },
};
</script>
<style lang="less" scoped>
</style>