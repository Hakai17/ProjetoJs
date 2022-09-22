function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; (usado para botao especifico)

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
 
