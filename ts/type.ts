let nvalue:string = "这是一个字符串";
let strLength:number = (<string>nvalue).length;
let strLength2:number = (nvalue as string).length;



let num:number | null | undefined;
num!.toFixed(3); // 需要把num的空类型给排除掉

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