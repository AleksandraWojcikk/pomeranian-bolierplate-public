import { useEffect } from 'react';

export const UseEffects = () => {
  const zaleznosc = null;

  useEffect(() => {
    //HELLO
  });

  useEffect(() => {
    //PUSTA TABLICA ZLENOSCI
  }, []);

  useEffect(() => {
    //ZALEZNOSC 'zaleznosc'
  }, [zaleznosc]);

  useEffect(() => {
    //CZYSZCZENIE / CLEANUP
    return () => {};
  });

  return <div>zmien mnie</div>;
};
