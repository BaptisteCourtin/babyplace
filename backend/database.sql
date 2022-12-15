-- MySQL Script generated by MySQL Workbench

-- Fri Dec  2 11:29:21 2022

-- Model: New Model    Version: 1.0

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;

SET
    @OLD_FOREIGN_KEY_CHECKS = @ @FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET
    @OLD_SQL_MODE = @ @SQL_MODE,
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------

-- Schema babydb

-- -----------------------------------------------------

-- -----------------------------------------------------

-- Schema babydb

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `babydb` DEFAULT CHARACTER SET utf8 ;

USE `babydb` ;

-- -----------------------------------------------------

-- Table `babydb`.`Structure`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `babydb`.`Structure` ;

CREATE TABLE
    IF NOT EXISTS `babydb`.`Structure` (
        `Structure_id` INT NOT NULL AUTO_INCREMENT,
        `Num_agrement` BIGINT NOT NULL,
        `Telephone` BIGINT NOT NULL,
        `Email` VARCHAR(50) NOT NULL,
        `Password` VARCHAR(45) NOT NULL,
        `Adresse` VARCHAR(500) NOT NULL,
        `Token` VARCHAR(512),
        `TokenStart` BIGINT,
        `Photo_profil` VARCHAR(300) NULL,
        `Photo_structure_1` VARCHAR(300) NULL,
        `Photo_structure_2` VARCHAR(300) NULL,
        `Photo_structure_3` VARCHAR(300) NULL,
        `Description` TEXT NULL,
        `PSCI` TINYINT NULL,
        `Nesting` TINYINT NULL,
        `Montessori` TINYINT NULL,
        `Handi` TINYINT NULL,
        `Jardin` TINYINT NULL,
        `Sorties` TINYINT NULL,
        `Promenades` TINYINT NULL,
        `Eveil` TINYINT NULL,
        `Musique` TINYINT NULL,
        `Art` TINYINT NULL,
        `Bilingue` TINYINT NULL,
        `Bibli` TINYINT NULL,
        `Transport` TINYINT NULL,
        `Album_photo` TINYINT NULL,
        `Photo_connecte` TINYINT NULL,
        `Resa_inst` TINYINT NOT NULL,
        `Lundi` TINYINT NULL,
        `Mardi` TINYINT NULL,
        `Mercredi` TINYINT NULL,
        `Jeudi` TINYINT NULL,
        `Vendredi` TINYINT NULL,
        `Samedi` TINYINT NULL,
        `Dimanche` TINYINT NULL,
        `Heure_min` INT NULL,
        `Heure_max` INT NULL,
        `Duree_min` INT NULL,
        `Duree_max` INT NULL,
        `Calendrier` VARCHAR(300) NULL,
        `Nb_places` INT NULL,
        `Max_places` INT NULL,
        `Max_handi` INT NULL,
        `Max_18mois` INT NULL,
        `Max_nuit` INT NULL,
        `Tarif_heure` FLOAT NULL,
        `Tarif_horaire_spec` FLOAT NULL,
        `Indemn_repas` FLOAT NULL,
        `Date_agrement` DATE NULL,
        `Doc_PMI` VARCHAR(300) NULL,
        `Avis_global` FLOAT NULL,
        `Avis_com` FLOAT NULL,
        `Avis_proprete` FLOAT NULL,
        `Avis_securite` FLOAT NULL,
        `Avis_eveil` FLOAT NULL,
        `Avis_horaires` FLOAT NULL,
        PRIMARY KEY (`Structure_id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `babydb`.`Creche`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `babydb`.`Creche` ;

CREATE TABLE
    IF NOT EXISTS `babydb`.`Creche` (
        `Creche_id` INT NOT NULL AUTO_INCREMENT,
        `SIRET` BIGINT NOT NULL,
        `Nom` VARCHAR(50) NOT NULL,
        `Type` VARCHAR(50) NOT NULL,
        `Nb_employes` INT NOT NULL,
        `Financement_PAJE` TINYINT NOT NULL,
        `Tarif_atelier` FLOAT NULL,
        `Structure_id` INT NULL,
        INDEX `Structure.num_agrement_idx` (`Structure_id` ASC) VISIBLE,
        PRIMARY KEY (`Creche_id`),
        CONSTRAINT `fk_Structure_Creche` FOREIGN KEY (`Structure_id`) REFERENCES `babydb`.`Structure` (`Structure_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `babydb`.`AssMat`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `babydb`.`AssMat` ;

CREATE TABLE
    IF NOT EXISTS `babydb`.`AssMat` (
        `Assmat_id` INT NOT NULL AUTO_INCREMENT,
        `Num_secu` BIGINT NOT NULL,
        `Num_usage` VARCHAR(45) NULL,
        `Nom_naissance` VARCHAR(45) NOT NULL,
        `Prenom` VARCHAR(45) NOT NULL,
        `Experience` VARCHAR(500) NULL,
        `Diplome` VARCHAR(45) NULL,
        `Famille` VARCHAR(500) NULL,
        `Animaux` TINYINT NULL,
        `Non_fumeur` TINYINT NULL,
        `zero_pollution` TINYINT NULL,
        `Repas` TINYINT NULL,
        `Hygiene` TINYINT NULL,
        `Indemn_entetien` FLOAT NULL,
        `Indemn_km` FLOAT NULL,
        `Tarif_heure_sup` FLOAT NULL,
        `Doc_pmi` VARCHAR(300) NULL,
        `Ass_habit_nom` VARCHAR(45) NULL,
        `Ass_habit_numero` VARCHAR(45) NULL,
        `Ass_habit_adresse` VARCHAR(500) NULL,
        `Ass_auto_nom` VARCHAR(45) NULL,
        `Ass_auto_numero` VARCHAR(45) NULL,
        `Ass_auto_adresse` VARCHAR(500) NULL,
        `Doc_identite` VARCHAR(300) NULL,
        `Doc_vitale` VARCHAR(300) NULL,
        `Doc_justif_dom` VARCHAR(300) NULL,
        `Doc_diplome` VARCHAR(300) NULL,
        `Doc_resp_civile` VARCHAR(300) NULL,
        `Doc_ass_auto` VARCHAR(300) NULL,
        `Structure_id` INT NULL,
        INDEX `Num_agrement_idx` (`Structure_id` ASC) VISIBLE,
        PRIMARY KEY (`Assmat_id`),
        CONSTRAINT `fk_Structure_Assmat` FOREIGN KEY (`Structure_id`) REFERENCES `babydb`.`Structure` (`Structure_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `babydb`.`Famille`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `babydb`.`Famille` ;

CREATE TABLE
    IF NOT EXISTS `babydb`.`Famille` (
        `Famille_id` INT NOT NULL AUTO_INCREMENT,
        `Email` VARCHAR(50) NOT NULL,
        `Password` VARCHAR(50) NOT NULL,
        `Doc_assur_parent` VARCHAR(300) NULL,
        `Doc_rib` VARCHAR(300) NULL,
        `Doc_auto_image` VARCHAR(300) NULL,
        `Doc_divorce` VARCHAR(300) NULL,
        PRIMARY KEY (`Famille_id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `babydb`.`Enfant`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `babydb`.`Enfant` ;

CREATE TABLE
    IF NOT EXISTS `babydb`.`Enfant` (
        `Enfant_id` INT NOT NULL AUTO_INCREMENT,
        `Nom` VARCHAR(45) NOT NULL,
        `Prenom` VARCHAR(45) NOT NULL,
        `Date_naissance` DATE NOT NULL,
        `Marcheur` TINYINT NULL,
        `Allergies` VARCHAR(500) NULL,
        `Doc_carnet_sante` VARCHAR(300) NULL,
        `Doc_acte_naissance` VARCHAR(300) NULL,
        `Medecin` VARCHAR(50) NULL,
        `Doc_certif_med` VARCHAR(300) NULL,
        `Doc_auto_soins` VARCHAR(300) NULL,
        `Doc_auto_sortie` VARCHAR(300) NULL,
        `Doc_livret_famille` VARCHAR(300) NULL,
        `Famille_id` INT NULL,
        PRIMARY KEY (`Enfant_id`),
        INDEX `Client_id_idx` (`Famille_id` ASC) VISIBLE,
        CONSTRAINT `fk_Famille_Enfant` FOREIGN KEY (`Famille_id`) REFERENCES `babydb`.`Famille` (`Famille_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `babydb`.`Parent`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `babydb`.`Parent` ;

CREATE TABLE
    IF NOT EXISTS `babydb`.`Parent` (
        `Parent_id` INT NOT NULL AUTO_INCREMENT,
        `Nom_naissance` VARCHAR(50) NOT NULL,
        `Nom_usage` VARCHAR(50) NULL,
        `Prenom` VARCHAR(45) NOT NULL,
        `Profession` VARCHAR(45) NULL,
        `tel_portable` BIGINT NULL,
        `email_contact` VARCHAR(50) NULL,
        `Doc_justif_revenus` VARCHAR(300) NULL,
        `Doc_decla_revenus` VARCHAR(300) NULL,
        `Doc_situation_pro` VARCHAR(300) NULL,
        `Doc_justif_dom` VARCHAR(300) NULL,
        `Num_caf` BIGINT NULL,
        `Num_secu` BIGINT NULL,
        `Famille_id` INT NULL,
        PRIMARY KEY (`Parent_id`),
        INDEX `Client_id_idx` (`Famille_id` ASC) VISIBLE,
        CONSTRAINT `fk_Famille_Parent` FOREIGN KEY (`Famille_id`) REFERENCES `babydb`.`Famille` (`Famille_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `babydb`.`Famille_Structure`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `babydb`.`Famille_Structure` ;

CREATE TABLE
    IF NOT EXISTS `babydb`.`Famille_Structure` (
        `Famille_id` INT NOT NULL,
        `Structure_id` INT NOT NULL,
        PRIMARY KEY (`Famille_id`, `Structure_id`),
        INDEX `fk_Client_has_Structure_Structure1_idx` (`Structure_id` ASC) INVISIBLE,
        CONSTRAINT `fk_Famille_has_Structure_Famille1` FOREIGN KEY (`Famille_id`) REFERENCES `babydb`.`Famille` (`Famille_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Famille_has_Structure_Structure1` FOREIGN KEY (`Structure_id`) REFERENCES `babydb`.`Structure` (`Structure_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

insert into
    structure (
        num_agrement,
        telephone,
        adresse,
        email,
        password,
        resa_inst
    )
values (
        '123456789',
        '0240498051',
        '24 rue du casterneau 44000 nantes',
        'crechebambou@orange.fr',
        'CreBam44',
        '0'
    );

insert into
    creche (
        siret,
        nom,
        type,
        nb_employes,
        financement_paje,
        tarif_atelier,
        structure_id
    )
values (
        '4902904830018',
        'Bambou',
        'crêche associative',
        '12',
        '1',
        '0',
        '1'
    );

update structure
set
    transport = '1',
    album_photo = '0',
    photo_connecte = '0',
    lundi = '1',
    mardi = '1',
    mercredi = '1',
    jeudi = '1',
    vendredi = '1',
    samedi = '0',
    dimanche = '0'
where structure_id = 1;

update structure
set
    description = 'La crèche a ouvert en janvier 2003, elle est située dans le secteur Saint-Donatien. Elle accueille les enfants de 10 semaines à 3 ans selon les besoins des parents et les possibilités d accueil de la crèche (tous les jours, quelques jours, une journée). Selon les disponibilités des périscolaires peuvent être accueillis. Les repas sont confectionnés par une restauration externe, ils sont livrés à la crèche quotidiennement, une diététicienne met à jour les menus.'
where structure_id = 1;

update structure
set
    psci = '1',
    nesting = '0',
    montessori = '0',
    handi = '1',
    jardin = '1',
    sorties = '1',
    promenades = '1',
    eveil = '1',
    musique = '1',
    art = '1',
    bilingue = '0',
    bibli = '0'
where structure_id = 1;

update structure
set
    heure_min = '450',
    heure_max = '1140',
    duree_min = '60',
    duree_max = '690',
    calendrier = '1',
    nb_places = '30',
    max_places = '30',
    max_handi = '15',
    max_18mois = '15',
    max_nuit = '0',
    tarif_heure = '2.5',
    tarif_horaire_spec = '3.1',
    indemn_repas = '5.5',
    avis_global = '5',
    avis_com = '5',
    avis_proprete = '5',
    avis_securite = '5',
    avis_eveil = '5',
    avis_horaires = '5'
where structure_id = 1;

update structure
set
    photo_structure_3 = 'https://www.caue-observatoire.fr/wp-content/uploads/2015/12/44_29e37147-5490-4d51-b406-6e182f0c4395_5.jpg'
where structure_id = '1';

update structure
set
    photo_structure_2 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.caue-observatoire.fr%2Fouvrage%2Fcreche-bambou%2F&psig=AOvVaw1sl-UuDHpWye4DviICSk9k&ust=1669996015225000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiXh4zi2PsCFQAAAAAdAAAAABAE'
where structure_id = '1';

update structure
set
    photo_structure_1 = 'https://www.caue-observatoire.fr/wp-content/uploads/2015/12/44_29e37147-5490-4d51-b406-6e182f0c4395_2.jpg'
where structure_id = '1';

update structure set date_agrement='2022-12-01' where structure_id=1;

update structure
set
    photo_profil = 'https://metropole.nantes.fr/infonantes/association/logo/23043'
where structure_id = 1;

-- -----

insert into
    structure (
        num_agrement,
        telephone,
        adresse,
        email,
        password,
        resa_inst
    )
values (
        '145623987',
        '0687905645',
        '37 rue dacoté 44000 nantes',
        'crechetest@orange.fr',
        '1234',
        '0'
    );

insert into
    creche (
        siret,
        nom,
        type,
        nb_employes,
        financement_paje,
        tarif_atelier,
        structure_id
    )
values (
        '4902904830018',
        'Test',
        'grande crêche',
        '52',
        '1',
        '0',
        '1'
    );

update structure
set
    transport = '1',
    album_photo = '0',
    photo_connecte = '0',
    lundi = '1',
    mardi = '0',
    mercredi = '1',
    jeudi = '0',
    vendredi = '1',
    samedi = '1',
    dimanche = '0'
where structure_id = 2;

update structure
set
    description = 'Bonjour, voici une petite présentation de notre crèche'
where structure_id = 2;

update structure
set
    psci = '1',
    nesting = '0',
    montessori = '0',
    handi = '1',
    jardin = '1',
    sorties = '1',
    promenades = '1',
    eveil = '1',
    musique = '1',
    art = '1',
    bilingue = '0',
    bibli = '0'
where structure_id = 2;

update structure
set
    heure_min = '450',
    heure_max = '1140',
    duree_min = '60',
    duree_max = '690',
    calendrier = '1',
    nb_places = '30',
    max_places = '30',
    max_handi = '15',
    max_18mois = '15',
    max_nuit = '0',
    tarif_heure = '8',
    tarif_horaire_spec = '3.1',
    indemn_repas = '5.5',
    avis_global = '5',
    avis_com = '4',
    avis_proprete = '3',
    avis_securite = '2',
    avis_eveil = '3',
    avis_horaires = '5'
where structure_id = 2;

update structure
set
    photo_structure_3 = 'https://www.caue-observatoire.fr/wp-content/uploads/2015/12/44_29e37147-5490-4d51-b406-6e182f0c4395_5.jpg'
where structure_id = 2;

update structure
set
    photo_structure_2 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.caue-observatoire.fr%2Fouvrage%2Fcreche-bambou%2F&psig=AOvVaw1sl-UuDHpWye4DviICSk9k&ust=1669996015225000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiXh4zi2PsCFQAAAAAdAAAAABAE'
where structure_id = 2;

update structure
set
    photo_structure_1 = 'https://www.caue-observatoire.fr/wp-content/uploads/2015/12/44_29e37147-5490-4d51-b406-6e182f0c4395_2.jpg'
where structure_id = 2;

update structure set date_agrement='2022-12-01' where structure_id=2;

update structure
set
    photo_profil = 'https://metropole.nantes.fr/infonantes/association/logo/23043'
where structure_id = 2;