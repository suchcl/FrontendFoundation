let nvalue:string = "这是一个字符串";
let strLength:number = (<string>nvalue).length;
let strLength2:number = (nvalue as string).length;

let num:number | null | undefined = 12.598374;
num.toFixed(); // 13
num.toFixed(2); // 12.60
num.toFixed(4); // 12.598