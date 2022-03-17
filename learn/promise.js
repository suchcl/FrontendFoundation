// function makeRequest(url) {
//     let request = {
//         method: "get",
//         url: url,
//         headers: "",
//         body: "",
//         credentials: false,
//         sync: true,
//         responseType: "text",
//         referrer: ""
//     };
//     return request;
// }

// // 请求过程
// function xfetch(request, resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.ontimeout = function (e) {
//         reject(e);
//     };
//     xhr.onerror = function (e) {
//         reject(e);
//     };
//     xhr.onreadystatechange = function () {
//         if (xhr.status == 200) {
//             resolve(xhr.response);
//         }
//     };
//     xhr.open(request.method, URL, request.sync);
//     xhr.timeout = request.timeout;
//     xhr.responseType = request.responseType;
//     xhr.send();
// }

// xfetch(makeRequest("https://www.baidu.com"), function resolve(data) {
//     console.log(data);
// }, function reject(e) {
//     console.log(e);
// });

function xfetch(request) {
    function executor(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("get", request.url, true);
        xhr.ontimeout = function (e) {
            reject(e);
        }
        xhr.onerror = function (e) {
            reject(e);
        }
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                resolve(this.responseText, this);
            } else {
                let error = {
                    code: this.status,
                    response: this.response
                }
                reject(error, this);
            }
        }
        xhr.send();
    }
    return new Promise(executor);
}

function showWindow(url, method = "get") {
    function executor(resolve) {
        $.ajax({
            url,
            method,
            data: { "order_id": order_id },
            success: function (res) {
                resolve(res);
            },
        });
    }
    return new Promise(executor);
}

function onResolve(res) {
    if (res == undefined || "" == res) {
        alert("系统没有查询到该订单的相关信息");
        return false;
    }
    var res_obj = JSON.parse(res);
    if (res_obj.isHaveDeal == 1) {
        showDealWindow(order_id);
    } else {
        if (res_obj.isHaveSee == 1) {
            if (res_obj.isHaveReportLinkAifangOrder == 1) {
                showHaveSeeConfirm(order_id);
            } else {
                showHaveSeeCreate(order_id);
            }
        } else {
            showWarningWindow(order_id, res_obj.warning_next_show_which_window);
        }
    }
}