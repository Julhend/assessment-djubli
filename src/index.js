require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

/**
 * ⚠️ Propietary code! Do not change! ⚠️
 * What this does is reading all files inside routes folder recrusively
 * and use it by app.use(), so you don't need to import / require any route.
 * Reference: https://www.npmjs.com/package/read-dir-deep
 */
const readDir = require('read-dir-deep');
const path = require('path');

const routesPath = path.resolve('routes');
const filePaths = readDir.readDirDeepSync(routesPath);
filePaths.forEach((filePath) => {
  const relativeFilePath = `./src/${filePath}`;
  console.log(`${relativeFilePath} loaded!`);
  const route = require(relativeFilePath);
  app.use(route);
});

const port = 3000;
console.log(port);
app.listen(port, () => {
  console.log(`API is running in http://localhost:${port}`);
});
