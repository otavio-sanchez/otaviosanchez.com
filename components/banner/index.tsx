import React, { useEffect } from 'react';
import { withTheme } from 'styled-components';
import Typed from 'typed.js';

import { themeDefault } from '../../styles/theme';
import Button from '../button';
import { BannerContent, BannerImage, Container, Content, Infos, Title } from './style';
import { Props } from './types';

const Banner = ({ title, infos }: Props): JSX.Element => {
    useEffect(() => {
        const options = {
            strings: ['Desenvolvedor', 'Front-end'],
            typeSpeed: 100,
            smartBackspace: true
        };

        const typed = new Typed('#instruction', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <BannerContent>
            <Container>
                <Content>
                    <span id="instruction"></span>
                    <Title>{title}</Title>
                    <Infos>{infos}</Infos>
                    <Button onClick={() => console.log('oi')} type="alternative">
                        Ver Mais
                    </Button>
                </Content>
                <Content>
                    <BannerImage src="/images/banner.svg" />
                </Content>
            </Container>
        </BannerContent>
    );
};

Banner.defaultProps = {
    theme: themeDefault
};

export default withTheme(Banner);
