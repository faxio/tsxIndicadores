import styled from 'styled-components'

export const Texto = styled.p`
    display: inline;
`

export const TextoNegrita = styled(Texto)`
    font-weight: bold;
    font-family: sans-serif;

`
export const TextoTitulo = styled.p`
    display: block;
    padding: 10px 5px 10px 5px;
`


export const TextoTituloNegrita = styled(TextoTitulo)`
    font-weight: bold;
`

export const TextoBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
    padding-left: 4px;
    padding-bottom: 4px;
    padding-top: 4px;
`

export const TextoBlockTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding-left: 4px;
    padding-bottom: 4px;
    padding-top: 4px;
`