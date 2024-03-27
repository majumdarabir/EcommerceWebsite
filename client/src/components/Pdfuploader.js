import React, { useState } from 'react';
import axios from 'axios';

const Pdfuploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a PDF file.');
            return;
        }

        const formData = new FormData();
        formData.append('pdf', selectedFile);

        try {
            const response = await axios.post('http://localhost:4000/api/uploadpdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploadStatus(response.data.message);
        } catch (error) {
            console.error('Error uploading PDF:', error);
            setUploadStatus('Error uploading PDF. Please try again.');
        }
    };

    return (
        <div>
            <h2>PDF Uploader</h2>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload PDF</button>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default Pdfuploader;