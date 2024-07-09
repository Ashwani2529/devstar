import express from "express";
import bodyParser from "body-parser";
import { exec } from "child_process";
import path, { fileURLToPath } from "path";
import { URL } from "url";
import cors from "cors";

// Convert `import.meta.url` to a file path and then get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint for linting code
app.post("/lint", (req, res) => {
  const { code, language } = req.body;

  // Function to handle linting based on language
  const lintCode = (escapedCode, language, callback) => {
    if (language === "cpp") {
      // Lint C++ code using cppcheck
      exec(
        `echo "${escapedCode}" | "D:\side_project\port\devstar\src\routes\(tools)\code-linter\code-linter-backend\cppcheck.exe" --enable=all --inline-suppr -`,
        (err, stdout, stderr) => {
          if (err || stderr) {
            callback(err || stderr);
          } else {
            callback(null, stdout);
          }
        }
      );
    } else if (language === "java") {
      // Lint Java code using Checkstyle
      const checkstyleJar = path.join(
        __dirname,
        "D:side_projectportdevstarsrc\routes(tools)code-lintercode-linter-backendcheckstyle-10.17.0-all.jar"
      );
      const googleChecks = path.join(
        __dirname,
        "D:side_projectportdevstarsrc\routes(tools)code-lintercode-linter-backendgoogle_checks.xml"
      );

      exec(
        `echo "${escapedCode}" | java -jar ${checkstyleJar} -c ${googleChecks} -`,
        (err, stdout, stderr) => {
          if (err || stderr) {
            callback(err || stderr);
          } else {
            callback(null, stdout);
          }
        }
      );
    } else {
      callback("Unsupported language");
    }
  };

  // Escape characters based on language - Assume code is properly escaped
  const escapedCode = code;

  // Call lintCode function
  lintCode(escapedCode, language, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ lintingResult: result });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
