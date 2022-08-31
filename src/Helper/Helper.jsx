//Obtiene diferencia de años
const obtenerDiferenciaYear = (year) => {
  return new Date().getUTCFullYear() - year;
}

// Calcula incremento por marca
const calcularMarca = (marca) => {
  let incremento;

  switch (marca) {
    case 'europeo':
      incremento = 1.30;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;  
    default: incremento = 0
      break;
  }
  return incremento;
}

//Calcula incremento por tipo de plan
const calculaPlan = (plan) => {
  return (plan === 'basico') ? 1.20 : 1.50;
}


export {obtenerDiferenciaYear,calcularMarca, calculaPlan};


// Muestra la primer letra en mayúscula

export const primerMayuscula = (texto) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}



