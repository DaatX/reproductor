let creproductor = document.querySelector('#creproductor');
let reproductor = document.querySelector('.reproductor');
let cajacontainer = document.querySelector('.container .caja-container');

creproductor.onclick = () => {
    creproductor.classList.toggle('fa-times');
    reproductor.classList.toggle('active');
    cajacontainer.classList.toggle('active');
}

let cajas = document.querySelectorAll('.container .caja-container .caja');

cajas.forEach(caja => {

    caja.onclick = () => {
        let src = caja.getAttribute('data-src');
        let text = caja.querySelector('.contenido h3').innerText;
        creproductor.classList.add('fa-times');
        reproductor.classList.add('active');
        cajacontainer.classList.add('active');
        reproductor.querySelector('h3').innerText = text;
        reproductor.querySelector('audio').src = src;
        reproductor.querySelector('audio').play();
    }

});