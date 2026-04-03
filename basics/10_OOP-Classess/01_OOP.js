function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

const userOne = new User("hitesh", 12, true) // try without new method will rewrite data with this ===>   ↓         ↓     ↓  
const userTwo = new User("ChaiAurCode", 11, false) // new method gives new instance(copy) every time
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);
