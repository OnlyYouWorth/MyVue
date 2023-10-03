<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
  </div>
</template>

<script>
// es6 模块化导入
import {nanoid} from 'nanoid'
export default {
  name: "Header",
  // data(){
  //   return {
  //     title:''
  //   }
  // },
  methods:{
    add(event){
      // console.log(event.target.value)
      // console.log()
      //1.获取用户的输入
      const todoObj = {id:nanoid(),name:event.target.value,complicated:false}
      //2.将用户输入的任务添加到todos中
      this.$emit("addTodo",todoObj)
      event.target.value = ''
    }
  },
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
