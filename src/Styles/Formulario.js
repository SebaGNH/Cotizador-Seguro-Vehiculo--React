import styled from '@emotion/styled';


const DivCampo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  //-webkit-appearance: none; 
  appearance: none; //Quita las flechas en los select
`;

const InputRadio = styled.input`
  margin: 0 1rem;  
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none; //Los input submit por defeto tienen borde
  transition: background-color .3s ease;
  margin-top: 2rem;
  border-radius: 5px;
  &:hover{
    background-color: #26c6da;
    cursor: pointer;

  }
`;

const DivError = styled.div`
  background-color: #f00;
  color: #fff;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export {DivCampo,Label,Select,InputRadio,Button,DivError};