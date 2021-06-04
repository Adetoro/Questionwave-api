--CREATE DATABASE questionwave;

-- \c questionwave 

CREATE TABLE questiondetails
(
    question_id SERIAL UNIQUE ,
    linkid BIGINT NOT NULL,
    question TEXT,
    upvotes INTEGER DEFAULT 0,
    asked_at TIMESTAMP
);

CREATE TABLE identify
(
    id SERIAL UNIQUE,
    linkid  BIGINT  NOT NULL PRIMARY KEY,
    title TEXT,
    created TIMESTAMP ,
    count INTEGER DEFAULT 0
);