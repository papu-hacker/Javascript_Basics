const arr = [0,1,2,3]
const arr1 = [4,5,6,7]

// arr.push(arr1)

// console.log(arr);

// const newArr = arr.concat(arr1)

// console.log(newArr);

// const newArr2 = [...arr, ...arr1]
// console.log(newArr2);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
