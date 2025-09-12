-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);
-- @block
INSERT INTO users (email, bio, country)
VALUES (
    'voiciun.email@gmail.com',
    'ceci est un test',
    'FR'
)