-- check if there is a database with thr smae name and delete it if it does
DROP DATABASE IF EXISTS employee_tracker_db;
-- create the database
CREATE DATABASE employee_tracker_db;
--opens the database
USE employee_tracker_db;

--create the table
CREATE TABLE department (
  id INT  PRIMARY KEY,
  name VARCHAR(30)
);

--create the table
CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  department_id INT,
  salary DECIMAL,
  --links to department to get the id for department
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

--create the table
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  --links to role table to get the id role
  FOREIGN KEY (role_id)
    REFERENCES role(id),
  --links to employee to reference manager name 
  FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);

