<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  let documentName = '';
  let documentType = '';
  let documentFile;
  let uploadStatus = 'Upload';
  let userName = '';
  let userEmail = '';
  let feedback = '';
  const documentTypes = [
    'Assessment',
    'Business Prop.',
    'Employment Form',
    'Letterhead',
    'Report',
    'Resume',
    'Others'
  ];

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('name', documentName);
    formData.append('type', documentType);
    formData.append('file', documentFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      uploadStatus = 'Submit';
    } else {
      alert('Failed to upload document');
    }
  };

  const handleSubmitFeedback = async () => {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: userName, email: userEmail, feedback })
    });

    if (response.ok) {
      alert('Feedback submitted successfully');
    } else {
      alert('Failed to submit feedback');
    }
  };
</script>

<div class="w-[20%] border p-4">
  <!-- Form One: Document Upload -->
  <div class="mb-8">
    <h3 class="text-lg font-bold mb-4">Upload Document</h3>
    <div class="mb-4">
      <label for="documentName" class="block text-sm font-medium text-gray-700">Document Name</label>
      <input type="text" id="documentName" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" bind:value={documentName}>
    </div>
    <div class="mb-4">
      <label for="documentType" class="block text-sm font-medium text-gray-700">Document Type</label>
      <select id="documentType" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" bind:value={documentType}>
        <option value="" disabled selected>Document type</option>
        {#each documentTypes as type}
          <option value={type}>{type}</option>
        {/each}
      </select>
    </div>
    <div class="mb-4">
      <input type="file" id="documentFile" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer" on:change="{e => documentFile = e.target.files[0]}">
    </div>
    <button class="w-full bg-blue-500 text-white px-4 py-2 rounded-md" on:click="{handleUpload}">{uploadStatus}</button>
  </div>

  <!-- Form Two: Feedback -->
  <div>
    <h3 class="text-lg font-bold mb-4">Submit Feedback</h3>
    <div class="mb-4">
      <label for="userName" class="block text-sm font-medium text-gray-700">Your Name</label>
      <input type="text" id="userName" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" bind:value={userName}>
    </div>
    <div class="mb-4">
      <label for="userEmail" class="block text-sm font-medium text-gray-700">Your Email</label>
      <input type="email" id="userEmail" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" bind:value={userEmail}>
    </div>
    <div class="mb-4">
      <label for="feedback" class="block text-sm font-medium text-gray-700">Feedback</label>
      <textarea id="feedback" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" bind:value={feedback}></textarea>
    </div>
    <button class="w-full bg-green-500 text-white px-4 py-2 rounded-md" on:click="{handleSubmitFeedback}">Submit Feedback</button>
  </div>
</div>

<style>
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>