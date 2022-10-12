import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../components/pages/Home'
import {Navbar} from '../components/Navbar'
import { Indicadores } from '../components/pages/Indicadores'
import { ejes } from '../components/apifake'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home ejes={ejes}/>}/>
            <Route path="indicador/:idIndicador" element={<Indicadores/>}/>
            <Route path='/*' element={<Navigate to="/"/>}/>
        </Routes>
    </div>
  )
}
