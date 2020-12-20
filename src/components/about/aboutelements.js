import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    padding: 0px 12vw;
    min-height: 80vh;
    margin: auto;
    max-width: 1100px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Headline = styled.div`
`

export const Description = styled.div`

`

export const Line = styled.div`
    background-color: #515152;
    height: 1px;
    flex: 1;
    margin-left: 20px;
`

export const IconContainer = styled.div`

`

export const HeadlineWrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    align-items: center;
`

export const Image = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #515152;
    align-self: center;
`