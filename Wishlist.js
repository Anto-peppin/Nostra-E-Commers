let innerwish = document.querySelector('.innerwish')
let noData = document.querySelector('.nodata')
let button = document.querySelector('.button')
let wish = JSON.parse(localStorage.getItem('wishList'))

let unique = wish.filter(
  (obj, index, self) =>
    index === self.findIndex(o => JSON.stringify(o) === JSON.stringify(obj))
);


function filterData(unique){
innerwish.innerHTML=''
   unique.forEach((data,index)=>{
    innerwish.innerHTML +=`<div class="filtercon">
    <div class='filimg'>
    <img src="${data.image}" alt="${data.title}">
  </div>
    
    <div class="fildata">  
        
          <div class="title">${data?.title.length>20? data?.title.slice(0,23)+'...':data?.title}</div>
          <div class="rate">⭐${data?.rating?.rate}</div>
       
        <h3>${data.category}</h3>
        <div class='pay'>
        <p>$${Math.floor(data.price)}</p>
        <button class='get-btn' onclick='removeItem(${data.id})'>Remove</button>
        </div>
    </div>

    </div>` 

   })
  
}
filterData(unique)
function removeItem(id){
//   let fullData =  JSON.parse( localStorage.getItem('wishList'))

  let fil = unique.filter(val=>{
   return val.id!=id
  })
  localStorage.setItem('wishList',JSON.stringify(fil))
filterData(JSON.parse(localStorage.getItem('wishList')))
   unique = fil 
   show()

}
function show(){
    if(JSON.parse(localStorage.getItem('wishList')).length == 0){
    noData.style.display = 'inline-block'
}
else if(JSON.parse(localStorage.getItem('wishList')).length >=1){
        noData.style.display = 'none'

}
}
show()
button.addEventListener('click',()=>{
    window.location.href = './index.html'
})