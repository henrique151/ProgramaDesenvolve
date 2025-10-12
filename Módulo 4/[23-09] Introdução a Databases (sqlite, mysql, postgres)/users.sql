CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCRMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO users (name, email)
VALUES ('Ana Silva', 'ana@email.com');

INSERT INTO users (name, email) VALUES
('Ana Silva', 'ana@email.com'),
('Julia Costa', 'julia@email.com'),
('Pedro Lima', 'pedro@email.com'),

SELECT * FROM users;

SELECT name, email FROM users;

SELECT * FROM users
WHERE email LIKE '%gmail.com';

SELECT * FROM users
ORDER BY name ASC;

UPDATE users
SET email = 'ana.silva@email.com'
WHERE id = 1;

UPDATE
SET name = 'Ana Silva Santos',
    email = 'ana.santos@email.com'
WHERE id = 1;

DELETE FROM users WHERE id = 5;

DELETE FROM users;

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCRMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    FOREIGN KEY (author_id) REFERENCES users(id)
)

SELECT 
    posts.title,
    posts.content,
    users.name as author
FROM posts
JOIN users ON posts.author_id = users.id;