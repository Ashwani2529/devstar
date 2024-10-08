<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import CopyIcon from "../components/Copy-icon.svelte";

    let poll = null;
    let id = null;
    let hasVoted = false;
    let selectedOption = '';
    let message = '';
    let success_message = '';
    let showModal = false;
    let loading = true;
    let copyMessage = '';
    let expirationMessage = '';

    function checkLocalStorage(id) {
        const votedStatus = localStorage.getItem(`poll_${id}_voted`);
        if (votedStatus === 'true') {
            hasVoted = true;
            selectedOption = localStorage.getItem(`poll_${id}_selectedOption`) || '';
        }
    }

    async function fetchPoll(id) {
        try {
            const response = await fetch(`/online-poll-tool/api/get-poll/${id}`);
            if (response.ok) {
                poll = await response.json();
                checkLocalStorage(id);
                setExpirationMessage();
            } else {
                console.error('Failed to fetch poll:', response.statusText);
                message = 'Poll not found or Poll Expired!';
            }
        } catch (error) {
            console.error('Error fetching poll:', error);
            message = 'Error fetching poll';
        } finally {
            loading = false;
        }
    }

    function setExpirationMessage() {
        const expirationTime = new Date(poll.expirationTime);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[expirationTime.getMonth()];
        const date = expirationTime.getDate();
        let hours = expirationTime.getHours();
        const minutes = expirationTime.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours) as 12
        expirationMessage = `This poll will expire on ${month} ${date}, at ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    }


    onMount(() => {
        id = $page.params.id;
        fetchPoll(id);
    });

    async function handleVote() {
        if (hasVoted) {
            message = 'You have already voted';
        } else {
            if (selectedOption) {
                try {
                    const response = await fetch(`/online-poll-tool/api/submit-vote/${poll.id}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ option: selectedOption })
                    });
                    if (response.ok) {
                        hasVoted = true;
                        localStorage.setItem(`poll_${poll.id}_voted`, 'true');
                        localStorage.setItem(`poll_${poll.id}_selectedOption`, selectedOption);
                        success_message = 'Vote successful. Thank you for participating in this poll. Your vote has been counted.';
                        showModal = true;
                    } else {
                        message = 'Failed to submit vote';
                    }
                } catch (error) {
                    console.error('Error submitting vote:', error);
                    message = 'Error submitting vote';
                }
            } else {
                message = 'Please select an option before voting.';
            }
        }
    }

    function handleOptionChange(option) {
        if (!hasVoted) {
            selectedOption = option;
            localStorage.setItem(`poll_${poll.id}_selectedOption`, selectedOption);
        }
    }

    function closeModal() {
        showModal = false;
    }

    function showResults() {
        goto(`/online-poll-tool/${id}/results`);
    }

    function share() {
        const resultsUrl = `${window.location.origin}/online-poll-tool/${id}`;
        if (navigator.share) {
            navigator.share({
                title: 'Online Poll Tool',
                text: 'Check out the results of this poll!',
                url: resultsUrl
            })
            .catch(error => console.log('Error sharing:', error));
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    }

    function copyLink() {
        const link = `http://localhost:5173/online-poll-tool/${poll.id}`;
        navigator.clipboard.writeText(link).then(() => {
            copyMessage = 'Link copied to clipboard!';
            setTimeout(() => copyMessage = '', 2000);
        }).catch(err => {
            console.error('Failed to copy link:', err);
        });
    }
</script>

{#if loading}
    <div class="outer">
        <div class="inner">
            <h2>Loading poll...</h2>
        </div>
    </div>
{:else}
    {#if poll}
        <div class="outer">
            <div class="inner">
                <h2 class="title">{poll.question}</h2>
                <p class="expiration-message">{expirationMessage}</p>
                <div class="choose">
                    {#each poll.options as option}
                        <div class="options">
                            <input type="radio" name="answer" id={option} 
                            checked="{selectedOption === option}" 
                            on:change={() => handleOptionChange(option)} />
                            <label for={option}>{option}</label>
                        </div>
                    {/each}
                </div>
                <div class="button-container">
                    <button class="vote-button" on:click={handleVote}>Vote</button>
                    <button class="results-button" on:click={showResults}>Show Results</button>
                    <button class="results-button" on:click={share}>Share</button>
                </div>
                <!-- Display message below the vote button -->
                {#if message}
                    <p class="error-message">{message}</p>
                {/if}
            </div>
        </div>

        <div class="outer">
            <div class="inner">
                <h2>Share this poll</h2>
                <div class="share-box">
                    <span class="share-text">http://localhost:5173/online-poll-tool/{poll.id}</span>
                    <button class="copy-button" on:click={copyLink}>
                        <CopyIcon />
                    </button>
                </div>
                {#if copyMessage}
                    <p class="copy-message">{copyMessage}</p>
                {/if}
            </div>
        </div>

        {#if showModal}
            <div class="modal">
                <div class="modal-content">
                    <p>{success_message}</p>
                    <div class="button-container">
                        <button class="modal-button" on:click={showResults}>View Results</button>
                        <button class="modal-button" on:click={() => {
                            share();
                        }}>Share</button>
                        <button class="modal-button" on:click={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        {/if}
    {:else}
        <div class="outer">
            <div class="inner">
                <h2>Poll not found or Poll Expired!</h2>
            </div>
        </div>
    {/if}
{/if}

<style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .title {
        font-size: 20px;
    }
    .outer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    .inner {
      width: 60%;
      border: 1px solid rgb(31, 41, 55);
      border-radius: 6px;
      background-color: rgb(31, 41, 55);
      padding: 24px;
      color: rgb(209, 213, 219);
      border-top-style: solid;
      border-top-width: 4px;
      border-top-color: rgb(56, 124, 228);
      display: flex;
      flex-direction: column;
    }
    .choose {
      margin-top: 24px;
      width: 100%;
    }
    .options {
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      align-items: center;
    }
    .options input {
      margin-right: 10px;
    }
    .options label {
      font-size: 15px;
      font-weight: 500;
      color: rgb(211, 211, 211);
    }
    .button-container {
      display: flex;
      gap: 10px;
      margin-top: 24px;
    }
    .vote-button, .results-button {
      padding: 8px 16px;
      border-radius: 6px;
      background-color: rgb(56, 124, 228);
      color: white;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
    }
    .share-box {
      display: flex;
      align-items: center;
      background-color: rgba(62, 63, 65, 0.801);
      padding: 10px;
      border: 1px solid rgb(56, 124, 228);
      border-radius: 5px;
      margin-top: 10px;
      justify-content: space-between;
    }
    .share-text {
      font-size: 14px;
      color: rgb(209, 213, 219);
      margin-right: 10px;
    }
    .copy-button {
        background-color: transparent;
        border: 1px solid rgb(92, 92, 92);
        border-radius: 5px;
        color: white;
        padding: 6px 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        }
    .copy-button:hover {
        background-color: rgb(110, 110, 110);
    }
    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(1px);
    }
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      text-align: center;
    }
    .modal-button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: rgb(56, 124, 228);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .button-container {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    .copy-message {
        margin-top: 10px;
        color: rgb(209, 213, 219);
        background-color: rgba(62, 63, 65, 0.801);
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
    }
    .error-message {
        color: rgb(228, 9, 9);
        font-weight: 500;
        background-color: rgb(236, 212, 212);
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
    }
    .expiration-message {
        font-size: 14px;
        color: rgb(133, 133, 133);
        margin-top: 10px;
    }
</style>
