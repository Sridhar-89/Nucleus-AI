


// import 'dotenv/config';
// import express from 'express';
// import OpenAI from 'openai';
// import axios from 'axios';

// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });




// router.get('/trending', async (req, res) => {
//   try {
//     const { query } = req.query;
//     const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=345f2afa94314119b35db52e01c09da1`);
//     const articles = response.data.articles.map((article, index) => ({
//       id: index + 1,
//       title: article.title,
//       summary: article.description,
//     }));
//     res.json(articles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching search results' });
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
//     res.json({ generatedText: gptResponse.choices[0].message.content, url: 'https://example.com/generated-article' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error generating article' });
//   }
// });

// router.post('/suggest-titles', async (req, res) => {
//   try {
//     const { text } = req.body;
//     const gptResponse = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         { role: 'system', content: 'You are a helpful assistant.' },
//         { role: 'user', content: `Provide a list of suggested titles for the following article: ${text}` },
//       ],
//       max_tokens: 50,
//     });
//     const titles = gptResponse.choices[0].message.content.split('\n').filter(title => title.trim() !== '');
//     res.json({ titles });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching suggested titles' });
//   }
// });

// // router.post('/generate', async (req, res) => {
// //   try {
// //     const { text, wordCount, tone, copyStyle, llm } = req.body;
// //     const gptResponse = await openai.chat.completions.create({
// //       model: llm,
// //       messages: [
// //         { role: 'system', content: 'You are a helpful assistant.' },
// //         { role: 'user', content: `Summarize the following content in a detailed and complete article of approximately ${wordCount} words with a ${tone} tone, following the style found at ${copyStyle}: ${text}` },
// //       ],
// //       max_tokens: parseInt(wordCount) * 5,
// //     });
// //     res.json({ generatedText: gptResponse.choices[0].message.content });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Error generating article' });
// //   }
// // });

// // router.post('/suggest-titles', async (req, res) => {
// //   try {
// //     const { text } = req.body;
// //     const gptResponse = await openai.chat.completions.create({
// //       model: 'gpt-3.5-turbo',
// //       messages: [
// //         { role: 'system', content: 'You are a helpful assistant.' },
// //         { role: 'user', content: `Provide a list of suggested titles for the following article: ${text}` },
// //       ],
// //       max_tokens: 50,
// //     });
// //     const titles = gptResponse.choices[0].message.content.split('\n').filter(title => title.trim() !== '');
// //     res.json({ titles });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Error fetching suggested titles' });
// //   }
// // });

// // Uncomment and set up Google Translate if needed
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
import cheerio from 'cheerio';

const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get('/trending', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWSAPI_KEY}`);
    const articles = response.data.articles.map((article, index) => ({
      id: index + 1,
      title: article.title,
      summary: article.description,
      url: article.url,
    }));
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching search results' });
  }
});

router.post('/generate', async (req, res) => {
  try {
    const { text, wordCount, tone, copyStyle, llm, url } = req.body;
    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `Summarize the following content in a detailed and complete article of approximately ${wordCount} words with a ${tone} tone, following the style found at ${copyStyle}: ${text}` },
      ],
      max_tokens: parseInt(wordCount) * 5,
    });
    res.json({ text: gptResponse.choices[0].message.content, url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating article' });
  }
});

router.post('/suggest-titles', async (req, res) => {
  try {
    const { text } = req.body;
    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `Provide a list of suggested titles for the following article: ${text}` },
      ],
      max_tokens: 50,
    });
    const titles = gptResponse.choices[0].message.content.split('\n').filter(title => title.trim() !== '');
    res.json({ titles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching suggested titles' });
  }
});

router.post('/translate', async (req, res) => {
  try {
    const { url, language, tone, wordCount, llm } = req.body;
    const articleResponse = await axios.get(url);
    const html = articleResponse.data;

    // Load the HTML into cheerio
    const $ = cheerio.load(html);

    // Extract the main content (this may need to be customized based on the structure of the target website)
    const mainContent = $('body').text();

    const gptResponse = await openai.chat.completions.create({
      model: llm,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `Translate the following content to ${language}, and approximately ${wordCount} words with a ${tone} tone: ${mainContent}` },
      ],
      max_tokens: parseInt(wordCount) * 5,
    });

    const translatedText = gptResponse.choices[0].message.content;

    res.json({ translatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error translating article' });
  }
});

export default router;


