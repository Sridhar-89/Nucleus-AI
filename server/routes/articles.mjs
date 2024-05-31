// import 'dotenv/config';
// import express from 'express';
// import OpenAI from 'openai';
// import pkg from '@google-cloud/translate';
// import axios from 'axios';

// const { Translate } = pkg;
// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // const translate = new Translate({
// //   key: process.env.GOOGLE_CLOUD_API_KEY,
// // });

// router.get('/trending', async (req, res) => {
//   try {
//     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`);
//     const articles = response.data.articles.map((article, index) => ({
//       id: index + 1,
//       title: article.title,
//       summary: article.description,
//     }));
//     res.json(articles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching trending articles' });
//   }
// });

// router.post('/generate', async (req, res) => {
//   try {
//     const { text, wordCount, tone, copyStyle, llm } = req.body;
//     const gptResponse = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         { role: 'system', content: 'You are a helpful assistant.' },
//         { role: 'user', content: `Summarize the following content in a detailed and complete article of approximately ${wordCount} words with a ${tone} tone, following the style found at ${copyStyle}: ${text}` },
//       ],
//       max_tokens: parseInt(wordCount) * 5,
//     });
//     res.json({ generatedText: gptResponse.choices[0].message.content });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error generating article' });
//   }
// });

// // router.post('/translate', async (req, res) => {
// //   try {
// //     const { text, targetLanguage } = req.body;
// //     const [translation] = await translate.translate(text, targetLanguage);
// //     res.json({ translatedText: translation });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Error translating article' });
// //   }
// // });

// export default router;


import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';
import axios from 'axios';

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Replace this with the appropriate Google Translate setup if needed
// import { Translate } from '@google-cloud/translate';
// const translate = new Translate({
//   key: process.env.GOOGLE_CLOUD_API_KEY,
// });

// router.get('/trending', async (req, res) => {
//   try {
//     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}`);
//     const articles = response.data.articles.map((article, index) => ({
//       id: index + 1,
//       title: article.title,
//       summary: article.description,
//     }));
//     res.json(articles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching trending articles' });
//   }
// });
router.get('/trending', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWSAPI_KEY}`);
    const articles = response.data.articles.map((article, index) => ({
      id: index + 1,
      title: article.title,
      summary: article.description,
    }));
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching search results' });
  }
});

router.post('/generate', async (req, res) => {
  try {
    const { text, wordCount, tone, copyStyle, llm } = req.body;
    const gptResponse = await openai.chat.completions.create({
      model: llm,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `Summarize the following content in a detailed and complete article of approximately ${wordCount} words with a ${tone} tone, following the style found at ${copyStyle}: ${text}` },
      ],
      max_tokens: parseInt(wordCount) * 5,
    });
    res.json({ generatedText: gptResponse.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating article' });
  }
});

// Uncomment and set up Google Translate if needed
// router.post('/translate', async (req, res) => {
//   try {
//     const { text, targetLanguage } = req.body;
//     const [translation] = await translate.translate(text, targetLanguage);
//     res.json({ translatedText: translation });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error translating article' });
//   }
// });

export default router;

