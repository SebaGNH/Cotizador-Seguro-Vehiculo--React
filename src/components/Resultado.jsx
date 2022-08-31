import React from 'react';
import {Parrafo,DivResultado} from '../Styles/Resultado';


const Resultado = ({resumen}) => {
  const {cotizacion} = resumen;
  //Evitamos que cargue el componente
  if ( cotizacion === 0 || cotizacion === undefined ) return null;    

  return (
    <DivResultado>
      <Parrafo>El total es: ${cotizacion}</Parrafo>
    </DivResultado>
  );
}
export default Resultado;