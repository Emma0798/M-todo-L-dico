// window.addEventListener("scroll",function(){
//     //Cada vez que el scroll en Y sea mayor a 0 le agrega una clase .abajo al header
//     var header = document.querySelector("header");
//     header.classList.toggle("abajo",window.scrollY>0);
// })

var navbar = document.getElementById("nav-container");
var menu = document.getElementById("nav-menu");


window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
        logo.classList.remove("spacing");
    }
}

