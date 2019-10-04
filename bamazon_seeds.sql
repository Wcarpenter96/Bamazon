USE bamazon;
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
USE bamazon;
INSERT INTO
  departments (department_name) value ("Amazon Devices"),
  ("Arts Crafts & Sewing"),
  ("Automotive & Motorcycle"),
  ("Baby"),
  ("Baby Clothing & Accessories"),
  ("Beauty"),
  ("Books"),
  ("Boys’ Fashion"),
  ("Camera & Photo"),
  ("Cell Phones & Accessories"),
  ("Computers & Accessories"),
  ("Costumes & Accessories"),
  ("DVD & Blu-ray"),
  ("Electronics"),
  ("Fashion"),
  ("Furniture"),
  ("Girls’ Fashion"),
  ("Grocery"),
  ("Headphones"),
  ("Health & Personal Care"),
  ("Home"),
  ("Home Audio"),
  ("Home Improvement"),
  ("Industrial & Scientific"),
  ("Kindle"),
  ("Kindle eBooks"),
  ("Kitchen"),
  ("Luggage Travel Gear"),
  ("Magazines"),
  ("Major Appliances"),
  ("Men's Shoes"),
  ("Men's Watches"),
  ("Men’s Clothing"),
  ("Men’s Fashion"),
  ("Musical Instruments"),
  ("Office Electronics & Supplies"),
  ("Patio, Lawn & Garden"),
  ("PC & Video Games"),
  ("Pet Supplies"),
  ("Power & Hand Tools"),
  ("Software"),
  ("Sports & Outdoors"),
  ("Television & Video"),
  ("Toys & Games"),
  ("Women's Shoes"),
  ("Women's Watches"),
  ("Women’s Clothing"),
  ("Women’s Fashion"),
  ("Women’s Jewelry"),
  ("Everything Else");
USE bamazon;
SELECT
  *
FROM
  departments;