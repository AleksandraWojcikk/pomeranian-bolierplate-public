import './GameView.css';
import mole from './mole.svg';
import { useEffect, useState } from 'react';

const InitialMap = [
  { id: 1, isMolePresent: false, isClicked: false },
  { id: 2, isMolePresent: false, isClicked: false },
  { id: 3, isMolePresent: false, isClicked: false },
  { id: 4, isMolePresent: false, isClicked: false },
  { id: 5, isMolePresent: false, isClicked: false },
  { id: 6, isMolePresent: false, isClicked: false },
  { id: 7, isMolePresent: false, isClicked: false },
  { id: 8, isMolePresent: false, isClicked: false },
  { id: 9, isMolePresent: false, isClicked: false },
  { id: 10, isMolePresent: false, isClicked: false },
];

export const GameView = ({ howManyMinutes }) => {
  const [krecikMap, setKrecikMap] = useState(InitialMap);
  const [score, setScore] = useState(0);

  // const initialTime = { howManyMinutes };
  const [time, setTime] = useState(howManyMinutes);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalTime;
    if (isRunning) {
      intervalTime = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(intervalTime);
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalTime);
    };
  }, [time, isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleStopClick = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const placeOfMole = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      // -1 ustawiamy, bo chcemy, aby był index, a nie liczba zwykła
      //krecik skacze randomowo po kwadracikach:
      setKrecikMap(
        krecikMap.map((field, index) => {
          if (index === placeOfMole - 1) {
            return { ...field, isMolePresent: true };
          } else {
            return field;
          }
        })
      );
    }, 1000);
  }, []);

  // return () => {
  // clearInterval(interval);
  // };
  // }, [time, isRunning]);

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
    if (item.isMolePresent) {
      setScore((prev) => prev + 1); //zmienia się stan, ale zapamiętuje stan poprzedni.Lepsze niz score+1
    } else {
      setScore((prev) => prev - 1);
    }
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
              <div className="nibyText">{formatTime(time)}</div>
            </div>
          </div>
        </div>
        <div className="timer">
          <h4>WYNIK</h4>
          <div className="timerButtons">
            <div className="nibyButton">
              <div className="nibyText">{score}</div>
            </div>
          </div>
        </div>
        <div className="timer">
          <h4>PRZYCISKI STERUJĄCE</h4>
          <div className="timerButtons">
            <button onClick={handleStopClick} className="stopButton">
              {isRunning ? 'STOP' : 'START'}
            </button>
          </div>
        </div>
      </div>
      <div className="rectangles">{renderField()}</div>
    </>
  );
};
