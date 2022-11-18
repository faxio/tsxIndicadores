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

export const Topbar = styled.div`
    display: flex;
    flex-direction: wrap;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.colorInnoving.negro};
    padding: 10px;
    margin-bottom: 20px;
    @media (max-width: 750px) {
        flex-direction: column;
        padding-right: 20px;
    }
`

export const ContenedorIndicador = styled.div`
    background-color: ${props => props.theme.colorInnoving.blanco};
    padding: 20px;
`

export const ContenedorGrid = styled.div`
    display: grid;
    grid-template-columns: 300px calc(100% - 300px) ;
    grid-template-areas: "navbar contenido";
    grid-template-rows: auto;
    @media screen and (max-width: 768px){
        grid-template-columns: 100%;
        height: auto;
		grid-template-areas: "navbar"
                             "contenido";
    }
`