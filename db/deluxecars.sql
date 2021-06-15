CREATE SCHEMA `deluxecars` DEFAULT CHARACTER SET utf8;
USE `ProyectoIntegrador1`;

CREATE TABLE `Usuarios` (
`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`nombre` VARCHAR (100) NOT NULL,
`Email` VARCHAR (200) NOT NULL,
`Password` VARCHAR (200) NOT NULL,
`Telefono` VARCHAR (20) NOT NULL,
`FechaDeNacimiento` DATE NOT NULL
);

CREATE TABLE `Productos` (
`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`imagen` VARCHAR (300) NOT NULL,
`Nombre` VARCHAR (100) NOT NULL,
`descripcion` VARCHAR (500) NOT NULL,
`Fecha` DATE NOT NULL,

`usuario_id` INT UNSIGNED,

FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE `Comentarios` (
`id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
`texto` TEXT,
`creacion` DATE NOT NULL,

`usuario_id` INT UNSIGNED,
`producto_id` INT UNSIGNED, 

FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
FOREIGN KEY (producto_id) REFERENCES productos (id)
);


INSERT INTO `Usuarios` VALUES (default, "Macarena Armijo", "marmijo@gmail.com","macarena", "1169958181", "1997-08-24");
INSERT INTO `Usuarios` VALUES (default, "Felipe de Aramburu", "faramburu@udesa.edu.ar","Felipe", "1166658131", "2001-09-14");
INSERT INTO `Usuarios` VALUES (default, "Lorenzo Fallik", "lfallik@udesa.edu.ar","lorenzo" , "1169958156", "2000-08-13");
INSERT INTO `Usuarios` VALUES (default, "Diogenes Blaquier", "dblaquier@udesa.edu.ar","Diogenes", "1149807387", "2001-12-22");

INSERT INTO `Productos` VALUES (default, "/images/autosImg/tiguan.jpg", "Tiguan"," El Volkswagen Tiguan es un automóvil todoterreno del segmento C de cinco plazas producido por el fabricante alemán Volkswagen desde el año 2007. Tiene carrocería de cinco puertas y motor delantero transversal, disponible con tracción delantera o tracción a las cuatro ruedas conectable automáticamente 4motion." "2019-01-01", 1);
INSERT INTO `Productos` VALUES (default, "/images/autosImg/passat.jpg", "Passat", "Sus dimensiones son de 4,77 metros de largo, 1,83 metros de ancho y 1,48 metros de alto, con una batalla de 2,78 metros. Unas medidas que le hacen ser una de las berlinas de mayor habitabilidad interior. Ideal para cuatro o cinco pasajeros.", "2019-02-01", 2);
INSERT INTO `Productos` VALUES (default, " /images/autosImg/amarok.jpeg","Amarok", " Sus dimensiones son 5,32 metros de largo, 1,95 metros de ancho y 1,83 metros de alto, contando con una batalla de 3,09 metros. La capacidad de carga de la pick-up de Volkswagen es de hasta 1.041 kilogramos. Su peso es de 2.100 kg." ,  3);
;

INSERT INTO `Comentarios` VALUES (default, "Que buen auto,mejor aun la atencion.Genios!", 1, 1);
INSERT INTO `Comentarios` VALUES (default,"Mi proxima compra esta aca!Aguante deluxecars", "2021-10-02", 3, 1);
INSERT INTO `Comentarios` VALUES (default, "Una locura esta nave!", 4, 1);
INSERT INTO `Comentarios` VALUES (default,"Muy contento con la compra!! .", "2021-10-02", 5, 1);

