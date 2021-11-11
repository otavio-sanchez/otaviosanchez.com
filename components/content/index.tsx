import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { MainContent, Background } from './style';
import { Props } from './types';

const Content = ({ activeEffect, children }: Props): JSX.Element => (
    <>
        <Background activeEffect={activeEffect} />

        <MainContent>
            {children}
        </MainContent>
    </>
);

Content.defaultProps = {
    theme: themeDefault
};

export default withTheme(Content);
