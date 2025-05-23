// Parent Class
class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log('Shape name' + this.name);
    }
}

// Sub Classes
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name); //From extends
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name); //From extends
        this.radius = radius;
    }

    logName() {
        console.log('Circle Name: ' + this.name);
    }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
rect.logName();

const circ = new Circle('Circ 1', 30);
circ.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
