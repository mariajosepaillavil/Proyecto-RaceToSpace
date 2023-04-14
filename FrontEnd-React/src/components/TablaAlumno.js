import React from "react";
const TablaAlumno = ({ Estudiante }) => {
    return (
        <div className='col-md-6 p-5 col-sm-12 rounded-3 shadow' style={{}}>
            <div className='d-flex justify-content-center m-2' >
                <h3>Libro de clases</h3>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr className='bg-light text-dark'>
                            <th scope="col" style={{color:"black"}}>Nombre Completo</th>
                            <th scope="col" style={{color:"black"}}>Email</th>
                            <th scope="col" style={{color:"black"}}>Curso</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        {Estudiante.map(e => (
                            <tr>
                                <th scope="row">{e.estudiantes_nombre}</th>
                                <td>{e.estudiantes_email}</td>
                                <td>{e.estudiantes_curso}</td>
                                         
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export { TablaAlumno };