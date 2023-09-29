<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTodo="addNewTodo"/>
        <Todos :todos="todos" :updateTodoStatus="updateTodoStatus" :deleteTodoById="deleteTodoById"/>
        <IFooter :todos="todos" :clearComplicatedTodos="clearComplicatedTodos" :toggleAllStates="toggleAllStates"/>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// @在这里表示为别名 为src这个目录的位置
import Top from "@/components/Top.vue";
import Todos from "@/components/Todos.vue";
import IFooter from "@/components/IFooter.vue";


export default {
  name: 'App',
  components: {
    Top,
    Todos,
    IFooter
  },
  data() {
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    addNewTodo(todoObj){
      // console.log(todoObj)
      this.todos.unshift(todoObj)
    },
    updateTodoStatus(id){
      let targetTodo = this.todos.find(todo => todo.id === id)
      targetTodo.complicated = !targetTodo.complicated
    },
    deleteTodoById(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    clearComplicatedTodos(){
      this.todos = this.todos.filter(todo => !todo.complicated)
    },
    // 第一种写法用的
    // toggleAllStates(event){
    //   this.todos.forEach(todo => todo.complicated = event.target.checked)
    // },
    toggleAllStates(checked){
      this.todos.forEach(todo => todo.complicated = checked)
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}









</style>
