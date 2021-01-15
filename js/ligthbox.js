let body = document.getElementsByTagName('body')[0]


let img = document.getElementsByClassName('hero-image')[0]
img.addEventListener('click',seleccionar)

function seleccionar() {
    let imgAtr = document.getElementsByClassName('hero-image')[0].getAttribute('src')
    console.log(imgAtr);

    body.appendChild(document.createElement('div')).setAttribute('id','conte')
    let contenedor = document.getElementById('conte')
    contenedor.appendChild(document.createElement('img')).setAttribute('id','modal')
    let imagen = document.getElementById('modal')
    imagen.setAttribute('src',imgAtr)
    imagen.style.width='100%';
    imagen.style.height='100%';
    imagen.style.position='fixed';
    imagen.style.left='0';
    imagen.style.top='0';



}