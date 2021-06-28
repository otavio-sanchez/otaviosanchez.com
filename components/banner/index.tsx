import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import Button from '../button';
import { BannerContent, Container, Title } from './style';
import { Props } from './types';

const Banner = ({ title }: Props): JSX.Element => {
    return (
        <BannerContent>
            <Container>
                <Title>{title}</Title>
                <Button onClick={() => console.log('oi')}> Ver Mais</Button>
            </Container>
        </BannerContent>
    );
};

Banner.defaultProps = {
    theme: themeDefault
};

export default withTheme(Banner);
