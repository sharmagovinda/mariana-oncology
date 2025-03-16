const hamB =document.querySelector("#hamBurger");
const hamClose =document.querySelector("#hamBurger-close");
const nav =document.querySelector("#navBar");

hamB.addEventListener('click',()=>{
nav.classList.add('active');
})

hamClose.addEventListener('click',()=>{
nav.classList.remove('active');
})


