import { defineStore } from "pinia";
import { computed, ref, reactive } from "vue";

export type Item = {
  id: number;
  content: string;
};

let id = 1;
const generateId = () => id++;

export const useTodoStore = defineStore(
  "todo",
  () => {
    const inputVal = ref("");
    const todos = reactive<Item[]>([]);
    const todosNum = computed(() => todos.length);

    function addTodo() {
      todos.push({
        id: generateId(),
        content: inputVal.value,
      });
      inputVal.value = "";
    }

    function remove(item: Item) {
      const index = todos.indexOf(item);
      todos.splice(index, 1);
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
