import React, { useEffect, useState } from "react";
import axios from "axios";

const AudioList = () => {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    // Fetch audio data from the API
    const fetchAudios = async () => {
      try {
        const response = await axios.get("http://localhost:5123/audiowebapi/getallaudios");
        console.log("Audios:", response.data);
        setAudios(response.data); 
      } catch (error) {
        console.error("Error fetching audio data:", error);
      }
    };

    fetchAudios();
  }, []);

  return (
    <div>
      <h1>Audio List</h1>
      <ul>
        {audios.map((audio) => (
          <li key={audio.id}>
            <h3>{audio.title}</h3>
            <audio controls>
              <source src={audio.secureUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioList;
