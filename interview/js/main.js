console.time("timer");
let ul = document.getElementById("ul");
for (let i = 0; i < 10000; i++) {
    let li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
}
ul.addEventListener("click", function (event) {
    let e = event || window.event;
    let target = e.target || e.srcElement;
    if (target.nodeName.toLowerCase() === "li") {
        console.log(target.innerHTML);
    }
});
console.timeEnd("timer"); // 2ms左右

console.time("timer2");
let ul2 = document.querySelector("#ul2");
let frag = document.createDocumentFragment();
for (let i = 0; i < 10000; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    frag.appendChild(li);
}
ul2.appendChild(frag);
ul2.addEventListener("click", function (event) {
    let e = event || window.event;
    let target = e.target || e.srcElement;
    if (target.nodeName.toLowerCase() === "li") {
        console.log(target.innerHTML);
    }
});
console.timeEnd("timer2");

console.time("timer3");
let ul3 = document.querySelector("#ul3");
let str = "";
for (let i = 0; i < 10000; i++) {
    str += `<li>${i}</li>`;
}
ul3.innerHTML = str;
ul3.addEventListener("click", function (event) {
    let e = event || window.event;
    let target = e.target || e.srcElement;
    if (target.nodeName.toLowerCase() === "li") {
        console.log(target.innerHTML);
    }
});
console.timeEnd("timer3");