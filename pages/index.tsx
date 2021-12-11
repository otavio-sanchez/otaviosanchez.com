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

const Home = (): JSX.Element => {
    const [activeEffect, setActiveEffect] = useState(true);
    const changeBackground = () => {
        const height = window.innerHeight / 2;

        setActiveEffect(window.scrollY > height);
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground);
    });

    return (
        <Content activeEffect={activeEffect}>
            <Head>
                <title>Otávio Sanchez</title>
                <link rel="icon" href="/favicon.ico" />
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
                            text: 'Artigos',
                            link: '/artigos'
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
                    title="Lorem ipsum"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Articles />
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
