import { useState } from 'react';
// 1. dodać input
// 2. dodać metodę validate z jednym parametrem
// 3. w metodzie validate sprawdzić czy podany parametr jest wartoscia liczbowa jeśli nie wyrzucić wyjątek
// 4. dodać w metodzie onChange inputa wywołanie metody validate z wartością inputa.
// 5. zobaczyć jaki będzie wynik wpisania czegoś co jest i co nie jest liczbą
// 6. dodać div pod inputem
// 7. przechwycić wyjątek za pomocą try catch i wyświetlić informację o błędzie w divie

export const TryCatchExercise = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  function validate(event) {
    const value = event.target.value;

    if (isNaN(+value)) {
      //jeśli nie jest liczbą
      throw new Error('To nie jest wartość liczbowa');
    }
  }

  function handleChange(event) {
    //funkcja obsługująca zmianę tekstu
    setErrorMessage(null);
    try {
      validate(event);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <>
      <input type="text" onChange={handleChange}></input>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
