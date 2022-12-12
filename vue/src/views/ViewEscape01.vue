<template>
  <div class="relative h-full w-full bg-red-800 flex flex-row justify-center">
    <div id="background2" class="w-full h-screen bg-teal-800">
      <!-- The button to open modal -->
      <!-- <label for="my-modal-5" class="btn"></label> -->
      <!-- EVERYTHING BETWEEN HERE IN GAME-->
      <ModalMainLock />
    </div>
  </div>
</template>
<script setup>
import ModalMainLock from "@/components/ModalMainLock.vue";
</script>

<style scoped>
#background2 {
  background-image: url(/pictures/IMG_20221204_162945cropped.png);
  background-size: cover;
}
</style>
