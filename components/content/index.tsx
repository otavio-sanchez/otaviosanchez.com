import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { MainContent } from './style';
import { Props } from './types';

const Content = ({ backgroundColor, children }: Props): JSX.Element => (
    <MainContent backgroundColor={backgroundColor}>{children}</MainContent>
);

Content.defaultProps = {
    theme: themeDefault
};

export default withTheme(Content);
