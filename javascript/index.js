// window.addEventListener("scroll",function(){
//     //Cada vez que el scroll en Y sea mayor a 0 le agrega una clase .abajo al header
//     var header = document.querySelector("header");
//     header.classList.toggle("abajo",window.scrollY>0);
// })

let navbar = document.getElementById("nav-container");
let menu = document.getElementById("nav-menu");

const btnSwitch = document.querySelector('#switch');


window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
        logo.classList.remove("spacing");
    }
}


//Cambiamos el color a modo oscuro, utlizamos el toggle para activar y desactivar las clases dark y active

btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

//Con esta funcion cambiamos el texto del boton de cambio de color

function FbotonOn() {
    if (btnSwitch.innerHTML == 'Modo Claro') 
        btnSwitch.innerHTML = 'Modo Oscuro';
    else btnSwitch.innerHTML = 'Modo Claro'; 
  }