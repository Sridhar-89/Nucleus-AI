import React, { useState } from 'react';

const VideoTranscription = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [tone, setTone] = useState('Formal');

  const handleTranscription = () => {
    console.log('Transcribe video:', videoUrl, 'with tone:', tone);
  };

  return (
    <section id="section23" className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Video Transcription</h2>
      <input
        type="text"
        id="video-url"
        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        placeholder="Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <select
        id="video-tone"
        className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 mt-2"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option value="Formal">Formal</option>
        <option value="Informal">Informal</option>
        <option value="Persuasive">Persuasive</option>
        <option value="Inspirational">Inspirational</option>
      </select>
      <div className="text-center mt-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={handleTranscription}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default VideoTranscription;
