import React from "react";
import "../css/referente.css";
import { Container } from "react-bootstrap";




const Referente = () => {


    return (

        <div> 
             
            <div className="referente" > 
                <img src="/imagenes/Ada-Lovelace-01.png" width="210em" alt="Ada" />
                <div className="instrucciones ">
                    
                    <h5 style={{color:"black"}}> Instrucciones</h5> 
                    <p style={{ color: "black" }}> Crea o lleva un cuadrado a la zona especifica.</p>
                </div>
            </div>
                    
        </div>
    
    );
};


export default Referente;