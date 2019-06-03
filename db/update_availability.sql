UPDATE availabilities
SET Monday = $1,
    Tues = $2, 
    Wednesday = $3, 
    Thursday = $4, 
    Friday = $5,
    Saturday = $6, 
    Sunday = $7
WHERE listings_id = $8;