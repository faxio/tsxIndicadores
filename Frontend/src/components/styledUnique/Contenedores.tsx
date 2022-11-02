import styled from "styled-components";


export const Box = styled.div`
    background-color: #f433c0;
    color:black;
    height: auto;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 10px;
    border: 2px solid black;
    border-radius: 12px;
    padding: 5px;
`

export const BoxEvidencias = styled(Box)`
    background-color: ${props =>{
        switch(props.type){
            case 'bien':
                return props.theme.coloresAlerta.bien;
            case 'atento':
                return props.theme.coloresAlerta.atento;
            case 'error':
                return props.theme.coloresAlerta.error;
            case 'advertencia':
                return props.theme.coloresAlerta.advertencia
        }
    }};
    color: ${props => props.theme.colorInnoving.blanco};
`

export const Stack = styled.div`
    display: inline;
`