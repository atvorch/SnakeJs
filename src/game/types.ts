export interface Point {
  x: number;
  y: number;
}
//DIRECTION
export enum KeyCodes {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  RIGHT = 'ArrowRight',
  LEFT = 'ArrowLeft',
}
export enum DirectionCode {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  RIGHT = 'ArrowRight',
  LEFT = 'ArrowLeft',
}

export interface Direction {
  xD: number;
  yD: number;
  code: DirectionCode;
}

export interface FieldSettings {
  rows: number;
  columns: number;
  cellSize: number;
}

export interface Field {
  canvas: any;
  ctx: any;
  rows: number;
  columns: number;
  cellSize: number;
  canvasWidth: number;
  canvasHeight: number;
  fruit: Point | null;
}

export interface Snake {
  color: string;
  body: Point[];
  direction: Direction;
  isDead: boolean;
}
