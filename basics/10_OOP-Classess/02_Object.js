// function sum(num) {
//     // this.num = num
//     return num*5
// }
// sum.power = 2

// console.log(5);
// console.log(sum.power);
// console.log(sum.prototype);

function createUser(username, score) {
    this.username = username // this ka matlab jis
    this.score = score
}

createUser.prototype.increment = function () {
    // score++
    this.score++ // this ka matlab jis
}

createUser.prototype.printMe = function () {
    console.log(`price: ${this.score}`);
}

const chai = new createUser('chai', 20)
// const chai1 = new  createUser('chai1', 30)

console.log(chai);
// console.log(chai1);

chai.printMe()
