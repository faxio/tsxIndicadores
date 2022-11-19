USE innoving;

INSERT INTO Ejes VALUES
  ("Eje 1"),
  ("Eje 2"),
  ("Eje 3"),
  ("El ultimo eje");


INSERT INTO Indicadores VALUES
(
  "M25",
  "Numero de publicaciones",
  "Este indicador muestra el numero de publicaciones publicadas xd",
  "Eje 1"
),
(
  "M26",
  "Numero de publicaciones en revistas de ingenieria",
  "Este indicador muestra el numero de publicaciones publicadas en revistas de ingenieria",
  "Eje 1"
),
(
  "M49",
  "porcentaje de coautores extranjeros",
  "Como su nombre lo dice, este indicador es el responsable de señalar el porcentaje de coautores extranjeros",
  "El ultimo eje"
);


INSERT INTO Estados VALUES ("Verificado"), ("Rechazado"), ("En revicion");

/**  adaptar con la de eviencia */
INSERT INTO publicacion VALUES
(
  1,
  "doi 1",
  "titulo 1",
  "autores 1",
  "revista 1",
  1,
  "indexacion 1",
  "anio 1",
  "citaicon",
  "clasificacion 1",
  "descipcion 3",
  "Rechazado"
),
(
  2,
  "doi 2",
  "titulo 2",
  "autores 2",
  "revista 2",
  1,
  "indexacion 2",
  "anio 2",
  "citaicon 2",
  "clasificacion 2",
  "descipcion 2",
  "Verificado"
),
(
  3,
  "doi 3",
  "titulo 3",
  "autores 3",
  "revista 3",
  1,
  "indexacion 3",
  "anio 3",
  "citaicon 3",
  "clasificacion 3",
  "descipcion 3",
  "Verificado"
);

INSERT INTO Variables VALUES
(
  "V1",
  "publicacion"
),
(
  "V2",
  "publicacion de ingenieria"
),
(
  "V3",
  "Coautor exxtrangero"
);


INSERT INTO Publicaciones_Indicadores VALUES
(
  "PM1",
  2,
  "M25"
),
(
  "PM2",
  3,
  "M25"
);

INSERT INTO Publicaciones_Variables VALUES 
(
  "PV1",
  1,
  2,
  "V1"
),
(
  "PV2",
  1,
  3,
  "V1"
);