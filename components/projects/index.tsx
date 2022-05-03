import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { Date, Icon, IconContainer, ItemList, List } from './style';
import { Item, Props } from './types';

const Projects = ({ items }: Props): JSX.Element => {
    const renderIcon = (icon: string) => {
        switch (icon) {
            case 'github':
                return (
                    <IconContainer>
                        <Icon src="/images/icons/github.svg" title={icon} />
                    </IconContainer>
                );

            default:
                return (
                    <IconContainer>
                        <Icon src="/images/icons/npm.svg" title={icon} />
                    </IconContainer>
                );
        }
    };

    return (
        <List>
            {items?.map((item: Item) => (
                <ItemList key={item.title}>
                    <div>{renderIcon(item.icon)}</div>
                    <a href={item.link} title={item.text} target="_blank" rel="noreferrer">
                        <h2>{item.title}</h2>
                        {item.text && <p>{item.text}</p>}
                        <Date>{item.date}</Date>
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
