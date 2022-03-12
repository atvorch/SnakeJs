import { DirectionCode } from './types';

class Direction {
  xD: number;
  yD: number;
  code: DirectionCode | undefined;

  constructor(xD?: number, yD?: number, code?: DirectionCode) {
    this.xD = xD || 0;
    this.yD = yD || 0;
    this.code = code;
  }
}

export default Direction;
