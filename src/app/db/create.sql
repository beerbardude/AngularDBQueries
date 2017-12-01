DROP TABLE IF EXISTS Customer, Policy, Users;

CREATE TABLE Customer (
id SERIAL PRIMARY KEY,
lastname VARCHAR(50) NOT NULL ,
firstname VARCHAR(50) NOT NULL,
street VARCHAR(50) NOT NULL,
housenumber VARCHAR(5) NOT NULL,
postcode int,
town VARCHAR(50) NOT NULL,
country VARCHAR(15) NOT NULL,
language VARCHAR(2) NOT NULL    
);

CREATE TABLE Policy (
id SERIAL PRIMARY KEY,
policynumber VARCHAR(50) NOT NULL UNIQUE,
customerId int, 
startdate date,
enddate date,
premium decimal,
currency VARCHAR(10) NOT NULL
);

CREATE TABLE Users (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
pass VARCHAR(30) NOT NULL    
);


ALTER TABLE POLICY ADD FOREIGN KEY (customerId) REFERENCES Customer(id);