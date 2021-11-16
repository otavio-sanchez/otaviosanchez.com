import styled from 'styled-components';

export const FooterComponent = styled.footer`
    width: 100vw;
    height: 100px;
    align-items: center;
    z-index: 10;
    position: relative;
    margin-bottom: -200px;
`;

export const Background = styled.div`
    width: 120vw;
    margin-left: -43px;
    margin-bottom: -230px;
    height: 164px;
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    align-items: center;
    z-index: 10;
    position: relative;
    background-color: ${(props) => props.theme.colors?.main};
    transform: rotate(-7deg);
`

export const Title = styled.h1`
    color: ${(props) => props.theme.colors?.main};
    font-size: ${(props) => props.theme.fontSizes?.large};
    font-family: PlexusSans-Bold;
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
    z-index: 10;
    position: relative;
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
