import './styles.css';
import React from 'react';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { useState } from 'react';

export function HitTheMoleGame() {
  const [clickStartButton, setClickStartButton] = useState(false);
  const [howManyMinutes, setHowManyMinutes] = useState(null);

  return (
    <>
      {!clickStartButton && (
        <MenuView
          clickStartButton={clickStartButton}
          setClickStartButton={setClickStartButton}
          // howManyMinutes={howManyMinutes}
          setHowManyMinutes={setHowManyMinutes}
        />
      )}

      {clickStartButton && <GameView howManyMinutes={howManyMinutes} />}
    </>
  );
}
