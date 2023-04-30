CREATE DATABASE  IF NOT EXISTS `babydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `babydb`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: babydb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `assmat`
--

DROP TABLE IF EXISTS `assmat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assmat` (
  `assMatId` int NOT NULL AUTO_INCREMENT,
  `numSecu` varchar(45) DEFAULT NULL,
  `nomUsage` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `nomNaissance` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `prenom` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `enfants` tinyint DEFAULT '0',
  `experience` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT '0',
  `animaux` tinyint DEFAULT '0',
  `nonFumeur` tinyint DEFAULT '0',
  `zeroPollution` tinyint DEFAULT '0',
  `repas` tinyint DEFAULT '0',
  `hygiene` tinyint DEFAULT '0',
  `indemnEntretien` float DEFAULT '0',
  `indemnKm` float DEFAULT '0',
  `tarifHeureSup` float DEFAULT '0',
  `assHabitNom` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `assHabitNumero` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `assHabitAdresse` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `assAutoNom` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `assAutoNumero` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `assAutoAdresse` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `docIdentite` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `docVitale` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `docJustifDom` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `docDiplome` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `docRespCivile` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `docAssAuto` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `structureId` int DEFAULT NULL,
  PRIMARY KEY (`assMatId`),
  KEY `Num_agrement_idx` (`structureId`),
  CONSTRAINT `fk_structure_assmat` FOREIGN KEY (`structureId`) REFERENCES `structure` (`structureId`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assmat`
--

