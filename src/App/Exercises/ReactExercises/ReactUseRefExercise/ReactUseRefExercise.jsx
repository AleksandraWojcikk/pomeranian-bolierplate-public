import React, { useRef, useState } from 'react';
import './style.css';

export function ReactUseRefExercise() {
  const textRef = useRef();
  const inputRef = useRef();
  const buttonRef = useRef();

  const handleRedClick = () => {
    textRef.current.style.color = 'red';
  };

  const handleGreenClick = () => {
    textRef.current.style.color = 'green';
  };
  //lub i wtedy funckaj przy butoonie: onCLick={()=> onColorChange('red')}
  // function onColorChange(color) {
  //   textRef.currrent.style.color = color;
  // }

  //klikam na button i czyszczę to, co jest w inpucie
  function onChangeClear() {
    inputRef.current.value = '';
  }

  function onClickBlock() {
    buttonRef.current.disabled = true;
  }

  return (
    <div>
      <div>
        <button onClick={handleRedClick}>Zmień kolor na czerwony</button>
        <button onClick={handleGreenClick}>Zmień kolor na zielony</button>
        <p ref={textRef}>Jestem kolorowy!</p>
      </div>

      <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={onChangeClear}>Wyczyść</button>
      </div>

      <div>
        <button ref={buttonRef} onClick={onClickBlock}>
          Po kliknięciu button staje się zablokowany
        </button>
      </div>
    </div>
  );
}
