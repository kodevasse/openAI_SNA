<template>
  <div class="flex flex-col justify-center">
    <div class="flex flex-col justify-center">
      <h1
        class="pt-2 sm:py-2 mx-auto font-extrabold text-transparent text-xl sm:text-4xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-emerald-400"
      >
        Magisk AI
      </h1>

      <!-- <a
        class="sm:text-xs text-[0.5rem] mx-auto sm:mt-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-300"
        href="https://beta.openai.com/docs"
        target="_blank"
        >OpenAI API Dokumentasjon</a>>
      > -->
      <div class="flex flex-row justify-center">
        <label class="cursor-pointer label">
          <span class="label-text mr-2 text-accent">Tekst</span>
          <input
            @click="handleCheckboxClick"
            class="toggle toggle-accent"
            type="checkbox"
          />
        </label>
      </div>

      <div
        class="flex flex-col justify-center w-full"
        :class="isChecked && ' flex-col-reverse'"
      >
        <Transition :class="isChecked && 'order-2'">
          <ViewImgAi v-if="!isChecked" />
        </Transition>
        <Transition :class="isChecked && 'order-1'">
          <ViewTextAi v-if="isChecked" />
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import ViewTextAi from "@/components/ViewTextAi.vue";
import ViewImgAi from "@/components/ViewImgAi.vue";

const isChecked = ref(false);
const handleCheckboxClick = (event) => {
  if (event.target.checked) {
    isChecked.value = true;
  } else {
    isChecked.value = false;
  }
};

// function onSubmit(e) {
//   e.preventDefault();

//   document.querySelector(".msg").textContent = "";
//   document.querySelector("#image").src = "";

//   const prompt = document.querySelector("#prompt").value;
//   const size = document.querySelector("#size").value;

//   if (prompt === "") {
//     alert("Please add some text for picture");
//     return;
//   }

//   generateImageRequest(prompt, size);
// }
// function onSubmitTwo(e) {
//   e.preventDefault();

//   document.querySelector(".msgtwo").textContent = "";
//   // document.querySelector("#image").src = "";

//   const inputText = document.querySelector("#inputText").value;

//   if (inputText === "") {
//     alert("Please add some text for question");
//     return;
//   }

//   generateTextRequest(inputText);
// }

// async function generateImageRequest(prompt, size) {
//   try {
//     showSpinner();

//     const response = await fetch("/openai/generateimage", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         prompt,
//         size,
//       }),
//     });

//     if (!response.ok) {
//       removeSpinner();
//       throw new Error("That image could not be generated");
//     }

//     const data = await response.json();
//     // console.log(data);

//     const imageUrl = data.data;

//     document.querySelector("#image").src = imageUrl;

//     removeSpinner();
//   } catch (error) {
//     document.querySelector(".msg").textContent = error;
//   }
// }

// // TEXT REQUEST NEW
// async function generateTextRequest(inputText) {
//   try {
//     showSpinner();

//     const response = await fetch("/openai/generatetext", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         inputText,
//       }),
//     });

//     if (!response.ok) {
//       removeSpinner();
//       throw new Error("That image could not be generated");
//     }

//     const data = await response.json();
//     // console.log(data);

//     const textResponse = data.data;

//     document.querySelector(".msgtwo").textContent = textResponse;

//     removeSpinner();
//   } catch (error) {
//     document.querySelector(".msgtwo").textContent = error;
//   }
// }

// function showSpinner() {
//   document.querySelector(".spinner").classList.remove("invisible");
// }

// function removeSpinner() {
//   document.querySelector(".spinner").classList.add("invisible");
// }
// onMounted(() => {
//   document.querySelector("#image-form").addEventListener("submit", onSubmit);
// });
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease-out;
  flex-direction: column-reverse;
  justify-self: start;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  justify-self: start;
}
</style>
