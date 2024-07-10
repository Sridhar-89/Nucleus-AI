// import React, { useState } from 'react';

// const VideoTranscription = () => {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [tone, setTone] = useState('Formal');

//   const handleTranscription = () => {
//     console.log('Transcribe video:', videoUrl, 'with tone:', tone);
//   };

//   return (
//     <section id="section23" className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Video Transcription</h2>
//       <input
//         type="text"
//         id="video-url"
//         className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
//         placeholder="Video URL"
//         value={videoUrl}
//         onChange={(e) => setVideoUrl(e.target.value)}
//       />
//       <select
//         id="video-tone"
//         className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 mt-2"
//         value={tone}
//         onChange={(e) => setTone(e.target.value)}
//       >
//         <option value="Formal">Formal</option>
//         <option value="Informal">Informal</option>
//         <option value="Persuasive">Persuasive</option>
//         <option value="Inspirational">Inspirational</option>
//       </select>
//       <div className="text-center mt-4">
//         <button
//           className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//           onClick={handleTranscription}
//         >
//           Submit
//         </button>
//       </div>
//     </section>
//   );
// };

// export default VideoTranscription;


// import React, { useState } from 'react';
// import axios from 'axios';

// const VideoTranscription = () => {
//   const [file, setFile] = useState(null);
//   const [transcription, setTranscription] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleTranscribe = async () => {
//     const formData = new FormData();
//     formData.append('video', file);

//     try {
//       const response = await axios.post('/api/transcribe', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setTranscription(response.data.text);
//     } catch (error) {
//       console.error('Error transcribing video:', error);
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Video Transcription</h2>
//       <input type="file" accept="video/*" onChange={handleFileChange} />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
//         onClick={handleTranscribe}
//       >
//         Transcribe
//       </button>
//       {transcription && (
//         <div className="mt-4 p-4 border rounded-md bg-gray-50">
//           <h3 className="text-xl font-semibold">Transcription</h3>
//           <p>{transcription}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoTranscription;

// import React, { useState } from 'react';
// import axios from 'axios';

// const VideoTranscription = () => {
//   const [file, setFile] = useState(null);
//   const [transcription, setTranscription] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleTranscribe = async () => {
//     const formData = new FormData();
//     formData.append('video', file);

//     try {
//       const response = await axios.post('/api/transcribe', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setTranscription(response.data.text);
//     } catch (error) {
//       console.error('Error transcribing video:', error);
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Video Transcription</h2>
//       <input type="file" accept="video/*" onChange={handleFileChange} />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
//         onClick={handleTranscribe}
//       >
//         Transcribe
//       </button>
//       {transcription && (
//         <div className="mt-4 p-4 border rounded-md bg-gray-50">
//           <h3 className="text-xl font-semibold">Transcription</h3>
//           <p>{transcription}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoTranscription;

// import React, { useState } from 'react';
// import axios from 'axios';

// const VideoTranscription = () => {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');
//   const [transcription, setTranscription] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUrlChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleTranscribe = async () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append('video', file);

//       try {
//         const response = await axios.post('/api/transcribe', formData, {
//           headers: {
//             'Content-Type': 'ultipart/form-data',
//           },
//         });
//         setTranscription(response.data.text);
//       } catch (error) {
//         console.error('Error transcribing video:', error);
//       }
//     } else if (url) {
//       try {
//         const response = await axios.post('/api/transcribe', { url });
//         setTranscription(response.data.text);
//       } catch (error) {
//         console.error('Error transcribing video:', error);
//       }
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Video Transcription</h2>
//       <input type="file" accept="video/*" onChange={handleFileChange} />
//       <br />
//       <input type="text" placeholder="Enter video URL" value={url} onChange={handleUrlChange} />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
//         onClick={handleTranscribe}
//       >
//         Transcribe
//       </button>
//       {transcription && (
//         <div className="mt-4 p-4 border rounded-md bg-gray-50">
//           <h3 className="text-xl font-semibold">Transcription</h3>
//           <p>{transcription}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoTranscription;



// import React, { useState } from 'react';
// import axios from 'axios';

// const VideoTranscription = () => {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');
//   const [transcription, setTranscription] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setTranscription('');
//     setError('');
//   };

//   const handleUrlChange = (e) => {
//     setUrl(e.target.value);
//     setTranscription('');
//     setError('');
//   };

//   const handleTranscribe = async () => {
//     setIsLoading(true);
//     setTranscription('');
//     setError('');

//     let data;
//     const headers = {};
    
