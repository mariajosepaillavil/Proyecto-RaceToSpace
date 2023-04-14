import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"

ReactDOM.render(<App />, document.querySelector('#root'));

// Agregar imagen de fondo global
document.body.style.backgroundImage = "url(./Imagenes/Fondo_pag2.png)";

