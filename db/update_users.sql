UPDATE users
SET username = $1,
    auth_id = $2,
    user_pic =$3,
    email = $4
WHERE user_id = $5;