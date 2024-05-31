import React, { useState } from 'react';

const EditorialSection = ({ onSave, onClose, initialContent }) => {
  const [content, setContent] = useState(initialContent);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
        <h2 className="text-2xl font-semibold mb-4">Edit Article</h2>
        <textarea
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mr-2"
            onClick={() => onSave(content)}
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorialSection;
