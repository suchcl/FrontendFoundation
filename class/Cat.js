var cat = {
    say() {
        console.log("miaomiao");
    },
    jump() {
        console.log("jump higher!");
    }
};

let c = Object.create(cat);
c.color = "yellow";
c.say(); // miaomiao
console.log(c.color); // yellow