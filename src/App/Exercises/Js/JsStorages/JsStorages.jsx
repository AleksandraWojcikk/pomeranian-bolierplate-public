import { useState } from 'react';
export const JsStorages = () => {
  const [test, setTest] = useState(localStorage.getItem('test'));

  function setLs() {
    localStorage.setItem('test', 1);
    setTest(1);
  }

  function resetLs() {
    localStorage.removeItem('test');
    setTest(null);
  }

  return (
    <div>
      <button onClick={setLs}>Ustaw Ls</button>
      <button onClick={resetLs}>Resetuj Ls</button>
      <p>{test}</p>
    </div>
  );
};
//mozna tak samo zrobić dla session storage (zmieniajac tylko nazwę localStorage na sesstionStorage). po zamknięciu okna przeglądarki/karty session storage jest czyszczony w Inspect -> Application
