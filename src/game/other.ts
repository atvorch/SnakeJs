const LEFT_KEY = 'ArrowLeft';
const RIGHT_KEY = 'ArrowRight';
const UP_KEY = 'ArrowUp';
const DOWN_KEY = 'ArrowDown';

const TICKER_INTERVAL = 1000 / 60;

const ARROW_KEYS = [LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY];

// const gamepadHandler = (event: any, connecting: any) => {
//   var gamepad = event.gamepad;

//   if (connecting) {
//     this.gamepads[gamepad.index] = gamepad;
//   } else {
//     delete this.gamepads[gamepad.index];
//   }
// };
// window.addEventListener(
//   'gamepadconnected',
//   function (e) {
//     debugger;
//     console.log(e);
//     gamepadHandler(e, true);
//   },
//   false
// );
// window.addEventListener(
//   'gamepaddisconnected',
//   function (e) {
//     gamepadHandler(e, false);
//   },
//   false
// );

// const ticker$ = interval(TICKER_INTERVAL)
//   .pipe(

//     map(tick => ({
//       number: tick,
//       time: Date.now(),
//       deltaTime: null
//     })),
//     scan((prev, curr) => ({
//       number: curr.number,
//       time: curr.time,
//       deltaTime: (curr.time - prev.time) / 1000
//     }))
//   ).subscribe(tick => console.log(tick));

// setTimeout(() => {
//   ticker$.unsubscribe();
// }, 1000)

// let currentDirection = null;

//Listening for the keyboard arrows keys down events
// const input$ = fromEvent(
//   document,
//   'keydown',
//   (event: KeyboardEvent) => event.code
// )
//   .pipe(filter((keyCode) => ARROW_KEYS.some((key) => key === keyCode)))
//   .subscribe((keyCode) => {
//     const bodyGrown = game.snake.body.length > 1;
//     const direction: Direction = new Direction();
//     switch (keyCode) {
//       case 'Up':
//         direction.xD = 0;
//         direction.yD = -1;
//         break;
//       case 'Down':
//         direction.xD = 0;
//         direction.yD = 1;
//         direction.code = 'Down';
//         break;
//       case 'Left':
//         if (!bodyGrown || direction.code !== 'Right') {
//           direction.xD = -1;
//           direction.yD = 0;
//           direction.code = 'Left';
//         }
//         break;
//       case 'Right':
//         if (!bodyGrown || direction.code !== 'Left') {
//           direction.xD = 1;
//           direction.yD = 0;
//           direction.code = 'Right';
//         }
//         break;
//     }
//   });