LOCK TABLES `assmat` WRITE;
/*!40000 ALTER TABLE `assmat` DISABLE KEYS */;
INSERT INTO `assmat` VALUES (1,'456789123','Doe','Doe','John',0,'3',0,1,1,1,1,3,4.5,15.5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,5),(7,'2','Martin','Martin','Jaquelline',1,'30',1,1,1,1,1,11.5,23,48,NULL,NULL,NULL,NULL,NULL,NULL,'https://storage.googleapis.com/babyplace/7865112131150TEST_APP.pdf','https://storage.googleapis.com/babyplace/701122326446-qws-TEST_APP.pdf','https://storage.googleapis.com/babyplace/3992122332275-qws-TEST_APP.pdf',NULL,'/uploads/53eff115-76d1-4ee3-a38a-ad00f017a482-TEST_APP.pdf',NULL,6),(8,'49847191','Home','Home','Imogène',0,'1',1,0,1,1,0,5,1.6,8.9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,7),(9,'197847918','Terieur','Terieur','Ursule',0,'5',1,1,1,1,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,8),(10,'1654198157','Ole','Ole','Cunégonde',1,'50',1,1,1,1,1,1.6,7.4,5.8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,9),(16,'012345678901234','Potiron','Oui-Oui','Oui-Oui',1,'12',0,0,1,1,0,0,0,4.5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,16),(17,NULL,'de Minuit','de Midi','Démon',1,'17',0,1,1,0,1,3,0.57,4.5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,22),(18,'0','Oui-Oui','Potiron','Non-Non',1,'23',0,1,1,1,1,3,0.59,4.5,'MAIF','12345','4 rue Baron 44000 Nantes','Maif','12345','4 rue Baron 44000 Nantes',NULL,'http://localhost:5000/uploads/photosStructure/1019logo linkedin noir.png',NULL,NULL,'http://localhost:5000/uploads/photosStructure/163logo linkedin noir.png',NULL,23),(27,'012345678910111','Tralala','Youpi','Wouhouu',0,'2',0,1,0,1,0,0,0,4.5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'https://storage.googleapis.com/babyplace/7100134922870-qws-20161113-bbcerbere.jpg',NULL,NULL,'https://storage.googleapis.com/babyplace/159135049652-qws-20161113-bbcerbere.jpg',NULL,68),(28,'123456789101112','Wild','Wild','Lucas',0,'3',1,1,1,1,NULL,0,0,4.6,'Wild Code','12345','4 rue Baron 44000 Nantes',NULL,NULL,NULL,NULL,'https://storage.googleapis.com/babyplace/7335153316974-qws-git_dep_distant.png',NULL,NULL,'https://storage.googleapis.com/babyplace/69801533177-qws-git_dep_local.png',NULL,78);
/*!40000 ALTER TABLE `assmat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendrier`
--

DROP TABLE IF EXISTS `calendrier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendrier` (
  `calendrierId` int NOT NULL AUTO_INCREMENT,
  `date` varchar(10) DEFAULT NULL,
  `nbPlaces` varchar(2) DEFAULT NULL,
  `structureId` int NOT NULL,
  PRIMARY KEY (`calendrierId`),
  KEY `fk_table1_structure1_idx` (`structureId`),
  CONSTRAINT `fk_table1_structure1` FOREIGN KEY (`structureId`) REFERENCES `structure` (`structureId`)
) ENGINE=InnoDB AUTO_INCREMENT=280 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendrier`
--

LOCK TABLES `calendrier` WRITE;
/*!40000 ALTER TABLE `calendrier` DISABLE KEYS */;
INSERT INTO `calendrier` VALUES (59,'2023-2-17','-1',22),(60,'2023-2-20','-1',22),(61,'2023-3-13','-1',22),(63,'2023-2-17','-1',22),(67,'2023-2-17','-1',22),(72,'2023-2-16','-1',23),(73,'2023-2-16','-1',23),(163,'2023-2-23','-1',16),(164,'2023-2-14','-1',16),(189,'2023-2-27','-1',16),(190,'2023-2-10','-1',68),(191,'2023-2-21','-1',68),(192,'2023-3-22','-1',68),(212,'2023-2-27','-1',77),(213,'2023-2-23','-1',77),(214,'2023-3-17','-1',77),(215,'2023-2-16','-1',78),(216,'2023-3-9','-1',78),(217,'2023-2-28','-1',78),(219,'2023-2-17','-1',77),(249,'2023-2-14','2',6),(250,'2023-2-20','1',6),(251,'2023-2-18','-1',6),(279,'2023-2-6','1',6);
/*!40000 ALTER TABLE `calendrier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creche`
--

DROP TABLE IF EXISTS `creche`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creche` (
  `crecheId` int NOT NULL AUTO_INCREMENT,
  `siret` varchar(45) DEFAULT NULL,
  `nom` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `nbEmployes` int DEFAULT NULL,
  `financementPaje` tinyint DEFAULT '1',
  `tarifAtelier` float DEFAULT NULL,
  `structureId` int DEFAULT NULL,
  PRIMARY KEY (`crecheId`),
  KEY `Structure.num_agrement_idx` (`structureId`),
  CONSTRAINT `fk_structure_creche` FOREIGN KEY (`structureId`) REFERENCES `structure` (`structureId`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creche`
--

LOCK TABLES `creche` WRITE;
/*!40000 ALTER TABLE `creche` DISABLE KEYS */;
INSERT INTO `creche` VALUES (1,'4902904830018','Crèche Bambou','',15,1,0,1),(4,'124853431456','Micro-crèche les bambins d Eloise','',10,1,2,4),(45,NULL,'Les démons de minuit','halte garderie',NULL,NULL,NULL,22),(52,'0000000000','marilou','creche associative',5,1,20,16),(55,'1234567890','Wild Baby','creche municipale',4,1,20,77);
/*!40000 ALTER TABLE `creche` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enfant`
--

DROP TABLE IF EXISTS `enfant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enfant` (
  `enfantId` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `prenom` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `dateNaissance` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `marcheur` tinyint DEFAULT '0',
  `allergies` varchar(500) DEFAULT NULL,
  `docCarnetSante` varchar(300) DEFAULT NULL,
  `docActeNaissance` varchar(300) DEFAULT NULL,
  `medecin` varchar(50) DEFAULT NULL,
  `docCertifMed` varchar(300) DEFAULT NULL,
  `docAutoSoins` varchar(300) DEFAULT NULL,
  `docAutoSortie` varchar(300) DEFAULT NULL,
  `docLivretFamille` varchar(300) DEFAULT NULL,
  `familleId` int DEFAULT NULL,
  `pourcentFormEnfant` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`enfantId`),
  KEY `Client_id_idx` (`familleId`),
  CONSTRAINT `fk_famille_enfant` FOREIGN KEY (`familleId`) REFERENCES `famille` (`familleId`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enfant`
--

LOCK TABLES `enfant` WRITE;
/*!40000 ALTER TABLE `enfant` DISABLE KEYS */;
INSERT INTO `enfant` VALUES (1,'Bernard','Tiphaine','2021-12-31',1,'lactose / arachide',NULL,NULL,'El doctor de Amigos',NULL,NULL,NULL,NULL,1,100),(12,'Bernard','Sylvie','2022-01-05',0,'rien',NULL,NULL,'el doctor de amigos',NULL,NULL,NULL,NULL,1,100),(39,'ryngite','a','2023-01-19',0,'rien',NULL,NULL,'nonnon le medecin',NULL,NULL,NULL,NULL,32,100),(51,'Bernard','Madelaine','2020-06-17',0,'',NULL,NULL,'',NULL,NULL,NULL,NULL,1,67);
/*!40000 ALTER TABLE `enfant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `famille`
--

DROP TABLE IF EXISTS `famille`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `famille` (
  `familleId` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `docAssurParent` varchar(300) DEFAULT NULL,
  `docRib` varchar(300) DEFAULT NULL,
  `docAutoImage` varchar(300) DEFAULT NULL,
  `docDivorce` varchar(300) DEFAULT NULL,
  `token` varchar(512) DEFAULT NULL,
  `tokenStart` bigint DEFAULT NULL,
  `pourcentFormInscription` int NOT NULL DEFAULT '0',
  `photoProfilFamille` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`familleId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `famille`
--

LOCK TABLES `famille` WRITE;
/*!40000 ALTER TABLE `famille` DISABLE KEYS */;
INSERT INTO `famille` VALUES (1,'kevindu75@gmail.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIevICwYxIDO36.oIBiLk33q6WHyLGmeaK',NULL,NULL,NULL,NULL,NULL,NULL,6,'https://storage.googleapis.com/babyplace/8246155951460-qws-famillBernard.jpg'),(32,'nicolas.ryngite@gmail.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIevICwYxIDO36.oIBiLk33q6WHyLGmeaK',NULL,NULL,NULL,NULL,NULL,NULL,12,'https://storage.googleapis.com/babyplace/82791630567-qws-nicolasRyngite.jfif');
/*!40000 ALTER TABLE `famille` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoris` (
  `id` int NOT NULL AUTO_INCREMENT,
  `familleId` tinyint NOT NULL,
  `structureIdLiked` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoris`
--

LOCK TABLES `favoris` WRITE;
/*!40000 ALTER TABLE `favoris` DISABLE KEYS */;
INSERT INTO `favoris` VALUES (20,32,6),(27,32,7),(73,1,6),(77,1,1),(78,1,9);
/*!40000 ALTER TABLE `favoris` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generate_room`
--

DROP TABLE IF EXISTS `generate_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generate_room` (
  `roomId` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `familleId` int NOT NULL,
  `structureId` int NOT NULL,
  PRIMARY KEY (`roomId`),
  KEY `familleId` (`familleId`),
  KEY `structureId` (`structureId`),
  CONSTRAINT `generate_room_ibfk_1` FOREIGN KEY (`familleId`) REFERENCES `famille` (`familleId`),
  CONSTRAINT `generate_room_ibfk_2` FOREIGN KEY (`structureId`) REFERENCES `structure` (`structureId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generate_room`
--

LOCK TABLES `generate_room` WRITE;
/*!40000 ALTER TABLE `generate_room` DISABLE KEYS */;
INSERT INTO `generate_room` VALUES (1,1,1),(2,1,1);
/*!40000 ALTER TABLE `generate_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horaires`
--

DROP TABLE IF EXISTS `horaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horaires` (
  `horairesId` int NOT NULL AUTO_INCREMENT,
  `jourSemaine` varchar(45) DEFAULT NULL,
  `ouvert` tinyint DEFAULT NULL,
  `heureMin` varchar(10) DEFAULT NULL,
  `heureMax` varchar(10) DEFAULT NULL,
  `structureId` int DEFAULT NULL,
  `jourId` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`horairesId`),
  KEY `StructureIdfk_idx` (`structureId`),
  CONSTRAINT `fk_structure_horaires` FOREIGN KEY (`structureId`) REFERENCES `structure` (`structureId`)
) ENGINE=InnoDB AUTO_INCREMENT=244 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horaires`
--

LOCK TABLES `horaires` WRITE;
/*!40000 ALTER TABLE `horaires` DISABLE KEYS */;
INSERT INTO `horaires` VALUES (1,'lundi',1,'08:00','18:00',1,1),(2,'mardi',1,'08:00','18:00',1,2),(3,'mercredi',1,'08:00','18:00',1,3),(4,'jeudi',1,'08:00','18:00',1,4),(5,'vendredi',1,'08:00','18:00',1,5),(6,'samedi',0,NULL,NULL,1,6),(7,'dimanche',0,NULL,NULL,1,7),(17,'Lundi',1,'08:00','18:00',4,1),(18,'Mardi',1,'08:00','18:00',4,2),(19,'Mercredi',1,'08:00','18:00',4,3),(20,'Jeudi',1,'08:00','18:00',4,4),(21,'Vendredi',1,'08:00','18:00',4,5),(22,'Samedi',0,NULL,NULL,4,6),(23,'Dimanche',0,NULL,NULL,4,7),(24,'Lundi',1,'08:00','18:00',5,1),(25,'Mardi',1,'08:00','18:00',5,2),(26,'Mercredi',1,'08:00','18:00',5,3),(27,'Jeudi',1,'08:00','18:00',5,4),(28,'Vendredi',1,'08:00','18:00',5,5),(29,'Samedi',1,'08:00','18:00',5,6),(30,'Dimanche',0,NULL,NULL,5,7),(31,'Lundi',1,'08:30','18:00',6,1),(32,'Mardi',1,'09:00','19:00',6,2),(33,'Mercredi',1,'08:00','18:00',6,3),(34,'Jeudi',0,NULL,NULL,6,4),(35,'Vendredi',1,'08:00','18:00',6,5),(36,'Samedi',1,'08:00','18:00',6,6),(37,'Dimanche',0,NULL,NULL,6,7),(38,'Lundi',1,'08:00','18:00',7,1),(39,'Mardi',1,'08:00','18:00',7,2),(40,'Mercredi',1,'08:00','18:00',7,3),(41,'Jeudi',1,'08:00','18:00',7,4),(42,'Vendredi',1,'08:00','18:00',7,5),(43,'Samedi',1,'08:00','18:00',7,6),(44,'Dimanche',0,NULL,NULL,7,7),(45,'Lundi',1,'08:00','18:00',8,1),(46,'Mardi',1,'08:00','18:00',8,2),(47,'Mercredi',0,NULL,NULL,8,3),(48,'Jeudi',0,NULL,NULL,8,4),(49,'Vendredi',0,NULL,NULL,8,5),(50,'Samedi',0,NULL,NULL,8,6),(51,'Dimanche',0,NULL,NULL,8,7),(52,'Lundi',1,'08:00','18:00',9,1),(53,'Mardi',1,'08:00','18:00',9,2),(54,'Mercredi',1,'08:00','18:00',9,3),(55,'Jeudi',1,'08:00','18:00',9,4),(56,'Vendredi',1,'08:00','18:00',9,5),(57,'Samedi',1,'08:00','18:00',9,6),(58,'Dimanche',1,'08:00','18:00',9,7),(153,'lundi',1,'08:00','18:00',22,1),(154,'mercredi',1,'08:00','18:00',22,3),(155,'mardi',1,'08:00','18:00',22,2),(156,'vendredi',0,NULL,NULL,22,5),(157,'jeudi',0,NULL,NULL,22,4),(158,'dimanche',0,NULL,NULL,22,7),(159,'samedi',0,NULL,NULL,22,6),(174,'lundi',1,'08:00','18:00',23,1),(175,'samedi',1,'08:00','18:00',23,6),(176,'mercredi',1,'08:00','18:00',23,3),(177,'vendredi',1,'08:00','18:00',23,5),(178,'jeudi',1,'08:00','18:00',23,4),(179,'dimanche',1,'08:00','18:00',23,7),(180,'mardi',1,'08:00','18:00',23,2),(216,'lundi',1,'08:00','18:00',16,1),(217,'mardi',1,'08:00','18:00',16,2),(218,'jeudi',1,'08:00','18:00',16,4),(219,'vendredi',1,'08:00','18:00',16,5),(220,'mercredi',1,'08:00','18:00',16,3),(221,'dimanche',0,NULL,NULL,16,7),(222,'samedi',0,NULL,NULL,16,6),(223,'lundi',1,'08:00','18:00',68,1),(224,'mardi',1,'08:00','18:00',68,2),(225,'mercredi',1,'08:00','18:00',68,3),(226,'vendredi',1,'08:00','18:00',68,5),(227,'jeudi',1,'08:00','18:00',68,4),(228,'dimanche',0,NULL,NULL,68,7),(229,'samedi',0,NULL,NULL,68,6),(230,'lundi',0,NULL,NULL,77,1),(231,'mardi',1,'08:00','18:00',77,2),(232,'samedi',1,'08:00','18:00',77,6),(233,'jeudi',1,'08:00','18:00',77,4),(234,'mercredi',1,'08:00','18:00',77,3),(235,'vendredi',0,NULL,NULL,77,5),(236,'dimanche',0,NULL,NULL,77,7),(237,'mardi',1,'08:00','18:00',78,2),(238,'lundi',1,'08:00','18:00',78,1),(239,'vendredi',1,'08:00','18:00',78,5),(240,'jeudi',1,'08:00','18:00',78,4),(241,'samedi',1,'08:00','18:00',78,6),(242,'mercredi',1,'08:00','18:00',78,3),(243,'dimanche',0,'08:00','18:00',78,7);
/*!40000 ALTER TABLE `horaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message_for_admin`
--

DROP TABLE IF EXISTS `message_for_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message_for_admin` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `optionSelected` varchar(255) NOT NULL,
  `texte` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message_for_admin`
--

LOCK TABLES `message_for_admin` WRITE;
/*!40000 ALTER TABLE `message_for_admin` DISABLE KEYS */;
INSERT INTO `message_for_admin` VALUES (41,'Guillaume','Pichaud','guillaume.pichaud44590@gmail.com','besoin de connaitre le fonctionnement du site','essai'),(43,'guillaume','pichaud','guillaume.pichaud44590@gmail.com','besoin d\'explication sur une section','aaaaa'),(44,'guillaume','pichaud','g.pichaud.dev@gmail.com','besoin d\'explication sur une section','Bonjour ceci est un essai');
/*!40000 ALTER TABLE `message_for_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message_room`
--

DROP TABLE IF EXISTS `message_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message_room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room` int DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `message` mediumtext NOT NULL,
  `time` date DEFAULT NULL,
  `notification` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message_room`
--

LOCK TABLES `message_room` WRITE;
/*!40000 ALTER TABLE `message_room` DISABLE KEYS */;
INSERT INTO `message_room` VALUES (1,2,'Crèche Bambou','bonjour ca va ?','0000-00-00',NULL),(2,2,'kevindu75@exemple.com','Bien et vous ?','0000-00-00',NULL),(3,2,'kevindu75@exemple.com','test','0000-00-00',NULL),(4,2,'Crèche Bambou','test','0000-00-00',NULL),(5,2,'kevindu75@exemple.com','alut','0000-00-00',NULL);
/*!40000 ALTER TABLE `message_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `notifId` int NOT NULL AUTO_INCREMENT,
  `enfantId` int DEFAULT NULL,
  `structureId` int DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT 'waiting',
  PRIMARY KEY (`notifId`),
  KEY `familleId` (`enfantId`),
  KEY `structureId` (`structureId`),
  CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`structureId`) REFERENCES `structure` (`structureId`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (11,12,8,'waiting'),(14,12,8,'waiting'),(15,1,7,'waiting'),(16,1,1,'waiting'),(17,12,5,'waiting'),(19,1,5,'waiting'),(23,39,8,'waiting'),(26,12,5,'waiting'),(27,1,4,'waiting'),(38,1,9,'waiting'),(39,1,9,'waiting'),(42,12,8,'waiting'),(46,12,7,'waiting'),(47,12,9,'waiting'),(57,12,6,'waiting'),(58,12,9,'waiting'),(59,1,6,'waiting'),(60,1,8,'waiting'),(61,12,8,'waiting'),(62,1,9,'waiting'),(63,12,9,'waiting');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parent`
--

DROP TABLE IF EXISTS `parent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parent` (
  `parentId` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `prenom` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `profession` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `telephone` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `docJustifRevenus` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `docDeclaRevenus` varchar(300) DEFAULT NULL,
  `docSituationPro` varchar(300) DEFAULT NULL,
  `docJustifDom` varchar(300) DEFAULT NULL,
  `numCaf` varchar(300) DEFAULT NULL,
  `numSecu` varchar(300) DEFAULT NULL,
  `familleId` int DEFAULT NULL,
  `adresse` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `pourcentFormParent` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`parentId`),
  KEY `Client_id_idx` (`familleId`),
  CONSTRAINT `fk_famille_parent` FOREIGN KEY (`familleId`) REFERENCES `famille` (`familleId`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parent`
--

LOCK TABLES `parent` WRITE;
/*!40000 ALTER TABLE `parent` DISABLE KEYS */;
INSERT INTO `parent` VALUES (1,'Bernard','Kevin','Chomeur','keke.beber@msn.com','0667686969','https://storage.googleapis.com/babyplace/3696155810890-qws-TEST_APP.pdf',NULL,NULL,NULL,NULL,NULL,1,NULL,83),(2,'Bernard','Josette','chef de parti politique','jojo.beber@msn.com','0689456532',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,83),(49,'Ryngite','Nicolas','jockey',NULL,NULL,NULL,'https://storage.googleapis.com/babyplace/97851632140-qws-Test_deux.pdf','https://storage.googleapis.com/babyplace/702916321184-qws-TEST_APP.pdf',NULL,NULL,NULL,32,NULL,33),(50,'Ryngite','Simone',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,32,NULL,33);
/*!40000 ALTER TABLE `parent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personne_confiance`
--

DROP TABLE IF EXISTS `personne_confiance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personne_confiance` (
  `confianceId` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `tel` varchar(10) DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `familleId` int DEFAULT NULL,
  PRIMARY KEY (`confianceId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personne_confiance`
--

LOCK TABLES `personne_confiance` WRITE;
/*!40000 ALTER TABLE `personne_confiance` DISABLE KEYS */;
INSERT INTO `personne_confiance` VALUES (1,'Bernard','Ginette','0102030405','gigi.beber@wannadou.fr',1),(2,'Bernard','Roger','0908070605','roro.beber@sfr.fr',1),(8,'Bernary','Anne-Marie','0648953615','an-ma@hotmail.com',1),(9,'Bernary','Jean-Luc ','0648569575','jl.beber@laposte.fr',1),(10,'Narnard','Eloise','0645897856','elnar@gmail.com',32);
/*!40000 ALTER TABLE `personne_confiance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `structureId` int NOT NULL,
  `enfantId` int NOT NULL,
  `prixTotal` float NOT NULL,
  `heureArrivee` varchar(10) DEFAULT NULL,
  `heureDepart` varchar(10) DEFAULT NULL,
  `heureTotal` varchar(10) DEFAULT NULL,
  `status` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'waiting' COMMENT 'waiting / approved / refused / payed / toNote',
  `dateArrivee` varchar(20) DEFAULT NULL,
  `dateDepart` varchar(20) DEFAULT NULL,
  `jour` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `isOccasionnel` tinyint DEFAULT NULL,
  `familleId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES 
(90,6,1,30,'11:00','15:00','4:0','toNote','2023-01-26','2144-06-11','Mardi',0,1), (93,9,12,50.6,'07:00','18:00','11:0','waiting',NULL,NULL,'Vendredi',0,1), (94,6,1,75.5,'10:00','17:00','7:0','waiting','2023-07-27','2023-08-16','Mercredi',0,1), (95,8,1,77,'08:00','17:00','9:0','approved','2023-02-14','2023-06-27','Mardi',0,1), (96,8,12,69,'09:00','16:45','7:45','refused',NULL,NULL,'2023-7-28',1,1),(97,9,1,28.6,'10:00','15:00','5:0','payed','2023-07-21','2023-12-25','Vendredi',0,1), (98,9,12,45.4,'09:00','17:25','8:25','payed',NULL,NULL,'2023-8-6',1,1);


/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `structure`
--

DROP TABLE IF EXISTS `structure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `structure` (
  `structureId` int NOT NULL AUTO_INCREMENT,
  `numAgrement` varchar(45) DEFAULT NULL,
  `telephone` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `adresse` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `photoProfil` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `photoStructure1` varchar(300) DEFAULT NULL,
  `photoStructure2` varchar(300) DEFAULT NULL,
  `photoStructure3` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `pcsc1` tinyint DEFAULT '0',
  `nesting` tinyint DEFAULT '0',
  `montessori` tinyint DEFAULT '0',
  `handi` tinyint DEFAULT '0',
  `jardin` tinyint DEFAULT '0',
  `sorties` tinyint DEFAULT '0',
  `promenades` tinyint DEFAULT '0',
  `eveil` tinyint DEFAULT '0',
  `musique` tinyint DEFAULT '0',
  `art` tinyint DEFAULT '0',
  `bilingue` tinyint DEFAULT '0',
  `bibli` tinyint DEFAULT '0',
  `transport` tinyint DEFAULT '0',
  `albumPhoto` tinyint DEFAULT '0',
  `photoConnecte` tinyint DEFAULT '0',
  `resaInst` tinyint DEFAULT NULL,
  `dureeMin` int DEFAULT '0',
  `dureeMax` int DEFAULT '0',
  `maxPlaces` int DEFAULT '0',
  `maxHandi` int DEFAULT '0',
  `max18Mois` int DEFAULT '0',
  `maxNuit` int DEFAULT '0',
  `tarifHeure` float DEFAULT '0',
  `tarifHoraireSpec` float DEFAULT '0',
  `indemnRepas` float DEFAULT '0',
  `dateAgrement` varchar(45) DEFAULT NULL,
  `docPmi` varchar(300) DEFAULT NULL,
  `avisCom` float DEFAULT NULL,
  `avisProprete` float DEFAULT NULL,
  `avisSecurite` float DEFAULT NULL,
  `avisEveil` float DEFAULT NULL,
  `avisHoraires` float DEFAULT NULL,
  `token` varchar(512) DEFAULT NULL,
  `tokenStart` bigint DEFAULT NULL,
  `isCreche` tinyint DEFAULT NULL,
  `nbNotes` int DEFAULT '0',
  `role` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT 'user',
  `isVerify` tinyint DEFAULT '0',
  `isSignaled` tinyint DEFAULT '0',
  PRIMARY KEY (`structureId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `structure`
--

LOCK TABLES `structure` WRITE;
/*!40000 ALTER TABLE `structure` DISABLE KEYS */;
INSERT INTO `structure` VALUES (0,NULL,NULL,'admin@admin.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIeftbep3Z1fv9VpKe8Pt2FO0zUI6BsRn6',NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,0,0,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'admin',1,0),(1,'123456789','0240498051','crechebambou@orange.fr','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','24 rue du casterneau 44000 nantes','https://metropole.nantes.fr/infonantes/association/logo/23043','https://www.caue-observatoire.fr/wp-content/uploads/2015/12/44_29e37147-5490-4d51-b406-6e182f0c4395_2.jpg','https://www.caue-observatoire.fr/wp-content/uploads/2015/12/44_29e37147-5490-4d51-b406-6e182f0c4395_1.jpg','https://www.caue-observatoire.fr/wp-content/uploads/2015/12/44_29e37147-5490-4d51-b406-6e182f0c4395_5.jpg','La crèche a ouvert en janvier 2003, elle est située dans le secteur Saint-Donatien. Elle accueille les enfants de 10 semaines à 3 ans selon les besoins des parents et les possibilités d accueil de la crèche (tous les jours, quelques jours, une journée). Selon les disponibilités des périscolaires peuvent être accueillis. Les repas sont confectionnés par une restauration externe, ils sont livrés à la crèche quotidiennement, une diététicienne met à jour les menus.',1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,60,240,30,10,10,0,5,8,5,'2022-09-12',NULL,4.32692,4.23077,4.61539,4.61539,4.51923,NULL,NULL,1,26,'user',1,0),(4,'456351555','0176311602','babilou@gmail.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','2 Bd Jean XXIII, 44300 Nantes','https://www.babilou.fr/themes/custom/bab/assets/img/logos/babilou.png','https://www.babilou.fr/themes/custom/bab/assets/img/art/nursery-slider-default-babies-full.jpg','https://www.babilou.fr/sites/default/files/styles/diaporama/public/2021-09/295-Creche-Babilou-Nantes-Rondeau-14.jpg?h=82f92a78&itok=yHmS6dtP','https://www.babilou.fr/sites/default/files/styles/diaporama/public/2021-09/295-Creche-Babilou-Nantes-Rondeau-3_0.jpg?h=82f92a78&itok=yF6dzpeP','Accueillir tous les enfants sans distinction est notre vocation depuis 16 ans. Dans nos établissements, nos professionnels petite enfance tissent une relation de confiance avec chaque famille qu’ils accueillent.\n\nDès 10 semaines et jusqu’à 4 ans, nous accueillons les enfants en prenant soin de respecter leur rythme et leurs besoins.',1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,60,540,20,5,5,3,7.6,9,3.4,'2022-12-14',NULL,5,4,4,2,2,'d1e66ab6e3384b532f265b0e6c997f167795c778889afce4f5768bf4823edcf5',1672735421778,1,14,'user',1,0),(5,'489651665','0615151515','assmatnb1@gmail.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','22 All. Commandant Charcot, 44000 Nantes','https://static.neopse.com/medias/p/1144/site/9e/9d/18/9e9d1834877160d7099fad1ed81cd379385f4934.jpg?v=v1','https://www.neuillysurmarne.fr/wp-content/uploads/2022/01/assistante-maternelle.jpg','https://www.margaux-cantenac.fr/wp-content/uploads/2020/04/assistantes-maternelles.jpg','https://i0.wp.com/www.airnounou.com/wp-content/uploads/2017/11/assistante-maternelle-min-1-1.jpg?fit=1688%2C1125&ssl=1','ass mat 1\nbah c\'est bien',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,60,360,10,0,2,0,10,8,5,'2020-09-20',NULL,4.2,2.1,3.6,1.3,4.6,NULL,NULL,0,10,'user',1,0),(6,'2','0222222222','nomail@gmail.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','15 All. des Tanneurs, 44000 Nantes','https://storage.googleapis.com/babyplace/4245142615194-qws-jaquelline.jpg','https://storage.googleapis.com/babyplace/74314300102-qws-pexels-binyamin-mellish-106399.jpg','https://storage.googleapis.com/babyplace/534214306204-qws-pexels-anastasiya-gepp-3995919.jpg','https://storage.googleapis.com/babyplace/9159143011157-qws-pexels-vecislavas-popa-1643383.jpg','Assistante maternelle professionnelle, 25 ans d\'expérience.',0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,60,1020,5,2,2,0,7.5,3,3,'2019-05-16','https://storage.googleapis.com/babyplace/290143025695-qws-TEST_APP.pdf',3.45101,3.35,3.25,3.501,4.049,'68067702415734bb0289b38ac90fdcb07795a466f06d153b0d88c0471158be32',1675689658222,0,10,'user',1,0),(7,'461798621','0649468756','imo.gène@sfr.fr','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','43 Rue Gambetta, 44000 Nantes','https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/8612900/pexels-photo-8612900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://www.ville-clichy.fr/uploads/Image/45/IMF_ACCROCHE/GAB_CLICHY/66175_408_Inscription-place-en-creche-2022.jpg','https://www.people-and-baby.com/website/var/tmp/image-thumbnails/140000/143689/thumb__auto_7ba98a77e11f12943e025a7847944c5e/Creche-Grandchamps-des-Fontaines-Un-nid-dans-la-grandhaie-06032020_182722.jpeg','bienvenue',1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,60,360,7,0,0,0,2.6,4.6,3.1,'2012-03-04',NULL,4.5,3.5,5,3.5,2.5,NULL,NULL,0,1,'user',1,1),(8,'4986512268','0606060606','ursule.terrier@mail.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','1bis Quai Turenne, 44000 Nantes','https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','http://microcreche-mabonneetoile.fr/wp-content/uploads/2017/07/IMG_20170616_133803_resized_20170701_071910289.jpg','https://www.manutan-collectivites.fr/fstrz/r/s/www.manutan-collectivites.fr/media/wysiwyg/Quels_jeux_d_veil_et_de_motricit_choisir_en_cr_che_-_2.png?frz-v=18','https://media.lesechos.com/api/v1/images/view/5bf40b603e4546535b2be5f8/1280x720/2211378-la-creche-meilleur-mode-de-garde-pour-les-enfants-selon-linserm-web-tete-0302354251196.jpg','oui',1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,60,350,8,4,5,0,8,5.6,5,'2020-01-25',NULL,2.3,4,3,2,5,'c3442d2d4caaeccc076b34cc50616262003656bd77bba9dabce3a247f345bafc',1675437137308,0,1,'user',1,0),(9,'49865794956887','0505054556','cunégondole@wannadou.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','6 Cr Olivier de Clisson, 44000 Nantes','https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://www.ville-marseillan.fr/file/2021/09/Ouverture-de-la-creche-les-Zygothau-17.jpg','https://verdurable.fr/wp-content/uploads/2019/07/Jardin-p%C3%A9dagogique-cr%C3%A9che-Pollux.jpg','https://www.vosquestionsdeparents.fr/uploads/medias//IMAGES_MILAN/Reportage-Creche-picoti/creche-Une.jpg','on a un jardin et c\'est bien',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,60,925,12,3,6,10,4.6,5.8,4,'1980-10-05',NULL,5,5,5,5,5,'3869db6c2eb517cbd35227c5c7adc7ac5aea770b63436bb7b00f2e2b7ad17c13',1675438220070,0,523,'user',1,0),(16,'00000000000','0123456789','paulette07@laposte.net','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','19 allée Baco 44300 Nantes','https://storage.googleapis.com/babyplace/4834121459616-qws-72294306_567690057326847_4255280366850444617_n.jpg','https://storage.googleapis.com/babyplace/1497165626955-qws-72294306_567690057326847_4255280366850444617_n.jpg','https://storage.googleapis.com/babyplace/508416855103-qws-72294306_567690057326847_4255280366850444617_n.jpg','https://storage.googleapis.com/babyplace/3868165413794-qws-20161113-bbcerbere.jpg','youpiya',0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,24,4,2,4,0,3.5,4.5,3,'2014-06-05','https://storage.googleapis.com/babyplace/7710382892-qws-20161113-bbcerbere.jpg',NULL,NULL,NULL,NULL,NULL,'1b5d115e13a3a7025737b672ba74a1e4bc8a65d817f1f815a47ac6f979b07335',1674813536880,0,NULL,'user',0,0),(22,NULL,'0123456789','crechetest02@laposte.net','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','91 rue du Maréchal Joffre 44000 Nantes','/uploads/avatar/avatar21603.jpeg','/uploads/photosStructure/photo21439.jpeg','/uploads/photosStructure/photo21347.jpeg',NULL,'Youhouu',0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,2,22,3,0,3,0,3.5,4.5,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'5e722b4e4e76a9a99a252f699d59091fc9b9fd54f3cf6b9a7c1be7f48ea1f0bc',1673003154250,1,0,'user',0,0),(23,'0','0123456789','crechetest03@laposte.net','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','91 rue du Maréchal Joffre 44000 Nantes','/uploads/avatar/avatar44710.jpeg','/uploads/photosStructure/photo44786.jpeg',NULL,NULL,'hey hey',1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,6,3,0,3,0,3.5,4.5,3.5,'2014-02-15','@backend/public/uploads/photosStructure/968logo github noir.png',NULL,NULL,NULL,NULL,NULL,'b28159d5e349af3601c7f97b6c754ccbb26da86542c3e8c294deb46fdfc0b4c6',1673010893760,0,0,'user',0,0),(68,'0123456789','0123456789','youpiya@test.fr','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','4 rue Baron 44300 Nantes',NULL,'https://storage.googleapis.com/babyplace/6309112446821-qws-20161113-bbcerbere.jpg',NULL,NULL,'Hey hey',1,1,NULL,NULL,1,1,1,1,NULL,1,NULL,NULL,NULL,NULL,NULL,1,2,18,3,0,3,0,3.5,4.5,5,'2021-11-04','https://storage.googleapis.com/babyplace/6402122629655-qws-72294306_567690057326847_4255280366850444617_n.jpg',NULL,NULL,NULL,NULL,NULL,'26d31cefe2c9eb8c237a76f2e6e590782850e3cce6bad3db9e578ccdc6b5f363',1674727129819,NULL,0,'user',0,0),(77,'1234567890','0123456789','amelie.guilloux@hotmail.fr','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','4 rue Baron 44000 Nantes','https://storage.googleapis.com/babyplace/67911460284-qws-baby-g9851b0f22_640.jpg','https://storage.googleapis.com/babyplace/638212324919-qws-motor-loop-gf72e8aaaf_640.jpg',NULL,NULL,'Notre pédagogie basée sur la pratique et la réalisation de projets professionnels (projets partenaires, hackathons, quêtes etc…) dont certains pour des entreprises réelles permet à nos élèves de se préparer au monde professionnel et de justifier auprès des recruteurs d’une première expérience dès la fin de la formation.',1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,24,16,3,12,0,3.5,4.8,5,'2021-07-22','https://storage.googleapis.com/babyplace/6496123540648-qws-commandes_terminal.pdf',NULL,NULL,NULL,NULL,NULL,'acd41c075f6f39b8f63e60d04864abfacc8dbed282b3d1324b10167165a07a18',1675690714831,1,0,'user',1,0),(78,'1234567890','0123456789','amly90@msn.com','$2b$10$aNoIXYuCvXn8jQTV9AZHIedFBp05GCwRGed0lG8.kwxFirMdNLiKq','1 rue Lebrun 44000 Nantes','https://storage.googleapis.com/babyplace/6227144015926-qws-pexels-tuáº¥n-kiá»t-jr-1382731.jpg','https://storage.googleapis.com/babyplace/5092144151729-qws-pexels-cottonbro-studio-3661264.jpg',NULL,NULL,'Lorem ipsum dolor sit amet. Aut eveniet dolores vel voluptas porro ut quasi exercitationem. Cum harum accusamus qui perferendis accusantium sed dicta velit. Vel obcaecati similique hic exercitationem unde ut tempore accusantium in aperiam quisquam ea maxime officia aut omnis voluptatum. Ea quasi quos nam odit vitae non aperiam dolore.',1,1,NULL,NULL,1,1,1,1,NULL,NULL,NULL,1,NULL,1,NULL,0,1,12,3,0,3,0,3.8,4.6,3.5,'2022-09-05','https://storage.googleapis.com/babyplace/934715331725-qws-SQL-Cheat-Sheet.pdf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,'user',0,0);


/*!40000 ALTER TABLE `structure` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-06 15:07:36
