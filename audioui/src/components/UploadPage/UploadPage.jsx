

import React, { useState } from 'react';
import axios from 'axios';

const AudioUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedAudioUrl, setUploadedAudioUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'presetnedi'); // Replace with your preset for audio
    formData.append('cloud_name', 'dznezukdy'); // Replace with your Cloudinary cloud name

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dznezukdy/audio/upload', // Use the audio upload URL
        formData
      );
      setUploadedAudioUrl(response.data.secure_url); // URL of the uploaded audio file
      setLoading(false);
    } catch (error) {
      console.error('Error uploading the audio file', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Audio to Cloudinary'}
      </button>

      {uploadedAudioUrl && (
        <div>
          <p>Audio uploaded successfully!</p>
          <audio controls>
            <source src={uploadedAudioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioUpload;
