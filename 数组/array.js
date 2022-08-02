const user = [
    {
        id: 1,
        name: "Nicholas Zakas"
    },
    {
        id: 2,
        name: "Hanmeimei"
    }
];
// forEach会改变原数组，无返回值
let newUser = user.forEach(item => {
    // console.log(item.name);
    // return item.name;
    item.name = item.name + item.id
    console.log(item.name);
});
console.log(user);

const str = 'The quick brown fox jumps over the lazy dog.';
const newStr = str.split(' ');
console.log(newStr);

const str2 = '楼盘不熟悉,楼盘信息虚假,不满足需求，房产知识欠缺,沟通不到位，楼盘无讲解';
// console.log(str2.replace(/，/ig,','));
// const newStr2 = str2.split(',');
console.log(str2.split(","));
const newStr2 = str2.replace(/，/ig,',').split(',');
console.log(newStr2);