import express from 'express';
// import { promises as fs } from 'fs';
// import { fileURLToPath } from 'url';
import path from 'node:path';

import db from './config/connection.js';
import routes from './routes/index.js';

await db();

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const jsonPath = path.join(__dirname, 'pythonQuestions.json');
// const jsonData = await fs.readFile(jsonPath, 'utf-8');
// const questionData = JSON.parse(jsonData);

// console.log(questionData)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

   app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
