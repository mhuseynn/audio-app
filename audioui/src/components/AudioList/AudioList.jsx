// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AudioList = () => {
//   const [audios, setAudios] = useState([]);

//   useEffect(() => {
//     // Fetch audio data from the API
//     const fetchAudios = async () => {
//       try {
//         const response = await axios.get("http://localhost:5002/api/audio/getallaudios");
//         console.log("Audios:", response.data);
//         setAudios(response.data); 
//       } catch (error) {
//         console.error("Error fetching audio data:", error);
//       }
//     };

//     fetchAudios();
//   }, []);

//   return (
//     <div>
//       <h1>Audio List</h1>
//       <ul>
//         {audios.map((audio) => (
//           <li key={audio.id}>
//             <h3>{audio.title}</h3>
//             <audio controls>
//               <source src={audio.secureUrl} type="audio/mpeg" />
//               Your browser does not support the audio element.
//             </audio>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AudioList;

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
        </div>
      ))}
    </div>
  );
};

export default AudioList;
