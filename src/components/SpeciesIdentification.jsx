import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SpeciesIdentification.css';

function SpeciesIdentification() {
  const [species, setSpecies] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Log response data for debugging
      console.log('Response:', response.data);

      // Atualiza o estado species com base na resposta da requisição
      setSpecies(response.data.prediction);
    } catch (error) {
      // Log error details
      console.error('Error uploading the image:', error.response ? error.response.data : error.message);
      setSpecies('Error uploading the image');
    }

    // Atualiza o estado imagePreviewUrl com a visualização da imagem
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="species-identification">
      <h2 className="title">Species Identification</h2>
      <label htmlFor="file-upload" className="button">
        <svg className="svg-icon" width="24" viewBox="0 0 24 24" height="24" fill="none">
          <g strokeWidth="2" strokeLinecap="round" stroke="#056dfa" fillRule="evenodd" clipRule="evenodd">
            <path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
            <path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
          </g>
        </svg>
        <span className="label">Upload Image</span>
        <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
      </label>
      <img id="inputSpeciesImage" src={imagePreviewUrl} alt="Upload Preview" />
      {species && (
        <div className="species-result">
          <h3>Identified Species:</h3>
          <p>{species}</p>
        </div>
      )}
      <Link to="/" className="back-button">
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
        <span>Voltar</span>
      </Link>
    </div>
  );
}

export default SpeciesIdentification;
