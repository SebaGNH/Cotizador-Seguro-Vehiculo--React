import React from 'react';
import {Parrafo,DivResultado} from '../Styles/Resultado';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Resultado = ({resumen}) => {
  const {cotizacion} = resumen;
  //Evitamos que cargue el componente
  if ( cotizacion === 0 || cotizacion === undefined ) return null;    

  return (
    <DivResultado>
    <TransitionGroup
      component='p'
      className='resultado'
    >
      <CSSTransition
        classNames='resultado'
        key={cotizacion}
        timeout={{enter:500,exit:500}}
      >
        <Parrafo>El total es: ${cotizacion}</Parrafo>
      </CSSTransition>
    </TransitionGroup>
    </DivResultado>
  );
}
export default Resultado;