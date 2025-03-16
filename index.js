document.addEventListener("DOMContentLoaded", function () {
 const hamB = document.querySelector("#hamBurger");
 const nav = document.querySelector("#navBar");

 if (hamB && nav) {
   hamB.addEventListener("click", () => {
     hamB.classList.toggle("active");
     nav.classList.toggle("active");
   });
 }
});