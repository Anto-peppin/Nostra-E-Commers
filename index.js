let form = document.querySelector('form')
let loginDiv = document.querySelector('.login')
let main = document.querySelector('.main')


if(localStorage.getItem('mylogin') == null){
    localStorage.setItem('mylogin',0)
     loginDiv.style.display = 'none'

}
form.addEventListener('submit',login)
function login(e){
    e.preventDefault()

    let inputs = document.querySelectorAll('.login_input')
    let values = []
    inputs.forEach(input=>{
       let value =  checking(input)
       values.push(value)  
        
    })
     console.log(values);
    let final =  values.every(val=>{
        return val[0]
        
     })
     if(final == true){
        localStorage.setItem('mylogin','1')
         loginDiv.style.display = 'none'
          main.style.display = 'inline-block'
     }
    

}
// --------------relogin-------------------
// but.addEventListener('click',()=>{
//     localStorage.setItem('mylogin','0')
//     loginDiv.style.display = 'inline-block'

// })
 if(localStorage.getItem('mylogin') == '1'){
        loginDiv.style.display = 'none'
        main.style.display = 'inline-block'

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

    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())            
    //         .then(json=>
    //         {
    //             console.log(json);
                
    //             let img = document.createElement('img')
    //             img.src = `${json[0].image}`;
    //             document.body.appendChild(img)
                
    //         }
    //         )


  
    
    



