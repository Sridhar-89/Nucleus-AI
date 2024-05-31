import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendingArticles = createAsyncThunk('articles/fetchTrending', async () => {
  const response = await axios.get('/api/articles/trending');
  return response.data;
});

export const generateArticle = createAsyncThunk('articles/generateArticle', async (options) => {
  const response = await axios.post('/api/articles/generate', options);
  return response.data.generatedText;
});

export const translateArticle = createAsyncThunk('articles/translateArticle', async ({ text, targetLanguage }) => {
  const response = await axios.post('/api/articles/translate', { text, targetLanguage });
  return response.data.translatedText;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    trending: [],
    manualSearchResults: [],
    generatedText: '',
    translatedText: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setManualSearchResults(state, action) {
      state.manualSearchResults = action.payload;
    },
    updateGeneratedText(state, action) {
      state.generatedText = action.payload;
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
        state.generatedText = action.payload;
      })
      .addCase(translateArticle.fulfilled, (state, action) => {
        state.translatedText = action.payload;
      });
  },
});

export const { setManualSearchResults, updateGeneratedText } = articlesSlice.actions;

export default articlesSlice.reducer;
