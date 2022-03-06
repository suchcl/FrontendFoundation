// function foo() {
//     console.log(this.a);
// }

// function doFoo() {
//     foo();
// }

// var obj = {
//     a: 1,
//     doFoo: doFoo
// };

// var a = 2;
// obj.doFoo()


// function a() {
//     var temp = 10;
//     function b() {
//         console.log(temp); // 10
//     }
//     b();
// }
// a(); // 10

// function a() {
//     var temp = 10;
//     b();
// }
// function b() {
//     console.log(temp);
// }
// a(); // 报错 Uncaught ReferenceError: temp is not defined



// function Foo() {
//     getName = function () {
//         console.log(1);
//     }
//     return this;
// }
// Foo.getName = function () {
//     console.log(2);
// }
// Foo.prototype.getName = function () {
//     console.log(3);
// }
// var getName = function () {
//     console.log(4);
// }
// function getName() {
//     console.log(5);
// }

// Foo.getName();           // 2
// getName();               // 4
// Foo().getName();         // 1
// getName();               // 1 
// new Foo.getName();       // 2
// new Foo().getName();     // 3
// new new Foo().getName(); // 3


const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("timerStart");
        resolve("success");
        reject("failed");
        console.log("timerEnd");
    }, 0);
    console.log(2);
});
promise.then((res) => {
    console.log(res);
});
console.log(4);
promise.catch((err) => {
    console.log(err);
})
