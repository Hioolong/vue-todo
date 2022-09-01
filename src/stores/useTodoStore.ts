import { defineStore } from "pinia";
import { computed, ref, reactive } from "vue";

export type Item = {
  id: number;
  content: string;
};

let id = 0;
const generateId = () => id++;

export const useTodoStore = defineStore(
  "todo",
  () => {
    const inputVal = ref("");
    const todos = ref<Item[]>([]);
    const todosNum = computed(() => todos.value.length);

    function addTodo() {
      todos.value.push({
        id: generateId(),
        content: inputVal.value,
      });
      inputVal.value = "";
    }

    function remove(item: Item) {
      const index = todos.value.indexOf(item);
      todos.value.splice(index, 1);
    }

    return {
      inputVal,
      todos,
      todosNum,
      addTodo,
      remove,
    };
  },
  {
    persist: true,
  }
);
