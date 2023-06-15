//-------------------------------------------------------------------------HEADER---------------------------------------------------------------------------------------

function openNav() {

    document.querySelector("nav").style.width = "250px";													//Establece la anchura del menú hamburguesa: de 0 a 250px
  }
  
  function closeNav() {

    document.querySelector("nav").style.width = "0";														//Establece la anchura del menú hamburguesa: de 250 a 0px
  }

//-------------------------------------------------------------------------MAIN---------------------------------------------------------------------------------------

const bloquesCondiciones = document.querySelectorAll('.bloque-condiciones');

bloquesCondiciones.forEach(bloque => {																		      //Itera sobre cada elemento del array bloquesCondiciones
  const titulo = bloque.querySelector('.titulo-condiciones');										//seleccionando cada título (class .titulo-condiciones)
  const seleccion = bloque.querySelector('.seleccion');
  const tituloInicial = titulo.style.transform; 
  const tituloTop = titulo.style.top;															  //y almacenando el estado inicial del título
  const seleccionInicial = seleccion.style.top;
  const opcionesInicial = seleccion.style.opacity;
  
  bloque.addEventListener('mouseover', () => {																  //agrega un evento mouseover a cada bloque
    titulo.style.transform = 'rotate(-0deg)';																    //que rota el elemento hasta dejarlo horizontal
	  titulo.style.top = '5%';
    seleccion.style.top = '55%';
    seleccion.style.opacity = 1;
  });
  
  bloque.addEventListener('mouseout', () => {
    titulo.style.transform = tituloInicial; 																    // Restaura el estado inicial del título al salir el mouse
    titulo.style.top = tituloTop;
	  seleccion.style.top = seleccionInicial;
    seleccion.style.opacity = opcionesInicial;

  });
});

const opciones = document.querySelectorAll('.opcion');

opciones.forEach(opcion => {
  opcion.addEventListener('click', function() {
    this.classList.toggle('seleccionado');
  });
});




