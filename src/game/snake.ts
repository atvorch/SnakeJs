import Point from './point';
import Direction from './direction';
import { DirectionCode } from './types';
import { getNewDirection } from './utils';

class Snake {
  color: string;
  body: Point[];
  direction: Direction | undefined;
  isDead: boolean;

  constructor(startPoint: Point, color?: string, direction?: Direction) {
    this.color = color || 'green';
    this.body = [startPoint || new Point(0, 0)];
    this.direction = direction;
    this.isDead = false;
  }

  changeDirection = (newDirectionCode: DirectionCode) => {
    if (this.isChangeDirectionAllowed(newDirectionCode)) {
      this.direction = { ...getNewDirection(newDirectionCode) };
    }
  };

  isChangeDirectionAllowed = (newDirectionCode: DirectionCode) => {
    if (!this.direction) {
      return true;
    }

    if (newDirectionCode === this.direction.code) {
      return false;
    }

    if (this.body.length <= 1) {
      return true;
    }

    switch (newDirectionCode) {
      case DirectionCode.UP:
        return this.direction.code !== DirectionCode.DOWN;
      case DirectionCode.DOWN:
        return this.direction.code !== DirectionCode.UP;
      case DirectionCode.LEFT:
        return this.direction.code !== DirectionCode.RIGHT;
      case DirectionCode.RIGHT:
        return this.direction.code !== DirectionCode.LEFT;
    }
  };
}

export default Snake;
