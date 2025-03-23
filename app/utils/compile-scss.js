import { compile } from "sass";
import path from "path";
import fs from "fs-extra";

const CHARSET = "utf8";
const COMPRESSED_STYLE = "expanded";
const SCSS_REGEX = /\.scss$/;
const OUTPUT_EXTENSION = ".css.js";
const isWatchMode = process.argv.includes("--watch");

const inputDir = "app";

const getCSSTemplate = (result) => `
import { css } from 'lit';

export const styles = css\`
${`
* {
  padding: 0px;
  margin: 0px;
}
`}
${result.css}
\`;

export default styles;
`;

function compileScss(filePath = '') {
  try {
    const outputFilePath = filePath.replace(SCSS_REGEX, OUTPUT_EXTENSION);

    const result = compile(filePath, { style: COMPRESSED_STYLE });

    const cssTemplate = getCSSTemplate(result);

    fs.writeFileSync(outputFilePath, cssTemplate, CHARSET);
    console.log(`Archivo ${outputFilePath} compilado correctamente`);
  } catch (error) {
    console.error(`Error compilando ${filePath}:`, error.message);
  }
}

function compileAllSCSS() {
  const scssFiles = fs.readdirSync(inputDir, { recursive: true })
    .filter(file => file.endsWith(".scss"));

  scssFiles.forEach(file => compileScss(path.join(inputDir, file)));

  console.log("🎉 Compilación de scss completa.");
}

function watchChangesSCSSFiles(dir) {
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    const fullPath = path.join(dir, filename);
    const isSCSSFile = filename && filename.endsWith(".scss");

    if (isSCSSFile) {
      compileScss(fullPath);
    }
  });

  console.log(`👀 Escuchando cambios en ${dir}...`);
}

if (isWatchMode) {
  watchChangesSCSSFiles(inputDir);
} else {
  compileAllSCSS(inputDir)
}