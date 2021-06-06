import React from 'react';
import { Props, Item } from './types';
import { Header, Title, Nav, List, ItemList, SubTitle } from './style'



const Menu = ({ items, title, subtitle }: Props) => (
    <Header>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>

        <Nav>
            <List>
                {items.map((item: Item) => <ItemList>{item}</ItemList>)}
            </List>
        </Nav>
    </Header>
)

export default Menu;