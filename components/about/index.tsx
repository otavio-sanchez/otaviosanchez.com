import React, { useEffect } from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import {
    Article,
    Background,
    BackgroundAlternative,
    Body,
    Container,
    FigureContainer,
    Image,
    Section,
    Title
} from './style';
import { Props } from './types';

const About = ({ title, body }: Props): JSX.Element => {
    return (
        <Section>
            <Container>
                <FigureContainer>
                    <Image
                        src="/images/otavio-sanchez.png"
                        alt="Foto do Otávio Sanchez"
                        title="Otávio Sanchez"
                    />
                    <Background>
                        {Array.from(Array(16).keys()).map((value) => (
                            <div key={value} />
                        ))}
                    </Background>
                    <BackgroundAlternative>
                        {Array.from(Array(16).keys()).map((value) => (
                            <div key={value} />
                        ))}
                    </BackgroundAlternative>
                </FigureContainer>
                <Article>
                    <Title>{title}</Title>
                    {body.map((text) => (
                        <Body key={text}>{text}</Body>
                    ))}
                </Article>
            </Container>
        </Section>
    );
};

About.defaultProps = {
    theme: themeDefault
};

export default withTheme(About);
