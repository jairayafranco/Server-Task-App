CREATE DATABASE IF NOT EXISTS `tasksdb`;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO tasks(title, description) VALUES
    ('Task 1', 'Description 1'),
    ('Task 2', 'Description 2');
