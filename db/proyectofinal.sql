-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: deluxecars
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuarios` (
  `id` int(10) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `Telefono` varchar(20) NOT NULL,
  `FechaDeNacimiento` date NOT NULL,
  `role` int(11) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'Macarena Armijo','marmijo@gmail.com','macarena','1169958181','1997-08-24',9),(2,'Felipe de Aramburu','faramburu@udesa.edu.ar','Felipe','1166658131','2001-09-14',9),(3,'Lorenzo Fallik','lfallik@udesa.edu.ar','lorenzo','1169958156','2000-08-13',1),(4,'Diogenes Blaquier','dblaquier@udesa.edu.ar','Diogenes','1149807387','2001-12-22',9);
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(10) NOT NULL,
  `texto` text,
  `usuarios_id` int(10) unsigned NOT NULL,
  `producto_id` int(10) unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `productos_id` FOREIGN KEY (`id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuarios_id` FOREIGN KEY (`id`) REFERENCES `Usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'me lo llevo!',2,3,'2021-06-20 00:00:00','2021-06-21 00:00:00'),(2,'tremenda nave! por donde la busco?',4,1,'2021-06-29 00:00:00','2021-06-30 00:00:00'),(3,'aceptan bitcoin?',1,4,'2021-05-19 00:00:00','2021-05-20 00:00:00'),(4,'gran atencion al cliente!',3,2,'2021-06-21 00:00:00','2021-06-22 00:00:00');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) NOT NULL,
  `imagen` varchar(300) NOT NULL,
  `nombreProducto` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `user_added` int(11) NOT NULL,
  `updatedAt` datetime NOT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userAdded_idx` (`user_added`),
  CONSTRAINT `userAdded` FOREIGN KEY (`user_added`) REFERENCES `Usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'bmw.jpeg','Bmw X5','El BMW X5 es un todoterreno que mide 4,92 metros de longitud, 2 metros de anchura y 1,75 de altura. Cuenta con un maletero con 650 litros. Fue estrenado en el Salón de Detroit de 1999 y ya va por su cuarta generación, estrenada en 2018.','2021-02-10 00:00:00',4,'2021-02-20 00:00:00',4500000),(2,'golf.jpeg','Volkswagen Golf','El Volkswagen Golf es un automóvil del segmento C producido por el fabricante alemán de automóviles Volkswagen desde 1974. ','2021-04-22 00:00:00',3,'2021-05-02 00:00:00',2000000),(3,'passat.jpeg','Volkswagen Passat','Sus dimensiones son de 4,77 metros de largo, 1,83 metros de ancho y 1,48 metros de alto, con una batalla de 2,78 metros. Unas medidas que le hacen ser una de las berlinas de mayor habitabilidad interior. Ideal para cuatro o cinco pasajeros.','2021-05-20 00:00:00',1,'2021-06-02 00:00:00',2000000),(4,'amarok.jpeg','Volkswagen Amarok','Sus dimensiones son 5,32 metros de largo, 1,95 metros de ancho y 1,83 metros de alto, contando con una batalla de 3,09 metros. La capacidad de carga de la pick-up de Volkswagen es de hasta 1.041 kilogramos. Su peso es de 2.100 kg.','2021-04-02 00:00:00',2,'2021-04-05 00:00:00',2700000),(5,'tiguan.jpeg','Volkswagen Tiguan','El Volkswagen Tiguan es un automóvil todoterreno del segmento C de cinco plazas producido por el fabricante alemán Volkswagen desde el año 2007.','2021-05-20 00:00:00',3,'2021-06-02 00:00:00',4000000),(6,'vento.jpeg','Volkswagen Vento','Vento es un automóvil subcompacto producido por Volkswagen India, la filial del fabricante de automóviles alemán Volkswagen, desde 2010','2021-04-21 00:00:00',4,'2021-05-20 00:00:00',2000000);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-17 12:59:59
