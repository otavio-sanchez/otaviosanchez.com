import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Theme from '../styles/theme';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />

                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: ${window.location.pathname},
                        });
                    `}
                </script>
            </Head>

            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
}

export default App;
