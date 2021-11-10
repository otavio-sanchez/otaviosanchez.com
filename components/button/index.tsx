import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { ButtonComponent } from './style';
import { Props } from './types';

const Button = ({ children, onClick, type = 'default' }: Props) => {
    console.log(type);

    return (
        <ButtonComponent type={type} onClick={onClick}>
            {children}
        </ButtonComponent>
    );
};

Button.defaultProps = {
    theme: themeDefault
};

export default withTheme(Button);
