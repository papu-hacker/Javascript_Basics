// arror function

const users = {
    user: "hrishi",
    id: 12,
    age: 20,

    welcome: function(){
        console.log(`${this.user}, welcome to the website`);
    }
}; 
// users.welcome();
// users.user = "garud"
// users.welcome();

// function test() {
//     console.log(this)
// }; test(); // we can't use this inside func

// const chai = function () {
//     console.log("testing");    
// }

// const add  = (num1, num2) => {
//     return num1 + num2;
// }
// const add  = (num1, num2) => num1 + num2;

const add  = (num1, num2) => (num1 + num2); // heavly used in react.js

// console.log(add(27, 24));

const test = () => ({name: "hrishi"})
console.log(test());

