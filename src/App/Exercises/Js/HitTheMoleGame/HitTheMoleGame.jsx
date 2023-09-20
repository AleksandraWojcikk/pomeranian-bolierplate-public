import './styles.css';
import React from 'react';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';

export function HitTheMoleGame() {
  return (
    <>
      <MenuView />
      <GameView />
    </>
  );
}
