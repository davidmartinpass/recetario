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


    let todosLosPlatos = [...datosBBDD.registros];
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

    //COMIDAS PRIMEROS NIÑOS

    const CPNAleatorias = todosLosPlatos.filter(registro => {                             // se filtra el objeto regsitros del objeto BBDD
      return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')       // devuelve un objeto que cumpla unas condiciones
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Marc & Paul')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Comida');
    });

    for(let i = 0; i < comidasPrimerosNiños.length; i++) {                                      
      if(comidasPrimerosNiños[i] === undefined) {                                              
        let indiceAleatorio = Math.floor(Math.random() * CPNAleatorias.length);               
        let platoSeleccionado = CPNAleatorias[indiceAleatorio];                             
        comidasPrimerosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;  
        if(platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único'){
          filaComidasPrimerosNiños[i].setAttribute('rowspan', '2');
          filaComidasSegundosNiños[i].remove();
        }   
        if(platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos'){                 
          comidasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          if(platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único') {
            filaComidasPrimerosDaia[i].setAttribute('rowspan', '2');
            filaComidasSegundosDaia[i].remove();
          }
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

    for(let i = 0; i < comidasPrimerosDaia.length; i++) {
      if(comidasPrimerosDaia[i] === undefined) {
        let indiceAleatorio = Math.floor(Math.random() * CPDAleatorias.length);
        let platoSeleccionado = CPDAleatorias[indiceAleatorio];
        comidasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
        if(platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único'){
          filaComidasPrimerosDaia[i].setAttribute('rowspan', '2');
          filaComidasSegundosDaia[i].remove();
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

    for(let i = 0; i < comidasSegundosNiños.length; i++) {                                      
      if(comidasSegundosNiños[i] === undefined) {                                             
        let indiceAleatorio = Math.floor(Math.random() * CSNAleatorias.length);               
        let platoSeleccionado = CSNAleatorias[indiceAleatorio];                             
        comidasSegundosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;     
        if(platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos'){                 
          comidasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;    
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

    for(let i = 0; i < comidasSegundosDaia.length; i++) {
      if(comidasSegundosDaia[i] === undefined) {
        let indiceAleatorio = Math.floor(Math.random() * CSDAleatorias.length);
        let platoSeleccionado = CSDAleatorias[indiceAleatorio];
        comidasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
        eliminarPlato(platoSeleccionado);
        CSDAleatorias.splice(indiceAleatorio, 1);
      }
    }

    //CENAS PRIMEROS NIÑOS

    const CePNAleatorias = todosLosPlatos.filter(registro => {
      return (registro[Object.keys(registro)].plato === 'Primero' || registro[Object.keys(registro)].plato === 'Plato único')
        && (registro[Object.keys(registro)].para === 'Todos' || registro[Object.keys(registro)].para === 'Marc & Paul')
        && (registro[Object.keys(registro)].coc === 'Comida o cena' || registro[Object.keys(registro)].coc === 'Cena');
    });

    for(let i = 0; i < cenasPrimerosNiños.length; i++) {                                      
      if(cenasPrimerosNiños[i] === undefined) {                                              
        let indiceAleatorio = Math.floor(Math.random() * CePNAleatorias.length);               
        let platoSeleccionado = CePNAleatorias[indiceAleatorio];                             
        cenasPrimerosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;  
        if(platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único'){
          filaCenasPrimerosNiños[i].setAttribute('rowspan', '2');
          filaCenasSegundosNiños[i].remove();
        }   
        if(platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos'){                 
          cenasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
          if(platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único') {
            filaCenasPrimerosDaia[i].setAttribute('rowspan', '2');
            filaCenasSegundosDaia[i].remove();
          }
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

    for(let i = 0; i < cenasPrimerosDaia.length; i++) {
      if(cenasPrimerosDaia[i] === undefined) {
        let indiceAleatorio = Math.floor(Math.random() * CePDAleatorias.length);
        let platoSeleccionado = CePDAleatorias[indiceAleatorio];
        cenasPrimerosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
        if(platoSeleccionado[Object.keys(platoSeleccionado)].plato === 'Plato único'){
          filaCenasPrimerosDaia[i].setAttribute('rowspan', '2');
          filaCenasSegundosDaia[i].remove();
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

    for(let i = 0; i < cenasSegundosNiños.length; i++) {                                      
      if(cenasSegundosNiños[i] === undefined) {                                           
        let indiceAleatorio = Math.floor(Math.random() * CeSNAleatorias.length);               
        let platoSeleccionado = CeSNAleatorias[indiceAleatorio];                              
        cenasSegundosNiños[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;     
        if(platoSeleccionado[Object.keys(platoSeleccionado)].para === 'Todos'){                 
          cenasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;    
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

    for(let i = 0; i < cenasSegundosDaia.length; i++) {
      if(cenasSegundosDaia[i] === undefined) {
        let indiceAleatorio = Math.floor(Math.random() * CeSDAleatorias.length);
        let platoSeleccionado = CeSDAleatorias[indiceAleatorio];        
        cenasSegundosDaia[i] = platoSeleccionado[Object.keys(platoSeleccionado)].nombre;
        CeSDAleatorias.splice(indiceAleatorio, 1);
        eliminarPlato(platoSeleccionado);
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
  
    console.log(todosLosPlatos);
  }
  
  crearMenu();