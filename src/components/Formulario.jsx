import React, {useState} from 'react';
import {DivCampo,Label,Select,InputRadio,Button,DivError} from '../Styles/Formulario';
import { obtenerDiferenciaYear, calcularMarca , calculaPlan} from '../Helper/Helper';


const Formuario = ({setResumen,setCargando}) => {
  const [datos, setDatos] = useState({
    marca:'',
    year:'',
    plan: ''
  });
  const [error, setError] = useState(false);

  //Extraer los valores del state
  //const {marca,year, plan} = datos; //comento para usarlos con props


  //Leer los datos del formulario y colocarlos en useState
  const obtenerInformacionFormulario = (e) => {
    setDatos(
      {
        ...datos,
        [e.target.name] : e.target.value
      }
    );
  } 


  const submitHandler = (e)=>{
    e.preventDefault();
    if (datos.marca.trim() ==="" || datos.year.trim() ==="" || datos.plan.trim() ==="") {
      setError(true);
      return; //No olvidar el return para que deje de ejecutarse
    }
    setError(false);


    //Monto base de $2000  // Cambiar por montoBase
    let resultado = 2000;

    //Obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);
    //Por cada año hay que restar el 3% del valor
    resultado -= ((diferencia * 3) * resultado) / 100;
    //resultado -= (diferencia * .097) * resultado;


    //Americano 15% - Asiatico 5% Europeo 30%
    resultado = calcularMarca(datos.marca) * resultado;
    //console.log(resultado)


    //Básico aumenta 20% - Completo 50%
    resultado = parseFloat(calculaPlan(datos.plan) * resultado).toFixed(2);
    //console.log(resultado)
    
    setCargando(true);
    setTimeout( ()=>{
      //Elimina Spinner
      setCargando(false);
      //Pasa información al componente principal
      setResumen({
        cotizacion: resultado,
        datos //Objeto con todos los datos "Marca, Año, Plan"
      });
    },1000);
    limpiarCampos();
  }

  const limpiarCampos = () => {
    setDatos({
      marca:'',
      year:'',
      plan: ''
    });
  }


  return (
    <form action="" onSubmit={submitHandler}>
    {error?
      <DivError>Todos los campos son obligatorios</DivError>
    :
      null
    }
      <DivCampo>
        <Label htmlFor="">Marca</Label>
        <Select 
          name="marca" 
          value={datos.marca} 
          onChange={obtenerInformacionFormulario}
        >
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </DivCampo>
      <DivCampo>
        <Label htmlFor="">Año</Label>
        <Select 
          name="year" 
          value={datos.year}
          onChange={obtenerInformacionFormulario}
        >
          <option value="">-- Seleccione --</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
        </Select>
      </DivCampo>
      <DivCampo>
        <Label htmlFor="">Plan</Label>
        <InputRadio 
          type="radio" 
          name="plan" 
          value="basico" 
          checked={datos.plan === 'basico'}
          onChange={obtenerInformacionFormulario}
          />Básico 
        <InputRadio 
          type="radio" 
          name="plan" 
          value="completo"
          checked={datos.plan === 'completo'}
          onChange={obtenerInformacionFormulario}
          />Completo
      </DivCampo>
      <Button type='submit'>Cotizar</Button>
    </form>
  );
}
export default Formuario;