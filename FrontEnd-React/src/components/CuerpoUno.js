import React from "react";
import pensamiento from "../assets/img/Pensamiento-logico.png";
import equipo from "../assets/img/Trabajo-equipo.png";
import aprendizaje from "../assets/img/Apredizaje-profesional.png";
import "./Style.css"

const CuerpoUno = () => {
    return (

        <div class="car mb-4">
            <div class="car-body">
                <figure className="text-center">
                    <h2>¿Qué aprenderán tus hijos con <spam class="resaltar">RaceSpace</spam>?</h2>
                    <h4>Educación con base a código para la primera infancia</h4>
                </figure>

                <div class="text-cuerpo-uno">
                <img src={pensamiento} class="texto-uno" alt="..." ></img>
                    <h5 class="car-title">
                        Pensamiento lógico
                    </h5>
                    <p class="car-text md-2">
                        Herramientas necesarias para solucionar problemas.

                    </p>
                </div>


                
                <div class="text-cuerpo-dos">
                <img src={equipo} class="texto-dos" alt="..." ></img>
                    <h5 class="car-title">
                        Trabajo en equipo
                    </h5>
                    <p class="car-text md-2">
                        Ambiente colaborativo para fomentar la autoestima, el manejo de la frustración y la confianza.

                    </p>
                </div>



                <div class="text-cuerpo-tres">
                <img src={aprendizaje} class="texto-tres" alt="..." ></img>
                <h5 class="car-title">
                    Aprendizaje del futuro
                </h5>
                <p class="car-text">
                        Proyección en una de las profesiones más demandadas del siglo XXI.
                </p>
                </div>

                </div>
                </div>
    )

}

export default CuerpoUno