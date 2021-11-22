import styled from 'styled-components';

export const FooterComponent = styled.footer`
    width: 100vw;
    align-items: center;
    position: relative;
`;

export const Container = styled.div`
    padding: 15px 0px;
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
        color:  ${(props) => props.theme.colors?.warning};
        font-size: ${(props) => props.theme.fonts?.small};
    }
    background-color: ${(props) => props.theme.colors?.main};
`;

export const ContainerFooter = styled.div`
    padding: 15px 0px;
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

