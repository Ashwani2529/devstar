<script>
    let sqlInput = '';
    let sqliteOutput = '';

    async function convertSqlToSqlite() {
        const formData = new FormData();
        formData.append('inputFiles[]', new Blob([sqlInput], { type: 'text/plain' }), 'input.sql');
        formData.append('outputFormat', 'sqlite');
        try {
            const response = await fetch('https://www.rebasedata.com/api/v1/convert', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            sqliteOutput = url;
        } catch (error) {
            console.error('Error converting SQL to SQLite:', error);
            sqliteOutput = `Error: ${error.message}`;
        }
    }
</script>

<style>
    .container {
        padding: 1rem;
    }
    .input-area, .output-area {
        margin-bottom: 1rem;
    }
    .output-link {
        display: block;
        margin-top: 1rem;
        word-wrap: break-word;
    }
</style>

<div class="container">
    <h1>SQL to SQLite Converter</h1>
    <div class="input-area">
        <label for="sql-input">SQL Input:</label>
        <textarea id="sql-input" bind:value={sqlInput} rows="10" cols="50"></textarea>
    </div>
    <button on:click={convertSqlToSqlite}>Convert to SQLite</button>
    {#if sqliteOutput}
        <div class="output-area">
            <label>SQLite Output:</label>
            {#if sqliteOutput.startsWith('Error:')}
                <p>{sqliteOutput}</p>
            {:else}
                <a class="output-link" href={sqliteOutput} download="output.sqlite">Download SQLite file</a>
            {/if}
        </div>
    {/if}
</div>
