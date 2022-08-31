import React from 'react'


const Resumen = ({resumen}) => {
  const {marca, year, plan} = resumen.datos;
    return (
      <>
        <h2>Resumen de cotización: $ {resumen.cotizacion}</h2>
        <ul>
          <li>Marca:  {marca}</li>
          <li>Plan:  {year}</li>
          <li>Año:  {plan}</li>
        </ul>
      </>
    );
}
export default Resumen;