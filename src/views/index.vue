<template>
  <div class="cd">
    这是{{ page }} 页面
  </div>
</template>

<style>
  .cd {
    color: red;
  }
</style>

<script>
  export default {
    data() {
      return {
        page: 'index'
      }
    }
  };
</script>
