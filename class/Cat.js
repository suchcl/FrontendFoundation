var cat = {
    say() {
        console.log("miaomiao");
    },
    jump() {
        console.log("jump higher!");
    }
};

let c = Object.create(cat);
c.color = "yellow";
c.say(); // miaomiao
console.log(c.color); // yellow



var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function () { return arguments }();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v)));

var date = new Date();
console.log(Object.prototype.toString.call(date));

var o = {
    [Symbol.toStringTag]: "MyObject"
};
console.log(o + "");
console.log(Object.prototype.toString.call(this));