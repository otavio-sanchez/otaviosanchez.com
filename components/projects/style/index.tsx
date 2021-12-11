import styled from 'styled-components';

export const List = styled.div`
    margin: 0px;
    padding: 0px;
    transition: 0.5s;
    width: 100%;
    align-items: center;
`;

export const ItemList = styled.div`
    padding: 5px 0px;
    border-bottom: 3px solid #ddd;
    display: flex;
    box-sizing: border-box;
    align-items: center;

    div {
        padding: 10px;
        box-sizing: border-box;
    }

    span {
        display: block;
    }

    &:nth-child(even) {
        margin-left: 20%;
    }

    &:nth-child(odd) {
        margin-right: 20%;
    }

    &:last-child {
        border-bottom: 0px solid #ccc;
    }
`;

export const Icon = styled.img`
    width: 50px;
    display: inline-block;
`;

export const IconContainer = styled.div`
    color: ${(props) => props.theme.colors?.textAlternative};
    font-size: ${(props) => props.theme.fonts?.xSmall};
    font-family: 'PlexusSans-Regular';
`;
