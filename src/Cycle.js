// import React, { useState, useEffect } from 'react';
 
//  const Cycle = () => {
  
//   const [counter, setCounter] = useState(0);
  
//   useEffect(() => {
//     if (counter === 10) {
//       document.body.style.backgroundImage = 'linear-gradient(to right, coral, teal)';
//     } else {
//       document.body.style.backgroundImage = 'none';
//     }
//   }, [counter]);

//   return (  
//     <div>
//       <h2>Count: {counter}</h2>
//       <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
//       <button onClick={() => setCounter(counter - 1)}>deremente</button>
//     </div>
//   );
// }
// export default Cycle;



import React, { useState, useMemo } from 'react';

const Cycle = () => {
  const [value, setValue] = useState('');

  const formattedValue = useMemo(() => {
    // Effectuer un calcul coûteux ou une transformation sur la valeur
    return value.toUpperCase();
  }, [value]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Value: {formattedValue}</p>
    </div>
  );
};

export default Cycle;

