<template>
  <div class="container">
    <h1>Post list</h1>
    <div class="row" v-for="post in posts" :key="post.id">
      <div class="col">
        <router-link :to="'/posts/'+post.id">{{ post.title }}</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue"

export default class Posts extends Vue {
  
  private posts: Array<object> = [
    {
      id: 1,
      title: "Post 1"
    },
    {
      id: 2,
      title: "Post 2"
    },
    {
      id: 3,
      title: "Post 3"
    },
    {
      id: 4,
      title: "Post 4"
    }
  ];
}
</script>
