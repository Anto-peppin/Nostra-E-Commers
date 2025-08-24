let form = document.querySelector('form')
let loginDiv = document.querySelector('.login')
let main = document.querySelector('.main')
let scroolitem = document.querySelector('.scroolitem')
let allData = document.querySelectorAll('.allData')
let collection = document.querySelector('.filtercollection')
let uName = document.querySelector('.name')
let menubar = document.querySelector('.menubar')
let extranav = document.querySelector('.extranav')
let closebut = document.querySelector('.close')
let person = document.querySelector('.person')
let heart = document.querySelector('.heart')


if(localStorage.getItem('mylogin') == null){
    localStorage.setItem('mylogin',0)
     loginDiv.style.display = 'none'

}
form.addEventListener('submit',login)
function login(e){
    e.preventDefault()

    let inputs = document.querySelectorAll('.login_input')
    let user = []
    let values = []
    inputs.forEach(input=>{
       let value =  checking(input)
       user.push(value[1]);
       
       values.push(value)  
        
    })
    let final =  values.every(val=>{
        
        
        return val[0]
        
     })

     if(final == true){
        localStorage.setItem('mylogin','1')
         loginDiv.style.display = 'none'
          main.style.display = 'inline-block'
          localStorage.setItem('user',JSON.stringify(user))
          storeName = JSON.parse(localStorage.getItem('user'))[0]
          let finalName = String(storeName).trim().slice(0,1).toUpperCase() + storeName.trim().slice(1).toLowerCase()
          
          uName.innerHTML = `Hi ${finalName} 💝`
     }
    

}
// --------------relogin-------------------
// but.addEventListener('click',()=>{
//     localStorage.setItem('mylogin','0')
//     loginDiv.style.display = 'inline-block'
//  main.style.display = 'none'

// })
 if(localStorage.getItem('mylogin') == '1'){
        loginDiv.style.display = 'none'
        main.style.display = 'inline-block'
         storeName = JSON.parse(localStorage.getItem('user'))[0]
          let finalName = String(storeName).trim().slice(0,1).toUpperCase() + storeName.trim().slice(1).toLowerCase()
          
          uName.innerHTML = `Hi ${finalName} 💝`

     }
     else if(localStorage.getItem('mylogin') == '0'){
         loginDiv.style.display = 'inline-block'
         main.style.display = 'none'
     }
function checking(input){


    
    let firstParent = input.parentElement;
    let parent = firstParent.parentElement;
   

    if(input.type === 'text'){      
        let errorDiv =  parent.querySelector('.error')
        if(input.value == "" || (input.value.length<2 || input.value.length>20)){
            errorDiv.style.display = 'inline-block'
            errorDiv.innerText = '*Enter your sweat Name';

            return false

        }
        else{
             errorDiv.style.display = 'none'
            return [true,input.value]
        }
    }
    else if(input.type === 'email'){
        let pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
     let mail =    pattern.test(input.value)
     let errorDiv =  parent.querySelector('.error')
   if(mail == false){
            errorDiv.style.display = 'inline-block'
            errorDiv.innerText = '*Fill the valid E-mail';
            return false

   }
   else{
             errorDiv.style.display = 'none'
            return [true,input.value]
        }
     
    }

    else if(input.type === 'number'){
     let errorDiv =  parent.querySelector('.error')
     if(Number(input.value)<18 || Number(input.value)>90  || input.value == ''){
         errorDiv.style.display = 'inline-block'
            errorDiv.innerText = '*Fill the valid Age';
            return false
        
     }
      else{
             errorDiv.style.display = 'none'
            return [true,input.value]
        }
     
    }
    else if(input.type === 'password'){
         let errorDiv =  parent.querySelector('.error')
     if(input.value.length<4|| input.value.length>10  || input.value == ''){
         errorDiv.style.display = 'inline-block'
            errorDiv.innerText = '*Set the password 4-10 Digits';
            return false
        
     }
     else{
             errorDiv.style.display = 'none'
            return [true,input.value]
        }
    }
    


    }

 async function products(){
    try{
        let first = await fetch('https://fakestoreapi.com/products');
        let sec = await first.json()
        localStorage.setItem('products',JSON.stringify(sec))
    
    }
    catch(error){
        console.log(error.message);
        
    }

}



 let viewproducts = JSON.parse(localStorage.getItem('products'));
 
viewproducts.forEach((val,index)=>{
    scroolitem.innerHTML += `<div class="item" style="--position:${index+1}">
    <img class='pro' src="${val.image}" alt="${val.title}">
  
    
    <div class="data">  
        <div>
          <div class="title">${val?.title.length>15? val?.title.slice(0,16)+'...':val?.title}</div>
          <div class="rate">⭐${val?.rating?.rate}</div>
        </div>
        <h3>${val.category}</h3>
        <div class='pay'>
        <p>$${Math.floor(val.price)}</p>
        <button class='get-btn' onclick='getbtn(${index})'>Add to wish <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="white"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></button>
        </div>
    </div>

    </div>`
 


})
if(localStorage.getItem('wishList') == null){

    let wish = []
    localStorage.setItem('wishList',JSON.stringify(wish))
}
function getbtn(val){
let data1 = JSON.parse(localStorage.getItem('wishList'))
data1.push(viewproducts[val])
localStorage.setItem('wishList',JSON.stringify(data1))

}

allData.forEach(li=>{
    li.addEventListener('click',()=>filterData(li.innerHTML))
})
function filterData(data){
  
    
   let allData =  JSON.parse(localStorage.getItem('products'))
   let filteredData = allData.filter((val)=>val.category == data.toLowerCase())
   collection.innerHTML = ''
   filteredData.forEach((data,index)=>{
    collection.innerHTML +=`<div class="filtercon">
    <div class='filimg'>
    <img src="${data.image}" alt="${data.title}">
  </div>
    
    <div class="fildata">  
        
          <div class="title">${data?.title.length>20? data?.title.slice(0,23)+'...':data?.title}</div>
          <div class="rate">⭐${data?.rating?.rate}</div>
       
        <h3>${data.category}</h3>
        <div class='pay'>
        <p>$${Math.floor(data.price)}</p>
        <button class='get-btn' onclick='detail(${index})'>Get full Detail<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="white"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg></button>
        </div>
    </div>

    </div>` 

   })
  
}

if(localStorage.getItem('details') == null){

    let tail = []
    localStorage.setItem('details',JSON.stringify(tail))
}
function detail(val){
let data2 = JSON.parse(localStorage.getItem('details'))
data2.length = 0
data2.push(viewproducts[val])
localStorage.setItem('details',JSON.stringify(data2))
console.log(data2);


}

window.onload = ()=>{
    filterData('jewelery')

}

menubar.addEventListener('click',()=>{
    extranav.style.display = 'inline-block'
    closebut.style.display = 'inline-block'
    menubar.style.display = 'none'

})
closebut.addEventListener('click',()=>{
        closebut.style.display = 'none'
         extranav.style.display = 'none'
         menubar.style.display = 'inline-block'


})
person.addEventListener('click',()=>{
    window.location.href = './MyAccount.html'
})
heart.addEventListener('click',()=>{
    window.location.href = './WishList.html'
})









  
    
    



