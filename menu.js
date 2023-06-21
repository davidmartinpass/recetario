//-----------------------------------------------------------------BBDD-----------------------------------------------------------------------------

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
  
  
  
  
  
  
  //-----------------------------------------------------------------CÁLCULO DE MENÚ--------------------------------------------------------------------------
  
  const comidasNiños = [];
  const comidasDaia = [];
  const cenasNiños = [];
  const cenasDaia = [];
  const nuevoMenu = [comidasNiños, comidasDaia, cenasNiños, cenasDaia];
  
  const filaCenasNiños = document.querySelectorAll('.añadir-valores');
  
  function crearMenu () {                                                                     // La función que crea un nuevo menú
    const registros = datosBBDD.registros;                                                    // Hace referencia al objeto registros dentro del objeto BBDD
    //COMIDAS NIÑOS
    for(let i = 0; i < 7; i++) {                                                              // El bucle itera 7 veces(por los días de la semana)
      
      const objetoAleatorio = registros[Math.floor(Math.random() * registros.length)];        // Selecciona un objeto de forma aleatoria dentro del arreglo de registros
      const nombreAleatorio = objetoAleatorio[Object.keys(objetoAleatorio)[0]].nombre;        // Obtener el valor de la clave "nombre" del objeto seleccionado
      comidasNiños.push(nombreAleatorio);                                                     // Incluye el valor del nombre aleatorio en la matriz de comidasNiños
    }
  
    console.log(comidasNiños);
  
  }
  
  crearMenu();