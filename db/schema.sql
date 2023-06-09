
DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;


CREATE TABLE department (
  id INT  PRIMARY KEY,
  name VARCHAR(30)
);


CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  department_id INT,
  salary DECIMAL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);


CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
    REFERENCES role(id), 
  FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);

