CREATE DATABASE ecoleta;

CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    image TEXT,
    name text,
    address TEXT,
    address2 TEXT,
    state TEXT,
    city TEXT,
    items TEXT   
);