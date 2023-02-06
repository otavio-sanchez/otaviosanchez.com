import styled from 'styled-components';

export const BlockMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors?.main};
    position: fixed;
    z-index: 100;
    top: 0px;
    left: 0px;
    ${({ loading }) => !loading && `top: -100%;`}
    transition: position 1s ease-out;
`;
