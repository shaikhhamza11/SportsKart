
// hamburger

const hamburger =document.querySelector("#bar")
const navbarList = document.querySelector('#navbar-lists')
const closeNavbar = document.querySelector('#close-navbar')
    hamburger.addEventListener('click',()=> navbarList.classList.add ('toggle'))
    closeNavbar.addEventListener('click',()=>navbarList.classList.remove('toggle'))
