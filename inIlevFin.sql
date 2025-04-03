-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: inlev
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `postachannia`
--

DROP TABLE IF EXISTS `postachannia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postachannia` (
  `NazvaProdukcia` char(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Kilkist` int DEFAULT NULL,
  `KodProdukcia` int DEFAULT NULL,
  `KodSposhivacha` int DEFAULT NULL,
  `DataVidpravlenna` date DEFAULT NULL,
  `id_postachannia` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_postachannia`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postachannia`
--

LOCK TABLES `postachannia` WRITE;
/*!40000 ALTER TABLE `postachannia` DISABLE KEYS */;
INSERT INTO `postachannia` VALUES ('Noutbuk',10,1,1,'0000-00-00',1),('Smartfon',20,2,2,'0000-00-00',2),('Planshet',30,3,3,'0000-00-00',3),('Mushka',40,4,4,'0000-00-00',4),('Klaviatura',50,5,5,'0000-00-00',5),('Monitor',60,6,6,'0000-00-00',6),('Noutbuk',10,1,1,'2024-03-01',7),('Smartfon',20,2,2,'2024-03-05',8),('Planshet',30,3,3,'2025-03-26',9),('Mushka',40,4,4,'2025-03-26',10),('Klaviatura',50,5,5,'2025-03-26',11),('Monitor',60,6,6,'2025-03-26',12),('Noutbuk',10,1,1,'2025-03-01',13),('Smartfon',20,2,2,'2025-03-05',14),('Planshet',30,3,3,'2025-03-26',15),('Mushka',40,4,4,'2025-03-26',16),('Klaviatura',50,5,5,'2025-03-26',17),('Monitor',60,6,6,'2025-03-26',18);
/*!40000 ALTER TABLE `postachannia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produkti`
--

DROP TABLE IF EXISTS `produkti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produkti` (
  `Cina` double DEFAULT NULL,
  `NazvaProdukcia` char(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `KodProdukcia` int DEFAULT NULL,
  `id_produkti` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_produkti`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produkti`
--

LOCK TABLES `produkti` WRITE;
/*!40000 ALTER TABLE `produkti` DISABLE KEYS */;
INSERT INTO `produkti` VALUES (111.11,'Noutbuk',1,1),(222.22,'Smartfon',2,2),(333.33,'Planshet',3,3),(444.44,'Mushka',4,4),(555.55,'Klaviatura',5,5),(666.66,'Monitor',6,6);
/*!40000 ALTER TABLE `produkti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sposhivachi`
--

DROP TABLE IF EXISTS `sposhivachi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sposhivachi` (
  `Adresa` char(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NomerRahunku` int DEFAULT NULL,
  `KodSposhivacha` int DEFAULT NULL,
  `NazvaOrganizachia` char(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_sposhivachi` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_sposhivachi`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sposhivachi`
--

LOCK TABLES `sposhivachi` WRITE;
/*!40000 ALTER TABLE `sposhivachi` DISABLE KEYS */;
INSERT INTO `sposhivachi` VALUES ('Lviv1',1001,1,'Topovo1',1),('Lviv1',1002,2,'Topovo2',2),('Lviv1',1003,3,'Topovo3',3),('Lviv1',1004,4,'Topovo4',4),('Lviv1',1005,5,'Topovo5',5),('Lviv1',1006,6,'Topovo6',6);
/*!40000 ALTER TABLE `sposhivachi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-02 18:22:29
