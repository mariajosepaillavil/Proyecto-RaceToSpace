CREATE SCHEMA RacetospaceAWS;
drop schema RacetospaceAWS;

drop table LibroClases;

USE RacetospaceAWS; # PARA INDICAR QUE SE HACE REFERENCIA AL ESQUEMA EQUIPO6, RECIEN CREADO. 

CREATE TABLE Usuarios (
usuarios_id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
usuarios_nombre VARCHAR (100),
usuarios_contrasenia VARCHAR (100)
);


CREATE TABLE Estudiantes( #LA TABLA USUARIOS, ES LA BASE Y POR LO TANTO, NO TIENE FOREIGN KEY ASOCIADA.
estudiantes_id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
estudiantes_nombre VARCHAR (100),
estudiantes_contrasenia VARCHAR (100),
estudiantes_email VARCHAR (100),
estudiantes_curso VARCHAR (100), #(5to b, 3ro A)
modulos_id INTEGER,
libro_clases_id INTEGER
); 

CREATE TABLE LibroClases (
libro_clases_id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
libro_clases_calificacion1 INTEGER,
libro_clases_calificacion2 INTEGER,
libro_clases_calificacion3 INTEGER
);

CREATE TABLE Juegos (
juegos_id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
juegos_nombre VARCHAR (200),
juegos_categoria VARCHAR (200),
juegos_descripcion VARCHAR (300),
modulos_id INTEGER
);

CREATE TABLE Modulos (
modulos_id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
modulos_nombre VARCHAR (100),
modulos_puntaje INTEGER,
modulos_dificultad VARCHAR (100) #PRINCIPIANTE, INTERMEDIO Y AVANZADO.
);


ALTER TABLE Estudiantes
ADD FOREIGN KEY (modulos_id) REFERENCES Modulos (modulos_id);

ALTER TABLE Juegos
ADD FOREIGN KEY (modulos_id) REFERENCES Modulos (modulos_id);

ALTER TABLE Estudiantes
ADD FOREIGN KEY (libro_Clases_id) REFERENCES LibroClases (libro_clases_id);

INSERT INTO Modulos (modulos_nombre, modulos_puntaje, modulos_dificultad)
VALUES ("Ada Lovelace", 10, "Principiante"), ("Hedy Lamarr", 10, "Intermedio"), ("Margaret Hamilton", 10, "Avanzado")
;


INSERT INTO Juegos (juegos_nombre, juegos_categoria, juegos_descripcion, modulos_id)
VALUES ("Introducción a los conceptos tecnológicos", "Conceptos programación", "Juego que enseñará conceptos básicos de la programación y tecnología", 1),
("Algoritmos", "Lógica de programación", "Juego que enseñará algoritmos básicos de la programación", 2), 
("Utilidades de Java", "Lenguajes de programación", "Juego que enseñará las distintas utilidades del lenguaje de programación Java", 3);


INSERT INTO LibroClases (libro_clases_calificacion1, libro_clases_calificacion2, libro_clases_calificacion3) VALUES 
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0),
(0, 0, 0)
;

