import React from 'react';
import axios from "axios";

const CloudinaryUploadWidget = () => {

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dznezukdy', // Your Cloudinary cloud name
        uploadPreset: 'presetnedi', // Your upload preset
        sources: ['local', 'url'], // You can specify sources
        showAdvancedOptions: true,
        cropping: true, // Optional if you want to enable cropping
        multiple: false, // Set to true if you want multiple file uploads
        resourceType: 'video', // Set to 'audio' for audio uploads
        maxFileSize: 100000000, // Optional, limit file size (in bytes)
      },
      async(error, result) => {
        if (result && result.event === 'success') {
          alert('Upload successful!');
          const fpath = result.info.secure_url;
          const title = result.info.original_filename;

          console.log("Uploaded audio URL:", fpath);
          console.log("Audio title:", title);

          // Post the result to your API
          try {
            const response = await axios.post("http://localhost:5123/audiowebapi/uploadaudio", {
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
      <button onClick={openWidget}>Upload Audio to Cloudinary</button>
    </div>
  );
};

export default CloudinaryUploadWidget;
