import React, { useRef } from 'react';
import './style.css';

export function ReactUseRef() {
  const inputRef = useRef();

  //current: obecny element powiązany z referencją; np. focus - metoda, która pozwala nam skupić się na danym elem.
  // inputRef.current.focus
  //ref dopisujemy do elementu; wiąze inputa z referenację, current - bardzo wazne, odwolujemy się do obecnej referencji;
  const handleClick = () => {
    inputRef.current.style.backgroundColor = 'red';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}
