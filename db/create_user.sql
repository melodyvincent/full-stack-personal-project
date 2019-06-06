INSERT INTO users (username, google_id, user_pic, email)
VALUES ($1, $2, $3, $4)
RETURNING *;