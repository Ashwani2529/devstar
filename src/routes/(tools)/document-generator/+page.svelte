
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

<div class="card gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 overflow-hidden rounded-lg">
    <div class="w-full h-full dark:text-white flex flex-col">
        <h1 class="text-center">Devstar Document Templates Module</h1>
        <div class="flex">
          <div class="w-[15%] border border-gray-600 bg-gray-100 dark:bg-black p-4">             
            <nav>
                <ul class="list-none p-0">
                    <li class="my-1 px-3 py-2 bg-blue-100 dark:bg-blue-600 rounded-lg text-center transition-colors duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700 shadow-md text-black dark:text-white">
                        <i class="fas fa-home"></i> Education
                    </li>
                    <li class="my-1 px-3 py-2 bg-blue-100 dark:bg-blue-600 rounded-lg text-center transition-colors duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700 shadow-md text-black dark:text-white">
                        <i class="fas fa-info-circle"></i> Medical
                    </li>
                    <li class="my-1 px-3 py-2 bg-blue-100 dark:bg-blue-600 rounded-lg text-center transition-colors duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700 shadow-md text-black dark:text-white">
                        <i class="fas fa-concierge-bell"></i> Business
                    </li>
                    <li class="my-1 px-3 py-2 bg-blue-100 dark:bg-blue-600 rounded-lg text-center transition-colors duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700 shadow-md text-black dark:text-white">
                        <i class="fas fa-briefcase"></i> Environment
                    </li>
                    <li class="my-1 px-3 py-2 bg-blue-100 dark:bg-blue-600 rounded-lg text-center transition-colors duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700 shadow-md text-black dark:text-white">
                        <i class="fas fa-blog"></i> Social
                    </li>
                    <li class="my-1 px-3 py-2 bg-blue-100 dark:bg-blue-600 rounded-lg text-center transition-colors duration-300 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700 shadow-md text-black dark:text-white">
                        <i class="fas fa-envelope"></i> Historical
                    </li>
                </ul>
            </nav>
        </div>   
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
                            class="bg-blue-500 text-white px-4 py-2 rounded-md w-24 text-center"
                          >
                            Edit
                          </button>
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
                        alt="Template 1"
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
                            class="bg-blue-500 text-white px-4 py-2 rounded-md w-24 text-center"
                          >
                            Edit
                          </button>
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
                        alt="Template 1"
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
                            class="bg-blue-500 text-white px-4 py-2 rounded-md w-24 text-center"
                          >
                            Edit
                          </button>
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
                        alt="Template 1"
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
                            class="bg-blue-500 text-white px-4 py-2 rounded-md w-24 text-center"
                          >
                            Edit
                          </button>
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
                        alt="Template 1"
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
                            class="bg-blue-500 text-white px-4 py-2 rounded-md w-24 text-center"
                          >
                            Edit
                          </button>
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
                        alt="Template 1"
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
                            class="bg-blue-500 text-white px-4 py-2 rounded-md w-24 text-center"
                          >
                            Edit
                          </button>
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
            <div class="w-[15%] border border-yellow-100">  </div>
    <div class="flex-[2 1 0%] flex-col items-center p-4 gap-4 bg-gray-200 rounded  shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
        <input type="text" placeholder="Search Documents..." bind:value={searchQuery} class="w-full p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-xs transition-all duration-300 focus:scale-[1.02]">
        <button class="bg-green-400 hover:bg-green-700 text-white m-4  font-bold py-2 px-4 rounded transition-colors duration-300" on:click={handleUpload}>Upload New Document</button>
        <input type="file" bind:this={fileInput} on:change={handleFileChange} hidden>
        <div class="bg-gray-100 p-4 rounded shadow-md max-w-md mx-auto transition-transform duration-300 hover:translate-y-[-5px]">
            <form class="flex flex-col gap-4 w-full" on:submit|preventDefault={handleSubmitFeedback}>
                <input type="text" placeholder="Your name..." bind:value={userName} class="w-full p-2 mb-4 border border-gray-300 rounded-lg text-xs focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 focus:scale-[1.02]">
                <input type="email" placeholder="Your email..." bind:value={userEmail} class="w-full p-2 mb-4 border border-gray-300 rounded-lg text-xs focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 focus:scale-[1.02]">
                <textarea placeholder="Your feedback..." rows="4" bind:value={userFeedback} class="w-full p-2 mb-4 border border-gray-300 rounded-lg text-xs focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 focus:scale-[1.02]"></textarea>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Submit Feedback</button>
            </form>
        </div>
    </div>
        </div>
    </div>
 
</div>



<script>
  
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
    import { Navigation } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/navigation';
    let searchQuery = '';
    let documents = ['Document 1', 'Document 2', 'Document 3'];
    let fileInput;
    let userName = '';
    let userEmail = '';
    let userFeedback = '';
    $: filteredDocuments = documents.filter(document => 
      document.toLowerCase().includes(searchQuery.toLowerCase()));
    
    function handleUpload() {
        fileInput.click();
    }
    function handleFileChange(event) {
        const files = event.target.files;
        if (files.length > 0) {
            console.log("File uploaded:", files[0].name);
        }
    }
    function handleSubmitFeedback() {
        console.log(`Feedback from ${userName} (${userEmail}): ${userFeedback}`);
    }
  
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
  
