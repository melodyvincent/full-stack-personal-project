INSERT INTO listings (address, building_type, space_type, num_spaces, space_size, about, instructions, price, host_id )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
returning *;