const btn = document.querySelectorAll('.button')
const txt = document.querySelector('h2')
const txt1 = document.querySelector('h1')
const body = document.querySelector('body')

btn.forEach(function (button) {
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.id);

        // switch (e.target.id) {
        //     case 'grey':
        //         body.style.backgroundColor = '#222222'
        //         txt.style.color = 'white'
        //         txt1.style.color = 'white'
        //         break;
        //     case 'white':
        //         body.style.backgroundColor = 'white'
        //         txt.style.color = 'black'
        //         txt1.style.color = 'black'
        //         break;
        //     case 'blue':
        //         body.style.backgroundColor = 'cyan'
        //         break;
        //     case 'yellow':
        //         body.style.backgroundColor = 'yellow'
        //         txt.style.color = 'red'
        //         break
        // }

        if (e.target.id === 'grey') {
            body.style.backgroundColor = '#222222'
            txt.style.color = 'white'
            txt1.style.color = 'white'
        } else if (e.target.id === 'white') {
            body.style.backgroundColor = '#fff'
            txt.style.color = 'black'
            txt1.style.color = 'black'
        } else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'cyan'
            txt.style.color = '#ff4646'
            txt1.style.color = '#ff4646'
        } else if (e.target.id === 'yellow') {
            body.style.backgroundColor = '#dcfeb4'
            txt.style.color = '#ff4646'
            txt1.style.color = '#ff4646'
        } else if (e.target.id === 'purple') {
            body.style.backgroundColor = '#b57cff'
            txt.style.color = '#ffffff'
            txt1.style.color = '#ffffff'
        }

    })
});

// Multiple independent if statements: each condition is evaluated and its block runs if true.

// if/else if/else: evaluation stops at the first true condition; only one branch runs.