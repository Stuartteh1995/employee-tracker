Employee Database Tracker.

This application provides users with the capability to explore the company's Departments, Roles, and Employees. Additionally, users can effortlessly add and update Employee data within the system. It's important to note that this application relies on Inquirer and Mysql2, and therefore users need to ensure its installation prior to usage. Furthermore, the application utilizes MySQL to host the database. For security purposes, the password to access the local MySQL has been omitted, prompting users to enter their own password for proper utilization of the application.

How to use:-
1) open connection.js and enter users password to asscess mysql.
2) right click on index.js and click intergrated terminal type "npm install".
3) in db folder right click on schema.sql and click on intergrated terminal.
4) type "mysql -u root -p" ( if user does not have password type "mysql -u root").
5) enter password.
6) Once in mysql type " source schema.sql;" and "source seed.sql;".
7) Exit mysql by typing "exit;".
8) type cd .. to get out of db folder.
9) type node index.js to run application and follow the prompts. 

Walk Though Video: https://drive.google.com/file/d/1fvprevw6xmo8Z-amRI53cTVvVkeyMjfO/view


