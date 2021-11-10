import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import Projects from '../projects';
import { Article, Body, Container, ProjectsContainer, Section, Title } from './style';
import { Props } from './types';

const About = ({ title, body }: Props): JSX.Element => {
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
