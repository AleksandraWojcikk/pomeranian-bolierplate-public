import './JsStoragesMakieta.css';
import { useState } from 'react';

export const JsStoragesMakieta = () => {
  const names = ['Janek', 'Zenek'];

  const [nameInput, setNameInput] = useState(''); //stan do inputa
  const [name, setName] = useState(
    localStorage.getItem('name')?.split(',') || []
  ); //stan do localStorage

  //INPUT
  function handleChangeNickName(event) {
    setNameInput(event.target.value);
  }

  //ADD BUTTON
  function handleClickAddButton() {
    setName([...name, nameInput]);
    localStorage.setItem('name', [...name, nameInput]);
  }

  return (
    <div>
      <div className="start-view">
        <div className="add-nick-window">
          <div>
            <span className="nick">NICK</span>
            <input
              type="text"
              onChange={handleChangeNickName}
              className="put-nick"
            ></input>
          </div>
          <button onClick={handleClickAddButton} className="add-button">
            DODAJ
          </button>
        </div>
        <div className="all-nicks">
          <div className="listOfNicks">
            <div className="nameLine">
              <p>
                {name.map((item) => (
                  <p>{item}</p>
                ))}
              </p>
              <button className="x-button">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
