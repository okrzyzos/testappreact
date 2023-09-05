import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchDataWithDelay();
  }, []);

  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json));
  }
  function fetchDataWithDelay() {
    setTimeout(() => {
      fetchData();
      setShowData(true);
    }, 5000);
  }

  function handleButtonClick() {
    setShowData(prevState => !prevState);
  }

  return (
    <div className="App">
      <h1>Exemple d'utilisation de l'API</h1>
      <button onClick={handleButtonClick}>
        {showData ? 'Masquer les données de l\'API' : 'Afficher les données de l\'API'}
      </button>

      {showData && photos && (
        <div className="api-data">
          <ul className='photo'>
            {photos.slice(0,10).map(photo => (
              <li key={photo.id}>
                <img src={photo.url} alt={photo.title} />
                <p>{photo.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
