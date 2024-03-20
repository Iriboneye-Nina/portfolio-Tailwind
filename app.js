const myMenu = document.querySelector('#myMenu');
const menu = document.querySelector('#menu');
    

 myMenu.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
    myMenu.classList.toggle('bg-white')
})
window.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 200}ms`;
      card.classList.add('animate-fadeInUp');
    });
  });