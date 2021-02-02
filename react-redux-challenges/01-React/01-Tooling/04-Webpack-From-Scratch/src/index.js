class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    debugger 
    document.body.innerHTML = `Hello ${this.name}!`;
  }
}

const greeter = new Greeter("Boris");
greeter.sayHello();