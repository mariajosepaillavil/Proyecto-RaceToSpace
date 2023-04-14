
import React from "react";


const Comentarios = () => {


    return ( 
            <div className="container">
                <h1 className="titulo">TE ACONSEJAMOS</h1>
                <br />
                <br />
                <br />
                <br />
                <div className="general">
                    <div className="imagenFondo">
                        <div className="imagen"></div>
                        <img src="../imagenes/ciencia-y-tecnologia.png" alt="consejo1" width="200px" height="200px" />
                    </div>
                    <div className="descripcion">
                        <div className="enunciados">
                            <h2>CÓMO USAR LA TECNOLOGÍA ESTA VUELTA A CLASES</h2>
                        </div>
                        <h3></h3>
                        <div className="fondoParrafo">
                            <div className="parrafo">
                                <p>Insertar contenido de texto...</p>
                                <br />
                                <b></b>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="general">
                    <div className="imagenFondo">
                        <div className="imagen"></div>
                        <img src="../imagenes/chat-bot.png" alt="consejo2" width="200px" height="200px" />
                    </div>
                    <div className="descripcion">
                        <div className="enunciados">
                            <h2>CÓMO ACOMPAÑAR POSITIVAMENTE</h2>
                            <h3></h3>
                        </div>
                        <div className="fondoParrafo">
                            <div className="parrafo">
                                <p>Insertar contenido de texto...</p>
                                <br />
                                <b></b>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="general">
                    <div className="imagenFondo">
                        <div className="imagen"></div>
                        <img src="../imagenes/interactivo.png" alt="consejo3" width="200px" height="200px" />
                    </div>
                    <div className="descripcion">
                        <div className="enunciados">
                            <h2>UN PASO A LA VEZ</h2>
                            <h3></h3>
                        </div>
                        <div className="fondoParrafo">
                            <div className="parrafo">
                                <p>Insertar contenido de texto...</p>
                                <br />
                                <b></b>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    );
};

export default Comentarios;