const form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    console.log(height)
    console.log(results)

    if(height === '' || height<0  || isNaN(height) ){
        results.innerHTML = 'Please give a valid height'
    }else
    if(weight === '' || weight<0  || isNaN(weight) ){
        results.innerHTML = 'Please give a valid weight'
    }else{
       const bmi = (weight/ ((height*height)/10000)).toFixed(2)
        // show the result
       
       if(bmi < 18.3){
        results.innerHTML =`Your BMI is ${bmi} <br>
        <p>Ooh its look like you are Under-Weight</p>`;
       }
       if( 18.6<= bmi <= 24.9){
        results.innerHTML =`Your BMI is ${bmi} <br>
        <p>Congragulation you are Normal</p>`;
       }
       if(bmi > 24.9){
        results.innerHTML =`Your BMI is ${bmi} <br>
        <p>Ooh its look like you are Over-Weight</p>`;
       }
    }

})



console.log(form)