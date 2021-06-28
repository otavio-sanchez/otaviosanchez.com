import Head from 'next/head';
import React from 'react';

import Banner from '../components/banner';
import Menu from '../components/menu';

export default function Home() {
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
                            text: 'Contato',
                            link: '/contato'
                        }
                    ]}
                    title="OS."
                />

                <Banner title={'Desenvolvedor'} />
                <p>test</p>
            </main>
        </div>
    );
}
