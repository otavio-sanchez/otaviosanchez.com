import styled from 'styled-components';

export const List = styled.div`
    margin: 0px;
    padding: 0px;
    transition: 0.5s;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ItemList = styled.div`
    transition: all 1s;
    padding: 5px;
    border-bottom: 3px solid #ddd;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    color: ${(props) => props.theme.colors?.text};
    min-width: 24%;

    @media only screen and (max-width: 1024px) {
        min-width: 49%;
    }

    @media only screen and (max-width: 768px) {
        min-width: 100%;
    }

    h2 {
        font-size: 16px;
        margin: 0px;
    }

    p {
        margin: 0px;
    }

    div {
        padding: 10px;
        box-sizing: border-box;
    }

    span {
        display: block;
    }

    a {
        padding-right: 16px;
    }
`;

export const Icon = styled.img`
    width: 50px;
    display: inline-block;
`;

export const Date = styled.p`
    padding-top: 8px;
    font-size: 12px;
`;

export const IconContainer = styled.div`
    color: ${(props) => props.theme.colors?.textAlternative};
    font-size: ${(props) => props.theme.fonts?.xSmall};
    font-family: 'PlexusSans-Regular';
`;
