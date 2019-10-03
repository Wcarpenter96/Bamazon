var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    menu();
});

function menu() {
    inquirer
        .prompt([
            {
                name: "choice",
                type: "list",
                message: "Welcome Manager! What would you like to do?",
                choices: ['View Products for Sale', 'View Low Inventory',
                    'Add to Inventory', 'Add New Product']
            },
        ])
        .then(function (menu) {
            switch (menu.choice) {
                case 'View Products for Sale':
                    viewProducts();
                    break;
                case 'View Low Inventory':
                    lowInventory();
                    break;
                case 'Add to Inventory':
                    addInventory();
                    break;
                case 'Add New Product':
                    addProduct();
                    break;
            }
        });
}

function viewProducts() {
    connection.query(`SELECT * FROM products`, function (err, products) {
        if (err) throw err;
        products.forEach(product => {
            console.log(`${product.product_name}
Department: ${product.department_name}
Currently ${product.stock_quantity} in stock for ${product.price} each
---------------------------------------------------------------------`);
        });
    });
    connection.end();
}

function lowInventory() {
    connection.query(
        `SELECT * FROM products WHERE stock_quantity < 5`,
        function (err, products) {
            if (err) throw err;
            products.forEach(product => {
                console.log(`${product.product_name} only has ${product.stock_quantity} left in stock!`);
            });
        });
    connection.end();
}

function addInventory() {
    connection.query(`SELECT * FROM products`, function (err, products) {
        if (err) throw err;
        let productsArr = [];
        for (let i = 0; i < products.length; i++) {
            productsArr.push(products[i].product_name);
        }
        inquirer
            .prompt([
                {
                    name: "name",
                    type: "list",
                    message: "Select a product inventory",
                    choices: productsArr
                },
                {
                    name: "quantity",
                    type: "number",
                    message: "How many units would you like to add?",
                }
            ])
            .then(function (addProduct) {
                connection.query(`SELECT * FROM products WHERE product_name = ?`
                    , [addProduct.name], function (err, product) {
                        if (err) throw err;
                        updateStockQuantity(addProduct, product);
                        connection.end();
                    });
            });
    });
}

function updateStockQuantity(addProduct, product) {
    connection.query(`UPDATE products SET stock_quantity = ? WHERE product_name = ?`
        , [product[0].stock_quantity + addProduct.quantity, product[0].product_name]
        , function (err) {
            if (err) throw err;
            console.log(`Stock quantity of ${product[0].product_name} updated to ${product[0].stock_quantity + addProduct.quantity} units.`)
        });
}

function addProduct() {
    inquirer
        .prompt([
            {
                name: "name",
                message: "What is the name of the product you would like to list?",
            }, {
                name: "department",
                type: "list",
                message: "What department should the product belong to?",
                choices: departments
            }, {
                name: "price",
                type: "number",
                message: "What is the listed price of the item?",
            }, {
                name: "quantity",
                type: "number",
                message: "How many units of this product would you like to list?",
            },
        ])
        .then(function (product) {
            connection.query(`INSERT INTO products SET ?`,
                {
                    product_name: product.name,
                    department_name: product.department,
                    price: product.price,
                    stock_quantity: product.quantity
                },
                function (err, res) {
                    if (err) throw err;
                    console.log('Product listed!');
                    connection.end();
                });
        });
}

let departments = [`Amazon Devices`,
    `Arts, Crafts & Sewing`,
    `Automotive & Motorcycle`,
    `Baby`,
    `Baby Clothing & Accessories`,
    `Beauty`,
    `Books`,
    `Boys’ Fashion`,
    `Camera & Photo`,
    `Cell Phones & Accessories`,
    `Computers & Accessories`,
    `Costumes & Accessories`,
    `DVD & Blu-ray`,
    `Electronics`,
    `Fashion`,
    `Furniture`,
    `Girls’ Fashion`,
    `Grocery`,
    `Headphones`,
    `Health & Personal Care`,
    `Home`,
    `Home Audio`,
    `Home Improvement`,
    `Industrial & Scientific`,
    `Kindle`,
    `Kindle eBooks`,
    `Kitchen`,
    `Luggage Travel Gear`,
    `Magazines`,
    `Major Appliances`,
    `Men's Shoes`,
    `Men's Watches`,
    `Men’s Clothing`,
    `Men’s Fashion`,
    `Musical Instruments`,
    `Office Electronics & Supplies`,
    `Patio, Lawn & Garden`,
    `PC & Video Games`,
    `Pet Supplies`,
    `Power & Hand Tools`,
    `Software`,
    `Sports & Outdoors`,
    `Television & Video`,
    `Toys & Games`,
    `Women's Shoes`,
    `Women's Watches`,
    `Women’s Clothing`,
    `Women’s Fashion`,
    `Women’s Jewelry`,
    `Everything Else`]