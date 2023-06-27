//-----------------------------------------------------------------CÁLCULO DE MENÚ--------------------------------------------------------------------------
  
  // MATRIZ DE MENÚS

  const comidasPrimerosNiños = Array(7);
  const comidasSegundosNiños = Array(7);
  const comidasPrimerosDaia = Array(7);
  const comidasSegundosDaia = Array(7);
  const cenasPrimerosNiños = Array(7);
  const cenasSegundosNiños = Array(7);
  const cenasPrimerosDaia = Array(7);
  const cenasSegundosDaia = Array(7);
  const nuevoMenu = [comidasPrimerosNiños, comidasSegundosNiños, comidasPrimerosDaia, comidasSegundosDaia, cenasPrimerosNiños, cenasSegundosNiños, cenasPrimerosDaia, cenasSegundosDaia];

  // FILAS DE LA TABLA DE MENÚS
  
  const filaComidasPrimerosNiños = document.querySelectorAll('.comida-primero-niños.añadir-valores');
  const filaComidasSegundosNiños = document.querySelectorAll('.comida-segundo-niños.añadir-valores');
  const filaComidasPrimerosDaia = document.querySelectorAll('.comida-primero-daia.añadir-valores');
  const filaComidasSegundosDaia = document.querySelectorAll('.comida-segundo-daia.añadir-valores');
  const filaCenasPrimerosNiños = document.querySelectorAll('.cena-primero-niños.añadir-valores');
  const filaCenasSegundosNiños = document.querySelectorAll('.cena-segundo-niños.añadir-valores');
  const filaCenasPrimerosDaia = document.querySelectorAll('.cena-primero-daia.añadir-valores');
  const filaCenasSegundosDaia = document.querySelectorAll('.cena-segundo-daia.añadir-valores');

  // FUNCIÓN PARA CREAR MENÚ
  
  function crearMenu () {                                                                     // La función que crea un nuevo menú

    const registros = datosBBDD.registros;                                                    // Hace referencia al objeto registros dentro del objeto BBDD

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

    //COMIDAS PRIMEROS NIÑOS

    const CPNAleatorias = datosBBDD.registros.filter(registro => {                             // se filtra el objeto regsitros del objeto BBDD
      return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')       // devuelve un objeto que cumpla unas condiciones
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Marc & Paul')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
    });

    for(let i = 0; i < comidasPrimerosNiños.length; i++) {                                      // El bucle recorre la matriz de comidasPrimerosNiños 
      if(comidasPrimerosNiños[i] === undefined) {                                               // Si encuentra un índice sin valor
        const indiceAleatorio = Math.floor(Math.random() * CPNAleatorias.length);               // Crea un índice aleatorio
        const platoSeleccionado = CPNAleatorias[indiceAleatorio];                               // Se almace el dato de plato aleatorio seleccionado  
        comidasPrimerosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;     // Al índice vacío de la matriz CPN se le asigna como valor el .nombre del plato aleatorio
        if(platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos'){                 // Si la propiedad .para del objeto platoSeleccionado es igual a 'Todos'
          comidasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;    // A la matriz CPD se le asigna el valor del .nombre en el mismo índice
        }
        CPNAleatorias.splice(indiceAleatorio, 1);                                               // Se elimina el objeto de la matriz CPNAleatorias
      }
    }
  
    //COMIDAS PRIMEROS AMAIA & DAVID
    
    const CPDAleatorias = datosBBDD.registros.filter(registro => {
      return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Amaia & David')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
    });

    const CPDAleatoriasNombres = CPDAleatorias.map(registro => {
      return registro[Object.keys(registro)].nombre;
    });

    for(let i = 0; i < comidasPrimerosDaia.length; i++) {
      if(comidasPrimerosDaia[i] === undefined) {
        const indiceAleatorio = Math.floor(Math.random() * CPDAleatoriasNombres.length);
        comidasPrimerosDaia[i] = CPDAleatoriasNombres[indiceAleatorio];
        CPDAleatoriasNombres.splice(indiceAleatorio, 1);
      }
    }

    //COMIDAS SEGUNDOS NIÑOS

    const CSNAleatorias = datosBBDD.registros.filter(registro => {
      return registro[Object.keys(registro)].plato === 'Segundo'
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Marc & Paul')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
    });

    for(let i = 0; i < comidasSegundosNiños.length; i++) {                                      
      if(comidasSegundosNiños[i] === undefined) {                                             
        const indiceAleatorio = Math.floor(Math.random() * CSNAleatorias.length);               
        const platoSeleccionado = CSNAleatorias[indiceAleatorio];                              
        comidasSegundosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;     
        if(platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos'){                 
          comidasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;    
        }
        CSNAleatorias.splice(indiceAleatorio, 1);                                               
      }
    }

    //COMIDAS SEGUNDOS DAIA

    const CSDAleatorias = datosBBDD.registros.filter(registro => {
      return registro[Object.keys(registro)].plato === 'Segundo'
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Amaia & David')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
    });

    const CSDAleatoriasNombres = CSDAleatorias.map(registro => {
      return registro[Object.keys(registro)].nombre;
    });

    for(let i = 0; i < comidasSegundosDaia.length; i++) {
      if(comidasSegundosDaia[i] === undefined) {
        const indiceAleatorio = Math.floor(Math.random() * CSDAleatoriasNombres.length);
        comidasSegundosDaia[i] = CSDAleatoriasNombres[indiceAleatorio];
        CSDAleatoriasNombres.splice(indiceAleatorio, 1);
      }
    }

    //CENAS PRIMEROS NIÑOS

    const CePNAleatorias = datosBBDD.registros.filter(registro => {
      return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Marc & Paul')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
    });

    const CePNAleatoriasNombres = CePNAleatorias.map(registro => {
      return registro[Object.keys(registro)].nombre;
    });

    for(let i = 0; i < cenasPrimerosNiños.length; i++) {                                      
      if(cenasPrimerosNiños[i] === undefined) {                                             
        const indiceAleatorio = Math.floor(Math.random() * CePNAleatorias.length);               
        const platoSeleccionado = CePNAleatorias[indiceAleatorio];                              
        cenasPrimerosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;     
        if(platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos'){                 
          cenasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;    
        }
        CePNAleatorias.splice(indiceAleatorio, 1);                                               
      }
    }

    //CENAS PRIMEROS DAIA

    const CePDAleatorias = datosBBDD.registros.filter(registro => {
      return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Amaia & David')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
    });

    const CePDAleatoriasNombres = CePDAleatorias.map(registro => {
      return registro[Object.keys(registro)].nombre;
    });

    for(let i = 0; i < cenasPrimerosDaia.length; i++) {
      if(cenasPrimerosDaia[i] === undefined) {
        const indiceAleatorio = Math.floor(Math.random() * CePDAleatoriasNombres.length);
        cenasPrimerosDaia[i] = CePDAleatoriasNombres[indiceAleatorio];
        CePDAleatoriasNombres.splice(indiceAleatorio, 1);
      }
    }

    //CENAS SEGUNDOS NIÑOS

    const CeSNAleatorias = datosBBDD.registros.filter(registro => {
      return (registro[Object.keys(registro)].plato === 'Segundo' || registro[Object.keys(registro)].plato === 'Plato único')
        && (registro[Object.keys(registro)].para === 'Marc & Paul' || registro[Object.keys(registro)].para === 'Todos')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
    });

    const CeSNAleatoriasNombres = CeSNAleatorias.map(registro => {
      return registro[Object.keys(registro)].nombre;
    });

    for(let i = 0; i < cenasSegundosNiños.length; i++) {                                      
      if(cenasSegundosNiños[i] === undefined) {                                             
        const indiceAleatorio = Math.floor(Math.random() * CeSNAleatorias.length);               
        const platoSeleccionado = CeSNAleatorias[indiceAleatorio];                              
        cenasSegundosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;     
        if(platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos'){                 
          cenasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;    
        }
        CeSNAleatorias.splice(indiceAleatorio, 1);                                               
      }
    }

    //CENAS SEGUNDOS DAIA

    const CeSDAleatorias = datosBBDD.registros.filter(registro => {
      return (registro[Object.keys(registro)].plato === 'Segundo' || registro[Object.keys(registro)].plato === 'Plato único')
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Amaia & David')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
    });

    const CeSDAleatoriasNombres = CeSDAleatorias.map(registro => {
      return registro[Object.keys(registro)].nombre;
    });

    for(let i = 0; i < cenasSegundosDaia.length; i++) {
      if(cenasSegundosDaia[i] === undefined) {
        const indiceAleatorio = Math.floor(Math.random() * CeSDAleatoriasNombres.length);
        cenasSegundosDaia[i] = CeSDAleatoriasNombres[indiceAleatorio];
        CeSDAleatoriasNombres.splice(indiceAleatorio, 1);
      }
    }
   

    // VOLCAR MATRIZ EN TABLA
    console.log(nuevoMenu);
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
  
  }
  
  crearMenu();