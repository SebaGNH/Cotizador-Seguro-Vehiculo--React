import React from 'react'
import {primerMayuscula} from '../Helper/Helper';
import {DivResumen} from '../Styles/Resumen';

const Resumen = ({resumen}) => {
  const {marca, year, plan} = resumen.datos;
    return (
      <DivResumen>
        <h2>Resumen de cotización: $ {resumen.cotizacion}</h2>
        <ul>
          <li>Marca:  {primerMayuscula(marca)}</li> {/* Capitalizado con js */}
          <li>Plan:  <span>{plan}</span></li> {/* Capitalizado con css */}
          <li>Año:  {year}</li>
        </ul>
      </DivResumen>
    );
}
export default Resumen;