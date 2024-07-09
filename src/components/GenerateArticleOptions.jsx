// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { generateArticle } from '../features/articles/articlesSlice';

// const GenerateArticleOptions = () => {
//   const dispatch = useDispatch();
//   const { trending } = useSelector((state) => state.articles);
//   const [selectedArticle, setSelectedArticle] = useState('');
//   const [wordCount, setWordCount] = useState(300);
//   const [tone, setTone] = useState('Formal');
//   const [llm, setLLM] = useState('gpt-3.5-turbo');

//   const handleGenerateArticle = () => {
//     const options = {
//       text: selectedArticle,
//       wordCount,
//       tone,
//       llm,
//     };
//     dispatch(generateArticle(options));
//   };

//   return (
//     <section id="generate-options" className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Generate Article Options</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="flex flex-col">
//           <label htmlFor="select-article" className="block text-lg font-medium mb-2">
//             Select Article:
//           </label>
//           <select
//             id="select-article"
//             className="p-2 border rounded-md focus:ring focus:ring-blue-300"
//             onChange={(e) => setSelectedArticle(e.target.value)}
//           >
//             <option value="">Select an article</option>
//             {trending.map((article) => (
//               <option key={article.id} value={article.summary}>
//                 {article.title}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="word-count" className="block text-lg font-medium mb-2">
//             Number of Words:
//           </label>
//           <input
//             type="number"
//             id="word-count"
//             className="p-2 border rounded-md focus:ring focus:ring-blue-300"
//             value={wordCount}
//             onChange={(e) => setWordCount(e.target.value)}
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="llm" className="block text-lg font-medium mb-2">
//             Name of LLM:
//           </label>
//           <select
//             id="llm"
//             className="p-2 border rounded-md focus:ring focus:ring-blue-300"
//             onChange={(e) => setLLM(e.target.value)}
//             value={llm}
//           >
//             <option value="gpt-3.5-turbo">GPT-3.5-Turbo</option>
//             <option value="chatgpt">ChatGPT</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="tone" className="block text-lg font-medium mb-2">
//             Tone:
//           </label>
//           <select
//             id="tone"
//             className="p-2 border rounded-md focus:ring focus:ring-blue-300"
//             onChange={(e) => setTone(e.target.value)}
//             value={tone}
//           >
//             <option value="Formal">Formal</option>
//             <option value="Informal">Informal</option>
//             <option value="Persuasive">Persuasive</option>
//             <option value="Inspirational">Inspirational</option>
//             <option value="Descriptive">Descriptive</option>
//             <option value="Narrative">Narrative</option>
//             <option value="Humorous">Humorous</option>
//           </select>
//         </div>
//       </div>
//       <div className="text-center mt-4">
//         <button
//           className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
//           onClick={handleGenerateArticle}
//         >
//           Write
//         </button>
//       </div>
//     </section>
//   );
// };

// export default GenerateArticleOptions;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateArticle } from '../features/articles/articlesSlice';

const GenerateArticleOptions = () => {
  const dispatch = useDispatch();
  const { trending } = useSelector((state) => state.articles);
  const [selectedArticle, setSelectedArticle] = useState('');
  const [selectedArticleUrl, setSelectedArticleUrl] = useState('');
  const [wordCount, setWordCount] = useState(300);
  const [tone, setTone] = useState('Formal');
  const [llm, setLLM] = useState('gpt-3.5-turbo');

  const handleGenerateArticle = () => {
    const options = {
      text: selectedArticle,
      url: selectedArticleUrl,
      wordCount,
      tone,
      llm,
    };
    dispatch(generateArticle(options));
  };

  const handleArticleChange = (e) => {
    const selected = trending.find(article => article.summary === e.target.value);
    setSelectedArticle(e.target.value);
    setSelectedArticleUrl(selected ? selected.url : '');
  };

  return (
    <section id="generate-options" className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Generate Article Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="select-article" className="block text-lg font-medium mb-2">
            Select Article:
          </label>
          <select
            id="select-article"
            className="p-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={handleArticleChange}
          >
            <option value="">Select an article</option>
            {trending.map((article) => (
              <option key={article.id} value={article.summary}>
                {article.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="word-count" className="block text-lg font-medium mb-2">
            Number of Words:
          </label>
          <input
            type="number"
            id="word-count"
            className="p-2 border rounded-md focus:ring focus:ring-blue-300"
            value={wordCount}
            onChange={(e) => setWordCount(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="llm" className="block text-lg font-medium mb-2">
            Name of LLM:
          </label>
          <select
            id="llm"
            className="p-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={(e) => setLLM(e.target.value)}
            value={llm}
          >
            <option value="gpt-3.5-turbo">GPT-3.5-Turbo</option>
            <option value="chatgpt">ChatGPT</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="tone" className="block text-lg font-medium mb-2">
            Tone:
          </label>
          <select
            id="tone"
            className="p-2 border rounded-md focus:ring focus:ring-blue-300"
            onChange={(e) => setTone(e.target.value)}
            value={tone}
          >
            <option value="Formal">Formal</option>
            <option value="Informal">Informal</option>
            <option value="Persuasive">Persuasive</option>
            <option value="Inspirational">Inspirational</option>
            <option value="Descriptive">Descriptive</option>
            <option value="Narrative">Narrative</option>
            <option value="Humorous">Humorous</option>
          </select>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
          onClick={handleGenerateArticle}
        >
          Write
        </button>
      </div>
    </section>
  );
};

export default GenerateArticleOptions;
