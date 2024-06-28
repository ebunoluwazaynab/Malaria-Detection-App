// src/FileUpload.jsx
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setMessage(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setMessage(data.message);
    setLoading(false);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} style={{ color: 'white' }} />
        <button type="submit">Predict</button>
      </form>
      {loading && <p>Loading...</p>}
      {message && (
        <div>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
