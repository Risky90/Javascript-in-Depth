let clock = document.querySelector("#clock")

setInterval(()=>{
    let date = new Date().toLocaleTimeString()
    clock.innerHTML = date
    
     clock.style.backgroundColor = `#${(Math.round( Math.random()* 1000000))}`
   
},1000)