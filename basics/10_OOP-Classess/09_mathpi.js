import { CryptoHashInterface } from "bun";

let data = Object.getOwnPropertyDescriptors(Math, "PI")

// console.log(data);

let test = {
    name: 'papu'
}

console.log(Object.getOwnPropertyDescriptors(test, "name"));

Object.defineProperty(test, "name",{
    writable: false
})

test.name = 'test'

console.log(test);
