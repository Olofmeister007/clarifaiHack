
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

 // Inside the fetchTranscript function in App.js


const handleFormSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    const response = await axios.post('/api/routers/traintube', {
      url: youtubeUrl,
      dataId: 1, // Replace with the actual data ID
    });
    
  } catch (error) {
    console.error('Error fetching transcript:', error);
  }
};

const handleAnswerFormSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    const response = await axios.post('/api/routers/chat', {
      query: question,
      data_id: 1,
      api: "1e5c15b9f0694b2ea630fbd27d9a022e"
    });
    setAnswer(response.answer);
  } catch (error) {
    console.error('Error fetching answer:', error);
  }
};  



 
  return (
    <div className="App">
      <h1>YouTube Video QA App</h1>
      <form onSubmit={handleFormSubmit}>
  <input
    type="text"
    placeholder="Enter YouTube URL"
    value={youtubeUrl}
    onChange={(e) => setYoutubeUrl(e.target.value)}
  />
  <button type="submit">Fetch Transcript</button>
</form>
     <form onSubmit={handleAnswerFormSubmit}>
  <input
    type="text"
    placeholder="Ask a question"
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
  />
  <button type="submit">Fetch Answer</button>
</form>
      <div className="answer-container">
      
      <p>{answer}</p>
    </div>
    </div>
  );
}

export default App;
