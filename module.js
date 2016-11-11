
export class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    toString () {
      return `Shape(${this.id})`
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}
export class Rectangle extends Shape {
    static defaultRectangle () {
        return new Rectangle("default", 0, 0, 100, 100)
    }
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width;
        this.height = height;
    }
    toString () {
      return "Rectangle > " + super.toString();
    }
    perimeter() {
      return (width + height) * 2
    }
}
export const pi = 3.14159;
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
    toString () {
      return "Circle > " + super.toString()
    }
    perimeter() {
      return pi * this.radius * this.radius;
    }
}

var defRectangle = Rectangle.defaultRectangle()