//     if (file) {
//       data = new FormData();
//       data.append('video', file);
//       headers['Content-Type'] = 'multipart/form-data';
//     } else if (url) {
//       data = JSON.stringify({ url });
//       headers['Content-Type'] = 'application/json';
//     } else {
//       setError('Please provide a file or a URL.');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post('/api/transcribe', data, { headers });
//       setTranscription(response.data.transcription);
//     } catch (error) {
//       console.error('Error transcribing video:', error.response?.data || error.message);
//       setError('Failed to transcribe video. Please try again.');
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Video Transcription</h2>
//       <input type="file" accept="video/*" onChange={handleFileChange} />
//       <br />
//       <input type="text" placeholder="Enter video URL" value={url} onChange={handleUrlChange} />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
//         onClick={handleTranscribe}
//         disabled={isLoading}
//       >
//         {isLoading ? 'Transcribing...' : 'Transcribe'}
//       </button>
//       {error && <div className="text-red-500 mt-2">{error}</div>}
//       {transcription && (
//         <div className="mt-4 p-4 border rounded-md bg-gray-50">
//           <h3 className="text-xl font-semibold">Transcription</h3>
//           <p>{transcription}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoTranscription;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VideoTranscription = () => {
//   const [file, setFile] = useState(null);
//   const [url, setUrl] = useState('');
//   const [transcription, setTranscription] = useState('');
//   const [audioUrl, setAudioUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setTranscription('');
//     setAudioUrl('');
//     setError('');
//   };

//   const handleUrlChange = (e) => {
//     setUrl(e.target.value);
//     setTranscription('');
//     setAudioUrl('');
//     setError('');
//   };

//   const handleTranscribe = async () => {
//     setIsLoading(true);
//     // Reset transcription and error states on new submission
//     setTranscription('');
//     setAudioUrl('');
//     setError('');

//     // Determine the payload and headers based on input type (file or URL)
//     let data;
//     const headers = {};
    
//     if (file) {
//       data = new FormData();
//       data.append('video', file);
//       headers['Content-Type'] = 'multipart/form-data';
//     } else if (url) {
//       data = JSON.stringify({ url });
//       headers['Content-Type'] = 'application/json';
//     } else {
//       setError('Please provide a file or a URL.');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post('/api/transcribe', data, { headers });
//       setTranscription(response.data.transcription);
//       setAudioUrl(response.data.audioUrl);
//       console.log(response.data.audioUrl);
//     } catch (error) {
//       console.error('Error transcribing video:', error);
//       setError('Failed to transcribe video. Please try again.');
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     if (audioUrl) {
//       console.log("Updated audio URL:", audioUrl);
//     }
//   }, [audioUrl]);

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Video Transcription</h2>
//       <input type="file" accept="video/*" onChange={handleFileChange} />
//       <br />
//       <input type="text" placeholder="Enter video URL" value={url} onChange={handleUrlChange} />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
//         onClick={handleTranscribe}
//         disabled={isLoading}
//       >
//         {isLoading ? 'Transcribing...' : 'Transcribe'}
//       </button>
//       {error && <div className="text-red-500 mt-2">{error}</div>}
//       {transcription && (
//         <div className="mt-4 p-4 border rounded-md bg-gray-50">
//           <h3 className="text-xl font-semibold">Transcription</h3>
//           <p>{transcription}</p>
//         </div>
//       )}
//       {audioUrl && (
//         <div className="mt-4 p-4 border rounded-md bg-gray-50">
//           <h3 className="text-xl font-semibold">Extracted Audio</h3>
//           <audio controls>
//             <source src="uploads/extracted_audio.mp3" type="audio/mp3" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoTranscription;


import React, { useState } from 'react';
import axios from 'axios';
import EditorialSection from './EditorialSection';

const VideoTranscription = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [transcription, setTranscription] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setTranscription('');
    setAudioUrl('');
    setError('');
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setTranscription('');
    setAudioUrl('');
    setError('');
  };

  const handleTranscribe = async () => {
    setIsLoading(true);
    setTranscription('');
    setAudioUrl('');
    setError('');

    let data;
    const headers = {};
    
    if (file) {
      data = new FormData();
      data.append('video', file);
      headers['Content-Type'] = 'multipart/form-data';
    } else if (url) {
      data = JSON.stringify({ url });
      headers['Content-Type'] = 'application/json';
    } else {
      setError('Please provide a file or a URL.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/transcribe', data, { headers });
      setTranscription(response.data.transcription);
      setAudioUrl(response.data.audioUrl);
      console.log(response.data.audioUrl);
    } catch (error) {
      console.error('Error transcribing video:', error);
      setError('Failed to transcribe video. Please try again.');
    }
    setIsLoading(false);
  };

  const handleSave = (content) => {
    setTranscription(content);
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Video Transcription</h2>
      <input type="file" accept="video/*,audio/*" onChange={handleFileChange} />
      <br />
      <input type="text" placeholder="Enter video URL" value={url} onChange={handleUrlChange} />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
        onClick={handleTranscribe}
        disabled={isLoading}
      >
        {isLoading ? 'Transcribing...' : 'Transcribe'}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {transcription && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50">
          <h3 className="text-xl font-semibold">Transcription</h3>
          <div dangerouslySetInnerHTML={{ __html: transcription }} />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mt-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
      {audioUrl && (
        <div className="mt-4 p-4 border rounded-md bg-gray-50">
          <h3 className="text-xl font-semibold">Extracted Audio</h3>
          <audio controls>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
      {isEditing && (
        <EditorialSection 
          initialContent={transcription} 
          onSave={handleSave} 
          onClose={() => setIsEditing(false)} 
        />
      )}
    </div>
  );
};

export default VideoTranscription;



