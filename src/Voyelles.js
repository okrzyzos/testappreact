// import React, { useState ,useEffect} from 'react';

// function VoyellesCounter() {
//     const [phrase] = useState("Ceci est un test algorithmique");
//     const [voyellesCount, setVoyellesCount] = useState(0);

//     const countVoyelles = (phrase) => {
//         let count = 0;
//         const voyelles = 'aeiouyAEIOUY';
// // La boucle for commence avec i = 0 et se termine lorsque i atteint la longueur de la phrase.
// // À chaque itération, i est incrémenté de 1, ce qui signifie que nous examinons le caractère suivant dans la phrase.
//         for(let i = 0; i < phrase.length; i++) {
//              // Nous utilisons la méthode indexOf pour vérifier si le caractère actuel (phrase[i]) est une voyelle.
//     // La méthode indexOf renvoie -1 si le caractère n'est pas trouvé dans la chaîne de voyelles. 
//     // Si le caractère est une voyelle, indexOf renverra un nombre différent de -1.
//             if(voyelles.indexOf(phrase[i]) !== -1) {
//                  // Si le caractère est une voyelle, nous augmentons le compteur de 1.
//                 count += 1;
//             }
//         }
//         return count;
//     };

//     // Appeler la fonction countVoyelles quand le composant est monté
//     useEffect(() => {
//         setVoyellesCount(countVoyelles(phrase));
//     }, [phrase]);

//     return (
//         <div>
//             <p>Phrase: {phrase}</p>
//             <p>Nombre de voyelles: {voyellesCount}</p>
//         </div>
//     );
// }

// export default VoyellesCounter;




import React, { useState, useEffect } from 'react';

function Rectangle() {
    const [longueur, setLongueur] = useState(5); // Assumons 5 comme longueur par défaut
    const [largeur, setLargeur] = useState(3); // Assumons 3 comme largeur par défaut
    const [surface, setSurface] = useState(0);
    const [perimetre, setPerimetre] = useState(0);

    useEffect(() => {
        setSurface(longueur * largeur); // calcul de la surface
        setPerimetre(2 * (longueur + largeur)); // calcul du périmètre
    }, [longueur, largeur]);

    return (
        <div>
            <p>Longueur : {longueur}</p>
            <p>Largeur : {largeur}</p>
            <p>Surface : {surface}</p>
            <p>Périmètre : {perimetre}</p>
        </div>
    );
}

export default Rectangle;
