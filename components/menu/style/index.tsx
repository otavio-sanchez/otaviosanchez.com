import styled from 'styled-components';

export const Header = styled.header`
    width: 100vw;
    height: 50px;
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    align-items: center;
    z-index: 10;
    position: relative;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors?.main};
    font-size: ${(props) => props.theme.fontSizes?.large};
    font-family: PlexusSans-Bold;
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    display: flex;
    margin: 0px;
    padding: 0px;
    transition: 0.5s;

    @media only screen and (max-width: 768px) {
        background-color: #fff;
        height: 100vh;
        width: ${({ open }) => (open ? '100vw' : '0px')};
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
        margin: 20px 5.2%;
    }
`;

export const Container = styled.div`
    width: 90%;
    margin: 0px auto;
    max-width: 1280px;
    align-items: center;
    display: flex;
    @media only screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;
