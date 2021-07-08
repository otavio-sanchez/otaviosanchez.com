import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin-top: 50px;

    .info {
        font-family: PlexusSans-Bold;
    }
`;

export const Title = styled.h1`
    margin: 0px;
    color: ${(props) => props.theme.colors?.main};
    font-size: ${(props) => props.theme.fonts?.large};
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
    font-family: PlexusSans-Bold;
    padding: 0px;
`;

export const Body = styled.p``;

export const Container = styled.div`
    width: 90%;
    margin: 0px auto;
    max-width: 1280px;
    display: flex;
`;

export const Article = styled.article`
    width: 90%;
    margin: 0px auto;
    max-width: 1280px;

    p {
        font-family: 'PlexusSans-ExtraLight';
        font-weight: 600;
    }
    margin-bottom: 50px;
`;

export const Projects = styled.div``;
