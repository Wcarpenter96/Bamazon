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
USE bamazon;
ALTER TABLE
  products
ADD
  product_sales DECIMAL(10, 2);
USE bamazon;
ALTER TABLE
  Persons ALTER product_sales
SET
  DEFAULT '0';
USE bamazon;
CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(45) NULL,
    over_head_costs DECIMAL(10, 2) DEFAULT 1000.00,
    PRIMARY KEY (department_id)
  );
USE bamazon;
SELECT * FROM products;