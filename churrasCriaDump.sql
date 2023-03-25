-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: churras
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cardapios`
--

DROP TABLE IF EXISTS `cardapios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cardapios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cardapios`
--

LOCK TABLES `cardapios` WRITE;
/*!40000 ALTER TABLE `cardapios` DISABLE KEYS */;
INSERT INTO `cardapios` VALUES (1,'Medalhão de Picanha',33.9,'2023-03-24 04:36:05','2023-03-24 04:36:05'),(2,'Coca-cola',10,'2023-03-24 04:36:05','2023-03-24 04:36:05'),(3,'Porção de Batata',22.4,'2023-03-24 04:37:36','2023-03-24 06:10:33'),(5,'Queijo Coalho',7.99,'2023-03-24 06:12:37','2023-03-24 06:12:37');
/*!40000 ALTER TABLE `cardapios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Rodrigo Carlos','Jacarepagua','2023-03-23 22:30:16','2023-03-23 22:30:16'),(2,'Johnny Deep','Santa Cruz','2023-03-24 01:45:06','2023-03-24 01:45:06'),(3,'Maicon Douglas','Meier','2023-03-24 01:45:06','2023-03-24 01:45:06'),(5,'Johnny Deep','Santa Cruz','2023-03-24 04:33:39','2023-03-24 04:33:39'),(6,'Maicon Douglas','Meier','2023-03-24 04:33:39','2023-03-24 04:33:39'),(7,'Johnny Deep','Santa Cruz','2023-03-24 04:34:40','2023-03-24 04:34:40'),(8,'Maicon Douglas','Meier','2023-03-24 04:34:40','2023-03-24 04:34:40'),(9,'Johnny Deep','Santa Cruz','2023-03-24 04:35:23','2023-03-24 04:35:23'),(10,'Maicon Douglas','Meier','2023-03-24 04:35:23','2023-03-24 04:35:23'),(11,'Johnny Deep','Santa Cruz','2023-03-24 04:36:05','2023-03-24 04:36:05'),(12,'Maicon Douglas','Meier','2023-03-24 04:36:05','2023-03-24 04:36:05'),(13,'Johnny Deep','Santa Cruz','2023-03-24 04:37:36','2023-03-24 04:37:36'),(14,'Maicon Douglas','Meier','2023-03-24 04:37:36','2023-03-24 04:37:36');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linha_encomendas`
--

DROP TABLE IF EXISTS `linha_encomendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linha_encomendas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pedido_id` int(11) NOT NULL,
  `cardapio_id` int(11) NOT NULL,
  `preco_unitario` float DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `cardapio_id` (`cardapio_id`),
  CONSTRAINT `linha_encomendas_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `linha_encomendas_ibfk_2` FOREIGN KEY (`cardapio_id`) REFERENCES `cardapios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linha_encomendas`
--

LOCK TABLES `linha_encomendas` WRITE;
/*!40000 ALTER TABLE `linha_encomendas` DISABLE KEYS */;
INSERT INTO `linha_encomendas` VALUES (1,1,1,33.9,3,'2023-03-24 04:37:36','2023-03-24 04:37:36'),(2,2,2,10,1,'2023-03-24 04:37:36','2023-03-24 04:37:36');
/*!40000 ALTER TABLE `linha_encomendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` float DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `cliente_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,150,'2023-03-24 04:36:05',1,'2023-03-24 04:36:05','2023-03-24 04:36:05'),(2,10,'2023-03-24 04:36:05',2,'2023-03-24 04:36:05','2023-03-24 04:36:05'),(3,150,'2023-03-24 04:37:36',1,'2023-03-24 04:37:36','2023-03-24 04:37:36'),(4,10,'2023-03-24 04:37:36',2,'2023-03-24 04:37:36','2023-03-24 04:37:36');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230324010910-create-cliente.js'),('20230324030516-create-cardapio.js'),('20230324031022-create-pedido.js'),('20230324031244-create-linha-encomenda.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'churras'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-24  3:38:47
