/*Testes



document.querySelector('.tecla_pom').onclick = tocaSomPom;

//Clap ----------------------------
function tocaSomClap() {
  document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

*/

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if(elemento === null) {
    console.log('Elemento não encontrado');
  } else {
    console.log(elemento.localName);
    
    if(elemento.localName === 'audio') {
      elemento.play();
    }
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  
  //template string ----------------------
  const idAudio = `#som_${instrumento}`;
  //console.log(idAudio);
  //---------------------------------------
  tecla.onclick = function() {
    tocaSom(idAudio);
}

  tecla.onkeydown = function(evento) {
    console.log(evento.code == 'Space' || evento.code === 'Enter');

    if(evento.code === 'Space' || evento.code ===  'Enter') {
    tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function() {
    tecla.classList.remove('ativa');
  } 
}

