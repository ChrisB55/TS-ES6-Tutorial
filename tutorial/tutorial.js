// Mini-tutorial on ES6 and typescript features. 
// 1. Types and how they allow you define the result you want and detect errors earlier. 
var myString;
myString = 'Hello';
var myBool;
myBool = true;
var myNum;
myNum = 3;
var myNum2;
//myNum2 = "3"; This returns an error as it a string, not a number because of the quote marks. In JS 5, this doesn't return an error.
console.log();

// 2. Hello World example. From Microsoft's official typescript samples. 
// Shows the use of class and constructor. 
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.greet();
