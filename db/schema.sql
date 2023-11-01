ALTER USER 'root'@'localhost' 
IDENTIFIED WITH mysql_native_password BY 'password';

DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL
);

CREATE  TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT
    title VARCHAR(30) NOT NULL,
    SALARY DECIMAL(10,20)NOT NULL,
    department_id INTEGER
);

CREATE TABLE employee(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
);