import React from "react";
const TablaAlumno = ({ Estudiante }) => {
    return (
        <div className='col-md-6 p-3 col-sm-12 rounded-3 shadow'>
            <div className='d-flex justify-content-center m-2'>
                <h3>Lista</h3>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr className='bg-light text-dark'>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Nombre Módulo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Estudiante.map(e => (
                            <tr>
                                <th scope="row">{e.estudiantes_nombre}</th>
                                <td>{e.estudiantes_email}</td>
                                <td>{e.estudiantes_curso}</td>
                                <td>{e.modulos_id}</td>
                                         
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export { TablaAlumno };