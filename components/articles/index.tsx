import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { Article, Body, Container, Section, Title } from './style';
import { Props } from './types';

const About = ({ title, infos }: Props): JSX.Element => {
    return (
        <Section>
            <Container>
                <Title>Artigos</Title>
                <Article>
                    <Title>{title}</Title>
                    <Body>{infos}</Body>
                </Article>
            </Container>
        </Section>
    );
};

About.defaultProps = {
    theme: themeDefault
};

export default withTheme(About);
