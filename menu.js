//-----------------------------------------------------------------CÁLCULO DE MENÚ--------------------------------------------------------------------------
  
  // MATRIZ DE MENÚS

  const comidasNiños = [];
  const comidasDaia = [];
  const cenasNiños = [];
  const cenasDaia = [];
  const nuevoMenu = [comidasNiños, comidasDaia, cenasNiños, cenasDaia];

  // FILAS DE LA TABLA DE MENÚS
  
  const filaComidasNiños = document.querySelectorAll('.comida-niños.añadir-valores');
  const filaComidasDaia = document.querySelectorAll('.comida-daia.añadir-valores');
  const filaCenasNiños = document.querySelectorAll('.cena-niños.añadir-valores');
  const filaCenasDaia = document.querySelectorAll('.cena-daia.añadir-valores');

  // RESTRICCIONES: Asignar a opciones en HOME

    // RESTRICCIÓN 1: SEMANA DE COLE

    let semanaCole = true;
    let sinComida;

    //document.querySelector('#hora-opt1').classList.contains('seleccionado') ? semanaCole = true : semanaCole = false;
    sinComida = semanaCole ? 5 : 0;

    // RESTRICCIÓN 2: SÁBADO O DOMINGO COMIDA

    let sabadoComida = true;
    let domingoComida = true;

    // COMIDAS PARA TODOS
  
  function crearMenu () {                                                                     // La función que crea un nuevo menú

    const registros = datosBBDD.registros;                                                    // Hace referencia al objeto registros dentro del objeto BBDD

    //COMIDAS NIÑOS

    if(semanaCole === true) {

      for(let i = 0; i < 7; i++) {

        if(i < 5) {
          comidasNiños.push('Sin comida');
        } else {
          const objetoAleatorio = registros[Math.floor(Math.random() * registros.length)];        // Selecciona un objeto de forma aleatoria dentro del arreglo de registros
          const nombreAleatorio = objetoAleatorio[Object.keys(objetoAleatorio)[0]].nombre;        // Obtener el valor de la clave "nombre" del objeto seleccionado
          comidasNiños.push(nombreAleatorio);                                                     // Incluye el valor del nombre aleatorio en la matriz de comidasNiños
        }
        
        filaComidasNiños[i].innerHTML = comidasNiños[i];

      }} else {

        for(let i = 0; i < 7; i++) {

        const objetoAleatorio = registros[Math.floor(Math.random() * registros.length)];        // Selecciona un objeto de forma aleatoria dentro del arreglo de registros
        const nombreAleatorio = objetoAleatorio[Object.keys(objetoAleatorio)[0]].nombre;        // Obtener el valor de la clave "nombre" del objeto seleccionado
        comidasNiños.push(nombreAleatorio);                                                     // Incluye el valor del nombre aleatorio en la matriz de comidasNiños
        filaComidasNiños[i].innerHTML = comidasNiños[i];                                        // Inserta el valor en la tabla
        }
      }

    if(sabadoComida) {
      filaComidasNiños[5].innerHTML = 'Hay comida'; 
    }

    if(domingoComida) {
      filaComidasNiños[6].innerHTML = 'Hay comida'; 
    }
  
    //COMIDAS AMAIA & DAVID
    for(let i = 0; i < 7; i++) {                                                            
      
      if(semanaCole === true) {

        for(let i = 0; i < 7; i++) {
  
          if(i < 5) {
            comidasDaia.push('Sin comida');
          } else {
            const objetoAleatorio = registros[Math.floor(Math.random() * registros.length)];        // Selecciona un objeto de forma aleatoria dentro del arreglo de registros
            const nombreAleatorio = objetoAleatorio[Object.keys(objetoAleatorio)[0]].nombre;        // Obtener el valor de la clave "nombre" del objeto seleccionado
            comidasDaia.push(nombreAleatorio);                                                     // Incluye el valor del nombre aleatorio en la matriz de comidasNiños
          }
          
          filaComidasDaia[i].innerHTML = comidasDaia[i]; 
  
        }} else {
  
          for(let i = 0; i < 7; i++) {
          const objetoAleatorio = registros[Math.floor(Math.random() * registros.length)];        // Selecciona un objeto de forma aleatoria dentro del arreglo de registros
          const nombreAleatorio = objetoAleatorio[Object.keys(objetoAleatorio)[0]].nombre;        // Obtener el valor de la clave "nombre" del objeto seleccionado
          comidasDaia.push(nombreAleatorio);                                                     // Incluye el valor del nombre aleatorio en la matriz de comidasNiños
          filaComidasDaia[i].innerHTML = comidasDaia[i];                                        // Inserta el valor en la tabla
          }
        }                                        
      }

    if(sabadoComida) {
      filaComidasDaia[5].innerHTML = 'Hay comida'; 
    }

    if(domingoComida) {
      filaComidasDaia[6].innerHTML = 'Hay comida'; 
    }

    //CENAS NIÑOS
    for(let i = 0; i < 7; i++) {
      
        const objetoAleatorio = registros[Math.floor(Math.random() * registros.length)];
        const nombreAleatorio = objetoAleatorio[Object.keys(objetoAleatorio)[0]].nombre;
        cenasNiños.push(nombreAleatorio);
        filaCenasNiños[i].innerHTML = cenasNiños[i];
      }

    //CENAS AMAIA & DAVID
    for(let i = 0; i < 7; i++) {                                                         
      
        const objetoAleatorio = registros[Math.floor(Math.random() * registros.length)];     
        const nombreAleatorio = objetoAleatorio[Object.keys(objetoAleatorio)[0]].nombre;    
        cenasDaia.push(nombreAleatorio);                                                  
        filaCenasDaia[i].innerHTML = cenasDaia[i];
      }
  
  }
  
  crearMenu();