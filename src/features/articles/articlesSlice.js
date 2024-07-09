// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // export const fetchTrendingArticles = createAsyncThunk('articles/fetchTrending', async () => {
// //   const response = await axios.get('/api/articles/trending');
// //   return response.data;
// // });

// // export const generateArticle = createAsyncThunk('articles/generateArticle', async (options) => {
// //   const response = await axios.post('/api/articles/generate', options);
// //   return response.data.generatedText;
// // });

// // export const translateArticle = createAsyncThunk('articles/translateArticle', async ({ text, targetLanguage }) => {
// //   const response = await axios.post('/api/articles/translate', { text, targetLanguage });
// //   return response.data.translatedText;
// // });

// // const articlesSlice = createSlice({
// //   name: 'articles',
// //   initialState: {
// //     trending: [],
// //     manualSearchResults: [],
// //     generatedText: '',
// //     translatedText: '',
// //     status: 'idle',
// //     error: null,
// //   },
// //   reducers: {
// //     setManualSearchResults(state, action) {
// //       state.manualSearchResults = action.payload;
// //     },
// //     updateGeneratedText(state, action) {
// //       state.generatedText = action.payload;
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchTrendingArticles.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(fetchTrendingArticles.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.trending = action.payload;
// //       })
// //       .addCase(fetchTrendingArticles.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.error.message;
// //       })
// //       .addCase(generateArticle.fulfilled, (state, action) => {
// //         state.generatedText = action.payload;
// //       })
// //       .addCase(translateArticle.fulfilled, (state, action) => {
// //         state.translatedText = action.payload;
// //       });
// //   },
// // });

// // export const { setManualSearchResults, updateGeneratedText } = articlesSlice.actions;

// // export default articlesSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchTrendingArticles = createAsyncThunk('articles/fetchTrending', async () => {
//   const response = await axios.get('/api/articles/trending');
//   return response.data;
// });

// export const generateArticle = createAsyncThunk('articles/generateArticle', async (options) => {
//   const response = await axios.post('/api/articles/generate', options);
//   return response.data.generatedText;
// });

// export const translateArticle = createAsyncThunk('articles/translateArticle', async ({ text, targetLanguage }) => {
//   const response = await axios.post('/api/articles/translate', { text, targetLanguage });
//   return response.data.translatedText;
// });

// export const suggestTitles = createAsyncThunk('articles/suggestTitles', async (text) => {
//   const response = await axios.post('/api/articles/suggest-titles', { text });
//   return response.data.titles;
// });

// const articlesSlice = createSlice({
//   name: 'articles',
//   initialState: {
//     trending: [],
//     manualSearchResults: [],
//     generatedText: '',
//     translatedText: '',
//     generatedUrl: '',
//     suggestedTitles: [],
//     selectedArticleUrl: '',
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     setManualSearchResults(state, action) {
//       state.manualSearchResults = action.payload;
//     },
//     setSelectedArticleUrl(state, action) {
//       state.selectedArticleUrl = action.payload;
//     },
//     updateGeneratedText(state, action) {
//       state.generatedText = action.payload;
//       state.generatedUrl = action.payload.url;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTrendingArticles.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTrendingArticles.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.trending = action.payload;
//       })
//       .addCase(fetchTrendingArticles.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(generateArticle.fulfilled, (state, action) => {
//         state.generatedText = action.payload;
//         state.generatedUrl = action.payload.url;
//       })
//       .addCase(translateArticle.fulfilled, (state, action) => {
//         state.translatedText = action.payload;
//       })
//       .addCase(suggestTitles.fulfilled, (state, action) => {
//         state.suggestedTitles = action.payload;
//       });
//   },
// });

// export const { setManualSearchResults, setSelectedArticleUrl, updateGeneratedText } = articlesSlice.actions;

// export default articlesSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchTrendingArticles = createAsyncThunk('articles/fetchTrending', async () => {
//   const response = await axios.get('/api/articles/trending');
//   return response.data;
// });

// export const generateArticle = createAsyncThunk('articles/generateArticle', async (options) => {
//   const response = await axios.post('/api/articles/generate', options);
//   return response.data;
// });

// export const suggestTitles = createAsyncThunk('articles/suggestTitles', async (text) => {
//   const response = await axios.post('/api/articles/suggest-titles', { text });
//   return response.data.titles;
// });

// const articlesSlice = createSlice({
//   name: 'articles',
//   initialState: {
//     trending: [],
//     manualSearchResults: [],
//     generatedText: '',
//     generatedUrl: '',
//     suggestedTitles: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     setManualSearchResults(state, action) {
//       state.manualSearchResults = action.payload;
//     },
//     updateGeneratedText(state, action) {
//       state.generatedText = action.payload.text;
//       state.generatedUrl = action.payload.url;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTrendingArticles.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTrendingArticles.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.trending = action.payload;
//       })
//       .addCase(fetchTrendingArticles.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(generateArticle.fulfilled, (state, action) => {
//         state.generatedText = action.payload.text;
//         state.generatedUrl = action.payload.url;
//       })
//       .addCase(suggestTitles.fulfilled, (state, action) => {
//         state.suggestedTitles = action.payload;
//       });
//   },
// });

// export const { setManualSearchResults, updateGeneratedText } = articlesSlice.actions;

// export default articlesSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchTrendingArticles = createAsyncThunk('articles/fetchTrending', async () => {
//   const response = await axios.get('/api/articles/trending');
//   return response.data;
// });

// export const generateArticle = createAsyncThunk('articles/generateArticle', async (options) => {
//   const response = await axios.post('/api/articles/generate', options);
//   return response.data;
// });

// export const suggestTitles = createAsyncThunk('articles/suggestTitles', async (text) => {
//   const response = await axios.post('/api/articles/suggest-titles', { text });
//   return response.data.titles;
// });

// const articlesSlice = createSlice({
//   name: 'articles',
//   initialState: {
//     trending: [],
//     manualSearchResults: [],
//     generatedText: '',
//     generatedUrl: '',
//     suggestedTitles: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     setManualSearchResults(state, action) {
//       state.manualSearchResults = action.payload;
//     },
//     updateGeneratedText(state, action) {
//       state.generatedText = action.payload.text;
//       state.generatedUrl = action.payload.url;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTrendingArticles.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTrendingArticles.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.trending = action.payload;
//       })
//       .addCase(fetchTrendingArticles.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(generateArticle.fulfilled, (state, action) => {
//         state.generatedText = action.payload.text;
//         state.generatedUrl = action.payload.url;
//       })
//       .addCase(suggestTitles.fulfilled, (state, action) => {
//         state.suggestedTitles = action.payload;
//       });
//   },
// });

// export const { setManualSearchResults, updateGeneratedText } = articlesSlice.actions;

// export default articlesSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendingArticles = createAsyncThunk('articles/fetchTrending', async () => {
  const response = await axios.get('/api/articles/trending');
  return response.data;
});

