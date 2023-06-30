//-------------------------------------------------------------------------HEADER---------------------------------------------------------------------------------------

function openNav() {

    document.querySelector("nav").style.width = "250px";													//Establece la anchura del menú hamburguesa: de 0 a 250px
  }
  
  function closeNav() {

    document.querySelector("nav").style.width = "0";														//Establece la anchura del menú hamburguesa: de 250 a 0px
  }

//-------------------------------------------------------------------------MAIN---------------------------------------------------------------------------------------

const bloquesCondiciones = document.querySelectorAll('.bloque-condiciones');

bloquesCondiciones.forEach(bloque => {																		      // Itera sobre cada elemento del array bloquesCondiciones
  const titulo = bloque.querySelector('.titulo-condiciones');										// seleccionando cada título (class .titulo-condiciones)
  const seleccion = bloque.querySelector('.seleccion');
  const tituloInicial = titulo.style.transform; 
  const tituloTop = titulo.style.top;															              // y almacenando el estado inicial del título
  const seleccionInicial = seleccion.style.top;
  const opcionesInicial = seleccion.style.opacity;
  
  bloque.addEventListener('mouseover', () => {																  // agrega un evento mouseover a cada bloque
    titulo.style.transform = 'rotate(-0deg)';																    // que rota el elemento hasta dejarlo horizontal
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

//---------------------------------------------------------------------------CREAR MENÚ--------------------------------------------------------------------------------

let originalTabla = document.querySelector('#tablaMenu');
let originalTablaHTML = originalTabla.innerHTML;

function restaurarTabla() {
    // Restaurar el DOM a su estado original
    originalTabla.innerHTML = originalTablaHTML;

}

  // FUNCIÓN PARA CREAR MENÚ
  
  function crearMenu () {                                                                     // La función que crea un nuevo menú

    // MATRIZ DE MENÚS

    const comidasPrimerosNiños = Array(7);
    const comidasSegundosNiños = Array(7);
    const comidasPrimerosDaia = Array(7);
    const comidasSegundosDaia = Array(7);
    const cenasPrimerosNiños = Array(7);
    const cenasSegundosNiños = Array(7);
    const cenasPrimerosDaia = Array(7);
    const cenasSegundosDaia = Array(7);

    // FILAS DE LA TABLA DE MENÚS
    
    const filaComidasPrimerosNiños = document.querySelectorAll('.comida-primero-niños.añadir-valores');
    const filaComidasSegundosNiños = document.querySelectorAll('.comida-segundo-niños.añadir-valores');
    const filaComidasPrimerosDaia = document.querySelectorAll('.comida-primero-daia.añadir-valores');
    const filaComidasSegundosDaia = document.querySelectorAll('.comida-segundo-daia.añadir-valores');
    const filaCenasPrimerosNiños = document.querySelectorAll('.cena-primero-niños.añadir-valores');
    const filaCenasSegundosNiños = document.querySelectorAll('.cena-segundo-niños.añadir-valores');
    const filaCenasPrimerosDaia = document.querySelectorAll('.cena-primero-daia.añadir-valores');
    const filaCenasSegundosDaia = document.querySelectorAll('.cena-segundo-daia.añadir-valores');

    function vaciarMenu() {
  
      for (let i = 0; i < filaComidasPrimerosNiños.length; i++) {
        filaComidasPrimerosNiños[i].innerHTML = '';
      }
      console.log('borrado 1');
      for (let i = 0; i < filaComidasSegundosNiños.length; i++) {
        filaComidasSegundosNiños[i].innerHTML = '';
      }
      console.log('borrado 2');
      for (let i = 0; i < filaComidasPrimerosDaia.length; i++) {
        filaComidasPrimerosDaia[i].innerHTML = '';
      }
      console.log('borrado 3');
      for (let i = 0; i < filaComidasSegundosDaia.length; i++) {
        filaComidasSegundosDaia[i].innerHTML = '';
      }
      console.log('borrado 4');
      for (let i = 0; i < filaCenasPrimerosNiños.length; i++) {
        filaCenasPrimerosNiños[i].innerHTML = '';
      }
      console.log('borrado 5');
      for (let i = 0; i < filaCenasSegundosNiños.length; i++) {
        filaCenasSegundosNiños[i].innerHTML = '';
      }
      console.log('borrado 6');
      for (let i = 0; i < filaCenasPrimerosDaia.length; i++) {
        filaCenasPrimerosDaia[i].innerHTML = '';
      }
      console.log('borrado 7');
      for (let i = 0; i < filaCenasSegundosDaia.length; i++) {
        filaCenasSegundosDaia[i].innerHTML = '';
      }

      console.log('borrado 8');
      console.log('borrado realizado');
  
    }

    vaciarMenu();

    let todosLosPlatos = [...datosBBDD.registros];

    // FUNCIÓN PARA ELIMINAR PLATO CADA VEZ QUE ES SELECCIONADO

    function eliminarPlato(plato) {
      const indice = todosLosPlatos.findIndex(p => p[Object.keys(p)].nombre === plato[Object.keys(plato)].nombre);
      if (indice !== -1) {
          todosLosPlatos.splice(indice, 1);
      }
    }


    // RESTRICCIÓN 1: SEMANA DE COLE, solo cenas

    let semanaCole = false;                                                                   // Restricción de semana de cole

    if(semanaCole === true) {
      for(let i = 0; i < 5; i++) {
        comidasPrimerosNiños[i] = 'Semana de cole';
        comidasSegundosNiños[i] = 'Semana de cole';
        comidasPrimerosDaia[i] = 'Semana de cole';
        comidasSegundosDaia[i] = 'Semana de cole';
      }
    }

    // RESTRICCIÓN 2: SÁBADO O DOMINGO COMIDA

    let sabadoComida = false;                                                                  // Restricción de sábado comida

    if(sabadoComida === true) {
      comidasPrimerosNiños[5] = 'Se come fuera';
      comidasSegundosNiños[5] = 'Se come fuera';
      comidasPrimerosDaia[5] = 'Se come fuera';
      comidasSegundosDaia[5] = 'Se come fuera';
    }

    let domingoComida = false;                                                                 // Restricción de domingo comida

    if(domingoComida === true) {
      comidasPrimerosNiños[6] = 'Se come fuera';
      comidasSegundosNiños[6] = 'Se come fuera';
      comidasPrimerosDaia[6] = 'Se come fuera';
      comidasSegundosDaia[6] = 'Se come fuera';
    }

    // RESTRICCIÓN 3: VERDURA

    let numVerdura = 0;

    const restVerduraX2 = document.querySelector('#verd-opt1');
    const restVerduraX3 = document.querySelector('#verd-opt2');
    const restVerduraX4 = document.querySelector('#verd-opt3');
    const restVerduraX5 = document.querySelector('#verd-opt4');

    if(restVerduraX2.classList.contains('seleccionado')) {
      numVerdura = 2;
    } else if(restVerduraX3.classList.contains('seleccionado')) {
      numVerdura = 3;
    } else if(restVerduraX4.classList.contains('seleccionado')) {
      numVerdura = 4;
    } else if(restVerduraX5.classList.contains('seleccionado')) {
      numVerdura = 5;
    } else {
      numVerdura = 0;
    }

    // RESTRICCIÓN 4: PESCADO

    let numPescado = 0;

    const restPescadoX1 = document.querySelector('#pesc-opt1');
    const restPescadoX2 = document.querySelector('#pesc-opt2');
    const restPescadoX3 = document.querySelector('#pesc-opt3');

    if(restPescadoX1.classList.contains('seleccionado')) {
      numPescado = 1;
    } else if(restPescadoX2.classList.contains('seleccionado')) {
      numPescado = 2;
    } else if(restPescadoX3.classList.contains('seleccionado')) {
      numPescado = 3;
    } else {
      numPescado = 0;
    }

    // RESTRICCIÓN 5: CARNE

    let numCarne = 0;

    const restCarneX5 = document.querySelector('#carne-opt1');
    const restCarneX6 = document.querySelector('#carne-opt2');
    const restCarneX7 = document.querySelector('#carne-opt3');

    if(restCarneX5.classList.contains('seleccionado')) {
      numCarne = 5;
    } else if(restCarneX6.classList.contains('seleccionado')) {
      numCarne = 6;
    } else if(restCarneX7.classList.contains('seleccionado')) {
      numCarne = 7;
    } else {
      numCarne = 0;
    }

    let contVerduras = 0;
    let contCarne = 0;
    let contPescado = 0;

    // FUNCIÓN COMPLETAR MENÚ

    function completarMenu() {
      
      //COMIDAS PRIMEROS NIÑOS

      const CPNAleatorias = todosLosPlatos.filter(registro => {
        return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único') // devuelve un objeto que cumpla unas condiciones
          && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Marc & Paul')
          && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
      });

      for (let i = 0; i < comidasPrimerosNiños.length; i++) {
        if (comidasPrimerosNiños[i] === undefined || comidasPrimerosNiños[i] === '') {
          let indiceAleatorio = Math.floor(Math.random() * CPNAleatorias.length);
          let platoSeleccionado = CPNAleatorias[indiceAleatorio];
          comidasPrimerosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          if (platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único') {
            filaComidasPrimerosNiños[i].setAttribute('rowspan', '2');
            filaComidasSegundosNiños[i].remove();
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos') {
            comidasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
            if (platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único') {
              filaComidasPrimerosDaia[i].setAttribute('rowspan', '2');
              filaComidasSegundosDaia[i].remove();
            }
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Verdura') {
            contVerduras++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Carne') {
            contCarne++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Pescado') {
            contPescado++;
          }
          eliminarPlato(platoSeleccionado);
          CPNAleatorias.splice(indiceAleatorio, 1);
        }
      }

      //COMIDAS PRIMEROS AMAIA & DAVID
      const CPDAleatorias = todosLosPlatos.filter(registro => {
        return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')
          && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Amaia & David')
          && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
      });

      for (let i = 0; i < comidasPrimerosDaia.length; i++) {
        if (comidasPrimerosDaia[i] === undefined || comidasPrimerosDaia[i] === '') {
          let indiceAleatorio = Math.floor(Math.random() * CPDAleatorias.length);
          let platoSeleccionado = CPDAleatorias[indiceAleatorio];
          comidasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          if (platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único') {
            filaComidasPrimerosDaia[i].setAttribute('rowspan', '2');
            filaComidasSegundosDaia[i].remove();
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Verdura') {
            contVerduras++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Carne') {
            contCarne++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Pescado') {
            contPescado++;
          }
          eliminarPlato(platoSeleccionado);
          CPDAleatorias.splice(indiceAleatorio, 1);
        }
      }

      //COMIDAS SEGUNDOS NIÑOS
      const CSNAleatorias = todosLosPlatos.filter(registro => {
        return registro[Object.keys(registro)].plato === 'Segundo'
          && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Marc & Paul')
          && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
      });

      for (let i = 0; i < comidasSegundosNiños.length; i++) {
        if (comidasSegundosNiños[i] === undefined || comidasSegundosNiños[i] === '') {
          let indiceAleatorio = Math.floor(Math.random() * CSNAleatorias.length);
          let platoSeleccionado = CSNAleatorias[indiceAleatorio];
          comidasSegundosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          if (platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos') {
            comidasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Verdura') {
            contVerduras++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Carne') {
            contCarne++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Pescado') {
            contPescado++;
          }
          eliminarPlato(platoSeleccionado);
          CSNAleatorias.splice(indiceAleatorio, 1);
        }
      }

      //COMIDAS SEGUNDOS DAIA
      const CSDAleatorias = todosLosPlatos.filter(registro => {
        return registro[Object.keys(registro)].plato === 'Segundo'
          && registro[Object.keys(registro)].para === 'Amaia & David'
          && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
      });

      for (let i = 0; i < comidasSegundosDaia.length; i++) {
        if (comidasSegundosDaia[i] === undefined || comidasSegundosDaia[i] === '') {
          let indiceAleatorio = Math.floor(Math.random() * CSDAleatorias.length);
          let platoSeleccionado = CSDAleatorias[indiceAleatorio];
          comidasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          eliminarPlato(platoSeleccionado);
          CSDAleatorias.splice(indiceAleatorio, 1);
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Verdura') {
            contVerduras++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Carne') {
            contCarne++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Pescado') {
            contPescado++;
          }
        }
      }

      //CENAS PRIMEROS NIÑOS
      const CePNAleatorias = todosLosPlatos.filter(registro => {
        return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')
          && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Marc & Paul')
          && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
      });

      for (let i = 0; i < cenasPrimerosNiños.length; i++) {
        if (cenasPrimerosNiños[i] === undefined || cenasPrimerosNiños[i] === '') {
          let indiceAleatorio = Math.floor(Math.random() * CePNAleatorias.length);
          let platoSeleccionado = CePNAleatorias[indiceAleatorio];
          cenasPrimerosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          if (platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único') {
            filaCenasPrimerosNiños[i].setAttribute('rowspan', '2');
            filaCenasSegundosNiños[i].remove();
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos') {
            cenasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
            if (platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único') {
              filaCenasPrimerosDaia[i].setAttribute('rowspan', '2');
              filaCenasSegundosDaia[i].remove();
            }
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Verdura') {
            contVerduras++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Carne') {
            contCarne++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Pescado') {
            contPescado++;
          }
          eliminarPlato(platoSeleccionado);
          CePNAleatorias.splice(indiceAleatorio, 1);
        }
      }

      //CENAS PRIMEROS DAIA
      const CePDAleatorias = todosLosPlatos.filter(registro => {
        return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')
          && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Amaia & David')
          && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
      });

      for (let i = 0; i < cenasPrimerosDaia.length; i++) {
        if (cenasPrimerosDaia[i] === undefined || cenasPrimerosDaia[i] === '') {
          let indiceAleatorio = Math.floor(Math.random() * CePDAleatorias.length);
          let platoSeleccionado = CePDAleatorias[indiceAleatorio];
          cenasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          if (platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único') {
            filaCenasPrimerosDaia[i].setAttribute('rowspan', '2');
            filaCenasSegundosDaia[i].remove();
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Verdura') {
            contVerduras++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Carne') {
            contCarne++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Pescado') {
            contPescado++;
          }
          eliminarPlato(platoSeleccionado);
          CePDAleatorias.splice(indiceAleatorio, 1);
        }
      }

      //CENAS SEGUNDOS NIÑOS
      const CeSNAleatorias = todosLosPlatos.filter(registro => {
        return registro[Object.keys(registro)].plato === 'Segundo'
          && (registro[Object.keys(registro)].para === 'Marc & Paul' || registro[Object.keys(registro)].para === 'Todos')
          && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
      });

      for (let i = 0; i < cenasSegundosNiños.length; i++) {
        if (cenasSegundosNiños[i] === undefined || cenasSegundosNiños[i] === '') {
          let indiceAleatorio = Math.floor(Math.random() * CeSNAleatorias.length);
          let platoSeleccionado = CeSNAleatorias[indiceAleatorio];
          cenasSegundosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          if (platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos') {
            cenasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Verdura') {
            contVerduras++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Carne') {
            contCarne++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Pescado') {
            contPescado++;
          }
          eliminarPlato(platoSeleccionado);
          CeSNAleatorias.splice(indiceAleatorio, 1);
        }
      }

      //CENAS SEGUNDOS DAIA
      const CeSDAleatorias = todosLosPlatos.filter(registro => {
        return registro[Object.keys(registro)].plato === 'Segundo'
          && registro[Object.keys(registro)].para === 'Amaia & David'
          && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
      });

      for (let i = 0; i < cenasSegundosDaia.length; i++) {
        if (cenasSegundosDaia[i] === undefined || cenasSegundosDaia[i] === 'undefined') {
          let indiceAleatorio = Math.floor(Math.random() * CeSDAleatorias.length);
          let platoSeleccionado = CeSDAleatorias[indiceAleatorio];
          cenasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          CeSDAleatorias.splice(indiceAleatorio, 1);
          eliminarPlato(platoSeleccionado);
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Verdura') {
            contVerduras++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Carne') {
            contCarne++;
          }
          if (platoSeleccionado[Object.keys(platoSeleccionado)].tipo === 'Pescado') {
            contPescado++;
          }
        }
      }

    }

    completarMenu();
    console.log('Función completarMenu lanzada');

  if(contVerduras < numVerdura && contCarne > numCarne && contPescado < numPescado) {
    completarMenu();
  }

    // CONTADOR VERDURAS, CARNES Y PESCADOS
 
    console.log(`el total de verduras es ${contVerduras}`);
    console.log(`el total de carnes es ${contCarne}`);
    console.log(`el total de pescados es ${contPescado}`); 

    // VOLCAR MATRIZ EN TABLA

    for(let z = 0; z < comidasPrimerosNiños.length; z++) {                                    // Vuelca la fila de comidasPrimerosNiños
      filaComidasPrimerosNiños[z].innerHTML = comidasPrimerosNiños[z];
    }

    for(let z = 0; z < comidasSegundosNiños.length; z++) {                                    // Vuelca la fila de comidasSegundosNiños
      filaComidasSegundosNiños[z].innerHTML = comidasSegundosNiños[z];
    }

    for(let z = 0; z < comidasPrimerosDaia.length; z++) {                                    // Vuelca la fila de comidasPrimerosDaia
      filaComidasPrimerosDaia[z].innerHTML = comidasPrimerosDaia[z];
    }

    for(let z = 0; z < comidasSegundosDaia.length; z++) {                                    // Vuelca la fila de comidasSegundosDaia
      filaComidasSegundosDaia[z].innerHTML = comidasSegundosDaia[z];
    }

    for(let z = 0; z < cenasPrimerosNiños.length; z++) {                                    // Vuelca la fila de cenasPrimerosNiños
      filaCenasPrimerosNiños[z].innerHTML = cenasPrimerosNiños[z];
    }

    for(let z = 0; z < cenasSegundosNiños.length; z++) {                                    // Vuelca la fila de cenasSegundosNiños
      filaCenasSegundosNiños[z].innerHTML = cenasSegundosNiños[z];
    }

    for(let z = 0; z < cenasPrimerosDaia.length; z++) {                                    // Vuelca la fila de cenasPrimerosDaia
      filaCenasPrimerosDaia[z].innerHTML = cenasPrimerosDaia[z];
    }

    for(let z = 0; z < cenasSegundosDaia.length; z++) {                                    // Vuelca la fila de cenasSegundosDaia
      filaCenasSegundosDaia[z].innerHTML = cenasSegundosDaia[z];
    }

    console.log('Función crearMenu lanzada');
  
  }

  // BOTÓN CREAR MENÚ
  
  const botonCrearMenu = document.querySelector('#crearMenu');
  const botonCambiarCondiciones = document.querySelector('#cambiarCondiciones');
  const divCondiciones = document.querySelector('#condiciones');
  const divTablaMenu = document.querySelector('#tabla-menu');


  botonCrearMenu.onclick = function() {
    restaurarTabla();
    crearMenu();
    botonCambiarCondiciones.style.width = '50%';
    botonCrearMenu.style.width = '50%';
    divCondiciones.style.display = 'none';
    divTablaMenu.style.display = 'flex';
  }

  botonCambiarCondiciones.onclick = function() {
    botonCambiarCondiciones.style.width = '0%';
    botonCrearMenu.style.width = '100%';
    divCondiciones.style.display = 'flex';
    divTablaMenu.style.display = 'none';
  }

  //------------------------------------------------------------------------BBDD SIMULADA--------------------------------------------------------------------------------

const datosBBDD = {
  registros: [
    {
      brocoli: {
        id: '1',
        nombre: 'Brócoli',
        plato: 'Primero',
        tipo: 'Verdura',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      arrozCubana: {
        id: '2',
        nombre: 'Arroz a la cubana',
        plato: 'Primero',
        tipo: 'Arroz',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      arrozTomate: {
        id: '3',
        nombre: 'Arroz con tomate TM',
        plato: 'Primero',
        tipo: 'Arroz',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      lomo: {
        id: '4',
        nombre: 'Lomo',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      vainasPatatas: {
        id: '5',
        nombre: 'Vainas con patatas',
        plato: 'Primero',
        tipo: 'Verdura',
        para: 'Todos',
        coc: 'Comida'
      }
    },
    {
      merluzaRebozada: {
        id: '6',
        nombre: 'Merluza rebozada',
        plato: 'Segundo',
        tipo: 'Pescado',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      macarronesTomate: {
        id: '7',
        nombre: 'Macarrones con tomate',
        plato: 'Primero',
        tipo: 'Pasta',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      salchichasPatatas: {
        id: '8',
        nombre: 'Salchichas con patatas',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      alitasPollo: {
        id: '9',
        nombre: 'Alitas de pollo',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      pechugasPollo: {
        id: '10',
        nombre: 'Pechugas de pollo',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      salmonPatatas: {
        id: '11',
        nombre: 'Salmón con patatas',
        plato: 'Segundo',
        tipo: 'Pescado',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      coliflor: {
        id: '12',
        nombre: 'Coliflor',
        plato: 'Primero',
        tipo: 'Verdura',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      quesadillas: {
        id: '13',
        nombre: 'Quesadillas',
        plato: 'Segundo',
        tipo: 'Mexican',
        para: 'Amaia & David',
        coc: 'Cena'
      }
    },
    {
      nachosGuacamole: {
        id: '14',
        nombre: 'Nachos con guacamole',
        plato: 'Segundo',
        tipo: 'Mexican',
        para: 'Amaia & David',
        coc: 'Cena'
      }
    },
    {
      nachosQuesadillas: {
        id: '15',
        nombre: 'Guacamole y quesadillas',
        plato: 'Plato único',
        tipo: 'Mexican',
        para: 'Amaia & David',
        coc: 'Cena'
      }
    },
    {
      lentejas: {
        id: '16',
        nombre: 'Lentejas',
        plato: 'Primero',
        tipo: 'Legumbres',
        para: 'Todos',
        coc: 'Comida'
      }
    },
    {
      patatasRiojana: {
        id: '17',
        nombre: 'Patatas a la riojana',
        plato: 'Primero',
        tipo: 'Puchero',
        para: 'Todos',
        coc: 'Comida'
      }
    },
    {
      arrozVerduras: {
        id: '18',
        nombre: 'Arroz con verduras',
        plato: 'Primero',
        tipo: 'Arroz',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      arrozVerdurasTM: {
        id: '19',
        nombre: 'Arroz con sofrito de verduras TM',
        plato: 'Primero',
        tipo: 'Arroz',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      espaguetiCarbonara: {
        id: '20',
        nombre: 'Espagueti a la carbonara',
        plato: 'Primero',
        tipo: 'Pasta',
        para: 'Amaia & David',
        coc: 'Comida'
      }
    },
    {
      pastaFresca: {
        id: '21',
        nombre: 'Pasta fresca',
        plato: 'Primero',
        tipo: 'Pasta',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      pureCalabaza: {
        id: '22',
        nombre: 'Puré de calabaza',
        plato: 'Primero',
        tipo: 'Verdura',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      pureCalabacin: {
        id: '23',
        nombre: 'Puré de calabacín',
        plato: 'Primero',
        tipo: 'Verdura',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      albondigas: {
        id: '24',
        nombre: 'Albóndigas',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      polloPatatas: {
        id: '25',
        nombre: 'Pollo con patatas',
        plato: 'Plato único',
        tipo: 'Carne',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      arrozPolloTM: {
        id: '26',
        nombre: 'Arroz con pollo TM',
        plato: 'Plato único',
        tipo: 'Arroz',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      calabacinRellenoTM: {
        id: '27',
        nombre: 'Calabacín relleno TM',
        plato: 'Segundo',
        tipo: 'Verdura',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      fideosVerdurasTM: {
        id: '28',
        nombre: 'Fideos con verduras TM',
        plato: 'Primero',
        tipo: 'Pasta',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      salmorejo: {
        id: '29',
        nombre: 'Salmorejo TM',
        plato: 'Primero',
        tipo: 'Verdura',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      ensaladaPasta: {
        id: '30',
        nombre: 'Ensalada de pasta',
        plato: 'Plato único',
        tipo: 'Ensalada',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      ensaladaTomBonAguac: {
        id: '31',
        nombre: 'Ensalada de tomate, bonito y aguacate',
        plato: 'Primero',
        tipo: 'Ensalada',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      poloMielArrozTM: {
        id: '32',
        nombre: 'Pollo a la miel con arroz TM',
        plato: 'Plato único',
        tipo: 'Carne',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      costillaBarbacoa: {
        id: '33',
        nombre: 'Costilla con salsa barbacoa',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      macCheese: {
        id: '34',
        nombre: 'Mac&Cheese',
        plato: 'Primero',
        tipo: 'Pasta',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      polloAjilloTM: {
        id: '35',
        nombre: 'Pollo al ajillo TM',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      tortillaFrancesa: {
        id: '36',
        nombre: 'Tortilla francesa',
        plato: 'Segundo',
        tipo: 'Huevo',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      pastelVerduras: {
        id: '37',
        nombre: 'Pastel de verduras TM',
        plato: 'Segundo',
        tipo: 'Verdura',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      estofadoBerenjena: {
        id: '38',
        nombre: 'Estofado de berenjena con arroz TM',
        plato: 'Plato único',
        tipo: 'Verdura',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      pistoArroz: {
        id: '39',
        nombre: 'Pisto con arroz TM',
        plato: 'Plato único',
        tipo: 'Verdura',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      conejoPatatas: {
        id: '40',
        nombre: 'Conejo con patatas',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      hamburguesa: {
        id: '41',
        nombre: 'Hamburguesa',
        plato: 'Segundo',
        tipo: 'Carne',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      merluzaCocida: {
        id: '42',
        nombre: 'Merluza cocida',
        plato: 'Segundo',
        tipo: 'Pescado',
        para: 'Marc & Paul',
        coc: 'Comida o cena'
      }
    },
    {
      huevosFritos: {
        id: '43',
        nombre: 'Huevos fritos',
        plato: 'Segundo',
        tipo: 'Huevo',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      salchichasPure: {
        id: '44',
        nombre: 'Salchichas con puré de patata',
        plato: 'Plato único',
        tipo: 'Carne',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      coliflorBechamel: {
        id: '45',
        nombre: 'Coliflor con bechamel',
        plato: 'Primero',
        tipo: 'Verdura',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      alubiasChorizo: {
        id: '46',
        nombre: 'Alubis con chorizo TM',
        plato: 'Primero',
        tipo: 'Legumbre',
        para: 'Todos',
        coc: 'Comida'
      }
    },
    {
      risottoParmesano: {
        id: '47',
        nombre: 'Risotto con parmesano TM',
        plato: 'Primero',
        tipo: 'Pasta',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      quicheJamonQueso: {
        id: '48',
        nombre: 'Quiche de jamón y queso',
        plato: 'Segundo',
        tipo: 'Masa',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      croquetas: {
        id: '49',
        nombre: 'Croquetas',
        plato: 'Primero',
        tipo: 'Fritos',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      ensaladaPastaPesto: {
        id: '50',
        nombre: 'Ensalada de pasta con pesto',
        plato: 'Plato único',
        tipo: 'Ensalada',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      tortillaPatata: {
        id: '51',
        nombre: 'Tortilla de patata',
        plato: 'Segundo',
        tipo: 'Huevo',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      gulas: {
        id: '52',
        nombre: 'Gulas',
        plato: 'Primero',
        tipo: 'Pescado',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      sopaPescado: {
        id: '53',
        nombre: 'Sopa de pescado TM',
        plato: 'Primero',
        tipo: 'Pescado',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      sanJacobo: {
        id: '54',
        nombre: 'San Jacobos',
        plato: 'Segundo',
        tipo: 'Fritos',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo55: {
        id: '55',
        nombre: 'nuevo55',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo56: {
        id: '56',
        nombre: 'nuevo56',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo57: {
        id: '57',
        nombre: 'nuevo57',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo58: {
        id: '58',
        nombre: 'nuevo58',
        plato: 'Segundo',
        tipo: 'tbd',
        para: 'Marc & Paul',
        coc: 'Cena'
      }
    },
    {
      nuevo59: {
        id: '59',
        nombre: 'nuevo59',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Marc & Paul',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo60: {
        id: '60',
        nombre: 'nuevo60',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo61: {
        id: '61',
        nombre: 'nuevo61',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo62: {
        id: '62',
        nombre: 'nuevo62',
        plato: 'Segundo',
        tipo: 'tbd',
        para: 'Marc & Paul',
        coc: 'Cena'
      }
    },
    {
      nuevo63: {
        id: '63',
        nombre: 'nuevo63',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Marc & Paul',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo64: {
        id: '64',
        nombre: 'nuevo64',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo65: {
        id: '65',
        nombre: 'nuevo65',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Amaia & David',
        coc: 'Comida o cena'
      }
    },
    {
      nuevo66: {
        id: '66',
        nombre: 'nuevo66',
        plato: 'Segundo',
        tipo: 'tbd',
        para: 'Marc & Paul',
        coc: 'Cena'
      }
    },
    {
      nuevo67: {
        id: '67',
        nombre: 'nuevo67',
        plato: 'Primero',
        tipo: 'tbd',
        para: 'Marc & Paul',
        coc: 'Comida o cena'
      }
    }
  ],

  agregarRegistro: function(registro) {
    this.registros.push(registro);
  },

  obtenerRegistros: function() {
    return this.registros;
  },

  editarRegistro: function(indice, nuevoObjeto) {
    this.registros[indice] = nuevoObjeto;
  },

  eliminarRegistro: function(indice) {
    this.registros.splice(indice, 1);
  }
};