<template>
  <ul class="todo-main">
    <Item v-for="todo in todos" :key="todo.id" :todoObj="todo"
          :updateTodoStatus="updateTodoStatus"
          :deleteTodoById="deleteTodoById"
    />

  </ul>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: "Todos",
  components: {
    Item
  },
  props: ["todos", "updateTodoStatus", "deleteTodoById"]

}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
