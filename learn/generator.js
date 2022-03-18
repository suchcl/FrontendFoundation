function* getDemo() {
    console.log("11111");
    yield "generator 2";

    console.log(222222);
    yield "generator 2";

    console.log(33333);
    yield "generator 2";

    console.log(444444);
    return "generator 2";
}

console.log("main 0");
let gen = getDemo();
console.log(gen.next().value);
console.log("main 1");
console.log(gen.next().value);
console.log("main 2");
console.log(gen.next().value);
console.log("main 3");
console.log(gen.next().value);
console.log("main 4");