INSERT INTO hibernate_sequenceEstudiantes (estudiantes_nombre, estudiantes_contrasenia, estudiantes_email, estudiantes_curso, modulos_id, libro_clases_id) 
VALUES ("Brandon López", "brandonlopez","brandonlopez@gmail.com", "1ro A", 1, 1),
("Camila Berríos","camilaberrios","camilaberrios@gmail.com", "1ro A", 1, 2),
("Carolina Zúñiga","carolinazuñiga","carolinazuñiga@gmail.com", "1ro A", 2, 3),
("Daniela Corral","danielacorral","danielacorral@gmail.com", "1ro B", 1 , 4),
("Daniela Gómez","danielagomez","danielagomez@gmail.com", "1ro B", 1, 5),
("Daniela Rivas","danielarivas", "danielarivas@gmail.com", "1ro B", 2, 6),
("Danissa Caballero","danissacaballero","danissacaballero@gmail.com", "2do A", 2, 7),
("Diana Gutiérrez","dianagutierrez","dianagutierrez@gmail.com", "2do A", 2, 8),
("Diego Álvarez","diegoalvarez","diegoalvarez@gmail.com", "2do B", 2, 9),
("Diego Pérez","diegoperez","diegoperez@gmail.com","3ro A", 2, 10),
("Elvis Pérez","elvisperez","elvisperez@gmail.com", "3ro A", 2, 11),
("Fabián Tobar","fabiantobar","fabiantobar@gmail.com", "3ro B", 2, 12),
("Fabián Zúñiga","fabianzuñiga","fabianzuñiga@gmail.com", "3ro B", 3 , 13),
("Felipe Bray","felipebray","felipebray@gmail.com", "4to A", 2, 14),
("Felipe Mandiola", "felipemandiola","felipemandiola@gmail.com", "4to A", 3, 15),
("Felipe Messina", "felipemessina","felipemessina@gmail.com", "4to B", 2, 16),
("Fernanda Bahamondes","fernandabahamonde","fernandabahamondes@gmail.com", "5to A", 2, 17),
("Francis Vergara","francisvergara","francisvergara@gmail.com", "5to B", 2, 18),
("Gissele Gatica","gissele gatica","gisselegatica@gmail.com", "5to B", 3, 19),
("Isabella Parry","isabellaparry","isabellaparry@gmail.com", "6to B", 3, 20)
;







SELECT * FROM Modulos;
SELECT * FROM Juegos;
SELECT * FROM Estudiantes;
SELECT * FROM Usuarios;
SELECT * FROM LibroClases;
#solicitud que mostrará a los usuarios, el nombre del módulo en el que están, el juego y su dificultad.
SELECT e.estudiantes_nombre, m.modulos_nombre, j.juegos_nombre, m.modulos_dificultad 
FROM Estudiantes e 
JOIN Modulos m ON e.modulos_id = m.modulos_id 
JOIN Juegos j ON j.modulos_id = m.modulos_id
WHERE m.modulos_dificultad LIKE 'p%';

SELECT e.estudiantes_nombre, m.modulos_nombre, j.juegos_nombre, m.modulos_dificultad 
FROM Estudiantes e 
JOIN Modulos m ON e.modulos_id = m.modulos_id 
JOIN Juegos j ON j.modulos_id = m.modulos_id
WHERE m.modulos_dificultad LIKE 'i%';

SELECT e.estudiantes_nombre, m.modulos_nombre, j.juegos_nombre, m.modulos_dificultad 
FROM Estudiantes e 
JOIN Modulos m ON e.modulos_id = m.modulos_id 
JOIN Juegos j ON j.modulos_id = m.modulos_id
WHERE m.modulos_dificultad LIKE 'a%';


#Solicitud que mostrará el nombre del juego, su dificultad y a qué módulo corresponde.
SELECT j.juegos_nombre, m.modulos_dificultad, m.modulos_nombre
FROM Juegos j
JOIN Modulos m ON j.modulos_id = m.modulos_id;


#Solicitud que mostrará el nombre del alumno y de qué curso es.
SELECT estudiantes_nombre, estudiantes_curso
FROM Estudiantes
ORDER BY estudiantes_nombre, estudiantes_curso;

SELECT estudiantes_id, estudiantes_nombre, estudiantes_curso, modulos_id FROM estudiantes WHERE modulos_id=1;

SELECT e.estudiantes_nombre, l.libro_clases_id, l.libro_clases_calificacion1, l.libro_clases_calificacion2, l.libro_clases_calificacion3
FROM Estudiantes e
JOIN LibroClases l ON l.libro_clases_id = e.libro_clases_id;

SELECT e.estudiantes_nombre, l.libro_clases_id, l.libro_clases_calificacion1, l.libro_clases_calificacion2, l.libro_clases_calificacion3
FROM Estudiantes e
JOIN LibroClases l ON l.libro_clases_id = e.libro_clases_id
WHERE e.libro_clases_id LIKE "2";

SELECT * FROM estudiantes WHERE estudiantes_nombre LIKE ('%LL%');








