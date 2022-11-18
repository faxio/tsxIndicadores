import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ejes, indicadoresResumidos } from '../components/apifake'
import logosvg from '../assets/logo.svg'
import { Buscador, ContenedorBuscador, ContenedorIconBuscador } from './styledUnique/Input/Buscadores';
import { LogoInnoving } from './styledUnique/Imagenes';

export const Navbar = () => {

  const navigate = useNavigate();
  const [ejesIn, setEjesIn] = useState(ejes);
  const [indicadores, setIndicadores] = useState(indicadoresResumidos)

  return (
    <nav className='navbar'>
          <Link className='innoving' to="/">
            <LogoInnoving  src={logosvg}/>
          </Link>

          <ContenedorBuscador> 
            <ContenedorIconBuscador> 
              <i className='bx bx-search'></i>
            </ContenedorIconBuscador>
            <Buscador 
              placeholder='Buscar'
            />
          </ContenedorBuscador>

          <div className='itemsAcordeon'>
            {ejesIn.map(ejes => {
              return(
              <details className='acordeon' key={ejes.id}>
                <summary>{ejes.nombre}</summary>

                {indicadores.map( indi => {
                  return (
                    (ejes.nombre === indi.eje) ?     
                    <div className='subItems' key={indi.id}>
                      <NavLink 
                      className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                      to={`/indicador/${indi.id}`}> {indi.nombre}</NavLink>
                    </div>
                    : []
                  )
                })}

                

            </details>
              )
            })}
          </div>
    </nav>
  )
}
