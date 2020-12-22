import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const animateReverse = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const colorChange = keyframes`
  from {
    filter: hue-rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    filter: hue-rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`

export const ParticleWrapper = styled.div`
    position: relative;
    width: 750px;
    height: 800px;
    margin: -150px;
    transform-origin: right;
    animation: ${colorChange} 5s linear infinite;

    &:nth-child(even) {
        transform-origin: left;
    }
`

export const Particle = styled.span`
    position: absolute;
    top: ${props => `calc(80px * ${props.index})`};
    left: ${props => `calc(80px * ${props.index})`};
    bottom: ${props => `calc(80px * ${props.index})`};
    right: ${props => `calc(80px * ${props.index})`};

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: -8px;
        width: 15px;
        height: 15px;
        background: #f00;
        border-radius: 50%50%;
    }

    &:nth-child(3n + 1) {
        animation: ${animate} 10s alternate infinite;

        &:before {
          background: rgba(134,255,0,1);
          box-shadow: 0 0 20px rgba(134,255,0,1),
                      0 0 40px rgba(134,255,0,1),
                      0 0 60px rgba(134,255,0,1),
                      0 0 80px rgba(134,255,0,1),
                      0 0 0 8px rgba(134,255,0,.1);
        }
    }

    &:nth-child(3n + 2) {
        animation: ${animateReverse} 3s alternate infinite;

        &:before {
            background: rgba(255,214,0,1);
            box-shadow: 0 0 20px rgba(255,214,0,1),
                        0 0 40px rgba(255,214,0,1),
                        0 0 60px rgba(255,214,0,1),
                        0 0 80px rgba(255,214,0,1),
                        0 0 0 8px rgba(255,214,0,.1);
        }
    }

    &:nth-child(3n + 3) {
        animation: ${animate} 8s alternate infinite;

        &:before {
            background: rgba(0,226,255,1);
            box-shadow: 0 0 20px rgba(0,226,255,1),
                        0 0 40px rgba(0,226,255,1),
                        0 0 60px rgba(0,226,255,1),
                        0 0 80px rgba(0,226,255,1),
                        0 0 0 8px rgba(0,226,255,.1);
        }
    }
`