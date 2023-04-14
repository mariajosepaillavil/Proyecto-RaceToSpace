import React, { useState } from "react";
import "../css/Navbar.css";
import { Button, Modal } from 'react-bootstrap';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNombreChange = (e) => setNombre(e.target.value);
    const handleApellidoChange = (e) => setApellido(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleCloseModal = () => {
        setShowModal(false);
        setNombre("");
        setApellido("");
        setEmail("");
        setPassword("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías enviar los datos del formulario al servidor
        // y hacer cualquier otra operación necesaria.
        // Por ejemplo, podrías hacer una llamada a una API para registrar al usuario.
        // Después podrías cerrar el modal y mostrar un mensaje de éxito.
        handleCloseModal();
        alert(`Registro exitoso: ${nombre} ${apellido} - Email: ${email} - Password: ${password}`);
    };

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title> <h2 className="Modal-titulo"> Registro </h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombreCompleto" className="form-label">Nombre Completo</label>
                            <input type="text" className="form-control" id="nombreCompleto" value={nombre} onChange={handleNombreChange} />
                        </div>
                        <div className="">
                            <label htmlFor="apellidoCompleto" className="form-label">Apellido Completo</label>
                            <input type="text" className="form-control" id="apellidoCompleto" value={apellido} onChange={handleApellidoChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
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
                            <Button variant="btn a" onClick={() => setShowModal(true)}>Registrarse</Button>
                            
                       
              
                        </div>
                        </div>
                     </div>
              
            </nav>
        </>
    );
};

export default Navbar;




