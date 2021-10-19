import React, { useEffect } from 'react';
import { withTheme } from 'styled-components';
import Typed from 'typed.js';

import { themeDefault } from '../../styles/theme';
import Projects from '../projects';
import { Article, Body, Container, ProjectsContainer, Section, Title } from './style';
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
                <ProjectsContainer>
                    <Projects
                        items={[
                            {
                                text: 'abc',
                                link: '#',
                                icon: 'github'
                            },
                            {
                                text: 'abc',
                                link: '#',
                                icon: 'npm'
                            },
                            {
                                text: 'abc',
                                link: '#',
                                icon: 'npm'
                            },
                            {
                                text: 'abc',
                                link: '#',
                                icon: 'npm'
                            }
                        ]}
                    />
                </ProjectsContainer>
            </Container>
        </Section>
    );
};

About.defaultProps = {
    theme: themeDefault
};

export default withTheme(About);
