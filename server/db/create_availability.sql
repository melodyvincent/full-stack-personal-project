INSERT INTO availabilities (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, listing_id)
VALUES($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING * ;