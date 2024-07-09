<script>
  import jsBeautify from "js-beautify";
  import { format as sqlFormatter } from "sql-formatter";
  import jsonBeautify from "json-beautify";

  let input = "";
  let output = "";
  let error = "";
  let language = "json";
  let indentWidth = 2;
  let columnLimit = 80;
  let codingStyle = "LLVM";

  const formatters = {
    json: (code) => jsonBeautify(JSON.parse(code), null, indentWidth),
    javascript: (code) =>
      jsBeautify.js(code, {
        indent_size: indentWidth,
        max_preserve_newlines: columnLimit,
      }),
    html: (code) =>
      jsBeautify.html(code, {
        indent_size: indentWidth,
        max_preserve_newlines: columnLimit,
      }),
    css: (code) =>
      jsBeautify.css(code, {
        indent_size: indentWidth,
        max_preserve_newlines: columnLimit,
      }),
    sql: (code) => sqlFormatter(code, { indent: " ".repeat(indentWidth) }),
    python: (code) =>
      code
        .split("\n")
        .map((line) => " ".repeat(indentWidth) + line.trim())
        .join("\n"),
    java: (code) =>
      jsBeautify.js(code, {
        indent_size: indentWidth,
        max_preserve_newlines: columnLimit,
      }),
    c: (code) =>
      jsBeautify.js(code, {
        indent_size: indentWidth,
        max_preserve_newlines: columnLimit,
      }),
    cpp: (code) =>
      jsBeautify.js(code, {
        indent_size: indentWidth,
        max_preserve_newlines: columnLimit,
      }),
  };

  function formatCode() {
    try {
      output = formatters[language](input);
      error = "";
    } catch (err) {
      error = `Invalid ${language.toUpperCase()}: ${err.message}`;
      output = "";
    }
  }

  function copyToClipboard() {
    if (output) {
      navigator.clipboard
        .writeText(output)
        .then(() => {
          console.log("Copied to clipboard successfully!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      console.error("No formatted code to copy.");
    }
  }

  function downloadCode() {
    if (output) {
      const blob = new Blob([output], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `formatted.${language}`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      console.error("No formatted code to download.");
    }
  }

  function handleInputChange(event) {
    input = event.target.value;
  }

  function handleLanguageChange(event) {
    language = event.target.value;
    input = "";
    output = "";
  }

  function handleIndentWidthChange(event) {
    indentWidth = parseInt(event.target.value) || 2;
  }

  function handleColumnLimitChange(event) {
    columnLimit = parseInt(event.target.value) || 80;
  }

  function handleCodingStyleChange(event) {
    codingStyle = event.target.value;
    // Add logic to handle different coding styles if needed
  }
</script>

<div class="container text-gray-800">
  <h1 class="text-6xl mb-2 text-center">Code Linter</h1>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6 0">
    <div>
      <label class="block mb-2 text-xl">Language</label>
      <select class="select" on:change={handleLanguageChange}>
        <option value="json">JSON</option>
        <option value="javascript">JavaScript</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="sql">SQL</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
      </select>
    </div>
    <div>
      <label class="block mb-2 text-xl">Coding Style</label>
      <select class="select" on:change={handleCodingStyleChange}>
        <option value="LLVM">LLVM</option>
        <option value="GOOGLE">Google</option>
        <option value="WEBKIT">WebKit</option>
        <option value="MOZILLA">Mozilla</option>
        <option value="CHROMIUM">Chromium</option>
      </select>
    </div>
    <div>
      <label class="block mb-2 text-xl">Indent Width</label>
      <input type="number" class="input" value={indentWidth} on:input={handleIndentWidthChange} />
    </div>
    <div>
      <label class="block mb-2 text-xl">Column Limit</label>
      <input type="number" class="input" value={columnLimit} on:input={handleColumnLimitChange} />
    </div>
  </div>

  <div class="flex flex-wrap mb-6">
    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
      <label class="block mb-2 text-2xl ">Input Code</label>
      <textarea class="textarea" bind:value={input} rows="15" placeholder="Enter code here..." on:input={handleInputChange}></textarea>
    </div>
    <div class="w-full md:w-1/2 pl-2">
      <label class="block mb-2 text-2xl">Formatted Code</label>
      <textarea class="textarea" bind:value={output} rows="15" readonly></textarea>
      {#if error}
        <div class="text-red-600 mt-2">{error}</div>
      {/if}
    </div>
  </div>

  <div class="flex justify-center">
    <button class="button mr-2" on:click={formatCode}>Format</button>
    <button class={`button mr-2 ${!output ? 'disabled' : ''}`} on:click={copyToClipboard} disabled={!output}>Copy to Clipboard</button>
    <button class={`button ${!output ? 'disabled' : ''}`} on:click={downloadCode} disabled={!output}>Download Code</button>
  </div>
</div>

<style>
  .container {
    max-width: 1500px; /* Increased width */
    max-height: 800px; /* Decreased height */
    margin: 0 auto;
    background: linear-gradient(to right, #65898f, #468b4c);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(1, 1, 1, 0.2);
  }
  h1 {
    font-family: 'Brush Script MT', cursive;
    font-weight: bold;
  }
  .button {
    background-color: #013e56;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  .button:not(.disabled):hover {
    background-color: #2563eb;
  }
  .button.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .select, .input {
    background-color: #f3f4f6;
    color: #1f2937;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #d1d5db;
    width: 100%;
  }
  .select:focus, .input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
  .textarea {
    background-color: #f6f3f6;
    color: #535e6e;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #d1dadb;
    width: 100%;
    resize: vertical;
    min-height: 200px;
  }
  .textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
</style>
