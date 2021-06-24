import styled from 'styled-components';

export const ButtonComponent = styled.button`
    background-color: #fff;
    cursor: pointer;
    color: ${(props) =>
        props.type === 'default' ? props.theme.colors.text : props.theme.colors?.main};
    }
    border: ${({ border }) => (border ? `1px` : `0px`)} solid  ${(props) =>
    props.type === 'default' ? props.theme.colors.text : props.theme.colors?.main};
    }
`;
