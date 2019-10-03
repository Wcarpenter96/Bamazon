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
    selectProduct();
});

function selectProduct() {
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
                    message: "What product would you like to buy?",
                    choices: productsArr
                },
                {
                    name: "quantity",
                    type: "number",
                    message: "How many units would you like to buy?",
                }
            ])
            .then(function (soldProduct) {
                connection.query(`SELECT * FROM products WHERE product_name = ?`
                    , [soldProduct.name], function (err, product) {
                        if (err) throw err;
                        if (product[0].stock_quantity >= soldProduct.quantity)
                            updateQuantity(product[0], soldProduct);
                        else console.log(`Insufficient quantity!`);
                        connection.end();
                    });
            });
    });
}

function updateQuantity(product, soldProduct) {
    connection.query(`UPDATE products SET stock_quantity = ? WHERE product_name = ?`
        , [product.stock_quantity - soldProduct.quantity, product.name]
        , function (err) {
            if (err) throw err;
            console.log(soldProduct.quantity * product.price)
        });
}
