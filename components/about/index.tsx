import React, { useEffect } from 'react';
import { withTheme } from 'styled-components';
import Typed from 'typed.js';

import { themeDefault } from '../../styles/theme';
import { Article, Body, Container, Projects, Section, Title } from './style';
import { Props } from './types';

const About = ({ title, body }: Props): JSX.Element => {
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
        <Section>
            <Container>
                <Article>
                    <Title>{title}</Title>
                    <Body>{body}</Body>
                </Article>
                <Projects>Projetos</Projects>
            </Container>
        </Section>
    );
};

About.defaultProps = {
    theme: themeDefault
};

export default withTheme(About);
