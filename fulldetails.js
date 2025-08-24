let category = document.querySelector('.category')
let img = document.querySelector('img')
let title = document.querySelector('.title')
let price = document.querySelector('.price')
let rating = document.querySelector('.rating')
let description = document.querySelector('.description')
let button = document.querySelector('.button')

function dataGet(){
    let data = JSON.parse(localStorage.getItem('details'))

    
    
    category.innerHTML = data[0].category
    img.src = `${data[0].image}`
    title.innerHTML = data[0].title
    price.innerHTML = `$ ${data[0].price}`
    rating.innerHTML = `⭐ ${data[0]?.rating?.rate}`
    description.innerHTML = data[0].description

}
dataGet()
button.addEventListener('click',()=>{
    window.location.href = './index.html'
})