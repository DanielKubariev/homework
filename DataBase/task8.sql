SELECT name, COUNT(person.id) FROM street JOIN person WHERE street.id = person.id_street GROUP BY street.name ORDER BY name ASC;