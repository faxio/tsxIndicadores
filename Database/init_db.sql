DROP DATABASE IF EXISTS innoving;

CREATE DATABASE innoving;

USE innoving;

CREATE TABLE Ejes (nombre VARCHAR(250) NOT NULL PRIMARY KEY);

CREATE TABLE Indicadores (
  id VARCHAR(255) NOT NULL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(300),
  nombre_eje VARCHAR(250) NOT NULL,
  FOREIGN KEY (nombre_eje) REFERENCES Ejes(nombre)
);

CREATE TABLE Estados (estado VARCHAR(100) NOT NULL PRIMARY KEY);

CREATE TABLE publicacion (
  publicacion_id int not null AUTO_INCREMENT PRIMARY KEY,
  issn_doi varchar(100) not null,
  titulo varchar(100),
  autores varchar(100),
  revista varchar(100),
  autores_extranjeros TINYINT(1),
  indexacion varchar(100), 
  anio varchar(100),
  citaciones varchar(300),
  clasificacion varchar(100),
  disciplina varchar(100),
  estado VARCHAR(100) NOT NULL,
  FOREIGN KEY (estado) REFERENCES Estados(estado)
);

CREATE TABLE Variables (
  id INT PRIMARY KEY AUTO_INCREMENT,
  descripcion VARCHAR(100) NOT NULL
);

CREATE TABLE Indicadores_Variables (
  id_ind_var INT PRIMARY KEY AUTO_INCREMENT,
  id_indicador VARCHAR(255) NOT NULL,
  id_variable INT NOT NULL,
  FOREIGN KEY (id_indicador) REFERENCES Indicadores(id),
  FOREIGN KEY (id_variable) REFERENCES Variables(id)
);

CREATE TABLE Publicaciones_Variables (
  id_pub_var INT PRIMARY KEY AUTO_INCREMENT,
  valor INT NOT NULL,
  id_publicacion INT NOT NULL,
  id_variable INT NOT NULL,
  FOREIGN KEY (id_publicacion) REFERENCES publicacion(publicacion_id),
  FOREIGN KEY (id_variable) REFERENCES Variables(id)
);

CREATE TABLE Publicaciones_Indicadores (
  id_pub_ind INT PRIMARY KEY AUTO_INCREMENT,
  id_publicacion INT NOT NULL,
  id_indicador VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_publicacion) REFERENCES publicacion(publicacion_id),
  FOREIGN KEY (id_indicador) REFERENCES Indicadores(id)
);
