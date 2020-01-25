update shelfie
set image_url = ${image_url},
    product_name = ${product_name},
    price = ${price},
where product_id = ${id};
 