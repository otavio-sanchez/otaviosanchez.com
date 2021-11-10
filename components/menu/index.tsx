import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import { themeDefault } from '../../styles/theme';
import Button from '../button';
import Icon from './components/icon';
import { ButtonMenu, Container, Header, ItemList, List, Nav, Title } from './style';
import { Item, Props } from './types';

const Menu = ({ items, title }: Props): JSX.Element => {
    const [open, setOpen] = useState(false);

    const changeMenu = () => {
        setOpen(!open);
    };

    return (
        <Header>
            <Container>
                <Title>{title}</Title>
                <Nav>
                    <ButtonMenu>
                        <Button data-testid="menu" id="menu" onClick={changeMenu}>
                            <Icon open={open} />
                        </Button>
                    </ButtonMenu>
                    <List open={open}>
                        {items?.map((item: Item) => (
                            <ItemList key={item.link}>
                                <a href={item.link} title={item.text}>
                                    {item.text}
                                </a>
                            </ItemList>
                        ))}
                    </List>
                </Nav>
            </Container>
        </Header>
    );
};

Menu.defaultProps = {
    theme: themeDefault
};

export default withTheme(Menu);
