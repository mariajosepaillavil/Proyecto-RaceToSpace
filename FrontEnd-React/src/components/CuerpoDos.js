import React from "react";
import Imagen from '../assets/img/Img-1.jpg';
import "./Style.css"
const CuerpoDos = () => {
    return (

       
            <div class="car mb-3">
                <div class="row g-5">
                    <div class="col-md-4 p-5">
                        <>
                            <img src={Imagen} class="rounded float-start" alt="..." width="400" height="260"></img>


                        </>
                    </div>
                    <div class="col-md-8 p-5">
                        <div class="car-body">
                            <h5 class="car-title">Aprenderemos</h5>
                            <p class="car-text">En las primeras etapas de vida de los niñ@s, entendemos la importancia de darle un enfoque lúdico a la enseñanza, es por eso que utilizamos una técnica de enseñanza llamada JUEGOSPACE que busca utilizar elementos de los juegos para estimular el aprendizaje.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-primary p" type="button">Ver más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default CuerpoDos;