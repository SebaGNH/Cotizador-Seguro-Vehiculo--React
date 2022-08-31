import React from 'react';
import styled from '@emotion/styled';
import { HeaderScContenedor, H1ScTextoHeader } from '../Styles/Header';

const Header = ({titulo}) => {
    return (
        <HeaderScContenedor>
          <H1ScTextoHeader>{titulo}</H1ScTextoHeader>
        </HeaderScContenedor>
    
    );
}
export default Header;