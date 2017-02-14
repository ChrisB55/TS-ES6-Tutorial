// Mini-tutorial on ES6 and typescript features. 
// 1. Types and how they allow you define the result you want and detect errors earlier. 

var myString: string;
myString = 'Hello';

var myBool: Boolean;

myBool=true;
var myNum: number;
myNum = 3;

var myNum2: number;

//myNum2 = "3"; This return an error as it a string, not a number because of the quote marks. In JS 5, this doesn't return an error. 

console.log();

// 2. Hello World example. From Microsoft's official typescript samples. 
// Shows the use of class and constructor. 
class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");
    
document.body.innerHTML = greeter.greet();

