import type { AppProps } from 'next/app';
import React from 'react';

import Theme from '../styles/theme';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Theme>
            <Component {...pageProps} />
        </Theme>
    );
}

export default App;
