import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ejes, indicadoresResumidos } from '../components/apifake'
import logosvg from '../assets/logo.svg'

export const Navbar = () => {

  const navigate = useNavigate();
  const [ejesIn, setEjesIn] = useState(ejes);
  const [indicadores, setIndicadores] = useState(indicadoresResumidos)

  return (
    <nav className='navbar'>
          <Link className='innoving' to="/">
            <img className="logo" src={logosvg}/>
          </Link>

          <div className='buscadorCompleto'> 
            <span className='buscador'> 
              <i className='bx bx-search'></i>
            </span>
            <input 
              className='inputSearch' 
              placeholder='Buscar'
            />

          </div>
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
