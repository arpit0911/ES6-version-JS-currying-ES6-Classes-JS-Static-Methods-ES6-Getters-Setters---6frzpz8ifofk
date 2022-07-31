// import using require
import { Shape } from "./shape";

// declare class
class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  calculateArea() {
    console.log("inside calculateArea in Circle");
  }
}

// export class using module.exports
// export { Circle };
module.export = Circle;
