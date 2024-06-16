import { useState } from 'react';
import axios from 'axios';
import { Add } from '@mui/icons-material';

const UPLOAD_URL =
  'https://alis-server-production.up.railway.app/document/create';

const DocumentUploader = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile &&
      selectedFile.type ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      setFile(selectedFile);
      setUploadStatus('');
    } else {
      setFile(null);
      setUploadStatus('Please select a valid DOCX file.');
    }
  };

  const handleUpload = async event => {
    event.preventDefault();
    if (!file) {
      setUploadStatus('No file selected for upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', fileName);

    try {
      const response = await axios.post(UPLOAD_URL, formData);

      if (response.ok) {
        setUploadStatus('File uploaded successfully.');
      } else {
        setUploadStatus('File upload failed.');
      }
    } catch (error) {
      setUploadStatus('Error during file upload.');
    }
  };
  //@TODO: delete functionality
  //@TODO: editor and mapper functionalities

  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Document Name"
        onChange={event => setFileName(event.target.value)}
      />
      <input type="file" accept=".docx" onChange={handleFileChange} />
      <button type="submit" onClick={handleUpload}>
        <Add />
      </button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default DocumentUploader;
