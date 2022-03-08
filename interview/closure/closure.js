// 闭包

// var ul = document.querySelector("#ul");
// var str = "";
// for (let i = 0; i < 1000; i++) {
//     str += "<li>" + i + "</li>";
// }
// ul.innerHTML = str;

// ul.addEventListener("click", function (event) {
//     console.log(event.target.innerText);
// });

// var ul = document.querySelector("#ul");
// for (var i = 0; i < 10; i++) {
//     var li = document.createElement("li");
//     li.innerText = i;
//     ul.appendChild(li);
// }

// ul.addEventListener("click", (event) => {
//     if (event.target.nodeName.toLowerCase() == "li") {
//         console.log(event.target.innerText);
//     }
// });

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }

// for (var i = 0; i < 10; i++) {
//     (function (num) {
//         setTimeout(() => {
//             console.log(num);
//         }, 0);
//     })(i);
// }

var d = "abc";
function a() {
    console.log("函数a");
}
console.log(a);
a();