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

let newUser = user.forEach(item => {
    // console.log(item.name);
    // return item.name;
    item.name = item.name + item.id
    console.log(item.name);
});
console.log(user);