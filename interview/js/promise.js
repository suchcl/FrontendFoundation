// function executor(resolve, reject) {
//     let rand = Math.random();
//     console.log("rand:", rand);
//     if (rand > 0.5) {
//         resolve(rand);
//     } else {
//         reject("数据范围不对");
//     }
// }

// var p0 = new Promise(executor);
// console.log("p0:", p0);
// var p1 = p0.then((value) => {
//     console.log("value:", value);
//     console.log("successed - 1");
//     // return new Promise(executor);
// });
// p1.catch((reason) => {
//     console.log("reason:", reason);
// })

function sleep(delay) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("超时啦");
        }, delay)
    })
}

function request() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("成功啦");
        }, 1000);
    });
}

// 判断是否超时
// function timeoutPromise(requestFn, delay) {
//     return new Promise((resolve, reject) => {
//         const promises = [requestFn(), sleep(delay)];
//         console.log(promises);
//         // const promises = [1000, 500];
//         for (const promsie of promises) {
//             promsie.then(res => resolve(res), err => reject(err));
//         }
//     });
// }

// function testtimeoutPromise(request, delay) {
//     return Promise.race([request, sleep(delay)]);
// }

// timeoutPromise(request, 500).then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// function divClick() {
//     console.log("div click");
// }

// function btnClick() {
//     console.log("btnClick");
// }

var div = document.querySelector("#div");
var btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    console.log("btn click");
});
div.addEventListener("click", function () {
    console.log("div click");
});