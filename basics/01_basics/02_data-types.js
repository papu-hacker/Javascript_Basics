import { symbolName } from "typescript"

let name = "hrishi" //string
let age = 20 //int
let isLoggedIn = true //boolean

// number = 2^53
// bigInt
// string = 'test' / "test"
// boolean = true / false

// null = standalone value / empty e.g.: to handle error in temp app can't return 0 

// undefined = var is define but value is not assign
// symbol = unique 

// object 

// console.log(typeof());

// **********************************************

/* javascript is dynamically typed language: we don't need to declare the type of a variable when you create it. The language infers the type based on the value assigned to the variable.

# e.g.: x = 10 and x = "Hello" without any issues

*/

/* statically typed language: programmer must declare the variable's type before using it. Examples of statically typed languages include Java, C, C++.

# e.g.: int num; 

*/

// # primitive (Passes a copy of the actual value)
// 7 types: string, number, boolean, null, undefined, symbol, bigint

// ## symbol
// const id = Symbol('123')
// const id_2 = Symbol('123')
// console.log(id === id_2);  // ans: fasle

// ## bigint
// const bignum = 12124523445634535n


// # reference (Passes the address of the variable)
// array[list], object, function

// ## array(list)
// let array_num = ['1', '2', '3'] // this was list in python
// console.log(array_num, typeof array_num);

// ## object(dict)
// let object_id = { // this was dist in python
//     'id': 1,
//     'name': 'user1'
// }
// console.log(object_id, typeof object_id);

// ## function
// const func = function(){
//     return 'hello';
// }

// console.log(func());

// stack and heap

let one = 100
let two = one
two = 200
console.log("one:", one, "two", two);


let user1 = {
    "id":101,
    'name':"user1"
}
let user2 = user1
user2.id = 200
console.log('user1:', user1, 'user2:', user2);
