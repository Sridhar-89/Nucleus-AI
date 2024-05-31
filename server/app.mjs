// // import express from 'express';
// // import cors from 'cors';
// // import articlesRouter from './routes/articles.mjs';

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // app.use('/api/articles', articlesRouter);

// // export default app;

// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import articlesRouter from './routes/articles.mjs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, '..', 'dist')));

// app.use('/api/articles', articlesRouter);

// // The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
// });

// export default app;

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import articlesRouter from './routes/articles.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/api/articles', articlesRouter);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

export default app;

