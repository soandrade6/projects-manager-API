-- Crear el esquema (base de datos) 'projects_manager'
CREATE SCHEMA IF NOT EXISTS projects_manager;

-- Usar el esquema 'projects_manager'
USE projects_manager;

-- Crear la tabla 'projects'
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Crear la tabla 'tasks'
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Inserciones para la tabla 'projects'
INSERT INTO projects (name, description)
VALUES 
    ('Website Redesign', 'Redesigning the company website to improve user experience.'),
    ('Marketing Campaign', 'Planning and executing a marketing campaign for product launch.'),
    ('Mobile App Development', 'Developing a mobile app for iOS and Android platforms.'),
    ('Customer Support Portal', 'Building an online portal for customer support inquiries.'),
    ('Data Analysis Project', 'Analyzing large datasets to extract valuable insights for decision-making.');

-- Inserciones para la tabla 'tasks'
INSERT INTO tasks (project_id, title, description)
VALUES 
    (1, 'Design wireframes', 'Create wireframe designs for new website layout.'),
    (1, 'Frontend development', 'Code frontend components based on wireframes.'),
    (2, 'Social media marketing', 'Plan and execute social media posts for marketing campaign.'),
    (3, 'iOS app development', 'Develop iOS version of the mobile app using Swift.'),
    (3, 'Android app development', 'Develop Android version of the mobile app using Kotlin.'),
    (4, 'User registration feature', 'Implement user registration functionality on customer support portal.'),
    (4, 'Ticket submission form', 'Design and develop a form for customers to submit support tickets.'),
    (5, 'Data cleaning', 'Clean and preprocess raw data for analysis.'),
    (5, 'Statistical analysis', 'Conduct statistical analysis on cleaned data to identify trends.'),
    (5, 'Report generation', 'Generate reports summarizing findings from data analysis.');

-- Consulta de proyectos y tareas
SELECT projects.id AS project_id, projects.name AS project_name, projects.description AS project_description, 
       tasks.id AS task_id, tasks.title AS task_title, tasks.description AS task_description, tasks.creation_date
FROM projects
INNER JOIN tasks ON projects.id = tasks.project_id;
