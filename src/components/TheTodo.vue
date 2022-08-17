<script setup lang="ts">
import TheTodoItem from "./TheTodoItem.vue";
import { useTodoStore } from "@/stores/useTodoStore";
const todoStore = useTodoStore();
</script>

<template>
  <div>
    <input type="text" v-model="todoStore.inputVal" />
    <button @click="todoStore.addTodo">添加</button>
    <div>共{{ todoStore.todosNum }}条</div>
    <ul>
      <TheTodoItem
        v-for="item in todoStore.todos"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>
