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

//-----------------------------------------------------------------BBDD-----------------------------------------------------------------------------

const datosBBDD = {
  registros: [
    {
      brócoli: {
        nombre: 'Brócoli',
        plato: 'Primero',
        tipo: 'Verdura',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      arrozCubana: {
        nombre: 'Arroz a la cubana',
        plato: 'Primero',
        tipo: 'Arroz',
        para: 'Todos',
        coc: 'Comida o cena'
      }
    },
    {
      arrozTomate: {
        nombre: 'Arroz con tomate (Thermomix)',
        plato: 'Primero',
        tipo: 'Arroz',
        para: 'Todos',
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


//-------------------------------------------------------------GESTIÓN BBDD-------------------------------------------------------------------------

const nuevoEdit = document.querySelector('.butEdit');
const nuevoDelete = document.querySelector('.butDelete');
const nuevoNumero = document.querySelector('.bbdd-num');
const nuevoNombre = document.querySelector('#bbddnueva-valores #datoNombre');
const nuevoPlato = document.querySelector('#bbddnueva-valores #datoPlato');
const nuevoTipo = document.querySelector('#bbddnueva-valores #datoTipo');
const nuevoPara = document.querySelector('#bbddnueva-valores #datoPara');
const nuevoCoc = document.querySelector('#bbddnueva-valores #datoCoc');

const bbdd = document.querySelector('#bbdd');
const tbody = document.querySelector('#bbdd tbody');

function crearNuevaComida() {
  const nuevaComida = [
    nuevoEdit.innerHTML,
    nuevoDelete.innerHTML,
    nuevoNumero.innerHTML,
    nuevoNombre.value,
    nuevoPlato.value,
    nuevoTipo.value,
    nuevoPara.value,
    nuevoCoc.value
  ];

  const tbody = document.querySelector('#bbdd tbody');

  const nuevaFila = document.createElement('tr');                               // Crear nueva fila
  nuevaFila.setAttribute('id', 'numeropordefinir');                             //Asigna el atributo 'id' a la nueva fila y el valor del atributo

  //Requiere una función para buscar el último id de fila

  for (let i = 0; i < nuevaComida.length; i++) {                                // Crear celdas y asignar contenido y clases
    const celda = document.createElement('td');                                 //Se crea la celda
    celda.className = `fila-tabla-bbdd`;                                        //y se le asigna la clase para que concuerde con el resto de la tabla

    if (i < 2) {
      celda.innerHTML = nuevaComida[i];
    } else {
      celda.textContent = nuevaComida[i];
    }

    nuevaFila.appendChild(celda);
  }

  tbody.appendChild(nuevaFila);                                                 // Agregar fila al tbody

  var filaNueva = document.getElementById('bbddnueva-valores');                 //Hace referencia a la fila donde se introducen los valores a agregar
  var campos = filaNueva.getElementsByTagName('input');                         //Hace referencia a los inputs de la fila donde se introducen los valores a agregar

  for (let i = 0; i < campos.length; i++) {                                     //Itera sobre el array de elementos de los valores nuevos introducidos
    if (campos[i].id === 'datoNombre') {                                        //Si uno de los elementos tiene un id = 'datoNombre', refiriendose al campo Nombre
      campos[i].value = 'Introducir Nombre';                                    //Le asigna el valor 'Introducir nombre'
    } else {
      campos[i].value = '';                                                     //En el resto de casos no asigna nada
    }
  }
}

const btnAgregarComida = document.querySelector('#introducir-comida');          //Hace referencia añ botón de Agregar menú
btnAgregarComida.addEventListener('click', crearNuevaComida);                   // Asigna el controlador de eventos al hacer clic en el botón
