INSERT INTO department (department_name)
VALUES 
('Management'),
('Front of House'),
('Back of House');

INSERT INTO manager (first_name, last_name)
VALUES
('Gil', 'Bry'),
('Co', 'Knee'),
('Gar', 'Cris');


INSERT INTO job (title, salary, department_id)
VALUES 
('General Manager', '20', '1'),
('Assisant Manager', '18' '1'),
('Captain', '15', '2'),
('Server', '12', '2'),
('Chef', '20', '3'),
('Sous Chef', '18', '3'),
('Cook', '15', '3');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Co', 'Knee', '1', '1'),
('Bur', 'Jut', '1', '1'),
('Ani', 'Ric', '2', '2'),
('Zin', 'Sei', '2', '2'),
('Lolo', 'Frek', '2', '2'),
('Effe', 'Rus', '2', '2'),
('Thand', 'Ong', '2' '2'),
('Vid', 'Arn', '2', '2'),
('Ela', 'Gor', '2', '2'),
('Gar', 'Cris', '3', '1'),
('Teo', 'Tef', '3', '3'),
('Na', 'Imis', '3', '3'),
('Ave', 'Mey', '3', '3'),
('Deg', 'Lung', '3', '3'),
('Dam', 'Egs', '3', '3');
('Arc', 'Uly', '3', '3'),
('Ick', 'Mel', '3', '3');