import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../components/pages/Home'
import {Navbar} from '../components/Navbar'
import { Indicadores } from '../components/pages/Indicadores'
import { Visualizador } from '../components/pages/Visualizador'

export const AppRouter = () => {
  return (
    <div className='contenedor'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="indicador/:idIndicador" element={<Indicadores/>}/>
            <Route path='/*' element={<Navigate to="/"/>}/>
        </Routes>
    </div>
  )
}
