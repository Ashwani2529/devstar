<script>
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
</script>

<style>
    .card {
        transition: transform 0.3s ease;
    }
    .card:hover {
        transform: translateY(-10px);
    }
</style>

<div class="flex flex-col md:flex-row items-start p-4 gap-4 w-full h-full">
    <div class="w-[15%] border border-yellow-100 bg-gray-50 shadow-lg">
   
    </div>
    <div class="flex-[3 1 0%] p-4 w-full">
      
    </div>
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