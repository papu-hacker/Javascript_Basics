let ranColor = function () {
    const hex = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

console.log(ranColor());

let inter_id;

const changeBodyColor = function () {
    if (!inter_id) {
        inter_id = setInterval(() => {
            chbgcolor()
        }, 1000);
    }

    function chbgcolor() {
        document.body.style.backgroundColor = ranColor();
    }
};

const changeBodyColorStop = function () {
    clearInterval(inter_id);
    inter_id = null;
}

let start = document.querySelector('#start').addEventListener('click', changeBodyColor);

let stopChanging = document.querySelector('#stop').addEventListener('click', changeBodyColorStop);

