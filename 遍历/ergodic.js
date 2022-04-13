// 遍历数组
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
}

// 遍历对象
let profile = {
    name: "Nicholas Zakas",
    nickname: "Tick",
    age: 16
};
for (let i = 0, keys = Object.keys(profile); i < keys.length; i++) {
    console.log("对象的属性:", keys[i]);
    console.log("对象对应的属性值:", profile[keys[i]]);
}

// 遍历字符串
let str = "abcdefg";
for (let i = 0; i < str.length; i++) {
    console.log(i);
    console.log(str[i]);
}