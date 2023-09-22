import './GameView.css';
import mole from './mole.svg';
import { useState } from 'react';

const InitialMap = [
  { id: 1, isMolePresent: false, isClicked: false },
  { id: 2, isMolePresent: true, isClicked: false },
  { id: 3, isMolePresent: false, isClicked: false },
  { id: 4, isMolePresent: false, isClicked: false },
  { id: 5, isMolePresent: false, isClicked: false },
  { id: 6, isMolePresent: false, isClicked: false },
  { id: 7, isMolePresent: false, isClicked: false },
  { id: 8, isMolePresent: false, isClicked: false },
  { id: 9, isMolePresent: false, isClicked: false },
  { id: 10, isMolePresent: false, isClicked: false },
];

export const GameView = () => {
  const [krecikMap, setKrecikMap] = useState(InitialMap);

  const renderField = () => {
    return krecikMap.map((item, index) => {
      const isClickedWithMole =
        item.isClicked && item.isMolePresent ? 'green-button' : '';

      const isNotClickedWithMole =
        item.isClicked && !item.isMolePresent ? 'red-empty-button' : '';

      return (
        <div
          key={index}
          onClick={() => handleKrecikClick(item)}
          className={'kwadracik ' + isClickedWithMole + isNotClickedWithMole}
        >
          {item.isMolePresent && <img src={mole}></img>}
        </div>
      );
    });
  };

  function handleKrecikClick(item) {
    setKrecikMap(
      krecikMap.map((field) => {
        return { ...field, isClicked: field.id === item.id };
      })
    );
  }

  return (
    <>
      <div>
        <h4>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </h4>
      </div>
      <div className="box-timer">
        <div className="timer">
          <h4>CZAS DO KOŃCA</h4>
          <div className="timerButtons">
            <div className="nibyButton">
              <p className="nibyText">1:35</p>
            </div>
          </div>
        </div>
        <div className="timer">
          <h4>WYNIK</h4>
          <div className="timerButtons">
            <div className="nibyButton">
              <p className="nibyText">16</p>
            </div>
          </div>
        </div>
        <div className="timer">
          <h4>PRZYCISKI STERUJĄCE</h4>
          <div className="timerButtons">
            <button className="stopButton">STOP</button>
          </div>
        </div>
      </div>
      <div className="rectangles">{renderField()}</div>
    </>
  );
};
