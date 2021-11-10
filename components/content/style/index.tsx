import styled from 'styled-components';

export const MainContent = styled.div`
    transition: background-color 1s ease;
    background-color: ${(props) => props.backgroundColor};
`;
