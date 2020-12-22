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

const scale = keyframes`
  from {
    transform: scale(1,1);
  }

  to {
    transform: scale(0,0);
  }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${scale} 1s ease 1 1.25s;

    @media (max-width: 786px) {
      max-height: 80vh;
    }
`

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