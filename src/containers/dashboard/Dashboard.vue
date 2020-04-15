<template>
  <el-container class="main-container">
    <sidebar />
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Dashboard",
  data: () => {
    return {};
  },
  components: {
    sidebar: () => import(/* webpackChunkName: "sidebar" */ "./layout/Sidebar"),
    Header: () => import(/* webpackChunkName: "header" */ "./layout/Header")
  }
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header {
  padding: 0;
}

.el-menu {
  border: 0;
}
</style>