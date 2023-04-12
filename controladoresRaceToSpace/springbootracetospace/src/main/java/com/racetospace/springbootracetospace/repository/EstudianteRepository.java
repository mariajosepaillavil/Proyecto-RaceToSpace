package com.racetospace.springbootracetospace.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.racetospace.springbootracetospace.model.Estudiante;

public interface EstudianteRepository extends JpaRepository<Estudiante, Integer>{

    @Query(value="SELECT * FROM estudiantes WHERE modulos_id=?1",nativeQuery=true)

    List <Estudiante> findEstudiantesByModulo (Integer modulo);

   @Query(value="SELECT * FROM estudiantes WHERE estudiantes_nombre LIKE ('%LL%')",nativeQuery=true)

    List <Estudiante> findEstudiantesWithLL ();
}
