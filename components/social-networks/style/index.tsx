import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.8;
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

export const Container = styled.nav`
    position: fixed;
    right: 10px;
    top: 30%;

    @media only screen and (max-width: 768px) {
        visibility: hidden;
    }
`;

export const Content = styled.div`
    height: 30px;
    width: 75px;
    position: absolute;
    top: -60px;
    right: -17px;
    transform: rotate(90deg);
`;

export const List = styled.ul`
    padding: 0px;
    margin: 0px;
`;

export const ItemList = styled.li`
    list-style: none;
    &:hover {
        animation: ${rotate} 0.5s linear;
        opacity: 0.8;
    }
`;

export const Icon = styled.img`
    width: 30px;
    display: inline-block;
`;

export const Title = styled.h5`
    margin: 0px;
`;

export const IconContainer = styled.div`
    color: ${(props) => props.theme.colors?.textAlternative};
    font-size: ${(props) => props.theme.fonts?.xSmall};
    font-family: 'PlexusSans-Regular';
`;
