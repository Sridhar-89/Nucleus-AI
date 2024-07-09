// // import React, { useState } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { Dialog, Transition } from '@headlessui/react';
// // import { Fragment } from 'react';
// // import { PencilIcon } from '@heroicons/react/24/solid';
// // import { updateGeneratedText } from '../features/articles/articlesSlice';
// // import EditorialSection from '../components/EditorialSection';
// // import axios from 'axios';

// // const GeneratedArticles = () => {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editedContent, setEditedContent] = useState('');
// //   const [suggestedTitles, setSuggestedTitles] = useState([]);
// //   const [manualPrompt, setManualPrompt] = useState('');
// //   const { generatedText, generatedUrl } = useSelector((state) => state.articles);
// //   const dispatch = useDispatch();

// //   const handleSave = (content) => {
// //     dispatch(updateGeneratedText(content));
// //     setIsEditing(false);
// //   };

// //   const handleSuggestTitles = async () => {
// //     try {
// //       const response = await axios.post('/api/articles/suggest-titles', { text: generatedText });
// //       setSuggestedTitles(response.data.titles);
// //     } catch (error) {
// //       console.error('Error suggesting titles:', error);
// //     }
// //   };

// //   return (
// //     <section id="generated-articles" className="p-6 bg-white shadow-lg rounded-lg">
// //       <h2 className="text-2xl font-semibold mb-4">Generated Articles</h2>
// //       <div className="p-4 border rounded-md bg-gray-50">
// //         {generatedText}
// //       </div>
// //       <div className="mt-4">
// //         <label className="block text-lg font-medium">URL of the Article:</label>
// //         <a href={generatedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
// //           {generatedUrl}
// //         </a>
// //       </div>
// //       <div className="mt-4">
// //         <label className="block text-lg font-medium">Suggested Titles:</label>
// //         <div className="p-2 border rounded-md bg-gray-100">
// //           {suggestedTitles.length > 0 ? (
// //             suggestedTitles.map((title, index) => <div key={index}>{title}</div>)
// //           ) : (
// //             <button
// //               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
// //               onClick={handleSuggestTitles}
// //             >
// //               Suggest Titles
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //       <div className="mt-4">
// //         <label className="block text-lg font-medium">Manual Prompt:</label>
// //         <textarea
// //           className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
// //           rows="4"
// //           value={manualPrompt}
// //           onChange={(e) => setManualPrompt(e.target.value)}
// //         ></textarea>
// //         <button
// //           className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
// //           onClick={() => console.log('Custom Prompt:', manualPrompt)}
// //         >
// //           Apply Custom Prompt
// //         </button>
// //       </div>
// //       <div className="flex justify-end mt-4">
// //         <button
// //           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
// //           onClick={() => setIsEditing(true)}
// //         >
// //           Edit <PencilIcon className="h-5 w-5 inline-block ml-1" />
// //         </button>
// //       </div>

// //       <Transition.Root show={isEditing} as={Fragment}>
// //         <Dialog as="div" className="relative z-50" onClose={() => setIsEditing(false)}>
// //           <div className="fixed inset-0 flex items-center justify-center p-5">
// //             <Dialog.Panel className="w-full max-h-screen overflow-y-auto p-4 max-w-xl rounded bg-black dark:bg-gray-800">
// //               <div className="flex justify-end">
// //                 <button onClick={() => setIsEditing(false)}>
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="30"
// //                     height="30"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="red"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     className="w-5 h-5"
// //                   >
// //                     <circle cx="12" cy="12" r="10" />
// //                     <line x1="15" y1="9" x2="9" y2="15" />
// //                     <line x1="9" y1="9" x2="15" y2="15" />
// //                   </svg>
// //                 </button>
// //               </div>
// //               <EditorialSection
// //                 initialContent={generatedText}
// //                 onSave={handleSave}
// //                 onClose={() => setIsEditing(false)}
// //               />
// //             </Dialog.Panel>
// //           </div>
// //         </Dialog>
// //       </Transition.Root>
// //     </section>
// //   );
// // };

// // export default GeneratedArticles;


// // import React, { useState } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { Dialog, Transition } from '@headlessui/react';
// // import { Fragment } from 'react';
// // import { PencilIcon } from '@heroicons/react/24/solid';
// // import { updateGeneratedText, suggestTitles } from '../features/articles/articlesSlice';
// // import EditorialSection from './EditorialSection';
// // import PlagiarismCheck from './PlagiarismCheck';
// // import GrammarCheck from './GrammarCheck';
// // import SEOOptimization from './SEOOptimization';
// // import Rating from './Rating';

// // const GeneratedArticles = () => {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [manualPrompt, setManualPrompt] = useState('');
// //   const { generatedText, generatedUrl, suggestedTitles } = useSelector((state) => state.articles);
// //   const dispatch = useDispatch();

