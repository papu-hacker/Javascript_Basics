// import { fetch } from "bun"

// const one = new Promise(function (resolve, reject) {
//     // do async task
//     // DB calls, crypto, network calls
//     setTimeout(function () {
//         console.log('task done');
//         resolve()
//     }, 1000)
// })
// one.then(function () {
//     console.log('async task done');
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('connection cmpt');
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log('db con done');
// })

// let three = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('connection cmpt');
//         resolve({
//             username: 'garud',
//             mail: 'garud@garud.in'
//         })
//     }, 1000)
// })
// three.then(function (user) {
//     console.log(user);
// })

// let chaar = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ username: 'garud', mail: 'garud@garud.in' })
//         } else {
//             reject('error while connecting db')
//         }
//     }, 1000)
// })
// chaar.then((user) => {
//     console.log(user);
//     return user.username
// }).then((data) => {
//     console.log(`then 2: ${data}`);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log('all work done')
// )

// const pach = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: 'test', mail: 'test@garud.in' })
//         } else {
//             reject('error while test db')
//         }
//     }, 1000)
// })
// async function pachRslv() {
//     const data = await pach
//     console.log(data);
// }
// async function pachRslv() {
//     try {
//         const data = await pach
//         console.log(data);
//     } catch (error) {
//         console.log(`error: ${error}`);
//     }
// }
// pachRslv()

// async function testing() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("getting error in testing");
//     }
// }
// testing();

setTimeout(() => console.log('hehehe'), 160)
fetch('https://jsonplaceholder.typicode.com/users/1/')
    .then((response) => {
        return response.json()

    }).then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error)
    )
