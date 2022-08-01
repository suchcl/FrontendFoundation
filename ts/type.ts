let nvalue:string = "这是一个字符串";
let strLength:number = (<string>nvalue).length;
let strLength2:number = (nvalue as string).length;

let num:number | null | undefined;
// num!.toFixed(3); // 需要把num的空类型给排除掉

function sayHello(name:string | undefined){
    let sname:string = name!; // 需要将name变量的空类型排除掉
}

interface Person{
    name: string;
    age: number;
    email: string;
}
let student:Person = {
    name: "Jack",
    age: 12,
    email: "jack@se.com"
};

// 双重断言，可以先将类型断言为any或者Unkown,都可以
// let stu:Person = "Nicholas" as Person;
let stu:Person = "Nicholas" as unknown as Person; // 双重类型断言，先断言为一个unknown类型（any类型也可以），然后再断言为预期的类型

// const foo = null ?? "default value";
// console.log(foo); // default value

// const foor = undefined ?? "not default value";
// console.log(foor); // not default value

// const baz = 0 || 100;
// console.log(baz); // 100

// const bar = '' || "Hello";
// console.log(bar); // "Hello"

// const cnt = 0 ?? "Hello world!";
// console.log(cnt); // 0

let foo;
let newFoo = foo || "hello";
console.log(newFoo); // hello，foo声明后没有赋值，所以其值是一个undefined

let count = 0;
let text = "";
let qty = count ?? 100;
let message = text ?? 'hi';
console.log(qty); // 0
console.log(message); // "" 空的字符串


let obj = {
    msg: "hello world!"
};
console.log(obj.msg?.toUpperCase());

const a = {
    duration: 50,
    speed: 10
};
a.duration ??= 10;
console.log(a.duration); // 50
let b = a.speed ?? 20;
console.log(a.speed); // 10
console.log(b);

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(" ");
console.log(words);