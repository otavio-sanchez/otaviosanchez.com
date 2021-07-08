import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: calc(100vh - 50px);
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
    font-size: 150px;
    padding: 2px 5px;
    margin-right: 30px;
    font-weight: 600;
    font-family: PlexusSans-Bold;
    padding: 0px;
    @media only screen and (max-width: 768px) {
        font-size: 9em;
    }

    @media only screen and (max-width: 369px) {
        font-size: 6em;
    }

    @media only screen and (max-width: 220px) {
        font-size: 4em;
    }
`;

export const Body = styled.section``;

export const Article = styled.article`
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

    p {
        font-family: 'PlexusSans-ExtraLight';
        font-weight: 600;
    }
    margin-bottom: 50px;
`;

export const Projects = styled.div``;
