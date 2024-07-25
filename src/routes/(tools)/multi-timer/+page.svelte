<script>
	import { onMount } from 'svelte';
  
	// Timer 1: Counts up from zero
	let time1 = 0;
	let interval1 = null;
  
	function startTimer1() {
	  if (!interval1) {
		interval1 = setInterval(() => {
		  time1 += 1;
		}, 1000);
	  }
	}
  
	function stopTimer1() {
	  clearInterval(interval1);
	  interval1 = null;
	}
  
	function resetTimer1() {
	  stopTimer1();
	  time1 = 0;
	}
  
	
  </script>
 
<style>
	:root {
    --primary-color: #4CAF50; /* green */
    --secondary-color: #333; /* dark gray */
    --background-color: #121212; /* dark background */
    --text-color: #f1f1f1; /* light gray text */
    --border-color: #444; /* darker gray */
}


main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em;
    max-width: 1200px;
    margin: 0 auto;
	
}



.card {
    background-color: var(--secondary-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    flex: 1;
    min-width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
    transition: box-shadow 0.3s; 
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7); 
}

.timer {
    font-size: 2em;
    text-align: center;
    margin-top: 20px;
    color: var(--text-color);
}

.controls {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.controls button, .controls input {
    margin: 5px;
}

button {
    font-size: 1.2em;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: var(--text-color);
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); 
}

button:hover {
    background-color: #45a049; 
    transform: scale(1.05); 
}

button:active {
    background-color: #388e3c; 
    transform: scale(0.95); 
}

button:focus {
    outline: none; 
    box-shadow: 0 0 0 2px var(--primary-color); 
}

input[type="number"] {
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    text-align: center;
    width: 100px;
    background-color: #222; 
    color: var(--text-color); 
}

audio {
    display: none;
}

.lap-list {
    margin-top: 10px;
}

.lap-list ul {
    list-style: none;
    padding: 0;
}

.lap-list li {
    background-color: var(--secondary-color);
    border: 1px solid var(--border-color);
    padding: 5px;
    margin-bottom: 5px;
    color: var(--text-color); 
}

.world-clock {
    margin-bottom: 20px;
    text-align: center;
    color: var(--text-color); 
}

.world-clock-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-row {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.button-row button {
    margin: 0 5px;
    width: 150px; 
}

.timer {
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
    color: var(--text-color);
}


</style>
<main>

	
	<!-- Timer 1: Counts up from zero -->
	<div class="card">
		<div class="timer">
			Timer 1: {formatTime(time1)}
		</div>
		<div class="controls" style="margin-top:75px">
			<button on:click={() => interval1 ? stopTimer1() : startTimer1()} style="padding:10px 95px">{interval1 ? 'Stop' : 'Start'}</button>
		</div>
		<div class="controls">
			<button on:click={resetTimer1} style="padding:10px 95px">Reset</button>
		</div>
	</div>

	
</main>
