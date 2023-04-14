import React from "react";
import "../css/InfoCaja.css";
import { Container, Col, Row } from "react-bootstrap";
import Footer from './Footer';
import { useHistory } from 'react-router-dom';


const InfoCaja = () => {
  return (

    <Container>
      <Row className="union">
        {/* d-flex hace flexible la imagen por consecuencia el siguiente texto se fue hacia la derecha */}
        <div className="col-xl-3 col-sm-4 ml-xl-5">
          <div className='cajaPerfil'>
            <img src='./imagenes/astronauta.png' className='img-fluid mt-5' width="150px" alt="astroFlotante" />
            <h2 className="mt-4"> Sebastián Castillo </h2>
            <ul className="parrafocaja mt-4">


              <p className="texto-perfil"> <span className="Importante"> Curso: </span> 2A </p>
              <h5 className="texto-perfil"> &gt;  </h5>

              <p className="texto-perfil"> <span className="Importante">Módulo #2: </span> Hedy Lamarr </p>
              <h5 className="texto-perfil"> &gt;  </h5>


              <p className="texto-perfil"> <span className="Importante"> Juego: </span> Algoritmos </p>
              <h5 className="texto-perfil"> &gt;  </h5>


              <p className="texto-perfil">  <span className="Importante"> Puntaje: </span> 5pts/7pts </p>


            </ul>
          </div>
        </div>

        <Col>
          <h3 style={{ color: "white" }}>// NIVELES </h3>
          <div className="contenedor-cajas">
            <div className="bg-caja1">
              <img src='./imagenes/fases-de-la-luna.png' className='img-fluid caja1' width='100px' alt="lunaCaja" style={{ margin: "20px" }} />
              <div className="modulos">
                <h4 className="titulo-modulo">&gt; Módulo #1: Ada Lovelace </h4>
                <p className="texto-modulo" style={{color:"black"}}> Conceptos de programación. <br /> <span className="Importante"> Nivel de dificultad: Principiante.</span> 
 </p>
              </div>
            </div>

            <div className="bg-caja2 ">
              <img src='./imagenes/fases-de-la-luna.png' className='img-fluid' width='100px' alt="lunaCaja" style={{ margin: "20px" }} />
              <div className="modulos">
                <h4 className="titulo-modulo">&gt; Módulo #2: Hedy Lamarr </h4>
                <p className="texto-modulo" style={{ color: "black" }}> Lógica de programación. <br /> <span className="Importante"> Nivel de dificultad: Intermedio </span> </p> 
              </div>
            </div>

            <div className="bg-caja3 ">
              <img src='.\imagenes\fases-de-la-luna.png' className='img-fluid' width='100px' alt="lunaCaja" style={{ margin: "20px" }} />
              <div className="modulos">
                <h4 className="titulo-modulo">&gt; Módulo #3: Margaret Hamilton </h4>
                <p className="texto-modulo" style={{ color: "black" }}> Lenguajes de programación. <br /> <span className="Importante">Nivel de dificultad: Avanzado </span> </p>
              </div>
            </div>


          </div>


        </Col>

      </Row>

      <Footer />
    </Container>








  )
}

export default InfoCaja;