// //   const handleSave = (content) => {
// //     dispatch(updateGeneratedText(content));
// //     setIsEditing(false);
// //   };

// //   const handleSuggestTitles = () => {
// //     dispatch(suggestTitles(generatedText));
// //   };

// //   return (
// //     <section id="generated-articles" className="p-6 bg-white shadow-lg rounded-lg">
// //       <h2 className="text-2xl font-semibold mb-4">Generated Articles</h2>
// //       <div className="p-4 border rounded-md bg-gray-50">
// //         {generatedText}
// //       </div>
// //       <div className="mt-4">
// //         <label className="block text-lg font-medium">URL of the Article:</label>
// //         {generatedUrl ? (
// //           <a href={generatedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
// //             {generatedUrl}
// //           </a>
// //         ) : (
// //           <p>Generating URL...</p>
// //         )}
// //       </div>
// //       <div className="mt-4">
// //         <label className="block text-lg font-medium">Suggested Titles:</label>
// //         <div className="p-2 border rounded-md bg-gray-100">
// //           {suggestedTitles.length > 0 ? (
// //             suggestedTitles.map((title, index) => <div key={index}>{title}</div>)
// //           ) : (
// //             <button
// //               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
// //               onClick={handleSuggestTitles}
// //             >
// //               Suggest Titles
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //       <div className="mt-4">
// //         <label className="block text-lg font-medium">Manual Prompt:</label>
// //         <textarea
// //           className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
// //           rows="4"
// //           value={manualPrompt}
// //           onChange={(e) => setManualPrompt(e.target.value)}
// //         ></textarea>
// //         <button
// //           className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
// //           onClick={() => console.log('Custom Prompt:', manualPrompt)}
// //         >
// //           Apply Custom Prompt
// //         </button>
// //       </div>
// //       <div className="flex justify-end mt-4">
// //         <button
// //           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
// //           onClick={() => setIsEditing(true)}
// //         >
// //           Edit <PencilIcon className="h-5 w-5 inline-block ml-1" />
// //         </button>
// //       </div>

// //       <Transition.Root show={isEditing} as={Fragment}>
// //         <Dialog as="div" className="relative z-50" onClose={() => setIsEditing(false)}>
// //           <div className="fixed inset-0 flex items-center justify-center p-5">
// //             <Dialog.Panel className="w-full max-h-screen overflow-y-auto p-4 max-w-xl rounded bg-black dark:bg-gray-800">
// //               <div className="flex justify-end">
// //                 <button onClick={() => setIsEditing(false)}>
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="30"
// //                     height="30"
// //                     viewBox="0 0 24 24"
// //                     fill="none"
// //                     stroke="red"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     className="w-5 h-5"
// //                   >
// //                     <circle cx="12" cy="12" r="10" />
// //                     <line x1="15" y1="9" x2="9" y2="15" />
// //                     <line x1="9" y1="9" x2="15" y2="15" />
// //                   </svg>
// //                 </button>
// //               </div>
// //               <EditorialSection
// //                 initialContent={generatedText}
// //                 onSave={handleSave}
// //                 onClose={() => setIsEditing(false)}
// //               />
// //             </Dialog.Panel>
// //           </div>
// //         </Dialog>
// //       </Transition.Root>

// //       <div className="flex justify-between items-center mt-4">
// //         <PlagiarismCheck />
// //         <GrammarCheck />
// //         <SEOOptimization />
// //         <Rating />
// //         <button
// //           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
// //           onClick={() => console.log('Article saved')}
// //         >
// //           Save
// //         </button>
// //       </div>

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';
// import { PencilIcon } from '@heroicons/react/24/solid';
// import { updateGeneratedText, suggestTitles } from '../features/articles/articlesSlice';
// import EditorialSection from './EditorialSection';
// import PlagiarismCheck from './PlagiarismCheck';
// import GrammarCheck from './GrammarCheck';
// import SEOOptimization from './SEOOptimization';
// import Rating from './Rating';

// const GeneratedArticles = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [manualPrompt, setManualPrompt] = useState('');
//   const { generatedText, generatedUrl, suggestedTitles } = useSelector((state) => state.articles);
//   const dispatch = useDispatch();

//   const handleSave = (content) => {
//     dispatch(updateGeneratedText(content));
//     setIsEditing(false);
//   };

//   const handleSuggestTitles = () => {
//     dispatch(suggestTitles(generatedText));
//   };

