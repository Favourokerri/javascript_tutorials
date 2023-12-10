class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
     }
     getArea() {
        return this.width * this.height;
     }

     getDescription() {
        return `i am a rectangle of width ${this.width} and height of ${this.height}`;
     }
}

const rect = new Rectangle(2, 5, 'green');
console.log(rect.width);
console.log(rect.getArea());
console.log(rect.getDescription());