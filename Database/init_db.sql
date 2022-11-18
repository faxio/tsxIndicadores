CREATE DATABASE innoving;

USE innoving;

CREATE TABLE Ejes (nombre VARCHAR(250) NOT NULL PRIMARY KEY);

CREATE TABLE Indicadores (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(300),
  nombre_eje VARCHAR(250) NOT NULL,
  FOREIGN KEY (nombre_eje) REFERENCES Ejes(nombre)
);


