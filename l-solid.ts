class Figure {
    public width: number;
    public height: number;

    public getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Figure {
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
}

class Square extends Figure {
    constructor(length: number) {
        super();
        this.width = length;
        this.height = length;
    }
}

