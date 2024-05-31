import React from 'react';

const PlagiarismCheck = () => {
  const handlePlagiarismCheck = () => {
    console.log('Performing Plagiarism Check...');
  };

  return (
    <section id="plagiarism-check" className="p-6 bg-white shadow-lg rounded-lg">
      
      <div className="text-center">
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          onClick={handlePlagiarismCheck}
        >
          Check
        </button>
      </div>
    </section>
  );
};

export default PlagiarismCheck;
