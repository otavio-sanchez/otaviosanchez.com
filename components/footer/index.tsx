import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { Container, FooterComponent, Background } from './style';
import { Props } from './types';

const Footer = ({ title }: Props): JSX.Element => {

    return (
        <FooterComponent>
            <Background />
            <Container>
                {title}
            </Container>
        </FooterComponent>
    );
};

Footer.defaultProps = {
    theme: themeDefault
};

export default withTheme(Footer);
