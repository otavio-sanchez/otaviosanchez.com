import React from 'react';
import { ThemeProvider } from 'styled-components';

import Globals from './globals';

export const themeDefault = {
    colors: {
        main: '#06B49A',
        text: '#333333'
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '0.8em',
        medium: '0.9em',
        large: '1.1em'
    }
};

const Theme = ({ children }: { children: JSX.Element }): JSX.Element => (
    <>
        <ThemeProvider theme={themeDefault}>
            <Globals />
            {children}
        </ThemeProvider>
    </>
);

export default Theme;
