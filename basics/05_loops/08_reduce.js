
// let num = [1,2,3,4,5]

// let test = num.reduce( function (val1, val2) {
//     console.log(`val1: ${val1}, val2: ${val2}`);
//     return val1 + val2
// }, 0)
// console.log(test);

// const cart = num.reduce( (acc, curr) => (acc + curr), 0)
// console.log(cart);

let pro = [
    {
        name: 'js',
        price: 100
    },
    {
        name: 'py',
        price: 200
    },
    {
        name: "cpp",
        price: 500
    }
]

let cart = pro.reduce( (acc, val) => (acc + val.price), 0)

console.log(cart);
