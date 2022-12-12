import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore01", () => {
  const activePage = ref(1);
  const count1 = ref(0);
  const doubleCount1 = computed(() => count1.value * 2);
  function increment1() {
    count1.value++;
  }

  return { count1, doubleCount1, increment1, activePage };
});
