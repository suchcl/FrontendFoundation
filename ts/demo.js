function greeter(person) {
    return "hello ".concat(person);
}
var user = "Jane user";
// document.body.innerHTML = greeter(user);
document.querySelector("#inn").innerHTML = greeter(user);
