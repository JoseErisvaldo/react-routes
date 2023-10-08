import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './componets/Header'
import Footer from './componets/Footer'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servico from './pages/Servico'
import Contato from './pages/Contato'


function RoutesApp () {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path='/Servico' element={ <Servico/>} /> 
                <Route path='/Contato' element={ <Contato/> } /> 
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default RoutesApp