import React from 'react';
import "./Filtre.css";


function NadalProfil() {
  return (
    <div>
      <div style={{textAlign:'center',textTransform:'uppercase'}}><strong>NadalProfil</strong></div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '30px' }}>
        <img
          src="https://static.cnews.fr/sites/default/files/styles/image_750_422/public/roland-garros_les_14_sacres_de_rafael_nadal_646615fc1736a.jpg"
          alt="Rafael Nadal 2"
          style={{ maxWidth: '100%', maxHeight: '400px',borderRadius:"20%" }} // Pour éviter le débordement de l'image
        />
        <div>
          <p className='text-raccourci'>
            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions,
            et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme
            'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout
            cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de
            sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira
            vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues
            avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'œil,
            voire des phrases embarrassantes).
          </p>
        </div>
      
      </div>
      <div style={{marginTop:"30px",marginLeft:"30px"}}>
      <img className='image' src="https://media.gqmagazine.fr/photos/61fd351b6ec921138030b1c1/16:9/w_2560%2Cc_limit/Nadal-Routine.jpg"
        alt="Rafael Nadal 1" />
      </div>
    
    </div>
  );
}

export default NadalProfil;
