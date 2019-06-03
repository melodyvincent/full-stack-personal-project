SELECT * FROM listings
JOIN features ON features.listing_id = listings.listing_id
JOIN pictures ON pictures.listing_id = listings.id 
JOIN availabilities ON availabilities.listing_id = listings.id
JOIN payment ON payments.listing_id = listings.id;