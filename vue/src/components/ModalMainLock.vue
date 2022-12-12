<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-5" class="modal-toggle" />
  <div class="modal modal-open">
    <div
      class="modal-box w-full min-w-[80%] min-h-[80%] py-10 bg-opacity-[0.80] bg-black backdrop-blur-xl z-30"
    >
      <h3
        class="w-3/4 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-300 to-orange-500"
      >
        Velkommen til EscapeRoomet "Flukten fra Snorrrra😱"
      </h3>

      <p class="py-4 text-orange-400">
        De venter fete premier om du greier knekke denne koden.
      </p>

      <LockPageOne
        class="visible"
        v-if="one"
        @changePageForward="goNextPage"
        @changePageBackward="goBackpage"
      />
      <!-- <button class="btn btn-warning" @click="consoler">consoler</button> --><RouterLink
        class="outline p-2 rounded-md animate-pulse font-extrabold ml-10 hover:text-white hover:transition-all hover:duration-400 min-h-full w-12 hover:animate-ping"
        to="/"
        >Tilbake</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import LockPageOne from "@/components/Locks/LockPageOne.vue";
import LockPageTwo from "@/components/Locks/LockPageTwo.vue";
import { useGameStore } from "@/stores/gameStore01.js";

const gameStore01 = useGameStore();

const one = ref(true);
const two = ref(false);
const three = ref(false);
const goNextPage = (forward) => {
  if ((gameStore01.activePage <= 1) & (gameStore01.activePage < 3))
    gameStore01.activePage = gameStore01.activePage++;

  console.log(gameStore01.activePage, forward);
};
const goBackpage = (backward) => {
  if (gameStore01.activePage < 1)
    gameStore01.activePage = gameStore01.activePage - 1;
  console.log(gameStore01.activePage, backward);
};

const activePageNow = computed(() => {
  if (gameStore01.activePage === 1)
    (one.value = true), (two.value = false), (three.value = false);
  else if (gameStore01.activePage === 2)
    (one.value = false), (two.value = true), (three.value = false);
  else (one.value = false), (two.value = false), (three.value = true);
});
const consoler = () => {
  console.log(activePageNow.value);
  console.log(typeof activePageNow.value);
};
</script>
