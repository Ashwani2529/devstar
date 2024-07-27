<script>
  import { onMount } from 'svelte';
  import Swiper from 'swiper';
  import { Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';

  let swiper;

  onMount(() => {
    swiper = new Swiper(".swiper-container", {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });
</script>

<div class="w-[60%]">
  <div class="container relative mx-auto max-w-4xl overflow-hidden mt-10">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide group relative w-54 h-70 rounded-lg overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex-shrink-0 mx-2"
        >
          <img
            class="w-40 h-84 object-cover group-hover:opacity-50 transition duration-300 ease-in-out"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Template 1"
          />
          <div
            class="absolute inset-0 px-4 py-2 bottom-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-transparent"
          >
            <h3 class="text-lg font-bold text-white mb-2">Template 1</h3>
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
          >
            <div class="flex flex-col space-y-2">
              <button
                class="bg-green-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                PDF
              </button>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                Word
              </button>
            </div>
          </div>
        </div>
        <div
          class="swiper-slide group relative w-54 h-70 rounded-lg overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex-shrink-0 mx-2"
        >
          <img
            class="w-40 h-84 object-cover group-hover:opacity-50 transition duration-300 ease-in-out"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Template 2"
          />
          <div
            class="absolute inset-0 px-4 py-2 bottom-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-transparent"
          >
            <h3 class="text-lg font-bold text-white mb-2">Template 2</h3>
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
          >
            <div class="flex flex-col space-y-2">
              <button
                class="bg-green-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                PDF
              </button>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                Word
              </button>
            </div>
          </div>
        </div>
        <div
          class="swiper-slide group relative w-54 h-70 rounded-lg overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex-shrink-0 mx-2"
        >
          <img
            class="w-40 h-84 object-cover group-hover:opacity-50 transition duration-300 ease-in-out"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Template 3"
          />
          <div
            class="absolute inset-0 px-4 py-2 bottom-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-transparent"
          >
            <h3 class="text-lg font-bold text-white mb-2">Template 3</h3>
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
          >
            <div class="flex flex-col space-y-2">
              <button
                class="bg-green-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                PDF
              </button>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                Word
              </button>
            </div>
          </div>
        </div>
        <div
          class="swiper-slide group relative w-54 h-70 rounded-lg overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex-shrink-0 mx-2"
        >
          <img
            class="w-40 h-84 object-cover group-hover:opacity-50 transition duration-300 ease-in-out"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Template 4"
          />
          <div
            class="absolute inset-0 px-4 py-2 bottom-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-transparent"
          >
            <h3 class="text-lg font-bold text-white mb-2">Template 4</h3>
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
          >
            <div class="flex flex-col space-y-2">
              <button
                class="bg-green-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                PDF
              </button>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                Word
              </button>
            </div>
          </div>
        </div>
        <div
          class="swiper-slide group relative w-54 h-70 rounded-lg overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex-shrink-0 mx-2"
        >
          <img
            class="w-40 h-84 object-cover group-hover:opacity-50 transition duration-300 ease-in-out"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Template 5"
          />
          <div
            class="absolute inset-0 px-4 py-2 bottom-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-transparent"
          >
            <h3 class="text-lg font-bold text-white mb-2">Template 5</h3>
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
          >
            <div class="flex flex-col space-y-2">
              <button
                class="bg-green-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                PDF
              </button>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                Word
              </button>
            </div>
          </div>
        </div>
        <div
          class="swiper-slide group relative w-54 h-70 rounded-lg overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex-shrink-0 mx-2"
        >
          <img
            class="w-40 h-84 object-cover group-hover:opacity-50 transition duration-300 ease-in-out"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="Template 6"
          />
          <div
            class="absolute inset-0 px-4 py-2 bottom-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-transparent"
          >
            <h3 class="text-lg font-bold text-white mb-2">Template 6</h3>
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
          >
            <div class="flex flex-col space-y-2">
              <button
                class="bg-green-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                PDF
              </button>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded-md w-24 text-center"
              >
                Word
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Navigation -->
      <div class="swiper-button-next absolute bottom-0"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</div>

<style>
  .swiper-button-next,
  .swiper-button-prev {
    top: 50;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
  }

  .swiper-pagination {
    bottom: 10px;
  }
</style>
