import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(10deg);
  }

  70% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

export const ButtonComponent = styled.button`
    background-color: ${({ type }) =>
        type === 'alternative' ? (props) => props.theme.colors?.main : '#fff'};
    color: ${({ type, theme }) => (type === 'alternative' ? '#fff' : theme.colors?.text)};
    cursor: pointer;
    border: 0px solid #fff;
    padding: ${({ type }) => (type === 'alternative' ? '15px 50px 15px 15px' : '15px')};
    font-family: 'PlexusSans-Regular';
    font-size: ${(props) => props.theme.fontSizes?.normal};

    &:hover {
        animation: ${rotate} 0.5s linear;
    }
`;
