// singleton

// object litreals

const mysym = Symbol("id_1")

const users = {
    name: "papu",
    id: 101,
    age: 20,
    [mysym]:"id_101"
}

// console.log(users["name"]);
// console.log(users["age"]);
// console.log(users[mysym]);

// users.id = 1
// console.log(users);
// Object.freeze(users)
// users.age = 19
// console.log(users);

users.test = function(){
    return `Hello ${this.name}`
}
console.log(users.test());


