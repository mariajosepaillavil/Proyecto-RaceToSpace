import React from "react";
import Navbar from "../components/Navbar";
import Lecciones from "../components/Lecciones";
import BloquesNiveles from "../components/BloquesNiveles";
import "../css/Perfil.css";
import ComenzarHora from "../components/ComenzarHora";




const Modulo = () => {
    return (
        <div className="App" >

            <Navbar />
            <ComenzarHora/>
            <Lecciones />
            <BloquesNiveles />
         
        </div>

    )
}



export default Modulo;
