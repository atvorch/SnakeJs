import { DirectionCode, FieldSettings } from './types';
import {
  DIRECTION_UP,
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  FIELD_SIZE,
} from './constants';

export const getFieldSettings = (): FieldSettings => {
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight - 50;

  let minValue = pageWidth > pageHeight ? pageHeight : pageWidth;
  minValue = minValue - 20;

  return {
    rows: FIELD_SIZE,
    columns: FIELD_SIZE,
    cellSize: Math.floor(minValue / FIELD_SIZE),
  };
};

export const getNewDirection = (directionCode: DirectionCode) => {
  switch (directionCode) {
    case DirectionCode.UP:
      return DIRECTION_UP;
    case DirectionCode.DOWN:
      return DIRECTION_DOWN;
    case DirectionCode.LEFT:
      return DIRECTION_LEFT;
    case DirectionCode.RIGHT:
      return DIRECTION_RIGHT;
  }
};

export const gameOver = () => {
  document.getElementById('gameover').style.display = 'block';
};
