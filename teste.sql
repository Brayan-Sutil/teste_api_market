ALTER TABLE valuers
ADD CONSTRAINT fk_value_products
FOREIGN KEY (id_product)
REFERENCES products(id)
;
