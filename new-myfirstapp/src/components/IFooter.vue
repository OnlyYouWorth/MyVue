<template>
  <div class="todo-footer" v-show="showFooter">
    <label>
      <!--      第一种写法-->
      <!--      <input type="checkbox" :checked="judgeWhetherAllAreSelected" @click="toggleAllStates($event)" />-->
      <input type="checkbox" v-model:checked="vmodChangeStatus"/>
    </label>
    <span>
          <span>已完成{{ computeComplicated }}</span> / 全部{{ todos.length }}
        </span>
    <button class="btn btn-danger" @click="clearAllTodos">清除已完成任务</button>
  </div>
</template>

<script>
import todos from "@/components/Todos.vue";

export default {
  name: "Footer",
  props: ["todos"],
  computed: {
    computeComplicated() {
      return this.todos.reduce((pre, currentValue) => pre + (currentValue.complicated ? 1 : 0), 0)
    },
    showFooter() {
      return this.todos.length > 0
    },
    vmodChangeStatus: {
      get() {
        return this.todos.every(todo => todo.complicated)
      },
      set(value) {
        // console.log(value)
        this.$emit("toggleAllStates", value)
      }
    }
  },
  methods: {
    clearAllTodos() {
      this.$emit("clearComplicatedTodos")
    }
  }

}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
