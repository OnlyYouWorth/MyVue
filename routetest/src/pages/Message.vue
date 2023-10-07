<template>
  <div>
    <ul>
      <li v-for="m in messageArr" :key="m.id">
<!--        <router-link to="/home/message/detail">{{ m.content }}</router-link>&nbsp;&nbsp;-->
        <router-link :to="{
                       path: '/home/message/detail',
                       query: {
                         id: m.id,
                         content: m.content
                       }
                     }">{{ m.content }}</router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageArr: [
        {id: 1, content: "message001"},
        {id: 2, content: "message002"},
        {id: 3, content: "message003"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
