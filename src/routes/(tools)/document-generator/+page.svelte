<script>
    let searchQuery = '';
    let templates = ['Template 1', 'Template 2', 'Template 3'];
    let fileInput;
    let userName = '';
    let userEmail = '';
    let userFeedback = '';

    $: filteredTemplates = templates.filter(template => 
      template.toLowerCase().includes(searchQuery.toLowerCase()));
    
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

<div class="page-layout">
    <div class="left-sidebar">Left Side Navbar</div>
    <div class="template-display">
        {#if filteredTemplates.length > 0}
            {#each filteredTemplates as template}
            <div class="template-item">{template}</div>
            {/each}
        {:else}
            <div class="no-results">No templates found.</div>
        {/if}
    </div>
    <div class="search-bar">
        <input type="text" placeholder="Search Templates..." bind:value={searchQuery}>
        <button class="upload-btn" on:click={handleUpload}>Upload New Template</button>
        <input type="file" bind:this={fileInput} on:change={handleFileChange} hidden>
        <div class="form-container">
            <form class="feedback-form" on:submit|preventDefault={handleSubmitFeedback}>
                <input type="text" placeholder="Your name..." bind:value={userName} />
                <input type="email" placeholder="Your email..." bind:value={userEmail} />
                <textarea placeholder="Your feedback..." rows="4" bind:value={userFeedback}></textarea>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    </div>
</div>
<style>
.page-layout {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 20px;
    gap: 20px;
}

.left-sidebar {
    flex: 1;
    background-color: #f0f0f0;
    padding: 10px;
    border-right: 2px solid #ccc; 
}

.template-display {
    flex: 3; 
    padding: 10px;
}

.search-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.search-bar:hover {
    transform: translateY(-5px);
}

.search-bar input[type="text"] {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    transition: all 0.3s ease;
}

.search-bar input[type="text"]:focus {
    border-color: #4CAF50;
    transform: scale(1.02);
}

.search-bar .upload-btn {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.search-bar .upload-btn:hover {
    background-color: #007B9E;
}

.template-item {
    margin: 10px 0;
    padding: 10px;
    background-color: #e7e7e7;
    border-radius: 5px;
}

.no-results {

    color: #999;
    text-align: center;
    width: 100%;
}

.upload-btn {
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.feedback-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.feedback-form input[type="text"],
.feedback-form input[type="email"],
.feedback-form textarea {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.feedback-form button {
    padding: 10px 20px;
    background-color: #008CBA;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: auto;
    align-self: flex-start;
}

.form-container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 20px auto;
    transition: transform 0.3s ease;
}

.form-container:hover {
    transform: translateY(-5px);
}

.feedback-form input[type="text"],
.feedback-form input[type="email"],
.feedback-form textarea {
    transition: all 0.3s ease;
}

.feedback-form input[type="text"]:focus,
.feedback-form input[type="email"]:focus,
.feedback-form textarea:focus {
    border-color: #4CAF50;
    transform: scale(1.02);
}

.feedback-form button {
    transition: background-color 0.3s ease;
}

.feedback-form button:hover {
    background-color: #007B9E;
}
</style>
