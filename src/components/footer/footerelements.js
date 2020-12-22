import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    padding: 30px 50px;
    background: #1A1A1A;
    justify-content: space-between;
    margin-top: 200px;

    @media (max-width: 768px) {
        margin-top: 150px;
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const Copyright = styled.div``

export const LegalInformation = styled(Link)`
    text-decoration: none;
    color: #fff;
    
    @media (max-width: 768px) {
        margin-bottom: 12px;
    }
`