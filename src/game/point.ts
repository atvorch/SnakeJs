class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static isEqual(pointA: Point, pointB: Point) {
    return pointA.x === pointB.x && pointA.y === pointB.y;
  }
}

export default Point;
