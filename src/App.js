import React, {useState} from 'react'
import Header from './components/Header';
import styled from '@emotion/styled';
import Formuario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spiner';

function App() {
  const [resumen, setResumen] = useState({});
  const [cargando, setCargando] = useState(false);
  return (
    <>
      <DivScContenedor>
        <Header 
          titulo='Cotizador de seguros'
        />
        <DivScContenedorFormulario>
          <Formuario
            setResumen={setResumen}
            setCargando={setCargando}
          />
        
          {cargando?             
            <Spinner/> 
          :          
            null
          }
        
        {resumen.datos?
          <Resumen
            resumen={resumen}
          />
        : null }

        {!cargando ? 
          <Resultado
            resumen={resumen}
          />        
        : null}

        </DivScContenedorFormulario>
      </DivScContenedor>
    </>
  );
}

/*  Styled Components */
const DivScContenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const DivScContenedorFormulario = styled.div`
  background-color: #606060;
  padding: 3rem;
`;

export default App;
