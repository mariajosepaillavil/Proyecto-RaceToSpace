import React from "react";
import Navbar from "../components/Navbar";
import { TablaAlumno } from "../components/TablaAlumno";
import { getAll } from "../services/EstudiantesServices";
//import { getAllModulos } from "../services/ModulosServices";

//import { TablaModulos } from "../components/TablaModulos";

import "../css/Perfil.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';





const PerfilProfesor = () => {

    const [estudiante, setEstudiante] = useState([]);
 //const [modulo, setModulo] = useState({});

    const encontrarEstudiantes = async () => {
        setEstudiante(await getAll ());
        console.log("estudiantes:" + estudiante );
    }

   

       // const encontrarModulo = async () => {
      //  setModulo(await getAllModulos());
    //  console.log("modulos:" + modulo);
   // }

    useEffect(() => {
        console.log(estudiante);
        encontrarEstudiantes();
       // encontrarModulo();
    }, []);

    


    return (
        <div className="App">

            <Navbar />
            <TablaAlumno Estudiante={estudiante} />
    

        </div>

    )
}



export default PerfilProfesor;