//   return (
//     <section id="generated-articles" className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Generated Articles</h2>
//       <div className="p-4 border rounded-md bg-gray-50">
//         {generatedText}
//       </div>
//       <div className="mt-4">
//         <label className="block text-lg font-medium">URL of the Article:</label>
//         {generatedUrl ? (
//           <a href={generatedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//             {generatedUrl}
//           </a>
//         ) : (
//           <p>Select an article to generate and view its URL.</p>
//         )}
//       </div>
//       <div className="mt-4">
//         <label className="block text-lg font-medium">Suggested Titles:</label>
//         <div className="p-2 border rounded-md bg-gray-100">
//           {suggestedTitles.length > 0 ? (
//             suggestedTitles.map((title, index) => <div key={index}>{title}</div>)
//           ) : (
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//               onClick={handleSuggestTitles}
//             >
//               Suggest Titles
//             </button>
//           )}
//         </div>
//       </div>
//       <div className="mt-4">
//         <label className="block text-lg font-medium">Manual Prompt:</label>
//         <textarea
//           className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
//           rows="4"
//           value={manualPrompt}
//           onChange={(e) => setManualPrompt(e.target.value)}
//         ></textarea>
//         <button
//           className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
//           onClick={() => console.log('Custom Prompt:', manualPrompt)}
//         >
//           Apply Custom Prompt
//         </button>
//       </div>
//       <div className="flex justify-end mt-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//           onClick={() => setIsEditing(true)}
//         >
//           Edit <PencilIcon className="h-5 w-5 inline-block ml-1" />
//         </button>
//       </div>

//       <Transition.Root show={isEditing} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => setIsEditing(false)}>
//           <div className="fixed inset-0 flex items-center justify-center p-5">
//             <Dialog.Panel className="w-full max-h-screen overflow-y-auto p-4 max-w-xl rounded bg-black dark:bg-gray-800">
//               <div className="flex justify-end">
//                 <button onClick={() => setIsEditing(false)}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="red"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-5 h-5"
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <line x1="15" y1="9" x2="9" y2="15" />
//                     <line x1="9" y1="9" x2="15" y2="15" />
//                   </svg>
//                 </button>
//               </div>
//               <EditorialSection
//                 initialContent={generatedText}
//                 onSave={handleSave}
//                 onClose={() => setIsEditing(false)}
//               />
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <div className="flex justify-between items-center mt-4">
//         <PlagiarismCheck />
//         <GrammarCheck />
//         <SEOOptimization />
//         <Rating />
//         <button
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
//           onClick={() => console.log('Article saved')}
//         >
//           Save
//         </button>
//       </div>
//     </section>
//   );
// };

// export default GeneratedArticles;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';
import { updateGeneratedText, suggestTitles } from '../features/articles/articlesSlice';
import EditorialSection from './EditorialSection';
import PlagiarismCheck from './PlagiarismCheck';
import GrammarCheck from './GrammarCheck';
import SEOOptimization from './SEOOptimization';
import Rating from './Rating';

const GeneratedArticles = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [manualPrompt, setManualPrompt] = useState('');
  const { generatedText, generatedUrl, suggestedTitles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const handleSave = (content) => {
    dispatch(updateGeneratedText({ text: content, url: generatedUrl }));
    setIsEditing(false);
  };

  const handleSuggestTitles = () => {
    dispatch(suggestTitles(generatedText));
  };

  return (
    <section id="generated-articles" className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Generated Articles</h2>
      <div className="p-4 border rounded-md bg-gray-50">
      <div dangerouslySetInnerHTML={{ __html: generatedText }} />
      </div>
      <div className="mt-4">
        <label className="block text-lg font-medium">URL of the Article:</label>
        {generatedUrl ? (
          <a href={generatedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {generatedUrl}
          </a>
        ) : (
          <p>No URL available</p>
        )}
      </div>
      <div className="mt-4">
        <label className="block text-lg font-medium">Suggested Titles:</label>
        <div className="p-2 border rounded-md bg-gray-100">
          {suggestedTitles.length > 0 ? (
            suggestedTitles.map((title, index) => <div key={index}>{title}</div>)
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleSuggestTitles}
            >
              Suggest Titles
            </button>
          )}
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-lg font-medium">Manual Prompt:</label>
        <textarea
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          rows="4"
          value={manualPrompt}
          onChange={(e) => setManualPrompt(e.target.value)}
        ></textarea>
        <button
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          onClick={() => console.log('Custom Prompt:', manualPrompt)}
        >
          Apply Custom Prompt
        </button>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => setIsEditing(true)}
        >
          Edit <PencilIcon className="h-5 w-5 inline-block ml-1" />
        </button>
      </div>

      <Transition.Root show={isEditing} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsEditing(false)}>
          <div className="fixed inset-0 flex items-center justify-center p-5">
            <Dialog.Panel className="w-full max-h-screen overflow-y-auto p-4 max-w-xl rounded bg-black dark:bg-gray-800">
              <div className="flex justify-end">
                <button onClick={() => setIsEditing(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </button>
              </div>
              <EditorialSection
                initialContent={generatedText}
                onSave={handleSave}
                onClose={() => setIsEditing(false)}
              />
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="flex justify-between items-center mt-4">
        <PlagiarismCheck />
        <GrammarCheck />
        <SEOOptimization />
        <Rating />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          onClick={() => console.log('Article saved')}
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default GeneratedArticles;
