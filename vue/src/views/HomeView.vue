<template>
  <div class="flex flex-col justify-center">
    <div class="flex flex-col justify-center">
      <h1
        class="p-2 mx-auto font-extrabold text-transparent text-xl sm:text-4xl bg-clip-text bg-gradient-to-r from-fuchsia-300 to-emerald-400"
      >
        Snorre sin magiske bilde generator
      </h1>

      <a
        class="sm:text-xs text-[0.7rem] mx-auto sm:mt-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-300"
        href="https://beta.openai.com/docs"
        target="_blank"
        >OpenAI API Dokumentasjon</a
      >
    </div>

    <main class="mx-auto">
      <div
        class="rounded-xl w-full h-46 mt-3 bg-gradient-to-r p-[0.1rem] from-teal-500 via-orange-300 to-fuchsia-400"
      >
        <div class="bg-gray-800 text-white rounded-lg">
          <section class="p-5">
            <div class="p-1 rounded-md">
              <form id="image-form" class="flex flex-col form-control">
                <h1
                  class="text-xl sm:text-2xl sm:mt-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-500 mb-3"
                >
                  Hva vil du generere et bilde av?
                </h1>
                <div class="flex flex-col">
                  <input
                    type="text"
                    id="prompt"
                    class="input w-full placeholder-emerald-300 mt-4 outline outline-emerald-400"
                    placeholder="Skriv hva du ønsker å se her..."
                  />

                  <!-- size -->
                  <div class="form-control">
                    <select
                      class="select w-full my-3 bg-gray-600 text-gray-400 focus:bg-opacity-30 hover:bg-opacity-50"
                      name="size"
                      id="size"
                    >
                      <option value="small">Liten bilde kvalitet🤏</option>
                      <option value="medium" selected>
                        Middels bilde kvalitet👌
                      </option>
                      <option value="large">Stor bilde kvalitet🤪</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn bg-green-700 border-4 border-black text-black hover:bg-green-400"
                >
                  Lag bilde...⌛
                </button>
              </form>
            </div>
          </section>
        </div>

        <section
          class="image mx-auto transition-all duration-700 flex justify-center"
        >
          <div
            class="absolute radial-progress spinner text-pink-400 my-6 animate-spin invisible"
            style="--value: 50; --size: 12rem; --thickness: 4px"
          ></div>
          <div class="image-container">
            <h2 class="msgtwo text-black"></h2>
            <h2 class="msg text-black"></h2>
            <img src="" alt="" id="image" />
          </div>
        </section>

        <div></div>
      </div>
    </main>
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
  document.querySelector("#image-form").addEventListener("submit", onSubmit);
});
</script>
