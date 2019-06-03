SELECT * FROM listings
JOIN features ON features.listing_id = listings.id 
JOIN pictures ON pictures.listing_id  = listing.id 
JOIN availaibilities ON availaibilities.listing_id = listings.id 
JOIN payments ON payments.listing_id = listings.id 
WHERE host_id = $1;