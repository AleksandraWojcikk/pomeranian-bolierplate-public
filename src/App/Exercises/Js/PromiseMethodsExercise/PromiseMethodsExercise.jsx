// Instrukcja:

// Dodaj osobny button z metoda onClick dla każdego przypadku
// Sprawdź jaki będzie rezultat wywołania poniższych metod (możesz użyć konsoli do logowania rezultatów)
// Style nie maja znaczenia w tym ćwiczeniu ale zawsze możesz przećwiczyć ich dodawanie jeśli chcesz.
// Pamiętaj o tym aby wywołać poszczególne funkcje zanim przekażesz je jako parametry ( w innym przypadku przekażemy funkcje a nie promisy)

// 1 Promise.all dla fetchDataFast i fetchDataLong
// 2 Promise.all dla fetchDataFast, fetchDataLong, oraz fetchDataError
// 3 Promise.allSettled dla fetchDataFast, fetchDataLong
// 4 Promise.allSettled dla fetchDataFast, fetchDataLong, oraz fetchDataError
// 5 Promise.any dla fetchDataFast, fetchDataLong
// 6 Promise.any dla fetchDataFast, fetchDataLong, oraz fetchDataError
// 7 Promise.race dla fetchDataFast, fetchDataLong, oraz fetchDataError
// 8 Promise.race dla fetchDataLong, oraz fetchDataError

export const PromiseMethodsExercise = () => {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  function firstFunction() {
    Promise.all([fetchDataFast(), fetchDataLong()]).then((values) => {
      console.log('firstFunction', values);
    });
  }
  function secondFunction() {
    Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (values) => {
        console.log('secondFunction', values);
      }
    );
  }

  function thirdFunction() {
    Promise.allSettled([fetchDataFast(), fetchDataLong()]).then((values) => {
      console.log('thirdFunction', values);
    });
  }
  function fourthFunction() {
    Promise.allSettled([
      fetchDataFast(),
      fetchDataLong(),
      fetchDataError(),
    ]).then((values) => {
      console.log('fourthFunction', values);
    });
  }
  function fifthFunction() {
    Promise.any([fetchDataFast(), fetchDataLong()]).then((values) => {
      console.log('fifthFunction', values);
    });
  }
  function sixthFunction() {
    Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (values) => {
        console.log('sixthFunction', values);
      }
    );
  }
  function seventhFunction() {
    Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()]).then(
      (values) => {
        console.log('seventhFunction', values);
      }
    );
  }
  function eighthFunction() {
    Promise.race([fetchDataLong(), fetchDataError()]).then((values) => {
      console.log('eighthFunction', values);
    });
  }

  return (
    <>
      <div>Hello Promise Methods</div>
      <button onClick={firstFunction}>First function</button>
      <button onClick={secondFunction}>Second function</button>
      <button onClick={thirdFunction}>Third function</button>
      <button onClick={fourthFunction}>Fourth function</button>
      <button onClick={fifthFunction}>Fifth function</button>
      <button onClick={sixthFunction}>Sixth function</button>
      <button onClick={seventhFunction}>Seventh function</button>
      <button onClick={eighthFunction}>Eighth function</button>
    </>
  );
};
