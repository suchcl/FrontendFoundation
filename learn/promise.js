function tt(flag) {
    function t1(resolve, reject) {
        if (flag) {
            var success = "hello world";
            resolve(success);
        } else {
            var faild = "oooo";
            reject(faild);
        }
    }
    return new Promise(t1);
}

var r1 = tt(1);
r1.then((res) => {
    console.log(res);
});

r2 = tt(0);
r2.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})