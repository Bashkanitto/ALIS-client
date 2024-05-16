import { useState } from 'react';
import { google } from 'googleapis';

import { setAccessToken } from '../store/UserSlice';

const MappingInputs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    header: '',
    title: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // const accessToken = 'YOUR_ACCESS_TOKEN';
      const accessToken = setAccessToken;

      const drive = google.drive({
        version: 'v3',
        auth: accessToken,
      });

      const documentContent = JSON.stringify(formData);

      const response = await drive.files.create({
        requestBody: {
          name: `${formData.title}.txt`,
          mimeType: 'text/plain',
        },
        media: {
          mimeType: 'text/plain',
          body: documentContent,
        },
      });

      alert('Document uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Не получилось загрузить документ. Попробуйте позднее.');
    }
  };

  return (
    <div className="mapping-inputs">
      <h3>Детали документа</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Название</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Название документа"
        />
        <label htmlFor="email">Почта</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Почта"
        />
        <label htmlFor="header">Header</label>
        <input
          id="header"
          type="text"
          name="header"
          value={formData.header}
          onChange={handleChange}
          placeholder="Enter header"
        />
        <label htmlFor="title">Заголовок</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Заголовок"
        />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default MappingInputs;
