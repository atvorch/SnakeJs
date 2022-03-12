import { DirectionCode } from './types';

export const FIELD_SIZE = 30;

export const DIRECTION_UP = {
  xD: 0,
  yD: -1,
  code: DirectionCode.UP,
};
export const DIRECTION_DOWN = {
  xD: 0,
  yD: 1,
  code: DirectionCode.DOWN,
};
export const DIRECTION_LEFT = {
  xD: -1,
  yD: 0,
  code: DirectionCode.LEFT,
};
export const DIRECTION_RIGHT = {
  xD: 1,
  yD: 0,
  code: DirectionCode.RIGHT,
};
