import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import YouTube from "react-youtube";
import "./App.css";
import "./test.css";

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);
  
  function handlePlayVideo() {
    setShowVideo(true);
  }
  function handleCloseVideo() {
    setShowVideo(false);
  }
  function toogleButton() {
    setShowText(!showText);
  }
  function handleCloseVideo() {
    setShowVideo(false);
  }

  const videoId = "D0rF2Dwh0-A"; // Remplacez VIDEO_ID par l'identifiant de la vidéo YouTube que vous souhaitez afficher

  return (
    <div className="App">
      <button onClick={toogleButton}> 
      {showText ? 'effacer le texte' : 'afficher le texte'}
      </button>
      {showText && <p>nadal est un joueur de tennis </p>}
      <h1>Vidéo de Radael Nadal: </h1>
      <img
        className="img"
        src="https://media.gqmagazine.fr/photos/61fd351b6ec921138030b1c1/16:9/w_2560%2Cc_limit/Nadal-Routine.jpg"
      />
      <div className="list-container">
        <ul>
          <li>Les meilleurs coups de Rafael Nadal</li>
        </ul>
        {!showVideo ? (
          <div className="play-icon">
            <div className="icon">
              <FaPlay  onClick={handlePlayVideo} size={32} />
            </div>
            <span>Rafael Nadal</span>
          </div>
        ) : (
          <div className="video-container">
            <div className="close-icon" onClick={handleCloseVideo}>
              <FaTimes size={24} color="red" />
            </div>
            <YouTube videoId={videoId} />
          </div>
        )}
        <img
          className="img2"
          src="https://static.cnews.fr/sites/default/files/styles/image_750_422/public/roland-garros_les_14_sacres_de_rafael_nadal_646615fc1736a.jpg"
        />
      </div>
    </div>
  );
}

export default App;
