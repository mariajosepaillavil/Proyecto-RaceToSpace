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
                            <h2>&gt; Bienvenidos astronautas KID</h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.

                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Bienvenidos;