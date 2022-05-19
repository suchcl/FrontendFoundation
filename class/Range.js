// // 一个简单的js类  通过工厂函数创建类
// function Range(from, to) {
//     let obj = Object.create(range);
//     obj.from = from;
//     obj.to = to;
//     return obj;
// }


// let range = {
//     includes(x) {
//         return this.from <= x && x <= this.to;
//     }
// };

// let r1 = Range(3, 5);
// console.log(r1); // { from: 3, to: 5 }

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }
}

let r2 = new Range(4, 6);
console.log(r2);