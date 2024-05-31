import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';
import { updateGeneratedText } from '../features/articles/articlesSlice';
import PlagiarismCheck from './PlagiarismCheck';
import GrammarCheck from './GrammarCheck';
import SEOOptimization from './SEOOptimization';
import Rating from './Rating';

const GeneratedArticles = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');
  const { generatedText } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const handleSave = (content) => {
    dispatch(updateGeneratedText(content));
    setIsEditing(false);
  };

  return (
    <section id="generated-articles" className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Generated Articles</h2>
      <div className="p-4 border rounded-md bg-gray-50">
        {generatedText}
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
              <div className="bg-black px-2 py-2">
                <Dialog.Title className="bg-green-200 shadow-lg font-bold text-xl py-3 px-3 md-3 dark:bg-gray-800">
                  Editorial Section
                </Dialog.Title>
                <textarea
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 mt-4"
                  rows="10"
                  value={editedContent || generatedText}
                  onChange={(e) => setEditedContent(e.target.value)}
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 mr-2"
                    onClick={() => handleSave(editedContent || generatedText)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
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
