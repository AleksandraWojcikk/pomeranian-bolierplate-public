import { useState, useEffect } from 'react';
export const AsyncAwait2 = () => {
  const [text, setText] = useState('');

  function myPromiseFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('I am resolved');
      }, 2000);
    });
  }
  async function myAsyncFunc() {
    const data = await myPromiseFunc();
    setText(data);
  }
  useEffect(() => {
    myAsyncFunc();
  }, []);

  return <div>{text}</div>;
};
