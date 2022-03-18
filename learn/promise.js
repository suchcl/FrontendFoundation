// 封装request请求信息
function makeRequest(url, method = "GET") {
    let request = {
        url: url,
        method,
        headers: "",
        body: "",
        credentials: "",
        async: false,
        responseType: "text",
        referrer: ""
    };
    return request;
}


function XFetch(request) {
    function executor(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("get", request.url, true);
        xhr.timeout = function (e) {
            reject(e);
        }
        xhr.onerror = function (e) {
            reject(e);
        }
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText, this);
                } else {
                    let error = {
                        code: this.status,
                        response: this.response
                    };
                    reject(error);
                }
            }
        }
        xhr.send();
    }
    return new Promise(executor);
}

let p1 = XFetch(makeRequest("https://www.baidu.com"));
let p2 = p1.then((value) => {
    console.log(value);
    // 其他的业务处理
    return XFetch(makeRequest("https://www.google.com"))
})
let p3 = x2.then(value => {
    console.log(value);
    // 其他业务处理
    return XFetch(makeRequest("https://wwww.xxxx.com"));
})
// 异常捕获 
p3.catch(error => {
    console.log(error);
});