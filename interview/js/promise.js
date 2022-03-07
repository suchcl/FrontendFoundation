function executor(resolve, reject) {
    let rand = Math.random();
    console.log("rand:", rand);
    if (rand > 0.5) {
        resolve(rand);
    } else {
        reject("数据范围不对");
    }
}

var p0 = new Promise(executor);
console.log("p0:", p0);
var p1 = p0.then((value) => {
    console.log("value:", value);
    console.log("successed - 1");
    // return new Promise(executor);
});
p1.catch((reason) => {
    console.log("reason:", reason);
})