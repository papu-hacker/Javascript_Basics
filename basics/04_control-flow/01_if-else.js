// if esle

import { sleep } from "bun";

const isUserLoggedIn = true;
let temp = 33;

// if (isUserLoggedIn === true){
//     console.log("User logged in!");
// }

// if (temp <= 40) {
//     console.log("weather is cool");
// } else {
//     console.log("weather is to hot");
// }
// console.log("execute");

// if (condition) {

// } else if (condition) {

// } else if (condition) {

// } else{

// }

const userLoggedInFromEmail = false;
const userLoggedInFromApple = false;

if (userLoggedInFromApple || userLoggedInFromEmail) {
    let userIsLoggedIn = true;
    if (userIsLoggedIn === true) {
        console.log("user allow to buy");
    } else {
        console.log("user not allow to buy");
    }
} else {
    console.log("user is not logged in");
}

