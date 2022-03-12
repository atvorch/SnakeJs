import Game from './game/game';
import './styles.scss';

const CANVAS = document.querySelector('.canvas');

const game = new Game(CANVAS);
game.init();
