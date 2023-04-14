import React from "react";
import Navbar from "../components/Navbar";
import Bienvenidos from "../components/Bienvenidos";
import InfoCaja from "../components/InfoCaja";
import Footer  from "../components/Footer";
import "../css/Perfil.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";


    const Perfil = () => {
        return (
            <div className="App">

                <Navbar />
                <Bienvenidos />
                <InfoCaja />
             
            </div>

        )
    }



    export default Perfil;
    



