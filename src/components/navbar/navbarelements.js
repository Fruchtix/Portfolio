import styled from 'styled-components'
import { Link } from 'react-scroll';

export const Container = styled.div`
    /* position: fixed; */
    z-index: 1003;
`

export const NavWrapper = styled.ul`
    display: flex;
    z-index: 1000;
    justify-content: flex-end;
    margin: 0px 5vw;
    align-items: center;
    height: 15vh;
    background: transparent;
    position: absolute;
    width: calc(100vw - 10vw);

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1001;
        background: #2F2F2F;
        height: 100vh;
        width: 70vw;
        right: 0;
        top: 0;
        margin: 0px;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
    }
`

export const NavElement = styled.li`
    @media (max-width: 768px) {
        margin: 4vh;
    } 
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.thirdColor};
    }
`

export const ResumeWrapper = styled.div``

export const ResumeBtn = styled.a`
    padding: 10px;
    text-decoration: none;
    color: ${props => props.theme.colors.thirdColor};
    padding: 9px 18px;
    border: 1px solid ${props => props.theme.colors.thirdColor};
    border-radius: 2px;
    font-size: 14px;
    margin-left: 12px;
    cursor: pointer;
`

export const HamburgerMenu = styled.div`
    cursor: pointer;
    display: none;
    position: fixed;
    top: 25px;
    right: 35px;
    width: 2rem;
    height: 2rem;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        z-index: 1002;
    } 
`

export const MenuLine = styled.div`
    width: 2rem; 
    height: 0.25rem;
    background-color: ${props => props.open ? props.theme.colors.thirdColor : '#fff'};;
    /* margin: 5px; */
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 1};
    }

    &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`