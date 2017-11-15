<template>
  <h1>
    dsf
  </h1>
</template>

<script>
  export default {

    data() {
      return {
        id: this.$route.params.id
      }
    },

    beforeRouteUpdate($nextRoute) {
      console.log($nextRoute.params.id, '下一个对象');
    }

  };
</script>
