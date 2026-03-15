CREATE TABLE Users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password BYTEA NOT NULL
);

CREATE TYPE typestatus AS ENUM ('pending', 'in_progress', 'completed');
CREATE TABLE Task (
    id UUID PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100),
    status typestatus,
    userId UUID NOT NULL,
    CONSTRAINT fk_User FOREIGN KEY (id) REFERENCES Users(id)
);

