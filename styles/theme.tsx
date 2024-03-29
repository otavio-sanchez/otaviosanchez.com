import React from 'react';
import { ThemeProvider } from 'styled-components';

import Fonts from './fonts';
import Globals from './globals';

export const themeDefault = {
    colors: {
        main: '#5652CC',
        mainDark: '#33317a',
        text: '#333333',
        textAlternative: '#A3A9D0',
        warning: '#FC780B'
    },
    fonts: ['PlexusSans-Regular', 'sans-serif', 'Roboto'],
    fontSizes: {
        xSmall: '0.6em',
        small: '0.8em',
        medium: '0.9em',
        normal: '1.0em',
        large: '1.2em',
        xLarge: '1.6em',
        xxLarge: '2em'
    }
};

const Theme = ({ children }: { children: JSX.Element }): JSX.Element => (
    <>
        <ThemeProvider theme={themeDefault}>
            <Fonts />
            <Globals />
            {children}
        </ThemeProvider>
    </>
);

export default Theme;
