<script setup lang="ts">
import { useTodoStore } from "@/stores/useTodoStore";
import type { Item } from "@/stores/useTodoStore";
const props = defineProps<{
  item: Item;
}>();
const todoStore = useTodoStore();
</script>

<template>
  <li>
    {{ props.item.content }}
    <button @click="todoStore.remove(props.item)">删除</button>
  </li>
</template>
