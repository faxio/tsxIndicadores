import styled from 'styled-components'

export const Texto = styled.p`
    color: black;
    display: inline;
`

export const TextoNegrita = styled(Texto)`
    font-weight: bold;
    font-family: sans-serif;

`

export const TextoBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
    padding-left: 4px;
    padding-bottom: 4px;
    padding-top: 4px;
`