class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + `说话了~`);
    }

    eat() {
        console.log(this.name + `喜欢吃肉饼～`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(this.name + `汪汪叫～`);
    }

    play() {
        console.log(this.name + `玩玩具球~`);
    }
}

let d = new Dog("旺才");
d.speak();
d.play();
d.eat();