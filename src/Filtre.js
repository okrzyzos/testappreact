import React, { useState, useEffect } from "react";
import "./Filtre.css";
import YouTube from "react-youtube";
import { FaTimes } from "react-icons/fa";

function Filtre() {
  const [showNadalImages, setShowNadalImages] = useState(false);
  const [showAlcarazImages, setShowAlcarazImages] = useState(false);
  const [showNadalVideos, setShowNadalVideos] = useState(false);
  const [showAlcarazVideos, setShowAlcarazVideos] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [toggleNomOlivier, setToggleNomOlivier] = useState(false);
const [togglePrixSup3000, setTogglePrixSup3000] = useState(false);
const [togglePuissanceInf500, setTogglePuissanceInf500] = useState(false);
const [toggleTotalitePrix, setToggleTotalitePrix] = useState(false);
const [togglePrixMax, setTogglePrixMax] = useState(false);

  const personnages = [
    { id: 1, name: "olivier", puissance: 100, prix: 2000 },
    { id: 2, name: "seb", puissance: 200, prix: 3000 },
    { id: 3, name: "minou", puissance: 100, prix: 9000 },
    { id: 4, name: "karine", puissance: 400, prix: 8000 },
    { id: 5, name: "flora", puissance: 100, prix: 3000 },
    { id: 6, name: "beren", puissance: 500, prix: 7000 },
  ];
  const [data] = useState(personnages);
  const [result, setResult] = useState("");

  const handleClickButton = (action) => {
    switch (action) {
      case "Afficher le name olivier":
        setToggleNomOlivier(!toggleNomOlivier);
        setResult(data.find((item) => item.name === "olivier").name);
        break;
      case "Afficher le prix sup 3000":
        setTogglePrixSup3000(!togglePrixSup3000);
        const prixSup3000 = data.filter((item) => item.prix > 3000);
        setResult(prixSup3000.map((item) => item.name).join(", "));
        break;
      case "Afficher la puissance inf 500":
        setTogglePuissanceInf500(!togglePuissanceInf500);
        const puissanceInf500 = data.filter((item) => item.puissance < 500);
        setResult(puissanceInf500.map((item) => item.name).join(", "));
        break;
      case "Afficher la totalité des prix":
        setToggleTotalitePrix(!toggleTotalitePrix);
        const totalPrix = data.reduce((acc, item) => acc + item.prix, 0);
        setResult(`Le total des prix est de : ${totalPrix}`);
        break;
      case "Afficher le prix max":
        setTogglePrixMax(!togglePrixMax);
        const prixMax = data.reduce((max, item) => Math.max(max, item.prix), -Infinity);
        setResult(`Le prix maximum est de : ${prixMax}`);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    setShowMessage(true);
  };

  const players = [
    {
      name: "Rafael Nadal",
      images: [
        "https://media.gqmagazine.fr/photos/61fd351b6ec921138030b1c1/16:9/w_2560%2Cc_limit/Nadal-Routine.jpg",

        "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/roland-garros_les_14_sacres_de_rafael_nadal_646615fc1736a.jpg",

        // Ajoutez d'autres URLs d'images pour Rafael Nadal ici...
      ],
    },
    {
      name: "Carlos Alcaraz",
      images: [
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/06/02/3718455-75659028-2560-1440.jpg",
        "https://www.sport.fr/wp-content/uploads/2023/04/Alcaraz.jpg",
      ],
    },
    // ... Ajoutez d'autres joueurs ici ...
  ];

  //
  const handleImageClick = (imageUrl) => {
    setZoomedImage(imageUrl);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  const toggleNadalImages = () => {
    setShowNadalImages(!showNadalImages);
  };
  const toggleAlcarazImages = () => {
    setShowAlcarazImages(!showAlcarazImages);
  };
  const toggleNadalVideos = () => {
    setShowNadalVideos(!showNadalVideos);
  };
  const toggleAlcarazVideos = () => {
    setShowAlcarazVideos(!showAlcarazVideos);
  };

  const handleCloseVideo = () => {
    setShowNadalVideos(false);
  };
  const handleCloseVideo2 = () => {
    setShowAlcarazVideos(false);
  };

  const videoId = "i7cminF2weU"; // Remplacez par l'identifiant de la vidéo YouTube de Nadal
  const videoId2 = "iNu_KnfXVxk"; // Remplacez par l'identifiant de la vidéo YouTube d' alcaraz

  return (
    <div className="container">
      <h1 style={{ textTransform: "capitalize", marginTop: "5px" }}>
        Le Tennis Espagnol !!!
      </h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Rechercher un joueur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm && (
        <div className="players-container">
          {players.map((player, index) =>
            player.name.toLowerCase().includes(searchTerm.toLowerCase())
              ? player.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="player-item">
                    <img
                      src={image}
                      alt={player.name}
                      className="player-image"
                      onClick={() => handleImageClick(image)}
                    />
                    <p className="player-name">{player.name}</p>
                  </div>
                ))
              : null
          )}
        </div>
      )}

      <h3 style={{ textDecoration: "underline", marginTop: "30px" }}>
        Filtres images de joueurs espagnols:
      </h3>
      <label className="checkbox-label">
        <input
          className="input"
          type="checkbox"
          checked={showNadalImages}
          onChange={toggleNadalImages}
        />
        Afficher les images de Rafael Nadal
      </label>
      <label className="checkbox-label">
        <input
          className="input2"
          type="checkbox"
          checked={showAlcarazImages}
          onChange={toggleAlcarazImages}
        />
        Afficher les images d'Alcaraz
      </label>
      {showNadalImages && (
        <div className="images-container">
          <img
            src="https://media.gqmagazine.fr/photos/61fd351b6ec921138030b1c1/16:9/w_2560%2Cc_limit/Nadal-Routine.jpg"
            alt="Rafael Nadal 1"
            className="image"
            onClick={() =>
              handleImageClick(
                "https://media.gqmagazine.fr/photos/61fd351b6ec921138030b1c1/16:9/w_2560%2Cc_limit/Nadal-Routine.jpg"
              )
            }
          />
          <img
            src="https://static.cnews.fr/sites/default/files/styles/image_750_422/public/roland-garros_les_14_sacres_de_rafael_nadal_646615fc1736a.jpg"
            alt="Rafael Nadal 2"
            className="image"
            onClick={() =>
              handleImageClick(
                "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/roland-garros_les_14_sacres_de_rafael_nadal_646615fc1736a.jpg"
              )
            }
          />
          {/* Ajoutez d'autres images de Rafael Nadal ici */}
        </div>
      )}

      {zoomedImage && (
        <div className="zoomed-image-overlay" onClick={closeZoomedImage}>
          <div className="zoomed-image-container">
            <img
              src={zoomedImage}
              alt="Zoomed Image"
              className="zoomed-image"
            />
          </div>
        </div>
      )}

      {showAlcarazImages && (
        <div className="images-container">
          <img
            src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/06/02/3718455-75659028-2560-1440.jpg"
            alt="Alcaraz 1"
            className="image"
            onClick={() =>
              handleImageClick(
                "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/06/02/3718455-75659028-2560-1440.jpg"
              )
            }
          />
          <img
            src="https://www.sport.fr/wp-content/uploads/2023/04/Alcaraz.jpg"
            alt="Alcaraz 2"
            className="image"
            onClick={() =>
              handleImageClick(
                "https://www.sport.fr/wp-content/uploads/2023/04/Alcaraz.jpg"
              )
            }
          />
          {/* Ajoutez d'autres images d'Alcaraz ici */}
        </div>
      )}

      <h3 style={{ textDecoration: "underline" }}>
        Filtres vidéos de joueurs espagnols:
      </h3>
      <label className="checkbox-label">
        <input
          className="input"
          type="checkbox"
          checked={showNadalVideos}
          onChange={toggleNadalVideos}
        />
        Afficher les vidéos de Rafael Nadal
      </label>
      <label className="checkbox-label">
        <input
          className="input2"
          type="checkbox"
          checked={showAlcarazVideos}
          onChange={toggleAlcarazVideos}
        />
        Afficher les vidéos d'Alcaraz
      </label>

      {!showMessage && (
        <button onClick={handleClick}>Afficher le message...</button>
      )}
      {showMessage && (
        <div className="message">
          <p>Message à afficher</p>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "10px",
        }}
      >
     <button onClick={() => handleClickButton("Afficher le name olivier")}>Afficher le name olivier</button>
        <button onClick={() => handleClickButton("Afficher le prix sup 3000")}>Afficher le prix sup 3000</button>
        <button onClick={() => handleClickButton("Afficher la puissance inf 500")}>Afficher la puissance inf 500</button>
        <button onClick={() => handleClickButton("Afficher la totalité des prix")}>Afficher la totalité des prix</button>
        <button onClick={() => handleClickButton("Afficher le prix max")}>Afficher le prix max</button>
      </div>
      {toggleNomOlivier && <div>Résultat pour le name Olivier : <strong>{result}</strong></div>}
{togglePrixSup3000 && <div>Résultat pour le prix sup 3000 : <strong>{result}</strong></div>}
{togglePuissanceInf500 && <div>Résultat pour la puissance inf 500 : <strong>{result}</strong></div>}
{toggleTotalitePrix && <div>Résultat pour la totalité des prix :<strong>{result}</strong></div>}
{togglePrixMax && <div>Résultat pour le prix max : <strong>{result}</strong></div>}



      {showNadalVideos && (
        <div className="videos-container">
          <div className="video-container">
            <div className="close-icon" onClick={handleCloseVideo}>
              <FaTimes size={24} color="red" />
            </div>
            <YouTube videoId={videoId} />
          </div>
        </div>
      )}
      {showAlcarazVideos && (
        <div className="videos-container">
          <div className="video-container">
            <div className="close-icon" onClick={handleCloseVideo2}>
              <FaTimes size={24} color="red" />
            </div>
            <YouTube videoId={videoId2} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Filtre;
