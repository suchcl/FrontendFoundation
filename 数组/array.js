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