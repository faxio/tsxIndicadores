import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { dat } from '../components/apifake'
import logosvg from '../assets/logo.svg'

export const Navbar = () => {

  const navigate = useNavigate();
  const [valor, setValor] = useState(dat);

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
            <details className='acordeon'>
                <summary>Eje numero 1</summary>
                <div className='subItems'>
                  <NavLink 
                    className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                    to="indicador/1"> Indicador1</NavLink>
                  <NavLink 
                        className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                        to="indicador/2"> Indicador2</NavLink>
                </div>
            </details>

            <details className='acordeon'>
                <summary>Eje numero 2</summary>
                <div className='subItems'>
                  <NavLink 
                    className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                    to="indicador/1"> Indicador1</NavLink>
                  <NavLink 
                        className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                        to="indicador/2"> Indicador2</NavLink>
                </div>
            </details>

            <details className='acordeon'>
                <summary>Eje numero 3</summary>
                <div className='subItems'>
                  <NavLink 
                    className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                    to="indicador/1"> Indicador1</NavLink>
                  <NavLink 
                        className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                        to="indicador/2"> Indicador2</NavLink>
                </div>
            </details>

            <details className='acordeon'>
                <summary>Eje numero 4</summary>
                <div className='subItems'>
                  <NavLink 
                    className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                    to="indicador/1"> Indicador1</NavLink>
                  <NavLink 
                        className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                        to="indicador/2"> Indicador2</NavLink>
                </div>
            </details>

            <details className='acordeon'>
                <summary>Eje numero 5</summary>
                <div className='subItems'>
                  <NavLink 
                    className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                    to="indicador/1"> Indicador1</NavLink>
                  <NavLink 
                        className={ ({isActive}) => `items ${isActive? 'itemsActive':''}`}
                        to="indicador/2"> Indicador2</NavLink>
                </div>
            </details>
          </div>
    </nav>
  )
}
