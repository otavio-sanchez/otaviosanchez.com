import styled from 'styled-components';

export const Header = styled.header`
    width: 100vw;
    height: 50px;
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    align-items: center;
    background-color: #fff;
    @media only screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors?.main};
    font-size: ${(props) => props.theme.fontSizes?.large};
    margin: 2px 0px 10px 2px;
    font-weight: 600;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    height: 100vh;
    display: flex;
    margin: 0px;
    padding: 0px;
    transition: 1s;
    background-color: #fff;

    @media only screen and (max-width: 768px) {
        width: ${({ open }) => (open ? '0px' : '100vw')};
        display: block;
        position: fixed;
        top: 50px;
        left: 0px;
        z-index: 3;
        overflow: hidden;
    }
`;

export const ButtonMenu = styled.div`
    display: none;

    @media only screen and (max-width: 768px) {
        display: inline-block;
    }
`;

export const ItemList = styled.li`
    list-style: none;
    margin: 0px 15px;
    @media only screen and (max-width: 768px) {
        display: block;
        margin: 10px;
    }
`;
