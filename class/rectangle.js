class Recttangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    calcArea() {
        return this.width * this.height;
    }

    set customWidth(val) {
        this.width = val;
    }

    set customHeight(val) {
        this.height = val;
    }

    get area() {
        return this.calcArea();
    }
}

let rect = new Recttangle(10, 20);
console.log(rect.area); // 200

rect.customWidth = 4;
rect.customHeight = 5;
console.log(rect.area); // 20