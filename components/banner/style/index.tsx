import styled from 'styled-components';

export const BannerContent = styled.section`
    width: 100vw;
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    margin-top: 50px;
    position: relative;
    z-index: 1;

    .title {
        font-family: PlexusSans-Bold;
        font-size: 30px;
        color: ${(props) => props.theme.colors?.text};
    }
`;

export const Title = styled.h1`
    margin: 0px;
    color: ${(props) => props.theme.colors?.main};
    line-height: 1em;
    font-size: 150px;
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
    font-family: PlexusSans-Bold;
    padding: 0px;
    @media only screen and (max-width: 768px) {
        font-size: 2em;
    }

    @media only screen and (max-width: 369px) {
        font-size: 1.5em;
    }

    @media only screen and (max-width: 220px) {
        font-size: 1.2em;
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
        flex-flow: column wrap;
        flex-direction: column-reverse;
    }
`;

export const Infos = styled.article`
    p {
        font-family: 'PlexusSans-ExtraLight';
        font-weight: 600;
        margin: 8px 0px;
    }
    margin-bottom: 50px;
`;

export const BannerImage = styled.img`
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
`;
