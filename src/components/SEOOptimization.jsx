import React from 'react';

const SEOOptimization = () => {
  const handleSEO = () => {
    console.log('Performing SEO Optimization...');
  };

  return (
    <section id="seo-optimization" className="p-6 bg-white shadow-lg rounded-lg">
      
      <div className="text-center">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          onClick={handleSEO}
        >
          SEO Optimize
        </button>
      </div>
    </section>
  );
};

export default SEOOptimization;
