import { useState } from 'react';

export const MoreOrLess = () => {
  const [luckyNumber, setLuckyNumber] = useState('');
  const hidden_number = 8;
  const [hasErrors, setHasErrors] = useState(false);

  function handleChange(event) {
    setHasErrors(false);
    setLuckyNumber(event.target.value);

    if (isNaN(+event.target.value)) {
      setHasErrors(true);
    }
  }
  const isBigger = +luckyNumber > hidden_number; //plusik to kastowanie; konieczne wpisanie liczby; tzw. zrzutowanie na tryb liczbowy

  return (
    <div>
      <p>Podaj liczbę i sprawdź czy jest większa od naszej liczby</p>
      <input type="text" value={luckyNumber} onChange={handleChange} />
      {luckyNumber && <p>Odpowiedź: {isBigger ? 'TAK' : 'NIE'}</p>}
      {hasErrors && (
        <strong style={{ color: 'red' }}>
          Wpisana wartość nie jest liczbą
        </strong>
      )}
    </div>
  );
};
