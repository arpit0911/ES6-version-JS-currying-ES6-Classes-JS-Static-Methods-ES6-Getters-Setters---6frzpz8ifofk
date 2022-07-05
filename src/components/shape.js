// declare class
class Shape {
  constructor(color) {
    this.color = color;
  }
  drawShape() {
    console.log("inside drawShape in Shape ")
  }
  calculateArea() {
    console.log("inside calculateArea in Shape ")

  }
}

// export class using module.exports
export {Shape}