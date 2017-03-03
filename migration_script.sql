-- ----------------------------------------------------------------------------
-- MySQL Workbench Migration
-- Migrated Schemata: urgentcare_bk
-- Source Schemata: urgentcare
-- Created: Thu Mar 02 21:51:03 2017
-- Workbench Version: 6.3.8
-- ----------------------------------------------------------------------------

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------------------------
-- Schema urgentcare_bk
-- ----------------------------------------------------------------------------
DROP SCHEMA IF EXISTS `urgentcare_bk` ;
CREATE SCHEMA IF NOT EXISTS `urgentcare_bk` ;

-- ----------------------------------------------------------------------------
-- Table urgentcare_bk.tblfacility
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `urgentcare_bk`.`tblfacility` (
  `Facility_ID` INT(11) NOT NULL,
  `Facility_Name` VARCHAR(50) NULL DEFAULT NULL,
  `Facility_Phone` BIGINT(20) NULL DEFAULT NULL,
  `Facility_Address` VARCHAR(150) NULL DEFAULT NULL,
  `Facility_Zipcode` BIGINT(20) NULL DEFAULT NULL,
  `Facility_QN` SMALLINT(6) NULL DEFAULT NULL,
  `Facility_Rating` TINYINT(4) NULL DEFAULT NULL,
  PRIMARY KEY (`Facility_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- ----------------------------------------------------------------------------
-- Table urgentcare_bk.tblpatient
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `urgentcare_bk`.`tblpatient` (
  `Patient_ID` BIGINT(20) NOT NULL,
  `Patient_Phone` BIGINT(20) NOT NULL,
  `Patient_F_Name` VARCHAR(50) NOT NULL,
  `Patient_M_Name` VARCHAR(50) NULL DEFAULT NULL,
  `Patient_L_Name` VARCHAR(50) NOT NULL,
  `Service_Date` DATE NOT NULL,
  `Service_Time` TIME NOT NULL,
  `Facility_ID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Patient_ID`),
  INDEX `Facility_ID` (`Facility_ID` ASC),
  CONSTRAINT `tblpatient_ibfk_1`
    FOREIGN KEY (`Facility_ID`)
    REFERENCES `urgentcare_bk`.`tblfacility` (`Facility_ID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
SET FOREIGN_KEY_CHECKS = 1;
