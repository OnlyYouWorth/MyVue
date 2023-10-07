<template>
  <div>
    <h3>Detail</h3>
    <ul>
      <li>id: {{$route.query.id}}</li>
      <li>content: details of {{$route.query.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
