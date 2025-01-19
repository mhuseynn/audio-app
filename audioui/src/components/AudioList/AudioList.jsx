

import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './AudioList.css';



const AudioList = () => {

  const [audios, setAudios] = useState([]);

    useEffect(() => {
      // Fetch audio data from the API
      const fetchAudios = async () => {
        try {
          const response = await axios.get("http://localhost:5004/audiowebapi/getallaudios");
          console.log("Audios:", response.data);
          setAudios(response.data); 
        } catch (error) {
          console.error("Error fetching audio data:", error);
        }
      };
  
      fetchAudios();
    }, []);

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = cloudinaryUrl; 
      link.download = fileName || 'downloaded-media'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <div className="audio-cards-container">
  {audios.map((audio) => (
    <div className="audio-card" key={audio.id}>
      <img
        src={'https://th.bing.com/th/id/OIP.YK7hjiX7az0xW_o0QigoMAHaFL?rs=1&pid=ImgDetMain'}
        alt={audio.title}
        className="audio-card-image"
      />
      <h3 className="audio-card-title">{audio.title}</h3>
      <p className="audio-card-description">{audio.description}</p>
      <audio className="audio-player" controls>
        <source src={audio.secureUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <a href={audio.secureUrl} download>
        <button onClick={() => handleDownload(audio.secureUrl)} className="download-btn">Download</button>
      </a>
    </div>
  ))}
</div>
  );
};

export default AudioList;
