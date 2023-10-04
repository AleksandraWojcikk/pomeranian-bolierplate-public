export const PromisesExercises2 = () => {
  const myPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.round(Math.random());
        if (randomNumber) {
          resolve('Sekces');
        } else {
          reject('Porazka');
        }
      }, 2000);
    });

  myPromise()
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('koniec');
    });

  return <div>zmien mnie</div>;
};
