let whiteBtn = document.getElementById('white');
let grayBtn = document.getElementById('gray');
let blueBtn = document.getElementById('blue');
let redBtn = document.getElementById('red');

whiteBtn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#212121'
})
grayBtn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'gray';
      document.body.style.color = '#212121'
})
blueBtn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = '#fff'
})
redBtn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'red';
    document.body.style.color = '#fff'
})