export const generateArticle = createAsyncThunk('articles/generateArticle', async (options) => {
  const response = await axios.post('/api/articles/generate', options);
  return response.data;
});

export const translateArticle = createAsyncThunk('articles/translateArticle', async ({ url, language, tone, wordCount, llm }) => {
  const response = await axios.post('/api/articles/translate', { url, language, tone, wordCount, llm });
  return response.data;
});

export const suggestTitles = createAsyncThunk('articles/suggestTitles', async (text) => {
  const response = await axios.post('/api/articles/suggest-titles', { text });
  return response.data.titles;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    trending: [],
    manualSearchResults: [],
    generatedText: '',
    generatedUrl: '',
    translatedText: '',
    suggestedTitles: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setManualSearchResults(state, action) {
      state.manualSearchResults = action.payload;
    },
    updateGeneratedText(state, action) {
      state.generatedText = action.payload.text;
      state.generatedUrl = action.payload.url;
    },
    updateTranslatedText(state, action) {
      state.translatedText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trending = action.payload;
      })
      .addCase(fetchTrendingArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(generateArticle.fulfilled, (state, action) => {
        state.generatedText = action.payload.text;
        state.generatedUrl = action.payload.url;
      })
      .addCase(translateArticle.fulfilled, (state, action) => {
        state.translatedText = action.payload.translatedText;
      })
      .addCase(suggestTitles.fulfilled, (state, action) => {
        state.suggestedTitles = action.payload;
      });
  },
});

export const { setManualSearchResults, updateGeneratedText,updateTranslatedText } = articlesSlice.actions;

export default articlesSlice.reducer;


