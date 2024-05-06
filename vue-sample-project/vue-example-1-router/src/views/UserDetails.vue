<template>
  <div>User Details</div>
  <div>User Id is : {{ $route.params.id }}</div>
  <div>User Id is : {{ id }}</div>
</template>

<script>
  export default {
    props: {
      id: String
    }
  }
</script>

<style lang="scss" scoped>

</style>