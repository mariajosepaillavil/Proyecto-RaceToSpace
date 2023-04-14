import React from "react";
import Navbar from "../components/Navbar";
import "../css/Perfil.css";
import JuegoPizarra from "../components/JuegoPizarra";
import SiguienteNivel  from "../components/SiguienteNivel";
import Refenrente from "../components/Referente";




const Juego1 = () => {
    return (
        <div className="App" >

            <Navbar />
            <Refenrente />
            <JuegoPizarra />
            <SiguienteNivel />

        </div>

    )
}



export default Juego1;
