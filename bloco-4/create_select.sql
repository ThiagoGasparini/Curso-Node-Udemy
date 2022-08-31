CREATE DATABASE sistemadecadastro;

USE sistemadecadastro;

CREATE TABLE usuarios(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    email VARCHAR(100),
    idade INT 
);

INSERT INTO usuarios(nome, email, idade)
VALUES
	('Thiago Gasparini', 'thiago_gasparini@hotmail.com', 28),
    ('Vitor Rodrigo', 'victor_rodrigo@hotmail.com', 28);


SELECT * FROM sistemadecadastro.usuarios;
SELECT * FROM sistemadecadastro.usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE nome = "Vitor Rodrigo";
SELECT * FROM usuarios WHERE idade > 18;
SELECT * FROM usuarios WHERE idade < 18;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM usuarios WHERE idade < 18;

UPDATE usuarios SET idade = 29 WHERE nome = "Thiago gasparini";
