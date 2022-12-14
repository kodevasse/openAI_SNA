<template>
  <div class="max-w-3xl mx-auto">
    <div
      class="rounded-xl w-full sm:mt-3 mt-1 bg-gradient-to-r p-[0.1rem] from-teal-500 via-orange-300 to-fuchsia-400"
    >
      <div class="bg-gray-800 text-white rounded-lg">
        <section class="p-3 sm:p-5">
          <div class="p-1 rounded-md">
            <form id="image-formtwo" class="flex flex-col form-control">
              <h1
                class="mx-auto text-xl sm:text-2xl sm:mt-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-600 mb-3"
              >
                Eller har du noe du vil spørre om?
              </h1>
              <div class="flex flex-col">
                <textarea
                  type="text"
                  id="inputText"
                  class="input w-full outline outline-cyan-300 mb-3 placeholder-cyan-300 mt-4"
                  placeholder="Spør om akkurat hva du vil..."
                />

                <!-- size -->
                <div class="form-control"></div>
              </div>
              <button
                type="submit"
                class="btn bg-fuchsia-500 border-4 border-black text-black hover:bg-fuchsia-300 mt-2"
              >
                Generer tekst...⌛
              </button>
            </form>
          </div>
        </section>
      </div>

      <section
        class="image mx-auto transition-all duration-700 flex justify-center"
      >
        <div
          class="mt-10 absolute radial-progress spinner text-pink-400 my-6 animate-spin invisible"
          style="--value: 50; --size: 12rem; --thickness: 4px"
        ></div>
        <div class="image-container">
          <h2
            class="msgtwo text-black sm:w-[35rem] h-full p-4 sm:text-xl text-lg"
          ></h2>
          <h2 class="msg text-black"></h2>
          <img src="" alt="" id="image" />
        </div>
      </section>

      <div></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
function onSubmit(e) {
  e.preventDefault();

  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Please add some text for picture");
    return;
  }

  generateImageRequest(prompt, size);
}
function onSubmitTwo(e) {
  e.preventDefault();

  document.querySelector(".msgtwo").textContent = "";
  // document.querySelector("#image").src = "";

  const inputText = document.querySelector("#inputText").value;

  if (inputText === "") {
    alert("Please add some text for question");
    return;
  }

  generateTextRequest(inputText);
}

async function generateImageRequest(prompt, size) {
  try {
    showSpinner();

    const response = await fetch("/openai/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });

    if (!response.ok) {
      removeSpinner();
      throw new Error("That image could not be generated");
    }

    const data = await response.json();
    // console.log(data);

    const imageUrl = data.data;

    document.querySelector("#image").src = imageUrl;

    removeSpinner();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

// TEXT REQUEST NEW
async function generateTextRequest(inputText) {
  try {
    showSpinner();

    const response = await fetch("/openai/generatetext", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputText,
      }),
    });

    if (!response.ok) {
      removeSpinner();
      throw new Error("That image could not be generated");
    }

    const data = await response.json();
    // console.log(data);

    const textResponse = data.data;

    document.querySelector(".msgtwo").textContent = textResponse;

    removeSpinner();
  } catch (error) {
    document.querySelector(".msgtwo").textContent = error;
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.remove("invisible");
}

function removeSpinner() {
  document.querySelector(".spinner").classList.add("invisible");
}
onMounted(() => {
  document
    .querySelector("#image-formtwo")
    .addEventListener("submit", onSubmitTwo);
});
</script>
