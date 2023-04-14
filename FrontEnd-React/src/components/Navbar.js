import React from "react";
import "../css/Navbar.css";

const Navbar = () => {

    return (
        <header className="fontCode">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-light" >
                <div className="container">
                    <a className="navbar-brand" href="/Inicio">
                        <img src='./imagenes/logo.png' alt='Logo' width='100px' style={{ display: "flex", marginRight: "3em" }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav"  >
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item ">
                                <a className="nav-link "href="../Juego1">
                                    <p>&gt;QUIENES  <br />SOMOS   <br /> <img src="/Imagenes/Rectangle 45.png" alt='separadorNav' width="10px" height="40" style={{ display: "flex", marginLeft: "5em" }} /> </p>
                                </a>
                              

                            </li>
                            <li className="nav-item">
                              
                                <a className="nav-link " href="../Modulo" ><p>&gt;MATERIA <img src="/Imagenes/Rectangle 45.png" width="10px" height="40" alt='separadorNav' style={{ display: "flex", marginLeft: "5em" }} /></p>
                                    
                                </a>
                                
                            </li>
                            <li className="nav-item">
                               
                                <a className="nav-link" href="../Perfil">
                                    <p>&gt;NUESTRO <br />PROGRAMA   <br /> <img src="/Imagenes/Rectangle 45.png" width="10px" height="40" alt='separadorNav' style={{ display:"flex", marginLeft: "5em" }} /> </p>
                                  
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" ><p>&gt;TE ACONSEJAMOS  </p> </a>
                            </li>
                        </ul>
                    </div>
                    <div className="botones d-flex align-items-center">
                        <div className="d-grid gap-5 d-md-flex justify-content-md-end">
                            <button className="btn a" type="button" href="./Perfil">INGRESA  </button>
                            
                            <div class="separador"></div>
                            <button className="btn a" type="button">REGISTRATE   </button>
                        </div>
                    </div>

                </div>
            </nav>

        </header>
    )
}

export default Navbar;