# Bamazon

An Amazon-like storefront application made with MySQL and Node.js

[Click here](https://drive.google.com/file/d/1_-6qWgYRzN6cqhDZl2wUjck7m5xKlV9g/view) for a screencast that walks through the app.

---

Bamazon is tiered by three levels of accessibility:

   * `Customer`

   * `Manager`

   * `Supervisor`

Each level contains unique lists and commands that will grant the user certain priviliges in modifying the MySQL database. 

---

### **CUSTOMER**

To run Bamazon at the Customer level, navigate to `bamazonCustomer.js` and type the following into your console:

```
node bamazonCustomer.js
```

The Customer is prompted to pick an item from the `products` table and then specify how many units of the item they would like. The purchase is successful so long as the user does not request more units than are in stock. 

### **MANAGER**

To run Bamazon at the Manager level, navigate to `bamazonManager.js` and type the following into your console:

```
node bamazonManager.js
```

The Manager can choose from four different commands:

 1. *View Products for Sale*: displays all listed product data contained in `products` table

 2. *View Low Inventory*: displays all products that have a `stock_quantity` lower than 5. 

 3. *Add to Inventory*: prompts user to select a product to add stock to, then how many units the user would like to add. 

 4. *Add New Product*: prompts user to add a product (name, department, and price) to the `products` table. 

 ### **Supervisor**

To run Bamazon at the Supervisor level, navigate to `bamazonSupervisor.js` and type the following into your console:

```
node bamazonSupervisor.js
```

The Supervisor can choose from four different commands:

 1. *View Product Sales by Department *:

 2. *Create New Department*



