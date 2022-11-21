import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ejes, indicadoresResumidos } from '../components/apifake'
import logosvg from '../assets/logo.svg'
import { Buscador, ContenedorBuscador, ContenedorIconBuscador } from './styledUnique/Input/Buscadores';
import { LogoInnoving } from './styledUnique/Imagenes';
import { ContenedorItemsAcordeon, ContenedorMiniItems, ContenedorNavbar } from './styledUnique/Contenedores';
import { LinkInnoving } from './styledUnique/Buttons';

export const Navbar = () => {

  const navigate = useNavigate();
  const [ejesIn, setEjesIn] = useState(ejes);
  const [indicadores, setIndicadores] = useState(indicadoresResumidos)

  return (
    <ContenedorNavbar >
          <LinkInnoving className='innoving' to="/">
            <LogoInnoving  src={logosvg}/>
          </LinkInnoving>

          <ContenedorBuscador> 
            <ContenedorIconBuscador> 
              <i className='bx bx-search'></i>
            </ContenedorIconBuscador>
            <Buscador 
              placeholder='Buscar'
            />
          </ContenedorBuscador>

          <ContenedorItemsAcordeon>
            {ejesIn.map(ejes => {
              return(
              <details className='acordeon' key={ejes.id}>
                <summary>{ejes.nombre}</summary>

                {indicadores.map( indi => {
                  return (
                    (ejes.nombre === indi.eje) ?     
                    <ContenedorMiniItems key={indi.id}>
                      <NavLink 
                      className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                      to={`/indicador/${indi.id}`}> {indi.nombre}</NavLink>
                    </ContenedorMiniItems>
                    : []
                  )
                })}

                

            </details>
              )
            })}
          </ContenedorItemsAcordeon>
    </ContenedorNavbar>
  )
}
