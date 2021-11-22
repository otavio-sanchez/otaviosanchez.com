import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: calc(100vh - 50px);
    margin-top: 50px;
    background-color: #fff;
    padding: 50px 0px;
    box-sizing: border-box;

    .info {
        font-family: PlexusSans-Bold;
    }
`;

export const Title = styled.h1`
    margin: 0px;
    color: ${(props) => props.theme.colors?.main};
    font-size: ${(props) => props.theme.fonts?.xxLarge};
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
    font-family: PlexusSans-Bold;
    padding: 0px;
    width: 100%;
    text-align: center;
`;

export const Body = styled.div``;

export const Container = styled.section`
    width: 90%;
    margin: 0px auto;
    max-width: 1280px;
`;

export const Article = styled.article`
    width: 90%;
    margin: 0px auto;
    max-width: 1280px;

    p {
        font-family: 'PlexusSans-ExtraLight';
        font-weight: 600;
    }
`;

export const Projects = styled.div``;
