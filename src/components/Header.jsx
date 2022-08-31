import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { HeaderScContenedor, H1ScTextoHeader } from '../Styles/Header';

const Header = ({titulo}) => {
    return (
        <HeaderScContenedor>
          <H1ScTextoHeader>{titulo}</H1ScTextoHeader>
        </HeaderScContenedor>
    
    );
}
Header.propTypes = {
  titulo: PropTypes.string.isRequired
}
export default Header;