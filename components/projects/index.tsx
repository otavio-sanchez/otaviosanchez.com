import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { Icon, IconContainer, ItemList, List } from './style';
import { Item, Props } from './types';

const Projects = ({ items }: Props): JSX.Element => {
    const renderIcon = (icon: string) => {
        switch (icon) {
            case 'github':
                return (
                    <IconContainer>
                        <Icon src="/images/icons/github.svg" title={icon} />
                        <span>GitHub</span>
                    </IconContainer>
                );

            default:
                return (
                    <IconContainer>
                        <Icon src="/images/icons/npm.svg" title={icon} />
                        <span>npm</span>
                    </IconContainer>
                );
        }
    };

    return (
        <List>
            {items?.map((item: Item) => (
                <ItemList key={item.link}>
                    <div>{renderIcon(item.icon)}</div>
                    <a href={item.link} title={item.text}>
                        {item.text}
                    </a>
                </ItemList>
            ))}
        </List>
    );
};

Projects.defaultProps = {
    theme: themeDefault
};

export default withTheme(Projects);
