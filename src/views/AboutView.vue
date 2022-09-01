<script setup lang="ts">
import { useTodoStore } from "@/stores/useTodoStore";
const todoStore = useTodoStore();
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <ul>
        <li v-for="item in todoStore.todos" :key="item.id">
          {{ item.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
