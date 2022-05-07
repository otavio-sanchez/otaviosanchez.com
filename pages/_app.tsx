import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Theme from '../styles/theme';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Otávio Sanchez</title>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="description"
                    content="Otávio Sanchez desenvolvedor desde de 2013, possuo experiência com diversas tecnologias web e na criação de sites e sistemas web. Busco sempre estar conectado a novas tendências e inovações tecnológicas."
                />
                <meta property="og:title" content="Resume – Otávio Sanchez Desenvolvedor Web" />
                <meta
                    property="og:description"
                    content="Resume – Otávio Sanchez desenvolvedor desde de 2013, possuo experiência com diversas tecnologias web e na criação de sites e sistemas web. Busco sempre estar conectado a novas tendências e inovações tecnológicas."
                />
                <meta property="og:url" content="https://otaviosanchez.com" />
                <meta
                    property="og:image"
                    content="https://otaviosanchez.com/images/foto-otavio.png"
                />
                <meta
                    name="description"
                    content="Otávio Sanchez desenvolvedor desde de 2013, possuo experiência com diversas tecnologias web e na criação de sites e sistemas web. Busco sempre estar conectado a novas tendências e inovações tecnológicas."
                />
                <meta
                    name="keywords"
                    content="front-end, desenvolvedor web, desenvolvedor full-stack"
                />
                <meta name="GOOGLEBOT" content="INDEX, FOLLOW" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Otávio Sanchez" />
                <meta
                    name="copyright"
                    content="Copyright 2022 Otávio Sanchez. Todos os direitos reservados."
                />
                <meta name="geo.placename" content="São Paulo, Brasil" />

                <meta property="#portfolio" content="Desenvolvimento Web" />
                <meta property="og:site_name" content="Otávio Sanchez Desenvolvedor Web" />
                <meta
                    property="og:image"
                    content="https://otaviosanchez.com/images/foto-otavio.png"
                />

                <script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />

                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                    `}
                </script>
            </Head>

            <ParallaxProvider>
                <Theme>
                    <Component {...pageProps} />
                </Theme>
            </ParallaxProvider>
        </>
    );
}

export default App;
