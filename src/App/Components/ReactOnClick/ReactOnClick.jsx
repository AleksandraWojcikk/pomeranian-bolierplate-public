import './styles.css';
import { useState } from 'react';

export const ReactOnCLick = () => {
  const [isClicked, setIsClicked] = useState(false);

  const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';

  function handleCLick() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button onClick={handleCLick}>{text}</button>
    </div>
  );
};
