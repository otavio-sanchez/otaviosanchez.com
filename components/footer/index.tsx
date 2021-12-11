import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { Background } from '../content/style';
import { Container, ContainerFooter, FooterComponent } from './style';
import { Props } from './types';

const Footer = ({ children }: Props): JSX.Element => {
    return (
        <FooterComponent>
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
