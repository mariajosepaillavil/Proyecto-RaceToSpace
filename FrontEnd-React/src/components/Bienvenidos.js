import React from "react";
import "../css/Bienvenidos.css";

const Bienvenidos = () => {
    return (
        <div className="container">
            <div className="astroBienvenida">
                <div className="imagen">
                    <img src="./imagenes/astronauta-platillo.png" alt="astroPlatillo" width="200px" />
                    <div className="ml-3">
                        <div className="informacion">
                            <h2>&gt; Bienvenidos astronautas KIDS</h2>

                            <p>
                                Hoy comienza la aventura. <br/>
                                A continuación, tendrás el detalle de tu bitácora.


                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Bienvenidos;