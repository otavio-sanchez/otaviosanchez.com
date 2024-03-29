import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 48px 0px;
    background-color: #fff;

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

export const TitleProjects = styled.h3`
    margin: 0px;
    color: ${(props) => props.theme.colors?.main};
    font-size: ${(props) => props.theme.fonts?.large};
    text-align: center;
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
    font-family: PlexusSans-Bold;
    padding: 0px;
    margin-bottom: 16px;
`;

export const Body = styled.p``;

export const Container = styled.div`
    width: 90%;
    margin: 0px auto;
    max-width: 1280px;
    display: flex;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Article = styled.article`
    width: 100%;
    margin: 0px auto;
    padding-right: 5%;
    text-align: justify;

    p {
        font-family: 'PlexusSans-ExtraLight';
        font-weight: 600;
    }
    margin-bottom: 50px;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const ProjectsContainer = styled.div`
    width: 100%;
    margin: 0px auto;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;
