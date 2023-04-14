import React from "react";

const FormularioRegistro = () => {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Regístrate
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputNombre" className="form-label">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Nombre"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputCurso" className="form-label">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputCurso"
                                    placeholder="ej 2B"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputNickName" className="form-label">
                                    Repetir Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputCity"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cerrar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Registrarme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioRegistro;
