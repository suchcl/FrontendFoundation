function cls() {
    this.p1 = 1;
    this.p2 = function () {
        console.log(this.p1);
    }
}

var o1 = new cls;
o1.p2();

function cls2() {

}
cls2.prototype.p1 = 3;
cls2.prototype.p2 = function () {
    console.log(this.p1);
}
var o2 = new cls2;
o2.p2();

var obj = {
    a: 1,
    b: 2
};

console.log(Object.getPrototypeOf(o2));

Object.setPrototypeOf(o2, obj);
console.log(Object.getPrototypeOf(o2));