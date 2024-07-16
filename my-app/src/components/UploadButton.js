// U51313007
// src/components/UploadButton.js
import React from 'react';

const UploadButton = () => {
    const handleUpload = () => {
        alert('Uploading...');
    };

    return (
        <button onClick={handleUpload}>Upload Image</button>
    );
}

export default UploadButton;