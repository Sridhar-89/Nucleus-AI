import React from 'react';

const GrammarCheck = () => {
  const handleGrammarCheck = () => {
    // Implement grammar check functionality here
    console.log('Grammar check initiated');
  };

  return (
    <button
      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
      onClick={handleGrammarCheck}
    >
      Grammar Check
    </button>
  );
};

export default GrammarCheck;
