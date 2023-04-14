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
                    <h2>¿Cómo ayuda <spam class="resaltar"> RaceToSpace</spam> a tus hijos?</h2>
                    <h4>Educación base a códigos para la primera infancia</h4>
                </figure>

                <div class="text-cuerpo-uno">
                <img src={pensamiento} class="texto-uno" alt="..." ></img>
                    <h5 class="car-title">
                        Pensamientos lógicos
                    </h5>
                    <p class="car-text md-2">
                        Enseña a tus hijos a aprender a tomar un problema, divirdirlo en varias partes y usar una serie de herramientas para resolverlo.
                    </p>
                </div>


                
                <div class="text-cuerpo-dos">
                <img src={equipo} class="texto-dos" alt="..." ></img>
                    <h5 class="car-title">
                        Trabajo en equipo
                    </h5>
                    <p class="car-text md-2">
                    Colaborar una con otros para fomentar el autoestima, manejo de la frustración y la confianza de lo más pequeño mientras van aprendiendo a programar.
                    </p>
                </div>



                <div class="text-cuerpo-tres">
                <img src={aprendizaje} class="texto-tres" alt="..." ></img>
                <h5 class="car-title">
                    Aprendizaje del futuro
                </h5>
                <p class="car-text">
                    La Programación es la profesión más demandada del siglo XXI y en rápido crecimiento. Aprender a programar abrirá a los niños muchísimas salidas laborales diferentes.
                </p>
                </div>

                </div>
                </div>
    )

}

export default CuerpoUno