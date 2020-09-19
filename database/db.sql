--creating the database
CREATE DATABASE crudnodejsmysql;


--using the database
use crudnodejsmysql;

--creating a table
CREATE TABLE customer (
    id INT(6) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100),
    phone VARCHAR(15),
    
);

--to chow all tables
--SHOW TABLES;

--to describe the table
--describe customer;