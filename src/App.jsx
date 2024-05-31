import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingArticles } from './features/articles/articlesSlice';
import TrendingArticles from './components/TrendingArticles';
import ManualSearch from './components/ManualSearch';
import GenerateArticleOptions from './components/GenerateArticleOptions';
import GeneratedArticles from './components/GeneratedArticles';
import VideoTranscription from './components/VideoTranscription';
import SEOOptimization from './components/SEOOptimization';
import PlagiarismCheck from './components/PlagiarismCheck';
import Rating from './components/Rating';

const App = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchTrendingArticles());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-3xl font-bold text-center">Nucleus AI</h1>
      </header>

      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2">
          <TrendingArticles />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <ManualSearch />
        </div>
      </div>

      <GenerateArticleOptions />
      <GeneratedArticles />
      <VideoTranscription />
      {/* <SEOOptimization />
      <PlagiarismCheck />
      <Rating /> */}
    </div>
  );
};

export default App;
