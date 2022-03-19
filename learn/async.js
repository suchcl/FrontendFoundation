// async function foo() {
//     return 2;
// }
// console.log(foo());

async function foo() {
    console.log(1);
    let a = await 100;
    console.log(a);
    console.log(2);
}
console.log(0);

setTimeout(() => {
    console.log(6);
}, 2000);
foo();
console.log(3);
// 0 1 3 100 2