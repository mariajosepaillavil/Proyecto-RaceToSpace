//Los componentes siempre tienen que partir con mayúsculas.
import React from "react";
import "./Style.css"
const Formulario = () => {
    return (

        <div class="form">
            <div className="justify-content-center p-3">
                <h1>¿Tienes dudas?</h1>
                <form>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label" >Nombre</label>
                        <input type="text" class="form-control" id="exampleInputName" placeholder="Nombre" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" placeholder="Apellido" id="exampleInputLastName" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="contacto@contacto.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text"></div>
                    </div>


                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Escribenos tus consultas</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary mt-2">Enviar</button>


                </form>
            </div>
        </div>
    )

}

export default Formulario;