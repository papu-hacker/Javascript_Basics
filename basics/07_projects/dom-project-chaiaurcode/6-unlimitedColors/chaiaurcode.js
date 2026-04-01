let ranColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

// console.log(ranColor());

// let body = document.getElementsByTagName('body')

const changeBodyColor = function () {
    // body.style.backgroundColor = ranColor()
    document.body.style.backgroundColor = ranColor();
}
const changeBodyColorStop = function () {
    // body.style.backgroundColor = ranColor()
    // document.body.style.backgroundColor = ranColor();
}

let start = document.querySelector('#start').addEventListener('click', changeBodyColor)
let stopChanging = document.querySelector('#start').addEventListener('click', changeBodyColorStop)
