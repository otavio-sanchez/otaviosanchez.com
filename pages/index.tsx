import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import About from '../components/about';
import Articles from '../components/articles';
import Banner from '../components/banner';
import Contact from '../components/contact';
import Content from '../components/content';
import Footer from '../components/footer';
import Menu from '../components/menu';
import SocialNetworks from '../components/social-networks';
import { requestGitHub } from '../services/github';
import { requestNpm } from '../services/npm';
import calcAge from '../utils/age';

const Home = (): JSX.Element => {
    const [activeEffect, setActiveEffect] = useState(true);
    const [loading, setLoading] = useState(true);
    const [npmPackages, setNpmPackages] = useState();
    const [githubFolders, setGithubFolders] = useState();
    const changeBackground = () => {
        const height = window.innerHeight / 2;

        setActiveEffect(window.scrollY > height);
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground);
    });

    const request = async () => {
        try {
            setLoading(true);
            setNpmPackages(await requestNpm());
            setGithubFolders(await requestGitHub());
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        request();
    }, []);

    return (
        <Content activeEffect={activeEffect}>
            <Head>
                <title>Otávio Sanchez - Desenvolvedor Web</title>
            </Head>

            <main>
                <Menu
                    items={[
                        {
                            text: 'Eu',
                            link: '/'
                        },
                        {
                            text: 'Sobre',
                            link: '/sobre'
                        },
                        {
                            text: 'Contato',
                            link: '/contato'
                        }
                    ]}
                    title="OS."
                />
                <SocialNetworks
                    items={[
                        {
                            icon: 'linkedin',
                            link: 'https://www.linkedin.com/in/ot%C3%A1vio-sanchez/'
                        },
                        {
                            icon: 'github',
                            link: 'https://github.com/otavio-sanchez'
                        }
                    ]}
                />

                <Banner
                    title={'Web'}
                    infos={
                        <div>
                            <p>Olá, é um prazer te conhecer!</p>
                            <p>Me chamo Otávio e seja bem-vindo ao meu site!</p>
                        </div>
                    }
                />
                <About
                    title="Quem sou?"
                    titleProject="Alguns dos Meus Projetos"
                    body={[
                        'Sou desenvolvedor desde de 2013, possuo experiência com diversas tecnologias web e na criação de sites e sistemas web. Busco sempre estar conectado a novas tendências e inovações tecnológicas.',
                        'Bacharel em Ciência e Tecnologia pela Universidade Federal do ABC, um curso multidisciplinar que me permitiu abrir a mente e a buscar novos horizontes através da tecnologia da informação.',
                        `Atualmente tenho ${calcAge(
                            new Date('1992-10-09')
                        )} anos, moro em São Paulo, amo futebol, filmes, séries, animes e games.`
                    ]}
                    npmProjects={npmPackages}
                    githubProjects={githubFolders}
                />

                <Footer>
                    <Contact
                        socialNetwork={[
                            {
                                icon: 'linkedin',
                                link: 'https://www.linkedin.com/in/ot%C3%A1vio-sanchez/'
                            },
                            {
                                icon: 'github',
                                link: 'https://github.com/otavio-sanchez'
                            }
                        ]}
                    />
                </Footer>
            </main>
        </Content>
    );
};

export default Home;
