import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  from {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }

  to {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
`;

export const Container = styled.div``

export const Spinner = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent,transparent 40%, #e5f403);
    animation: ${animate} 2s linear infinite;

    &:before {
        content: '';
        position: absolute;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;
        background: #1D1D1D;
        border-radius: 50%50%;
        z-index: 99;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: linear-gradient(45deg, transparent,transparent 40%, #e5f403);
        border-radius: 50%50%;
        z-index: 1;
        filter: blur(30px);
    }
`