import styled from 'styled-components';

export const FooterComponent = styled.footer`
    width: 100vw;
    align-items: center;
    position: relative;
    background-color: #fff;
`;

export const Container = styled.div`
    padding: 10px 0px;
    display: block;
    bottom: 30px;
    @media only screen and (max-width: 1920px) {
        bottom: 40px;
    }
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    span {
        color: ${(props) => props.theme.colors?.warning};
        font-size: ${(props) => props.theme.fonts?.small};
    }
    background-color: ${(props) => props.theme.colors?.main};
`;

export const ContainerFooter = styled.div`
    padding: 10px 0px;
    display: block;
    bottom: 30px;
    @media only screen and (max-width: 1920px) {
        bottom: 40px;
    }
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    background-color: ${(props) => props.theme.colors?.mainDark};
`;

export const Triangle = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    margin-bottom: -4px;
    border-width: 0 0 4vh 100vw;
    border-color: transparent transparent ${(props) => props.theme.colors?.mainDark} transparent;
`;

export const TriangleInverse = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    margin-bottom: -4px;
    border-width: 4vh 0 0 100vw;
    border-color: transparent transparent transparent ${(props) => props.theme.colors?.main};
    background-color: #fff;
`;

export const ContainerTriangle = styled.div`
    position: relative;
    margin-bottom: 30px;
    z-index: 2;
`;
