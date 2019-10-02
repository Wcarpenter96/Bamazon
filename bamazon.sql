DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10, 2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);
INSERT INTO
  products (
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  (
    "COMISO Bluetooth Speakers",
    "Home Audio",
    30.00,
    10
  ),
  (
    "Exerscribe Massage Gun",
    "Health & Personal Care",
    135.99,
    10
  ),
  (
    "Elmer's Color Slime Kit",
    "Arts, Crafts & Sewing",
    8.89,
    10
  ),
  (
    "Olympus OM-D E-M10 Mark III Camera with Lens",
    "Camera & Photo",
    799.99,
    10
  ),
  (
    "Zulay Milk Frother",
    "Kitchen",
    12.74,
    10
  ),
  (
    "GERYON Vacuum Sealer Machine",
    "Kitchen",
    41.24,
    10
  ),
  (
    "GearTOP Tactical Balaclava",
    "Costumes & Accessories",
    11.79,
    10

  ),
  (
    "Wahl Puppy Shampoo",
    "Pet Supplies",
    6.99,
    10

  ),
  (
    "Amazon Cloud Cam",
    "Camera & Photo",
    89.99,
    10

  ),
  (
    "Record Player Turntable",
    "Home Audio",
    127.49,
    10

  ),
  (
    "Spider-Man Deluxe Mask",
    "Costumes & Accessories",
    7.64,
    10

  );
SELECT
  *
FROM
  products;