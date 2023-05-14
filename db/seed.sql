INSERT INTO department (id, name)
VALUES (1,"Sales"),
       (2,"Legal"),
       (3,"Engineering"),
       (4,"Finance"),
       (5,"Marketing");

INSERT INTO role (id, title, salary, department_id)
VALUES (1,"Sales Lead", 80000, 1),
       (2,"Sales Person", 60000, 1),
       (3,"Legal Lead", 85000, 2),
       (4,"Legal Associate", 60000, 2),
       (5,"Engineering Associate", 65000, 3),
       (6,"Engineering Lead", 85000, 3),
       (7,"Finance Lead", 85000, 4),
       (8,"Finance Associate", 75000, 4),
       (9,"Marketing Lead", 75000, 5),
       (10,"Marketing Associate", 55000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1,"Jo-Anne", "Whitaker",1, NULL),
       (2,"Braith", "Spooner",2,1),
       (3,"Velvet", "Alden",3, NULL),
       (4,"Estelle", "Jeanes",4,3), 
       (5,"Darian", "Newport",5, NULL), 
       (6,"Drina", "Alberts",6,5),
       (7,"Levi", "Wheelock",7, NULL),
       (8,"Cara", "Strickland",8,7), 
       (9,"Jaycob", "Bardsley",9, NULL), 
       (10,"Bethany", "Elliston",10,9);

        
        
  
 
 
 
 
 