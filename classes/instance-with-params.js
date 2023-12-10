class Box {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }
}

const myBox = new Box(23, 34, 'green');
console.log(myBox);