import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import formatDate from '../../utils/format-date';
import Projects from '../projects';
import { Article, Container, ProjectsContainer, Section, Title, TitleProjects } from './style';
import { Props } from './types';

const Info = ({ title, titleProject, npmProjects, githubProjects }: Props): JSX.Element => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let npm = [];
        let github = [];
        if (npmProjects) {
            npm = npmProjects?.objects?.map((item) => ({
                link: item?.package?.links?.npm,
                icon: 'npm',
                text: item?.package?.description,
                date: formatDate(item?.package?.date),
                title: item?.package?.name
            }));
        }
        if (githubProjects) {
            github = githubProjects
                ?.map((item) => ({
                    link: item?.html_url,
                    icon: 'github',
                    date: formatDate(item?.pushed_at),
                    title: item?.name
                }))
                .sort(function (a, b) {
                    if (a.date < b.date) {
                        return 1;
                    }
                    if (a.date > b.date) {
                        return -1;
                    }
                    return 0;
                });
        }

        npm = npm.concat(github.slice(0, 7));
        setProjects(npm);
    }, [npmProjects, githubProjects]);

    return (
        <Section>
            <Container>
                <ProjectsContainer>
                    <TitleProjects>{titleProject}</TitleProjects>
                    <Projects items={projects} />
                </ProjectsContainer>
            </Container>
        </Section>
    );
};

Info.defaultProps = {
    theme: themeDefault
};

export default withTheme(Info);
