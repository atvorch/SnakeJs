import Field from './field';
import Snake from './snake';

import { DirectionCode } from './types';
import { gameOver, getFieldSettings } from './utils';

const SNAKE_SPEED = 2;

const FIELD_SETTINGS = getFieldSettings();

class Game {
  field: Field;
  snake: Snake;
  gameProcessId: number;

  constructor(canvas: any) {
    this.field = new Field(FIELD_SETTINGS, canvas);
    this.snake = this.field.snake;
  }

  init() {
    const game = this;
    this.field.redraw();

    //Remove game start handler
    const gameStartHandler = (event: any) => {
      window.removeEventListener('keydown', gameStartHandler);
      if (event.key.includes('Arrow')) {
        this.snake.changeDirection(event.key as DirectionCode);
      }
      game.start();
    };

    //Start the game if any key pressed
    window.addEventListener('keydown', gameStartHandler);
  }

  start() {
    this.watchMoves();
    this.gameProcessId = window.setInterval(() => {
      if (this.snake.isDead) {
        this.stopGame();
        return;
      }
      this.field.moveSnake();
      this.field.redraw();
      this.updateScore();
    }, SNAKE_SPEED * 50);
  }

  stopGame() {
    window.clearInterval(this.gameProcessId);
    gameOver();
  }

  updateScore() {
    const scoreElement = document.getElementById('score');

    if (!this.snake || !scoreElement) {
      return;
    }
    scoreElement.innerHTML = `${this.snake.body.length - 1}`;
  }

  gameOver() {
    alert(`Game over, you score is - ${this.snake.body.length - 1}`);
  }

  watchMoves() {
    window.addEventListener('keydown', (event) => {
      if (event.key.includes('Arrow')) {
        this.snake.changeDirection(event.key as DirectionCode);
      }
    });
  }
}

export default Game;
