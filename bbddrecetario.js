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
          nombre: 'Arroz con tomate (Thermomix)',
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
          plato: 'Plato único',
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
          nombre: 'Arroz con sofrito de verduras (ThermoMix)',
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
          nombre: 'Arroz con pollo (ThermoMix)',
          plato: 'Plato único',
          tipo: 'Arroz',
          para: 'Todos',
          coc: 'Comida o cena'
        }
      },
      {
        calabacinRellenoTM: {
          id: '27',
          nombre: 'Calabacín relleno (ThermoMix)',
          plato: 'Segundo',
          tipo: 'Verdura',
          para: 'Amaia & David',
          coc: 'Comida o cena'
        }
      },
      {
        fideosVerdurasTM: {
          id: '28',
          nombre: 'Fideos con verduras (ThermoMix)',
          plato: 'Primero',
          tipo: 'Pasta',
          para: 'Todos',
          coc: 'Comida o cena'
        }
      },
      {
        salmorejo: {
          id: '29',
          nombre: 'Salmorejo (ThermoMix)',
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
          nombre: 'Pollo a la miel con arroz (ThermoMix)',
          plato: 'Plato único',
          tipo: 'Carne',
          para: 'Amaia & David',
          coc: 'Comida o cena'
        }
      },
      {
        constillaBarbacoa: {
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
          plato: 'Plato único',
          tipo: 'Pasta',
          para: 'Todos',
          coc: 'Comida o cena'
        }
      },
      {
        polloAjilloTM: {
          id: '35',
          nombre: 'Pollo al ajillo (ThermoMix)',
          plato: 'Segundo',
          tipo: 'Carne',
          para: 'Amaia & David',
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

//--------------------------------------------------------------CARGA BBDD--------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function cargaBBDD() {            //Crea una función que se dispara cuando se carga el DOM
    let numID = 0;                                                                //Crea una variable para dar un ID a cada nuevo plato
    for (const registro of datosBBDD.registros) {                                 //Mediante un bucle for...of recorre el objeto registros del objeto datosBBDD
      numID += 1;                                                                 //Al iniciar el bucle el ID suma +1
      const tbody = document.querySelector('#bbdd tbody');                        //Hace referencia al tbody de la tabla bbdd, que es la base de datos
      const nuevaFila = document.createElement('tr');                             //Crea una nueva fila
      nuevaFila.setAttribute('id', numID);                                        //Asigna el atributo id con valor numID a la nueva fila
  
      const celdaIconoEditar = document.createElement('td');                      //Crea una celda para el icono editar
      celdaIconoEditar.className = 'fila-tabla-bbdd bbdd-edit';                             //Asigna a la cela del icono editar la misma clase que al resto de la tabla**************************
      celdaIconoEditar.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: #f1f1f1;"></i>';         //Inserta el icono en la celda
      nuevaFila.appendChild(celdaIconoEditar);                                    //Adjunta la celda a la nueva fila
  
      const celdaIconoEliminar = document.createElement('td');                    //Repite el proceso con el botón Eliminar
      celdaIconoEliminar.className = 'fila-tabla-bbdd bbdd-borrar';
      celdaIconoEliminar.innerHTML = '<i class="fa-solid fa-trash" style="color: #f1f1f1;"></i>';
      nuevaFila.appendChild(celdaIconoEliminar);
  
      for (const key in registro) {                                               //Mediante el bucle se recorren la propiedades del objeto registro, creado mediante bucle for...of de registros
        if (registro.hasOwnProperty(key)) {                                       //El operador hasOwnProperty filtra las propiedades heredadas, dejando solo las propias
          const objeto = registro[key];                                           //Hace referencia al valor de la propiedad del objeto sobre el que se itera   
          
          const celdaID = document.createElement('td');
          celdaID.className = 'fila-tabla-bbdd';
          celdaID.textContent = objeto.id;
          nuevaFila.appendChild(celdaID);
  
          const celdaNombre = document.createElement('td');
          celdaNombre.className = 'fila-tabla-bbdd';
          celdaNombre.textContent = objeto.nombre;
          nuevaFila.appendChild(celdaNombre);
  
          const celdaPlato = document.createElement('td');
          celdaPlato.className = 'fila-tabla-bbdd';
          celdaPlato.textContent = objeto.plato;
          nuevaFila.appendChild(celdaPlato);
  
          const celdaTipo = document.createElement('td');
          celdaTipo.className = 'fila-tabla-bbdd';
          celdaTipo.textContent = objeto.tipo;
          nuevaFila.appendChild(celdaTipo);
  
          const celdaPara = document.createElement('td');
          celdaPara.className = 'fila-tabla-bbdd';
          celdaPara.textContent = objeto.para;
          nuevaFila.appendChild(celdaPara);
  
          const celdaCoc = document.createElement('td');
          celdaCoc.className = 'fila-tabla-bbdd';
          celdaCoc.textContent = objeto.coc;
          nuevaFila.appendChild(celdaCoc);
        }
      }
  
      tbody.appendChild(nuevaFila);
    }
  
    console.log('La página se ha cargado');
  });

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
      campos[i].value = 'Introducir Nombre';                                    // Le asigna el valor 'Introducir nombre'
    } else {
      campos[i].value = '';                                                     // En el resto de casos no asigna nada
    }
  }
}

const btnAgregarComida = document.querySelector('#introducir-comida');          // Hace referencia añ botón de Agregar menú
btnAgregarComida.addEventListener('click', crearNuevaComida);                   // Asigna el controlador de eventos al hacer clic en el botón