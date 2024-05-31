import React from 'react';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const { manualSearchResults } = useSelector((state) => state.articles);

  return (
    <section id="manual-search-results" className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Results from Manual Search</h2>
      <div className="scrollable p-2 border rounded-md h-48 overflow-y-auto">
        {manualSearchResults.length === 0 && <p>No search results available.</p>}
        {manualSearchResults.map((result, index) => (
          <div key={index} className="p-2 border-b">
            {result.title} - {result.summary}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
