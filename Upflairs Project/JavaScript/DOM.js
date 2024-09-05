// let para = document.querySelector(".para");
// para.innerText="Bye"
// para.style.backgroundColor='pink'
// para.setAttribute('title', 'text')
// para.classList.add("text")
// para.classList.remove('text')
// para.classList.toggle('text')
// let changeMode= ()=>{
//     let hTML = document.querySelector('body')
//     mode = 'light';
//     if(mode=='light'){
//         hTML.style.backgroundColor='black'
//         mode='dark'
//     }else if(mode=='dark'){
//         hTML.style.backgroundColor='white'
//     }
//     else{

//     }
// }

// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function () {
//     document.body.classList.toggle('color')
// })
// // console.log(btn)

let divi = document.querySelector('.box')
divi.addEventListener('click', function(){
    divi.classList.toggle('box-size')
    divi.classList.toggle('box')
})