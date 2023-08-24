import './styles.css';
import { useState } from 'react';

export const ReactOnCLick = () => {
  //const [isClicked, setIsClicked] = useState(false);
  const [count, setIsCount] = useState(0);

  //const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';

  function handleCLick() {
    //setIsClicked(!isClicked);
    setIsCount(count + 1);
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button onClick={handleCLick}>{count}</button>
    </div>
  );
};
