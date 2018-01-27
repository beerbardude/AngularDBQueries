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

ALTER TABLE POLICY ADD FOREIGN KEY (customerId) REFERENCES Customer(id);

        insert into customer (lastname, firstname, street, housenumber, postcode, town, country, language)
        values ('McMillan',
        'Frank',
        'Pacificroad',
        '23',
        34502,
        'Petersbourgh',
        'JP',
        'EN' );

        insert into customer (lastname, firstname, street, housenumber, postcode, town, country, language)
        values ('Yoshimoto',
        'Hiro',
        'Metroplace',
        '5a',
        2322,
        'Nakamoto',
        'US',
        'EN');

        insert into customer (lastname, firstname, street, housenumber, postcode, town, country, language)
        values ('Weber',
        'Fritz',
        'Willisauerstrasse',
        '17',
        2340,
        'Vevey',
        'CH',
        'FR');

        insert into customer (lastname, firstname, street, housenumber, postcode, town, country, language)
        values('Pompidou',
        'Jean',
        'Rue de la Lac',
        '391',
        46821,
        'Fermont',
        'FR',
        'FR');

        insert into customer (lastname, firstname, street, housenumber, postcode, town, country, language)
        values('Badupi',
        'Flavio',
        'Via Malotti',
        '95',
        58340,
        'Meran',
        'IT',
        'DE');

  insert into policy (policynumber, customerid, startdate, enddate, premium, currency)
  values ('POL-0001-CH', 1, date('2004, 01, 21'), date('2029, 01, 21'), 2000001, 'CHF');


        insert into policy (policynumber, customerid, startdate, enddate, premium, currency)
        values ('POL-0002-CH', 4, date('2002, 06, 21'), date('2033, 03, 21'), 20340001, 'CHF');

        insert into policy (policynumber, customerid, startdate, enddate, premium, currency)
        values ('POL-0003-CH', 4, date('1999, 02, 12'), date('2045, 03, 09'), 4340001, 'CHF');

        insert into policy (policynumber, customerid, startdate, enddate, premium, currency)
        values ('POL-0004-CH', 2, date('2012, 11, 05'), date('2025, 01, 03'), 50330001, 'CHF');

        insert into policy (policynumber, customerid, startdate, enddate, premium, currency)
        values ('POL-0005-CH', 3, date('2008, 04, 23'), date('2031, 09, 15'), 32340001, 'CHF');

        insert into policy (policynumber, customerid, startdate, enddate, premium, currency)
        values ('POL-0006-CH', 5, date('2013, 02, 17'), date('2036, 12, 12'), 8672340001, 'CHF');
