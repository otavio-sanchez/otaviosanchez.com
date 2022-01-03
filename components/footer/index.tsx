import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { Container, ContainerFooter, FooterComponent, Triangle } from './style';
import { Props } from './types';

const Footer = ({ children }: Props): JSX.Element => {
    return (
        <FooterComponent>
            <Triangle />
            <ContainerFooter>{children}</ContainerFooter>
            <Container>
                Otávio Sanchez <span> ©{new Date().getFullYear()} </span>
            </Container>
        </FooterComponent>
    );
};

Footer.defaultProps = {
    theme: themeDefault
};

export default withTheme(Footer);
