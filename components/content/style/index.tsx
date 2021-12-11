import styled from 'styled-components';

export const MainContent = styled.div`
    position: relative;
    z-index: 1;
`;

export const Background = styled.div`
    transition: all 1s ease;
    background-color: #EFEFEF;
    width: 200%;
    height: 100vh;
    position: fixed;
    offset-rotate: 100px;
    z-index: 0;

    ${({ activeEffect }) =>
        activeEffect ? `
            transform: rotate(0);
            top: 0;
            left: 0;
        
            ` : `
            transform: rotate(-12deg);
            top: -98%;
            left: -40%;
            `

    }
`;


export const BackgroundOut = styled.div`
    transition: all 1s ease;
    background-color: #A3A9D0;
    width: 200%;
    height: 100vh;
    position: fixed;
    offset-rotate: 100px;
    z-index: 0;

    ${({ activeEffect }) =>
        activeEffect ? `
            transform: rotate(-20deg);
            top: 0;
            left: -40%;
            ` : `
            transform: rotate(-3deg);
            top: -98%;
            left: -20%;
            `
    }
`;

