// dodajmy nowy div na wyświetlenie błędu

// po kliknięciu w button załaduj detale użytkownika wyczyśćmy także aktualny błąd.

// zmodyfikujmy loadUserDetails w taki sposób aby z 50% prawdopodobieństwem rejectowała promisa
// z bledem

// teść błędu: błąd server: nieudane wyszukanie dla userId: xxx użyjmy klasy Error

// w funkcji loadAllUserData przechwycić błąd i wyświetlić

// przetestować aż do uzyskania błędu (możemy skrócić czas timeoutów na czas testów)

import { useState } from 'react';

export const PromisesExercises2 = () => {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error('Nie udało się pobrać danych'));
        } else {
          resolve({ id: userId, age: 30, country: 'Poland' });
        }
      }, 2000);
    });
  }
  //przy ładowaniu danych zawsze musza być stany wyzerowane setData(null)
  function loadAllUserData() {
    setData(null);
    setErrorMessage(null);
    loadUser().then((user) => {
      loadUserDetails(user.id)
        .then((details) => {
          setData(details);
        })
        .catch((err) => {
          setErrorMessage(err.message); //.message bo w 32. linijce uyliśmy new Error
        });
    });
  }

  return (
    <>
      <div>
        <button onClick={loadAllUserData}>Załaduj detale użytkownika</button>
        {data && (
          <div>
            <p>Id: {data.id}</p>
            <p>Age: {data.age}</p>
            <p>Country: {data.country}</p>
          </div>
        )}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </>
  );
};
