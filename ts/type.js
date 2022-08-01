var _a, _b, _c;
var nvalue = "这是一个字符串";
var strLength = nvalue.length;
var strLength2 = nvalue.length;
var num;
// num!.toFixed(3); // 需要把num的空类型给排除掉
function sayHello(name) {
    var sname = name; // 需要将name变量的空类型排除掉
}
var student = {
    name: "Jack",
    age: 12,
    email: "jack@se.com"
};
// 双重断言，可以先将类型断言为any或者Unkown,都可以
// let stu:Person = "Nicholas" as Person;
var stu = "Nicholas"; // 双重类型断言，先断言为一个unknown类型（any类型也可以），然后再断言为预期的类型
// const foo = null ?? "default value";
// console.log(foo); // default value
// const foor = undefined ?? "not default value";
// console.log(foor); // not default value
// const baz = 0 || 100;
// console.log(baz); // 100
// const bar = '' || "Hello";
// console.log(bar); // "Hello"
// const cnt = 0 ?? "Hello world!";
// console.log(cnt); // 0
var foo;
var newFoo = foo || "hello";
console.log(newFoo); // hello，foo声明后没有赋值，所以其值是一个undefined
var count = 0;
var text = "";
var qty = count !== null && count !== void 0 ? count : 100;
var message = text !== null && text !== void 0 ? text : 'hi';
console.log(qty); // 0
console.log(message); // "" 空的字符串
var obj = {
    msg: "hello world!"
};
console.log((_a = obj.msg) === null || _a === void 0 ? void 0 : _a.toUpperCase());
var a = {
    duration: 50,
    speed: 10
};
(_b = a.duration) !== null && _b !== void 0 ? _b : (a.duration = 10);
console.log(a.duration); // 50
var b = (_c = a.speed) !== null && _c !== void 0 ? _c : 20;
console.log(a.speed); // 10
console.log(b);
var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(" ");
console.log(words);
