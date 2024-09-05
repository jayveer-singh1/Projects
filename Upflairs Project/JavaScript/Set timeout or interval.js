let btn1 = document.querySelector('#start')
let btn2 = document.querySelector('#stop')
let div = document.querySelector('.box')
let rotate = setInterval(()=>{
    btn1.addEventListener('click', function () {
        div.classList.toggle('box1')
    })
}, 1000)
