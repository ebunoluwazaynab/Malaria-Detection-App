// src/App.jsx
import React from 'react';
import './App.css';
import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Malaria Detector App</h1>
        <p className="read-the-docs">
          Upload your Image below
        </p>
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
