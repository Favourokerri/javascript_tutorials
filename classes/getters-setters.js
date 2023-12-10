class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    //this is a getter
    get area () {
        return this.width * this.height;
    }
}

let square = new Square(4);
console.log(square.area);
