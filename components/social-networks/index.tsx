import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { Container, Content, Icon, IconContainer, ItemList, List, Title } from './style';
import { Item, Props } from './types';

const SocialNetworks = ({ items }: Props): JSX.Element => {
    const renderIcon = (icon: string) => {
        switch (icon) {
            case 'github':
                return (
                    <IconContainer>
                        <Icon src="/images/icons/github-sn.svg" title={icon} />
                    </IconContainer>
                );
            case 'linkedin':
                return (
                    <IconContainer>
                        <Icon src="/images/icons/linkedin-sn.svg" title={icon} />
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
        <Container>
            <Content>
                <Title>Me encontre</Title>
            </Content>
            <List>
                {items?.map((item: Item) => (
                    <ItemList key={item.link}>
                        <a href={item.link} title={item.text}>
                            {renderIcon(item.icon)}
                        </a>
                    </ItemList>
                ))}
            </List>
        </Container>
    );
};

SocialNetworks.defaultProps = {
    theme: themeDefault
};

export default withTheme(SocialNetworks);
