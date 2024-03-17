const myMenu = document.querySelector('#myMenu');
const menu = document.querySelector('#menu');
    

 myMenu.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
    myMenu.classList.toggle('bg-white')
})