import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    min-height: 80vh;
    position: relative;
    padding: 32px 0px;
    box-sizing: border-box;

    .info {
        font-family: PlexusSans-Bold;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 360px;
    z-index: 2;
`;

export const Triangle = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 6vh 100vw;
    border-color: transparent transparent #fff transparent;
`;

export const Background = styled.div`
    width: 255px;
    margin: 0 auto;
    transform: rotate(45deg);
    position: absolute;
    z-index: 1;
    margin-bottom: 48px;
    margin-left: 16px;

    &::after {
        content: ' ';
        background-color: ${(props) => props.theme.colors?.main};
        width: 100%;
        position: absolute;
        height: 100%;
        transform: rotate(45deg);
        top: 0px;
        right: 0px;
    }

    div {
        width: 23%;
        padding-bottom: 23%;
        margin: 1%;
        float: left;
    }
`;

export const BackgroundAlternative = styled.div`
    width: 255px;
    margin: 0 auto;
    transform: rotate(45deg);
    position: absolute;
    z-index: 1;
    margin-bottom: 32px;
    margin-left: 16px;

    &::after {
        content: ' ';
        background-color: ${(props) => props.theme.colors?.warning};
        width: 100%;
        position: absolute;
        height: 100%;
        transform: rotate(45deg);
        top: 0px;
        right: 0px;
    }

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
    box-sizing: border-box;

    p {
        font-family: 'PlexusSans-ExtraLight';
        font-weight: 600;
    }

    @media only screen and (max-width: 980px) {
        width: 45%;
        padding-right: 5%;
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
