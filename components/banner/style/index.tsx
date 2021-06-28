import styled from 'styled-components';

export const BannerContent = styled.section`
    width: 100vw;
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    background-color: #fff;
    margin-top: 50px;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors?.main};
    font-size: ${(props) => props.theme.fontSizes?.large};
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
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
