<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.complicated" @change="updateTodoStatus(todoObj.id)"/>
      <span v-show="!todoObj.isEdit">{{ todoObj.name }}</span>
      <input v-show="todoObj.isEdit" :value="todoObj.name" @blur="updateTodoById($event,todoObj)" ref="editInput">
    </label>
    <button class="btn btn-danger" @click="deleteTodoById(todoObj.id)">删除</button>
    <button class="btn btn-safe" @click="prepareForModification(todoObj)">修改</button>
  </li>
</template>

<script>

export default {
  name: "Item",
  props: ["todoObj"],
  methods:{
    updateTodoStatus(id){
      console.log("调用全局时间总线了")
      this.$bus.$emit('updateTodoStatus',id)
    },
    deleteTodoById(id){
      this.$bus.$emit('deleteTodoById',id)
    },
    updateTodoById(event,todoObj){
      todoObj.isEdit = false
      this.$bus.$emit('updateTodoById',event.target.value,todoObj)
    },
    prepareForModification(todoObj){
      if (todoObj.hasOwnProperty("isEdit")) {
        todoObj.isEdit = true
      }else {
        this.$set(todoObj,"isEdit",true)
      }
      this.$nextTick(() => {
        this.$refs.editInput.focus()
      })
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover button{
  display: block;
}

</style>
