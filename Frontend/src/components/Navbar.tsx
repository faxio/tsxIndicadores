import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ejes, indicadoresResumidos } from '../components/apifake'
import logosvg from '../assets/logo.svg'

export const Navbar = () => {

  const navigate = useNavigate();
  const [ejesIn, setEjesIn] = useState(ejes);

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
                <div className='subItems'>
                  <NavLink 
                    className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                    to="indicador/1"> Indicador1</NavLink>
                  <NavLink 
                        className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                        to="indicador/2"> Indicador2</NavLink>
                </div>
            </details>
              )
            })}
          </div>
    </nav>
  )
}
