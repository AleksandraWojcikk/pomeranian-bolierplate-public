import { useState, useEffect } from 'react';

export const ComponentForTests = () => {
  const [getIsLoaded, setIsLoaded] = useState(false);
  const [getContent, setContent] = useState(null);

  const handleClick = () => setIsLoaded(true);

  //wyrenderuj <p> po dwoch sekundach
  useEffect(() => {
    setTimeout(() => {
      setContent(
        <p data-testid="test-for-async-call">
          Jestem elementem który wyrenderował sie z opozniniem
        </p>
      );
    }, 2000);
  }, []);

  return (
    <div>
      {getContent}
      {getIsLoaded ? (
        <p data-testid="test-for-async-call">Tekst po załadowaniu</p>
      ) : (
        <div>
          <button onClick={handleClick}>Kliknij mnie</button>
        </div>
      )}
    </div>
  );
};
