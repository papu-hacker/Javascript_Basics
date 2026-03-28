
const form = document.querySelector('form')
// this usecase will give you empty, when we this into submit func that get val 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerText = 'Enter valid Height'
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerText = 'Enter valid weight'
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerText = bmi
        if (bmi < 18.6) {
            results.innerText = `bmi: ${bmi}
            Your are under weigth`
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerText = `bmi: ${bmi}
            Your are weigth is normal`
        } else{
            results.innerText = `bmi: ${bmi}
            Your are over weight`
        }
    }
    // results.innerText = `${height}`

})

