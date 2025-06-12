-- Kreiranje baze ako ne postoji
CREATE DATABASE IF NOT EXISTS kbazon DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE kbazon;

-- Tablica: ARTIST
CREATE TABLE IF NOT EXISTS Artist (
    ID_Umjetnika INT(4) NOT NULL,
    Mail_Umjetnika VARCHAR(50) NOT NULL,
    Lozinka_Umjetnika VARCHAR(30) NOT NULL,
    Ime_Umjetnika VARCHAR(30) NOT NULL,
    Prezime_Umjetnika VARCHAR(30) NOT NULL,
    Vrsta_umjetnosti TEXT,
    PRIMARY KEY (ID_Umjetnika)
);

-- Tablica: ART
CREATE TABLE IF NOT EXISTS Art (
    ID_Crteza INT(4) NOT NULL,
    ID_Umjetnika INT(4) NOT NULL,
    Naslov_crteza VARCHAR(20) NOT NULL,
    Opis_crteza TEXT,
    Datum_objave DATE NOT NULL,
    slika VARCHAR(255),
    PRIMARY KEY (ID_Crteza),
    FOREIGN KEY (ID_Umjetnika) REFERENCES Artist(ID_Umjetnika)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

-- Tablica: FAVORITES
CREATE TABLE IF NOT EXISTS Favorites (
    ID_Favorita INT(4) NOT NULL AUTO_INCREMENT,
    ID_Umjetnika INT(4) NOT NULL,
    ID_Crteza INT(4) NOT NULL,
    Datum_dodavanja DATE NOT NULL,
    PRIMARY KEY (ID_Favorita),
    FOREIGN KEY (ID_Umjetnika) REFERENCES Artist(ID_Umjetnika)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (ID_Crteza) REFERENCES Art(ID_Crteza)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Indeks za poboljšanje performansi pretraživanja po ID_Umjetnika u tablici Art
CREATE INDEX IDX_umjetnik_art ON Art (ID_Umjetnika);
