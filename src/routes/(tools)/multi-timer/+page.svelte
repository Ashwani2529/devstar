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
  
	// Timer 2: Counts down from a given time with alarm and repeat option
	let time2 = 60;
	let initialTime2 = 60;
	let interval2 = null;
	let repeat = false;
  
	function startTimer2() {
	  if (!interval2) {
		interval2 = setInterval(() => {
		  if (time2 > 0) {
			time2 -= 1;
		  } else {
			stopTimer2();
			document.getElementById('alarm').play();
			if (repeat) {
			  time2 = initialTime2; // Reset to initial time
			  startTimer2(); // Restart the timer
			}
		  }
		}, 1000);
	  }
	}
  
	function stopTimer2() {
	  clearInterval(interval2);
	  interval2 = null;
	}
  
	function resetTimer2() {
	  stopTimer2();
	  time2 = initialTime2;
	}
  
	function updateInitialTime2() {
	  initialTime2 = time2;
	}
  
  
	// Utility function to format time in HH:MM:SS format
	function formatTime(time) {
	  const seconds = time % 60;
	  const minutes = Math.floor(time / 60) % 60;
	  const hours = Math.floor(time / 3600);
	  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Enhanced shadow for depth */
    transition: box-shadow 0.3s; /* Smooth transition for hover effect */
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7); /* Deeper shadow on hover */
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
    transition: background-color 0.3s, transform 0.3s; /* Smooth transition for color and transform */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); /* Add a subtle shadow */
}

button:hover {
    background-color: #45a049; /* Darker shade of green */
    transform: scale(1.05); /* Slightly enlarge the button */
}

button:active {
    background-color: #388e3c; /* Even darker shade of green when clicked */
    transform: scale(0.95); /* Slightly shrink the button */
}

button:focus {
    outline: none; /* Remove the default outline */
    box-shadow: 0 0 0 2px var(--primary-color); /* Add a focus ring */
}

input[type="number"] {
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    text-align: center;
    width: 100px;
    background-color: #222; /* Dark background for inputs */
    color: var(--text-color); /* Light text color */
}

audio {
    display: none;
}


.timer {
    font-size: 1.5em; /* Slightly smaller size for better alignment */
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

	<!-- Timer 2: Counts down from a given time with alarm and repeat option -->
<div class="card">
	<div class="timer">
		Timer 2: {formatTime(time2)}
	</div>
	<div class="controls">
		<input type="number" bind:value={time2} on:change={updateInitialTime2} min="0" />
	</div>
	<div class="controls">
		<button on:click={() => interval2 ? stopTimer2() : startTimer2()} style="padding:10px 95px">{interval2 ? 'Stop' : 'Start'}</button>
	</div>
	<div class="controls">
		<button on:click={resetTimer2} style="padding:10px 95px">Reset</button>
	</div>
	<div class="controls" style="background-color: #f1f1f1; width:100px;margin-left:200px">
		<label>
			<input type="checkbox" bind:checked={repeat} />
			Repeat
		</label>
	</div>
	<div class="controls">
		<audio id="alarm" src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg" />
	</div>
</div>



</main>
