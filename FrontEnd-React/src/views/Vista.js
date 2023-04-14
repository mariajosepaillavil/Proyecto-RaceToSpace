import { TablaAlumno } from "../components";
import { getAll } from "../services/EstudianteService";
import { Link } from "react-router-dom";


const Vista = () => {
    const [Estudiantes, setEstudiantes] = useState([])

    useEffect(() => {
        obtEstudiantes();
    }, [])

    const obtEstudiantes = async () => {

            setEstudiantes(await getAll());
       
    }

    return (
        <div>
            <TablaAlumno estudiantes={Estudiantes} />
        </div>
    )
}
export {Vista}