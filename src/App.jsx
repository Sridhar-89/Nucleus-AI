// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchTrendingArticles } from './features/articles/articlesSlice';
// // import TrendingArticles from './components/TrendingArticles';
// // import ManualSearch from './components/ManualSearch';
// // import GenerateArticleOptions from './components/GenerateArticleOptions';
// // import GeneratedArticles from './components/GeneratedArticles';
// // import VideoTranscription from './components/VideoTranscription';
// // import SEOOptimization from './components/SEOOptimization';
// // import PlagiarismCheck from './components/PlagiarismCheck';
// // import Rating from './components/Rating';

// // const App = () => {
// //   const dispatch = useDispatch();
// //   const { status, error } = useSelector((state) => state.articles);

// //   useEffect(() => {
// //     dispatch(fetchTrendingArticles());
// //   }, [dispatch]);

// //   return (
// //     <div className="container mx-auto p-4 space-y-6">
// //       <header className="bg-gray-800 text-white py-4">
// //         <h1 className="text-3xl font-bold text-center">Nucleus AI</h1>
// //       </header>

// //       <div className="flex flex-wrap -mx-2">
// //         <div className="w-full md:w-1/2 px-2">
// //           <TrendingArticles />
// //         </div>
// //         <div className="w-full md:w-1/2 px-2">
// //           <ManualSearch />
// //         </div>
// //       </div>

// //       <GenerateArticleOptions />
// //       <GeneratedArticles />
// //       <VideoTranscription />
// //       {/* <SEOOptimization />
// //       <PlagiarismCheck />
// //       <Rating /> */}
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import TrendingArticlesPage from './pages/TrendingArticlesPage';
// import EditorialSectionPage from './pages/EditorialSectionPage';
// import VideoTranscriptionPage from './pages/VideoTranscriptionPage';
// import { fetchTrendingArticles } from './features/articles/articlesSlice';

// const App = () => {
//   const dispatch = useDispatch();
//   const { status, error } = useSelector((state) => state.articles);

//   useEffect(() => {
//     dispatch(fetchTrendingArticles());
//   }, [dispatch]);

//   return (
//     <Router>
//       <div className="container mx-auto p-4">
//         <header className="bg-gray-800 text-white py-4">
//           <h1 className="text-3xl font-bold text-center">Nucleus AI</h1>
//           <nav className="flex justify-center space-x-4 mt-4">
//             <Link to="/" className="text-lg font-semibold hover:underline">
//               Trending Articles
//             </Link>
//             <Link to="/editorial" className="text-lg font-semibold hover:underline">
//               Editorial Section
//             </Link>
//             <Link to="/video-transcription" className="text-lg font-semibold hover:underline">
//               Video Transcription
//             </Link>
//           </nav>
//         </header>

//         <Routes>
//           <Route path="/" element={<TrendingArticlesPage />} />
//           <Route path="/editorial" element={<EditorialSectionPage />} />
//           <Route path="/video-transcription" element={<VideoTranscriptionPage />} />
//         </Routes>

//         {status === 'loading' && <p>Loading...</p>}
//         {status === 'failed' && <p>Error: {error}</p>}
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrendingArticlesPage from './pages/TrendingArticlesPage';
import EditorialSectionPage from './pages/EditorialSectionPage';
import VideoTranscriptionPage from './pages/VideoTranscriptionPage';
import TranslateArticlePage from './pages/TranslateArticlePage';
import { fetchTrendingArticles } from './features/articles/articlesSlice';

const App = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchTrendingArticles());
  }, [dispatch]);

  return (
    <Router>
      <div className="container mx-auto p-4">
        <header className="bg-gray-800 text-white py-4">
          <h1 className="text-3xl font-bold text-center">Nucleus AI</h1>
          <nav className="flex justify-center space-x-4 mt-4">
            <Link to="/" className="text-lg font-semibold hover:underline">
              Trending Articles
            </Link>
            <Link to="/editorial" className="text-lg font-semibold hover:underline">
              Editorial Section
            </Link>
            <Link to="/video-transcription" className="text-lg font-semibold hover:underline">
              Video Transcription
            </Link>
            <Link to="/translate-article" className="text-lg font-semibold hover:underline">
              Translate Article
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<TrendingArticlesPage />} />
          <Route path="/editorial" element={<EditorialSectionPage />} />
          <Route path="/video-transcription" element={<VideoTranscriptionPage />} />
          <Route path="/translate-article" element={<TranslateArticlePage />} />
        </Routes>

        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
      </div>
    </Router>
  );
};

export default App;
