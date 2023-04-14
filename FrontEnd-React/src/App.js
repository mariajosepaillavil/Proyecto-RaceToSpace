import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from './pages/Perfil';
import Modulo from './pages/Modulo'
import Juego1 from "./pages/Juego1";
import Inicio from './pages/Inicio';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Perfil' element={<Perfil />} />
                <Route path='/Modulo' element={<Modulo />} />
                <Route path='/Inicio' element={<Inicio />} />
                <Route path='/Juego1' element={<Juego1 />} />
            
            </Routes>
        </BrowserRouter>
    )
}

export default App;
