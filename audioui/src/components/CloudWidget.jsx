import React from 'react';
import axios from "axios";
import './Button.css'

const CloudinaryUploadWidget = () => {

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dznezukdy', 
        uploadPreset: 'presetnedi', 
        sources: ['local', 'url'], 
        showAdvancedOptions: true,
        cropping: true, 
        multiple: false, 
        resourceType: 'video',
        maxFileSize: 100000000, 
      },
      async(error, result) => {
        if (result && result.event === 'success') {
          alert('Upload successful!');
          const fpath = result.info.secure_url;
          const title = result.info.original_filename;

          console.log("Uploaded audio URL:", fpath);
          console.log("Audio title:", title);

          
          try {
            const response = await axios.post("http://localhost:5004/audiowebapi/uploadaudio", {
              title,
              fpath,
            });

            if (response.status === 200) {
              alert("Data successfully posted to the server!");
              console.log("Server Response:", response.data);
            }
          } catch (postError) {
            console.error("Failed to post data to the server:", postError);
            alert("Failed to post data to the server. Check the console for details.");
          }
        }
        if (error) {
          console.error('Upload failed:', error);
        }
      }
    );
    widget.open();
  };

  return (
    <div>
      <button className='upload-button' onClick={openWidget}>Upload Audio</button>
    </div>
  );
};

export default CloudinaryUploadWidget;
