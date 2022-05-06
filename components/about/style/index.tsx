import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    height: 100vh;

    .info {
        font-family: PlexusSans-Bold;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 360px;
    z-index: 2;
`;

export const Background = styled.div`
    width: 40%;
    margin: 0 auto;
    max-width: 360px;
    transform: rotate(45deg);
    position: absolute;
    background-color: ${(props) => props.theme.colors?.main};
    z-index: 1;
    margin-left: 16px;
    margin-bottom: 36px;

    div {
        width: 23%;
        padding-bottom: 23%;
        margin: 1%;
        float: left;
    }
`;

export const BackgroundAlternative = styled.div`
    width: 40%;
    margin: 0 auto;
    max-width: 360px;
    transform: rotate(45deg);
    position: absolute;
    background-color: ${(props) => props.theme.colors?.warning};
    z-index: 0;
    margin-left: 16px;
    margin-bottom: 64px;

    div {
        width: 23%;
        padding-bottom: 23%;
        margin: 1%;
        float: left;
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
    font-size: ${(props) => props.theme.fonts?.normal};
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
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Article = styled.article`
    width: 50%;
    margin: 0px auto;
    padding-right: 5%;
    text-align: justify;

    p {
        font-family: 'PlexusSans-ExtraLight';
        font-weight: 600;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 32px;
    }
`;

export const FigureContainer = styled.figure`
    width: 50%;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 32px auto;
    }
`;
