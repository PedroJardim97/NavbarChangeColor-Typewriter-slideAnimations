//FUNÇÃO PARA MUDAR ESTILO NAV

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav () {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')

    }
}

//FUNÇÃO PARA APARECER E SUMIR CAROUSEL AO DESCER SCROLL
window.addEventListener('scroll', carouselEffect)
const carousel = document.querySelector('.carousel')

function carouselEffect () {
    if(window.scrollY > carousel.offsetHeight + 350) {
        carousel.style.animation = `slide .5s forwards`;
    } else {
        carousel.style.animation = `slideBack .5s forwards`;
    }
}

//FUNÇÃO SLIDER
const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')
const imgWidth = document.querySelector('.slide--item').clientWidth

let index = 0;
let interval = setInterval(run, 2000)
function run () {
    index++
    changeImage()
}
function changeImage () {
    if(index > img.length -1) {
        index = 0
    } else if (index < 0) {
        index = img.length -1
    }
    imgs.style.transform = `translateX(${-index * imgWidth}px)`
}


// FUNÇÃO MÁQUINA DE ESCREVER
const titulo = document.querySelector('.text');

function typeWirte(elemento) {
    const textoArr = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArr.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra
        }, 75 * i)
    })
}
typeWirte(titulo)
