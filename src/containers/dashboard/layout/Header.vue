<template>
  <el-menu
    :default-active="activeIndex"
    background-color="#075e54"
    text-color="#fff"
    active-text-color="#ffffff"
    class="el-menu-demo"
    mode="horizontal"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <router-link to="/">
              <el-menu-item index="1">Home</el-menu-item>
            </router-link>
            <router-link to="/posts">
              <el-menu-item index="2">Posts</el-menu-item>
            </router-link>
            <router-link to="/login">
              <el-menu-item index="1">Login</el-menu-item>
            </router-link>
          </div>
        </div>
        <div class="col-6">
          <div class="row d-flex flex-row-reverse">
            <el-submenu index="2">
              <template slot="title">
                <el-avatar></el-avatar>
              </template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-submenu>
          </div>
        </div>
      </div>
    </div>
  </el-menu>
</template>
<script lang="ts">
import Vue from "vue";

export default class Header extends Vue {
  private activeIndex = "1";
}
</script>
