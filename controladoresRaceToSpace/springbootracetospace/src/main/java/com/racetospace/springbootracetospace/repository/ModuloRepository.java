package com.racetospace.springbootracetospace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.racetospace.springbootracetospace.model.Modulo;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ModuloRepository extends JpaRepository<Modulo, Integer>{
    @Query(value="SELECT e.estudiantes_nombre, m modulos_nombre, j.juegos_nombre, m modulos_dificultad FROM Estudiantes e JOIN Modulos m ON e.modulos_id = m.modulos_id JOIN Juegos j ON j.modulos_id = m.modulos_id WHERE m.modulos_dificultad LIKE 'p%'", nativeQuery= true)
    List<Modulo> findModulosWithP();

    @Query(value="SELECT e.estudiantes_nombre, m modulos_nombre, j.juegos_nombre, m modulos_dificultad FROM Estudiantes e JOIN Modulos m ON e.modulos_id = m.modulos_id JOIN Juegos j ON j.modulos_id = m.modulos_id WHERE m.modulos_dificultad LIKE 'i%'", nativeQuery= true)
    List<Modulo> findModulosWithI();

    @Query(value="SELECT e.estudiantes_nombre, m modulos_nombre, j.juegos_nombre, m modulos_dificultad FROM Estudiantes e JOIN Modulos m ON e.modulos_id = m.modulos_id JOIN Juegos j ON j.modulos_id = m.modulos_id WHERE m.modulos_dificultad LIKE 'a%'", nativeQuery= true)
    List<Modulo> findModulosWithA ();

    

}


