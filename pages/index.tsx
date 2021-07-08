import Head from 'next/head';
import React from 'react';

import About from '../components/about';
import Articles from '../components/articles';
import Banner from '../components/banner';
import Menu from '../components/menu';

const Home = (): JSX.Element => {
    return (
        <div>
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

                <Banner
                    title={'Web'}
                    infos={<p>Olá, me chamo Otávio e seja bem-vindo ao meu site!</p>}
                />
                <About
                    title="Lorem ipsum"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
                <Articles />
            </main>
        </div>
    );
};

export default Home;
