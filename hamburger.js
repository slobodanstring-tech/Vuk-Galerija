const hamburgerOpen = document.querySelector(".hamburger");
const linkovi = document.querySelector("#ul")
const headerRelative = document.querySelector("#header")
const sviLinkovi = document.querySelectorAll("#ul.a")//Biras ovako sve linkove koji se nalaze u ulicama


hamburgerOpen.addEventListener("click",()=>{
linkovi.classList.toggle("mobil-ul")
})
hamburgerOpen.addEventListener("click",()=>{
headerRelative.classList.toggle("header-relative")
})
hamburgerOpen.addEventListener("click",()=>{
  sviLinkovi.classList.toggle("header-relative")
})







