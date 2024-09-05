// let box = document.querySelector('.box')

// async function fetchData(){
//     let res = await fetch('https://dummyjson.com/products')
//     let data = await res.json()
//     console.log(data);
//     let card =''
//     data.products.forEach(element => {
//         card+=`<div> ${element.title}<div>`
//     });
//     box.innerHTML=card
// }
// fetchData()

fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(console.log);
