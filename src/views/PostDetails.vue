<template>
  <div class="container">
    <h1>Post details</h1>
    <p>Post {{$route.params.id}}</p>
  </div>
</template>
<script>
export default {
  name: "PostDetail",
  data: () => {
    return {};
  }
};
</script>