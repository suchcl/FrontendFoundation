const mb = require("./base");
const message = require("./base").message = "Hello world!";
const msg = require("./base").message; // msg会使用上面缓存的message值，而不是重新加载base模块而使用message属性值

console.log(mb.hello());
console.log(message); // Hello world!
console.log(mb.message); // Hello world!
console.log(msg); // Hello world!