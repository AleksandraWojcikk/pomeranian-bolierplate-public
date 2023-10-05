import { useState, useEffect } from 'react';

export const AsyncAwait3 = () => {
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
  async function loadAllUserData() {
    setData(null);
    setErrorMessage(null);

    try {
      const user = await loadUser();
      const details = await loadUserDetails(user.id);
      setData(details);
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  function handleCLick() {
    loadAllUserData();
  }

  return (
    <>
      <div>
        <button onClick={handleCLick}>Załaduj detale użytkownika</button>
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
