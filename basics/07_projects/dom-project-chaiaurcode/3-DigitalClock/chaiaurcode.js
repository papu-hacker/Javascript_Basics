const clock = document.getElementById('clock')

clock.style.fontFamily = 'monospace'

setInterval(function () {
    let time = new Date()
    // console.log(time.toLocaleTimeString())
    clock.innerText = `Time: ${time.toLocaleTimeString()}`
}, 1000)
