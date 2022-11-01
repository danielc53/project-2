-- DROP DATABASE
--DROP DATABASE IF EXISTS gamers_db;

-- CREATE DATABASE
CREATE DATABASE gamers_db;

USE gamers_db;

CREATE TABLE games (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    gameTitle VARCHAR(64) NOT NULL,
    summary VARCHAR(255),
    onlineStatus BOOLEAN,
    singlePlayer BOOLEAN
);

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50),
    userName VARCHAR(50) NOT NULL,
    passwordHash VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL,
    bio VARCHAR(300) NOT NUll,
    game1 INT,
    game2 INT,
    game3 INT,
    game4 INT,
    FOREIGN KEY (game1) REFERENCES games(id),
    FOREIGN KEY (game2) REFERENCES games(id),
    FOREIGN KEY (game3) REFERENCES games(id),
    FOREIGN KEY (game4) REFERENCES games(id)
);

CREATE TABLE game_posts (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    gameID INT,
    userID INT,
    FOREIGN KEY (gameID) REFERENCES games(id),
    FOREIGN KEY (userID) REFERENCES users(id),
    messageContent VARCHAR(255) NOT NULL,
    createdAT timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);