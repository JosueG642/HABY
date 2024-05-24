CREATE DATABASE  IF NOT EXISTS `habits_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `habits_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: habits-db.c5ss0qu8u61i.us-east-2.rds.amazonaws.com    Database: habits_db
-- ------------------------------------------------------
-- Server version	8.0.36

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `habit`
--

DROP TABLE IF EXISTS `habit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `habit` (
  `idHabit` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `startDate` datetime NOT NULL,
  `userId` int NOT NULL,
  `endDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL,
  `habitName` varchar(255) NOT NULL,
  `habitType` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `habitcol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idHabit`),
  KEY `userId` (`userId`),
  CONSTRAINT `habit_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habit`
--

LOCK TABLES `habit` WRITE;
/*!40000 ALTER TABLE `habit` DISABLE KEYS */;
INSERT INTO `habit` VALUES (3,'tomar cursos de cocina','2024-02-04 06:00:00',2,'2024-02-04 06:00:00','2024-05-23 03:58:33','2024-05-23 22:34:17','Aprender a cocinar','semanal','Comida',NULL),(4,'tocar 1 hora al dia','2024-02-04 06:00:00',1,'2024-02-04 06:00:00','2024-05-23 04:07:22','2024-05-23 04:07:22','tocar bateria','cualquier cosa xd','Música',NULL),(5,'comer frutas y verduras','0000-00-00 00:00:00',1,'0000-00-00 00:00:00','2024-05-23 22:29:03','2024-05-23 22:29:03','Comer sano','semanal','cOMIDA',NULL),(6,'practicar guitarra 4 veces a la semana','0000-00-00 00:00:00',3,'0000-00-00 00:00:00','2024-05-23 22:32:18','2024-05-23 22:32:18','Tocar guitarra','semanal','Música',NULL),(7,'ir al gym 3 veces a la semana','0000-00-00 00:00:00',3,'0000-00-00 00:00:00','2024-05-23 22:33:06','2024-05-23 22:33:06','ir al gym','semanal','Deportes',NULL);
/*!40000 ALTER TABLE `habit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reminder`
--

DROP TABLE IF EXISTS `reminder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reminder` (
  `idReminder` int NOT NULL AUTO_INCREMENT,
  `typeReminder` varchar(45) NOT NULL,
  `timeReminder` datetime NOT NULL,
  `dayWeek` datetime NOT NULL,
  `active` int NOT NULL,
  PRIMARY KEY (`idReminder`),
  CONSTRAINT `idHabit` FOREIGN KEY (`idReminder`) REFERENCES `habit` (`idHabit`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reminder`
--

LOCK TABLES `reminder` WRITE;
/*!40000 ALTER TABLE `reminder` DISABLE KEYS */;
/*!40000 ALTER TABLE `reminder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward`
--

DROP TABLE IF EXISTS `reward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward` (
  `idReward` int NOT NULL AUTO_INCREMENT,
  `cost` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idReward`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward`
--

LOCK TABLES `reward` WRITE;
/*!40000 ALTER TABLE `reward` DISABLE KEYS */;
INSERT INTO `reward` VALUES (1,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(9,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(10,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(11,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(12,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(13,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(14,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(15,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(16,500,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(17,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(18,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(19,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(20,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(21,500,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(22,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(23,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(24,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(25,150,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(26,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(27,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(28,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(29,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(30,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(31,200,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(32,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(33,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(34,500,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(35,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(36,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(37,400,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(38,700,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(39,1000,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(40,600,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(41,800,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(42,1500,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(43,400,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(44,2000,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(45,2500,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(46,2500,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(47,2500,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(48,500,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(49,300,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(50,100,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(51,5000,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(52,10000,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(53,5000,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(54,5000,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(55,2000,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00'),(56,3000,'','','','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `reward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `typeUser` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `coins` int NOT NULL DEFAULT '300',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `email_17` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'André','test1@hotmail.com','$2b$10$M1ICJhFy1Vs.8cjLAblIT./CVYyWwFHExubqZq/LotgLOxLDVCRoa','user','2024-05-12 19:53:19','2024-05-23 05:59:37',0),(2,'Oscar','test2@hotmail.com','$2b$10$8M9uVjFCP4QvkMWDZrSJ1e7KIPqGwab9wHG3Lab8hN9SNkGyF8E/O','user','2024-05-12 19:53:34','2024-05-23 05:26:19',300),(3,'Raúl','test3@hotmail.com','$2b$10$KsSTGJxFrJHttBFUE6MChexFJ7V8H6VhlDl50HpVCoD6hmXG5qr42','user','2024-05-12 21:53:25','2024-05-23 05:50:39',0),(4,'juan','juan@gmail.com','$2b$10$aoZ0Fnmkho3ABi.D4Gkqg.yhXxUudWIdfkfqxLr9eAUk/rNs4Ad.m',NULL,'2024-05-23 00:20:14','2024-05-23 00:20:14',300),(5,'prueba','prueba@gmail.com','$2b$10$tHt7RuCXrezz.V85gyogBO2eaTbaaCt3jkq9WZ27e5..MLmTtunNe',NULL,'2024-05-23 00:45:01','2024-05-23 05:28:33',300),(6,'Erick','test4@hotmail.com','$2b$10$9rKOH8IHEVfz96HgltpZQOm0Ren3QQAQ2KkV6QMyLl6BBIBYtSUVi','user','2024-05-23 02:43:31','2024-05-23 05:54:18',0),(7,'John Doe','test7@hotmail.com','$2b$10$1o0qHfao.btrBMveMA9Q0OgYuW16h3zOEliZjc0hj8S2zXgj/QBe.','Standard','2024-05-23 04:36:23','2024-05-23 22:36:24',0),(8,'Julian','test8@hotmail.com','$2b$10$gXtK2eR0KXDZTbAe7Et6hecVziQYcC5nzhu8QDAKwfpVLRXwf.8e.','Standard','2024-05-23 05:53:11','2024-05-23 05:53:11',300),(9,'Pepe','hola2@gmail.com','$2b$10$sfhUTVPHFPLFYkzPY8EREeJdSPksyHpjWF2PrOMsQu2T9IAEWMlJa',NULL,'2024-05-23 20:58:38','2024-05-23 20:58:38',300),(10,'Juan ','test10@hotmail.com','$2b$10$f58Oy.O4iJTqIxFCKGS6L.vIMZ0CyN7Jw0rpJhqkWybocPEFLIF7K','Standard','2024-05-23 22:10:37','2024-05-23 22:36:59',0),(11,'Alberto','test11@hotmail.com','$2b$10$ngy1q2.hn644yVeXuVURreJNkFX6GUw3XBFW038ZKCRNZjeR012.y','Standard','2024-05-23 22:11:05','2024-05-23 22:11:05',300),(12,'Ramón','test15@hotmail.com','$2b$10$TwzDMUJI0z37sNew79fQyOim83e.0//WBvwFb8W/UnMve8OWboEqW','Standard','2024-05-23 22:21:17','2024-05-23 22:21:17',300),(13,'José','test16@hotmail.com','$2b$10$CC64wR1.7ExEd4sE013IceABWiiknKQdji.wJSSbyqXlOqreu0Gry','Standard','2024-05-23 22:30:41','2024-05-23 22:30:41',300),(14,'Andrea','test17@hotmail.com','$2b$10$JTFT2pqd2zOcqyS8olSlnuGxPU4mMdPPnvohU6MVOCigHhIEXepKm','Standard','2024-05-23 22:31:04','2024-05-23 22:31:04',300);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userrewards`
--

DROP TABLE IF EXISTS `userrewards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userrewards` (
  `iduserreward` int NOT NULL AUTO_INCREMENT,
  `reward` int NOT NULL,
  `user` int NOT NULL,
  PRIMARY KEY (`iduserreward`),
  KEY `user_idx` (`user`),
  KEY `reward_idx` (`reward`),
  CONSTRAINT `reward` FOREIGN KEY (`reward`) REFERENCES `reward` (`idReward`),
  CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userrewards`
--

LOCK TABLES `userrewards` WRITE;
/*!40000 ALTER TABLE `userrewards` DISABLE KEYS */;
INSERT INTO `userrewards` VALUES (1,14,1),(2,15,2),(3,43,1),(4,56,2),(5,22,3),(6,34,1),(7,35,1),(8,36,3),(9,35,2),(10,50,1),(11,2,2),(12,2,1),(13,2,3),(14,7,3),(15,5,4),(16,3,4),(17,39,1),(18,12,4),(19,1,5),(20,44,5),(21,32,5),(22,6,5),(23,1,1),(24,56,1),(26,56,2),(27,1,1),(28,1,1),(29,1,1),(30,1,2),(31,26,5),(32,26,5),(33,26,5),(34,17,3),(35,17,6),(36,5,1),(37,10,7),(38,10,7),(39,4,10);
/*!40000 ALTER TABLE `userrewards` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-23 18:08:12
