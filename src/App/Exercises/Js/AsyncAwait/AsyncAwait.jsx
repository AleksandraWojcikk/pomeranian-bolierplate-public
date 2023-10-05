export const AsyncAwait = () => {
  function myPromiseFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }

  async function myAsyncFunc() {
    const data = await myPromiseFunc();
    console.log(data);
  }

  const myAsyncArrowFunc = async () => {
    const data = await myPromiseFunc();
    console.log(data);
  };

  myPromiseFunc().then((data) => {
    console.log(data);
  });

  try {
    myAsyncFunc();
    myAsyncArrowFunc();
  } catch (err) {
    console.log(err);
  }

  return <div>zmien mnie</div>;
};
