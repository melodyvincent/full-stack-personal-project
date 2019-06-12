SELECT * FROM users
JOIN listings ON listings.host_id = users.id
JOIN features ON features.listing_id = listings.id 
JOIN pictures ON pictures.listing_id  = listings.id 
JOIN availabilities ON availabilities.listing_id = listings.id 
JOIN payments ON payments.listing_id = listings.id 
WHERE users.id = $1;