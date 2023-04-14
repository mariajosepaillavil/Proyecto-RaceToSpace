import React from "react";
import { Navbar, Banner, CuerpoUno, CuerpoDos, Carrusel, Formulario } from '../components';
import { Link } from "react-router-dom";



const Inicio = () => {
    //esto es un comentario
    return (

            <div className='container md-12 --bs-orange'>
                <div className='row'>
                    <Navbar />
                    <Banner />
                    <CuerpoUno />
                    <Carrusel />
                    <CuerpoDos />
                    <Formulario />
                    <Link to="/Formularios"><button type="button" class="btn btn-primary">volver a incio</button></Link>

                    <div class="card-footer text-body-secondary-center">
                    © RaceToSpace 2023
                    </div>
                </div>

            </div>

        
    )
}
export default Inicio;