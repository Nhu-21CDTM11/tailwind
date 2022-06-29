const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click",function()
{
    menu.classList.toggle('invisible');
});