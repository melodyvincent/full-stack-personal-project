UPDATE listings 
SET address = $1,
    -- lat = $2,
    -- lng = $3,
    building_type = $2,
    space_type = $3,
    num_spaces = $4,
    space_size = $5,
    about = $6,
    instructions = $7,
    price = $8
WHERE id = $9;