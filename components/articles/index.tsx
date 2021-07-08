import React, { useEffect } from 'react';
import { withTheme } from 'styled-components';
import Typed from 'typed.js';

import { themeDefault } from '../../styles/theme';
import { Article, Body, Projects, Section, Title } from './style';
import { Props } from './types';

const About = ({ title, infos }: Props): JSX.Element => {
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
            <Title>Artigos</Title>
            <Article>
                <Title>{title}</Title>
                <Body>{infos}</Body>
            </Article>
        </Section>
    );
};

About.defaultProps = {
    theme: themeDefault
};

export default withTheme(About);
