import React from 'react';
import EmotionDetector from './components/EmotionDetector';
import './App.css';

function App() {
  return (
    <div className="App bg-black">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 select-none p-4 rounded-lg shadow-lg text-center tracking-wide">
  Emotion Detection Project - Ashish (205123025)
</h1>

      <EmotionDetector />
    </div>
  );
}

export default App;