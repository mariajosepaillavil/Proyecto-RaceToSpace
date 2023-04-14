import React from "react";
import "../css/BloquesNiveles.css";
import { Container } from "react-bootstrap";

const BloquesNiveles = () => {


    return (
        <div class="container">
            <div class="row">
              
                <div class="col-md-5 bloques">
                    <div class="bloqueUno">
                        <h1>&lt; VOLVER &gt;</h1>
                    </div>
                </div>
                <div class="col-md-3 bloques">
                    <div class="bloqueDos">
                        <h1>&lt; MÓDULO 2 &gt;</h1>
                    </div>
                </div>
               
            </div>
        </div>
    );
};


export default BloquesNiveles;