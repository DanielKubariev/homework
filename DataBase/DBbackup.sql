DROP DATABASE IF EXISTS db_streets;
CREATE DATABASE db_streets DEFAULT CHARACTER SET utf8;

USE db_streets;

DROP TABLE IF EXISTS street;
CREATE TABLE street(
id INT AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(90) NOT NULL
) CHARACTER SET utf8;

DROP TABLE IF EXISTS person;
CREATE TABLE person(
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(90) NOT NULL,
last_name VARCHAR(90) NOT NULL,
age TINYINT UNSIGNED NOT NULL,
id_street INT NULL,
CONSTRAINT fk_street FOREIGN KEY (id_street) REFERENCES street (id) ON DELETE CASCADE ON UPDATE CASCADE
) CHARACTER SET utf8;

SET CHARACTER SET utf8;

/*
DELETE FROM person;
DELETE FROM street;
*/

INSERT INTO street VALUES (DEFAULT, 'Академика Павлова');
INSERT INTO street VALUES (DEFAULT, 'Барабашова');
INSERT INTO street VALUES (DEFAULT, 'Героев Труда');
INSERT INTO street VALUES (DEFAULT, 'Блюхера');
INSERT INTO street VALUES (DEFAULT, 'Ярослава Мудрого');
INSERT INTO street VALUES (DEFAULT, 'Пушкинския');
INSERT INTO street VALUES (DEFAULT, 'Киевская');
INSERT INTO street VALUES (DEFAULT, 'Петровского');
INSERT INTO street VALUES (DEFAULT, 'Карпова');
INSERT INTO street VALUES (DEFAULT, 'проспект Правды');
INSERT INTO street VALUES (DEFAULT, 'ШЕСТЬЇ');


INSERT INTO person VALUES(DEFAULT, 'Антон', 'Кобзарь', 25, NULL);
INSERT INTO person VALUES(DEFAULT, 'Тарас', 'Шевченко', 55, NULL);
INSERT INTO person VALUES(DEFAULT, 'Серега', 'Пушкин', 35, 9);
INSERT INTO person VALUES(DEFAULT, 'Жора', 'Пчёла', 23, 1);
INSERT INTO person VALUES(DEFAULT, 'Станислав', 'Убиватель', 35, 5);
INSERT INTO person VALUES(DEFAULT, 'Николай', 'Басков', 24, 4);
INSERT INTO person VALUES(DEFAULT, 'Киря', 'Бобов', 11, 3);
INSERT INTO person VALUES(DEFAULT, 'Дмитрий', 'Хобит', 76, 6);
INSERT INTO person VALUES(DEFAULT, 'Омар', 'Хаям', 23, 5);
INSERT INTO person VALUES(DEFAULT, 'Леся', 'Украинка', 15, 3);
INSERT INTO person VALUES(DEFAULT, 'Мария', 'Ткаченко', 9, 1);
INSERT INTO person VALUES(DEFAULT, 'Анастасия', 'Кипр', 121, 2);
INSERT INTO person VALUES(DEFAULT, 'Владилен', 'Минин', 2, 8);
INSERT INTO person VALUES(DEFAULT, 'Георгий', 'Дударь', 6, 9);
INSERT INTO person VALUES(DEFAULT, 'Микро', 'Челик', 85, 8);
INSERT INTO person VALUES(DEFAULT, 'Виталий', 'Цаль', 16, 2);
INSERT INTO person VALUES(DEFAULT, 'Богдан', 'Дядя', 29, 3);
INSERT INTO person VALUES(DEFAULT, 'Саша', 'Камень', 31, 4);
INSERT INTO person VALUES(DEFAULT, 'Егор', 'Крид', 11, 5);
INSERT INTO person VALUES(DEFAULT, 'Ани', 'Лорак', 5, 7);
INSERT INTO person VALUES(DEFAULT, 'Дочь', 'Лорак', 4, 4);
INSERT INTO person VALUES(DEFAULT, 'Кек', 'Король', 16, 10);
INSERT INTO person VALUES(DEFAULT, 'Абоба', 'Абобас', 4, 10);
INSERT INTO person VALUES(DEFAULT, 'Жаба', 'Ас', 44, 10);

