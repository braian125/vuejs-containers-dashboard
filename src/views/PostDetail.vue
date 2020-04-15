<template>
  <div class="container">
    <h1>Post details</h1>
    <p>Post {{$route.params.id}}</p>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class PostDetail extends Vue {}
</script>
