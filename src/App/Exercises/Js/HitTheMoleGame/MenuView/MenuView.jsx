import '../styles.css';
import React from 'react';
import { useState } from 'react';
import { Button } from '../Button/Button';

export const MenuView = ({
  clickStartButton,
  setClickStartButton,
  setHowManyMinutes,
}) => {
  const [timeButton, setTimeButton] = useState(null);
  const [moleButton, setMoleButton] = useState(null);

  const changeColor = (event, value) => {
    console.log(event.target.id);
    setTimeButton(event.target.id);
    setHowManyMinutes(value);
  };

  const handleMoleClick = (event) => {
    console.log(event.target.id);
    setMoleButton(event.target.id);
  };

  function handleStartClick() {
    setClickStartButton(!clickStartButton);
  }

  return (
    <div>
      <div>
        <h4>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </h4>
      </div>
      <div className="big-box">
        <div className="moles">
          <h4>CZAS GRY</h4>
          <div className="button-container">
            <Button
              id={1}
              changeColor={(event) => changeColor(event, 60)}
              timeButton={timeButton}
              label={'1 minuta'}
            />

            <Button
              id={2}
              changeColor={(event) => changeColor(event, 120)}
              timeButton={timeButton}
              label={'2 minuty'}
            />

            <Button
              id={3}
              changeColor={(event) => changeColor(event, 180)}
              timeButton={timeButton}
              label={'3 minuty'}
            />
          </div>
        </div>
        <div className="moles">
          <h4>LICZBA KRETÓW</h4>
          <div className="button-container">
            <Button
              id={'mole1'}
              changeColor={handleMoleClick}
              timeButton={moleButton}
              label={'1 kret'}
            />

            <Button
              id={'mole2'}
              changeColor={handleMoleClick}
              timeButton={moleButton}
              label={'2 krety'}
            />
            <Button
              id={'mole3'}
              changeColor={handleMoleClick}
              timeButton={moleButton}
              label={'3 krety'}
            />
          </div>
        </div>
        <div className="moles">
          <h4>PRZYCISKI STERUJĄCE</h4>
          <div className="button-container">
            <button onClick={handleStartClick}>START</button>
          </div>
        </div>
      </div>
    </div>
  );
};
