let userInput = document.querySelector('#guessField')
 console.log(userInput);

let submit = document.querySelector('#subt');
 console.log(submit);

let guessSlat = document.querySelector('.guesses')
console.log(guessSlat)

let remainGuess = document.querySelector('.remaining');
console.log(remainGuess)

let lowOrHi = document.querySelector('.lowOrHi');
console.log(lowOrHi)

let newBtn = document.querySelector('#newGame');
console.log(newBtn);

let random = parseInt( Math.random()*100 + 1)
let perviousGeuss = [];
numOfGuess = 1;
numOfGuessRemain =10
let play = true

if(play){

    submit.addEventListener('click', (e) =>{
        e.preventDefault();
      let guess = parseInt(userInput.value);
      // console.log(guess)
      
     validateGuess(guess); 
    } )
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please submit a number')
    }else
    if(guess <0){
      alert('Please submit a positive number')
    }else
    if(guess >100){
      alert('Please input between 1 and 100')
    }else
    {
        perviousGeuss.push(guess)
        if(numOfGuess >9){
          play = false;
          diaplayGuess(guess);
          displayMessage(`GameOver! The Random number was ${random}`);
          endGame();
        }else{
          diaplayGuess(guess)
          checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    
    if(guess === random){
      displayMessage(`Congurelation You Win <br> you guess ${guess} `)
      endGame();
    }
    if(guess < random){
      displayMessage(`Number is Low`)
     
    }
    if(guess > random){
      displayMessage(`Number is High`)
     
    }
   
  //  console.log(random)
}

function diaplayGuess(guess){
  userInput.value = ''; // to clean the user input    
  guessSlat.innerHTML += `  ${guess},`
  numOfGuess ++;
  remainGuess.innerHTML = --numOfGuessRemain;

}

function displayMessage(message){
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
  console.log(message)
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', 'true');
  submit.style.display = 'none'
  newBtn.style.display = 'inline-block'
  newGame();
}

function newGame(){
  newBtn.addEventListener('click', ()=>{
    submit.style.display = 'inline-block';
    newBtn.style.display = 'none';
    userInput.removeAttribute('disabled')
    play = true;
    numOfGuess = 1;
   
    guessSlat.innerHTML = ''
    numOfGuessRemain =10;
    remainGuess.innerHTML = 10;
    lowOrHi.innerHTML = '';
    random = parseInt( Math.random()*100 + 1)
  })
}