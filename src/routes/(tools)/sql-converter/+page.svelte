<script>

    
let file;
let result = '';
let sqlDetails = {};
let mysqlDetails = {};

const triggerFileUpload = () => {                //operates the selecting file           
    document.getElementById('file-input').click();
};

const handleFileUpload = (event) => {
        file = event.target.files[0];
        if (file) {
            if (validateFile(file)) {
                readFile();
                extractFileDetails(file);
            } else {
                alert("Invalid file type. Please upload a .sql file.");
            }
        }
    };

const validateFile = (file) => {
    const fileExtension = file.name.split('.').pop();
        return fileExtension === 'sql';
    };
        

const extractFileDetails = (file) => {
    const fileName = file.name;               //it will extract and store the details of the sql file
    const fileSize = file.size;
    const fileType = file.type || 'Unknown';
    const fileExtension = fileName.split('.').pop();

    sqlDetails = {
        fileName,
        fileSize,
        fileType,
        fileExtension,
    };
};

const readFile = () => {                      //reads the sql files contain and the processes it to the processSQL
    const reader = new FileReader();
    reader.onload = (event) => {                    
        const sqlContent = event.target.result;
        processSQL(sqlContent);
    };
    reader.readAsText(file);
};

const processSQL = (sqlContent) => {   
    // to process multiline INSERT INTO statements into a single line
    //which was observed from the original converter
    const processInsertStatements = (content) => {
        return content.split('\n').reduce((acc, line) => {
            if (line.trim().startsWith('INSERT INTO')) {
                acc.isInInsert = true;
                acc.currentInsert.push(line.trim());
            } else if (acc.isInInsert) {
                acc.currentInsert.push(line.trim());
                if (line.trim().endsWith(';')) {
                    acc.isInInsert = false;
                    acc.result.push(acc.currentInsert.join(' ')
                        .replace(/INSERT INTO `(\w+)` \(`[^`]+`\) VALUES/g, 'INSERT INTO `$1` VALUES')
                        .replace(/`(\w+)`/g, '$1')
                        .replace(/,\s*\(/g, ', (')
                        .replace(/\)\s*,\s*\(/g, '),(')
                        .replace(/\s+/g, ' ')
                        .trim());
                        
                    acc.currentInsert = [];
                }
            } else {
                acc.result.push(line);
            }
            return acc;
        }, { isInInsert: false, currentInsert: [], result: [] }).result.join('\n');
    };


    // Process the SQL content i.e replace the required for the mysql file
    const mysqlContent = processInsertStatements(sqlContent)        
        .replace(/ENGINE=MyISAM/g, 'ENGINE=InnoDB')
        .replace(/AUTO_INCREMENT/g, '')
        .replace(/`status` tinyint\(10\) DEFAULT NULL,/g, '`status` tinyint(1) DEFAULT NULL,')
        .replace(/`status` tinyint\(10\) DEFAULT '0',/g, '`status` tinyint(1) DEFAULT \'0\',')
        .replace(/`status` tinyint\(10\) DEFAULT '1',/g, '`status` tinyint(1) DEFAULT \'1\',')
        .replace(/([A-Za-z]+)(\s*\()/g, '`$1`$2')
        .replace(/`Female`/g, "'Female'")
        .replace(/`Male`/g, "'Male'")
        .replace(/latin1/g, 'utf8mb4')
        .replace(/CREATE TABLE IF NOT EXISTS `(\w+)`/g, (match, p1) => {
            return `DROP TABLE IF EXISTS \`${p1}\`;\n/*!40101 SET @saved_cs_client     = @@character_set_client */;\n/*!40101 SET character_set_client = utf8 */;\nCREATE TABLE \`${p1}\``;
        })
        .trim();

    result = mysqlContent;

    // Extract MySQL file details
    const mysqlFileName = 'data.sql';
    const mysqlFileSize = new Blob([mysqlContent], { type: 'text/sql' }).size;
    const mysqlFileType = 'text/sql';
    const mysqlFileExtension = 'sql';

    mysqlDetails = {
        fileName: mysqlFileName,
        fileSize: mysqlFileSize,
        fileType: mysqlFileType,
        fileExtension: mysqlFileExtension,
    };
};

const downloadFile = (content, fileName) => {                             //needed to download the converted file
    const blob = new Blob([content], { type: 'text/sql' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;                                             
    a.download = fileName;
    document.body.appendChild(a);  
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

const clearResults = () => {
        result = '';
        sqlDetails = {};
        mysqlDetails = {};
        file = null;
        document.getElementById('file-input').value = null;
    };
</script>



<div class="intro-section text-center my-8">
    <h1 class="text-5xl font-bold">Convert SQL to MySQL</h1>
    <p class="text-lg mt-2">with our secure online converter</p>
  </div>
  <div class="card gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 overflow-hidden rounded-lg mt-8">  
    <div class="upload-container">
      <div class="upload-box" on:click={triggerFileUpload} on:keydown={(event) => event.key === 'Enter' && triggerFileUpload()}>
          <input type="file" id="file-input" accept=".sql" on:change={handleFileUpload} class="hidden" />
          <img src="./download.png" alt="Upload Icon" class="upload-icon" />
          <p class="upload-text">Drag and drop your SQL files here or click on Add-File.<br>Convert your files with security,efficiently.</p>
          {#if !result}
              <button class="add-file-button">+ Add File</button>
          {/if}
      </div>
  
      {#if result}
          <div class="scroll-down-prompt text-center mt-4">
              <p class="scroll-down-text text-lg text-green-600">Scroll down to download your converted file.</p>
          </div>
          <div class="result-container">
              <h2 class="text-2xl font-bold mb-4">Converted MySQL will look like:</h2>
              <pre class="bg-gray-100 p-4 rounded mt-2">{result}</pre>
              <div class="button-container mt-4">
                  <button on:click="{() => downloadFile(result, 'converted.sql')}" class="download-button">Download Converted MySQL File</button>
                  <button on:click="{clearResults}" class="clear-button">Clear</button>
              </div>
              <div class="details-section mt-4">
                  <h3 class="text-lg font-bold mb-2">File Details:</h3>
                  <ul>
                      <li>
                          <strong>SQL File:</strong>
                          <ul>
                              <li>File Name: {sqlDetails.fileName}</li>
                              <li>File Size: {sqlDetails.fileSize} bytes</li>
                              <li>File Type: {sqlDetails.fileType}</li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      {/if}
    </div>
</div>


<style>  
    :global(body){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;                                 
        background-color: #f3f4f6;
    }
    .intro-section {
        text-align: center;
        width: 100%;
    }
    .upload-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 210%;
    }
    .upload-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:80%;
        padding: 2em;
        border: 2px dashed #17afe1;
        border-radius: 16px;
        background-color: hwb(0 100% 0%);
        cursor: pointer;
        text-align: center;
        box-sizing: border-box;
    }
    .hidden {
        display: none;
    }
    .upload-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 1em;
    }
    .upload-text {
        margin-bottom: 1em;
        color: #777;
    }
    .add-file-button {
        padding: 0.5em 1em;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .add-file-button:hover {
        background-color: #0056b3;
    }
    .result-container {
        width: 100%;
        margin-top: 2em;
        max-width: 600px;
    }
    .download-button {
        display: inline-block;
        padding: 10px 20px;
        margin: 20px;
        font-size: 16px;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .download-button:hover {
        background-color: #0056b3;
    }
    .scroll-down-prompt {
        text-align: center;
    }
    .scroll-down-text {
        color: #28a745;
    }
    .clear-button{
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
</style>