import React from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import { Container, Content, Icon, IconContainer, ItemList, Link, List, Title } from './style';
import { Item, Props } from './types';

const Contact = ({ socialNetwork }: Props): JSX.Element => {
    const renderIcon = (icon: string) => {
        switch (icon) {
            case 'github':
                return (
                    <IconContainer>
                        <Icon src="/images/icons/github-b.svg" title={icon} />
                    </IconContainer>
                );
            case 'linkedin':
                return (
                    <IconContainer>
                        <Icon src="/images/icons/linkedin-b.svg" title={icon} />
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
        <Container id="contato">
            <Content>
                <Title>Contato</Title>
                <p>Deseja entrar em contato comigo ou tem alguma dúvida?</p>
                <p>
                    Mande um email para{' '}
                    <Link href="mailto:contato@otaviosanchez.com">contato@otaviosanchez.com</Link>.
                </p>

                <div> Ou acesse: </div>
            </Content>
            <List>
                {socialNetwork?.map((item: Item) => (
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

Contact.defaultProps = {
    theme: themeDefault
};

export default withTheme(Contact);
