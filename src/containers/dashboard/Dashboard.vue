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
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    sidebar: () =>
      import(/* webpackChunkName: "sidebar" */ "./layout/Sidebar.vue"),
    Header: () => import(/* webpackChunkName: "header" */ "./layout/Header.vue")
  }
})
export default class Dashboard extends Vue {}
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