import { defineStore } from "pinia";

export const useInventoryStore = defineStore("inventory", () => {
  const items = ref([]);

  const addItem = (item) => {
    items.value.push(item);
  };

  const removeItem = (item) => {
    const index = items.value.indexOf(item);
    if (index > -1) {
      items.value.splice(index, 1);
    }
  };

  return { items, addItem };
});
