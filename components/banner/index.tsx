import React from 'react';
import Typist from 'react-text-typist';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import Button from '../button';
import { BannerContent, BannerImage, Container, Content, Infos, Title } from './style';
import { Props } from './types';

const Banner = ({ title, infos }: Props): JSX.Element => {
    return (
        <>
            <BannerContent>
                <Container>
                    <Content>
                        <Typist
                            sentences={['Desenvolvedor', 'Soluções para']}
                            loop={true}
                            typingSpeed={100}
                            className="title"
                        />
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
        </>
    );
};

Banner.defaultProps = {
    theme: themeDefault
};

export default withTheme(Banner);
