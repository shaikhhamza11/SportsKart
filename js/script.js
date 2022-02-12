

// Drop-down toggle

const accountDropdown = document.querySelector('#account-dropdown')
const menuList =document.querySelector('#menu-list')
const accountUp =document.querySelector('#account-up')
accountDropdown.addEventListener('click',()=>{
    menuList.classList.toggle('toggle')
    accountDropdown.style.display = "none"
    accountUp.style.display = "inline"

})

accountUp.addEventListener("click",()=>{
    menuList.classList.toggle('toggle')
    accountUp.style.display = "none"
    accountDropdown.style.display = "inline"

})