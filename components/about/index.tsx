import React from 'react';
import { useParallax } from 'react-scroll-parallax';
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
    Title,
    Triangle
} from './style';
import { Props } from './types';

const About = ({ title, body }: Props): JSX.Element => {
    const parallax = useParallax({
        speed: 5
    });

    const parallaxAlternative = useParallax({
        speed: 3
    });

    return (
        <Section id="sobre">
            <Container>
                <FigureContainer>
                    <Image
                        src="/images/otavio-sanchez.png"
                        alt="Foto do Otávio Sanchez"
                        title="Otávio Sanchez"
                    />

                    <Background ref={parallax.ref}>
                        {Array.from(Array(16).keys()).map((value) => (
                            <div key={value} />
                        ))}
                    </Background>

                    <BackgroundAlternative ref={parallaxAlternative.ref}>
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
            <Triangle />
        </Section>
    );
};

About.defaultProps = {
    theme: themeDefault
};

export default withTheme(About);
