import { FieldSettings } from './types';
import Point from './point';
import Snake from './snake';

class Field {
  canvas: any;
  canvasContext: any;
  rows: number;
  columns: number;
  cellSize: number;
  canvasWidth: number;
  canvasHeight: number;
  fruit: Point | null = null;
  snake: Snake;

  constructor(fieldSettings: FieldSettings, canvas: any) {
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d');
    this.rows = fieldSettings.rows;
    this.columns = fieldSettings.columns;
    this.cellSize = fieldSettings.cellSize;
    this.canvasWidth = fieldSettings.columns * fieldSettings.cellSize;
    this.canvasHeight = fieldSettings.rows * fieldSettings.cellSize;
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.snake = new Snake(this.generateRandomPoint());
  }
  // Draw field grid, fruit and snake for new iteration
  redraw = () => {
    this.drawGrid();
    this.drawSnake();
    //Generate new fruit or draw the old one
    this.updateFruit();
  };

  updateFruit = () => {
    if (!this.fruit) {
      this.fruit = this.generateFruit();
    }
    this.drawFruit(this.fruit);
  };

  drawFruit = (fruit: Point) => {
    this.canvasContext.fillStyle = 'pink';
    this.canvasContext.fillRect(fruit.x, fruit.y, this.cellSize, this.cellSize);
  };

  generateFruit = () => {
    let newFruit = this.generateRandomPoint();
    while (!this.validateFruitPosition(newFruit)) {
      newFruit = this.generateRandomPoint();
    }
    return newFruit;
  };

  generateRandomPoint = () => {
    const rX = Math.floor(Math.random() * this.columns);
    const rY = Math.floor(Math.random() * this.rows);
    return new Point(rX * this.cellSize, rY * this.cellSize);
  };

  //Check if fruit position is not over Snake body
  validateFruitPosition = (fruit: Point): boolean => {
    return this.snake.body.every(
      (snakePoint) => !Point.isEqual(snakePoint, fruit)
    );
  };

  drawGrid() {
    const { canvasContext, columns, rows, canvas, cellSize } = this;
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.beginPath();
    canvasContext.strokeStyle = 'white';
    canvasContext.lineWidth = 0.1;
    for (let x = 0; x <= columns; x++) {
      canvasContext.moveTo(x * cellSize, 0);
      canvasContext.lineTo(x * cellSize, rows * cellSize);
    }
    for (let y = 0; y <= rows; y++) {
      canvasContext.moveTo(0, y * cellSize);
      canvasContext.lineTo(columns * cellSize, y * cellSize);
    }
    // for your original question - you need to stroke only once
    canvasContext.stroke();
  }

  drawSnake() {
    const field = this;
    if (!field.snake) {
      return;
    }
    field.canvasContext.fillStyle = field.snake.color;
    if (!field.snake || field.snake.body.length === 0) {
      return;
    }
    field.snake.body.forEach(function (item) {
      field.canvasContext.fillRect(
        item.x,
        item.y,
        field.cellSize,
        field.cellSize
      );
    });
  }

  eatFruit() {
    this.fruit = null;
  }

  moveSnake = () => {
    const { body, direction } = this.snake;

    if (!body || body.length < 1 || !direction || !direction.code) {
      return;
    }

    const snakeHead = body[0];
    const newHeadPosition = new Point(snakeHead.x, snakeHead.y);

    //Calc new x position
    if (snakeHead.x === this.columns * this.cellSize) {
      newHeadPosition.x = 0;
    } else if (snakeHead.x === 0 && direction.xD < 0) {
      newHeadPosition.x = (this.columns - 1) * this.cellSize;
    } else {
      newHeadPosition.x += direction.xD * this.cellSize;
    }

    //Calc new y position
    if (snakeHead.y === this.rows * this.cellSize) {
      newHeadPosition.y = 0;
    } else if (snakeHead.y === 0 && direction.yD < 0) {
      newHeadPosition.y = (this.rows - 1) * this.cellSize;
    } else {
      newHeadPosition.y += direction.yD * this.cellSize;
    }

    //Check for collision to be at new position
    const isCollision = body.some((item) => {
      return Point.isEqual(item, newHeadPosition);
    });

    if (isCollision) {
      this.snake.isDead = true;
      return;
    }

    //Add new Head position to snake Body
    body.unshift(newHeadPosition);

    //Check if Fruit has been eaten
    if (this.fruit && Point.isEqual(this.fruit, newHeadPosition)) {
      this.eatFruit();
    } else {
      this.snake.body.pop();
    }
  };
}

export default Field;
