import styled from "styled-components";



export const BotonSimple = styled.button`
    padding: 10px;
    margin-right: 4px;
    margin-top: 2px;
    margin-bottom: 2px;
    cursor: pointer;
    background-color: ${props => props.theme.colorInnoving.moradoClaro};
    color: ${props => props.theme.colorInnoving.blanco};
    border: 1px solid ${props => props.theme.colorInnoving.blanco};
    border-radius: 5px;
`
export const BotonExtendido = styled(BotonSimple)`
    background-color: ${props => props.theme.coloresInterfaz.verde};
`

export const BotonIcon = styled.i`
    font-size: 36px;
    display: inline;
    color: none;
    top: 10px;
    cursor: pointer;
    position: relative;
`