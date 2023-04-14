import React from "react";
import astronauta from "../assets/img/Astronauta_pag2.png";
import "./Style.css"


const Banner = () => {
    return (


        <div class="p-5 mb-5">
            <div class="fondo">
                <img src={astronauta} class="rounded float-end" alt="..." ></img>
                <div />

                <div class="primer-text">
                    <h1>
                        Aprendamos juntos el universo de los códigos
                    </h1>
                    <p>
                        Curso de programación para pequeños de 6 a 10 años.
                        Accede a nuestras pruebas gratuitas.
                    </p>
                </div>

                <div class="boton">
                    <button href="#" class="btn btn-primary me-md-2"> Prueba padres</button>
                    <button href="#" class="btn btn-primary me-md-2">Prueba maestros</button>
                </div>


                <div class="segundo-text">
                    <h2><spam class="resaltar">
                        Nuestro objetivo
                    </spam></h2>
                    <p>
                        Impulsar desde la niñez el aprendizaje sobre el universo de la tecnología. Contribuyendo en la formación de los  desarrolladores del futuro. 
                    </p>
                </div>
            </div>

        </div>


    )
}

export default Banner;