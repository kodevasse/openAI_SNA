<template>
  <div class="w-full h-full flex flex-col place-items-start">
    <!-- KODE 1 -->
    <div class="flex flex-row space-x-4 mt-10 mx-auto">
      <span class="text-3xl mr-24 mt-16"> KODE 1</span>
      <div
        class="bg-red-900 bg-opacity-50 w-32 h-40 rounded-t-full rounded-l-full outline outline-4"
      >
        1<input
          value="0"
          class="absolute bg-transparent ml-7 -mt-1 text-[7rem] w-20 text-yellow-200"
          type="number"
        />
      </div>
      <div
        class="bg-red-900 bg-opacity-50 w-32 h-40 rounded-t-full rounded-l-full outline outline-4"
      >
        2<input
          value="0"
          class="absolute bg-transparent ml-7 -mt-1 text-[7rem] w-20 text-fuchsia-200"
          type="number"
        />
      </div>

      <div
        class="bg-red-900 bg-opacity-50 w-32 h-40 rounded-t-full rounded-r-full outline outline-4"
      >
        3<input
          value="0"
          class="absolute bg-transparent ml-7 -mt-1 text-[7rem] w-20 text-rose-200"
          type="number"
        />
      </div>

      <div
        class="bg-red-900 bg-opacity-50 w-32 h-40 rounded-t-full rounded-r-full outline outline-4"
      >
        4<input
          value="0"
          class="absolute bg-transparent ml-7 -mt-1 text-[7rem] w-20 text-emerald-200"
          type="number"
        />
      </div>
      <div
        class="bg-red-900 bg-opacity-50 w-32 h-40 rounded-t-full rounded-l-full outline outline-4"
      >
        5<input
          value="0"
          class="absolute bg-transparent ml-7 -mt-1 text-[7rem] w-20 text-cyan-300"
          type="number"
        />
      </div>
    </div>
    <!-- KODE 2 -->
    <!-- <div class="flex flex-row space-x-4 mt-16 mx-auto">
      <span class="text-3xl mr-24 mt-14"> KODE 2</span>
      <div
        class="bg-orange-300 bg-opacity-50 w-32 h-40 rounded-t-full rounded-l-full outline outline-4"
      >
        1
      </div>
      <div
        class="bg-orange-300 bg-opacity-50 w-32 h-40 rounded-t-full rounded-l-full outline outline-4"
      >
        2
      </div>

      <div
        class="bg-orange-300 bg-opacity-50 w-32 h-40 rounded-t-full rounded-r-full outline outline-4"
      >
        3
      </div>

      <div
        class="bg-orange-300 bg-opacity-50 w-32 h-40 rounded-t-full rounded-r-full outline outline-4"
      >
        4
      </div>
      <div
        class="bg-orange-300 bg-opacity-50 w-32 h-40 rounded-t-full rounded-l-full outline outline-4"
      >
        5
      </div>
    </div> -->

    <div class="modal-action mx-auto">
      <label for="my-modal-5" class="btn">Prøv kombinasjon!</label>
      <!-- <button
        class="btn btn-warning"
        @click="$emit('changePageBackward', backward)"
      >
        Tilbake
      </button>
      <button
        class="btn btn-warning"
        @click="$emit('changePageForward', forward)"
      >
        Neste
      </button> -->
    </div>
  </div>
</template>
<script setup>
const backward = 1;
const forward = 2;
</script>
