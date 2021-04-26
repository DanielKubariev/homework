-- SELECT *  FROM person WHERE age < 18 AND id_street = 10;
SELECT * FROM person JOIN street  WHERE person.id_street = street.id AND age < 18 AND street.name LIKE 'проспект Правды';