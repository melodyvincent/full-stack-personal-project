-- SELECT 
-- payments.cash,
-- payments.credit,
-- payments.venmo,
-- payments.pay_pal,
-- payments.apple_pay,
-- availabilities.Monday,
-- availabilities.Tuesday,
-- availabilities.Wednesday,
-- availabilities.Thursday,
-- availabilities.Friday,
-- availabilities.Saturday,
-- availabilities.Sunday,
-- pictures.pic_one,
-- pictures.pic_two,
-- pictures.pic_three,
-- pictures.pic_four,
-- features.covered,
-- features.lit,
-- features.charging,
-- features.camera,
-- features.fenced,
-- features.guarded,
-- listings.id FROM users
-- JOIN listings ON listings.host_id = users.id
-- JOIN features ON features.listing_id = listings.id 
-- JOIN pictures ON pictures.listing_id  = listings.id 
-- JOIN availabilities ON availabilities.listing_id = listings.id 
-- JOIN payments ON payments.listing_id = listings.id 
-- WHERE users.id = $1;

select features.covered,
    features.lit,
    features.charging,
    features.camera,
    features.fenced,
    features.guarded,
    listings.address,
    listings.building_type,
    listings.space_type,
    listings.num_spaces,
    listings.space_size,
    listings.about,
    listings.instructions,
    listings.price,
    listings.id,
    listings.host_id
from features
    join listings on features.listing_id = listings.id
where listings.host_id = $1;