let uName = document.querySelector('.name')
let mail = document.querySelector('.mail')
let but = document.querySelector('.but')
let button = document.querySelector('.button')
let userref = JSON.parse(localStorage.getItem('user'))[0]
let userName = String(userref).trim().slice(0,1).toUpperCase() + userref.trim().slice(1).toLowerCase()
let usermail = JSON.parse(localStorage.getItem('user'))[1]
but.addEventListener('click',()=>{
    window.location.href = './index.html'
      JSON.parse(localStorage.setItem('mylogin','0'))
})
 button.addEventListener('click',()=>{
        window.location.href = './index.html'

 })

uName.innerHTML = userName
mail.innerHTML = usermail