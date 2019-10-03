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
        console.log(productsArr);
        inquirer
            .prompt([
                {
                    name: "product",
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
            .then(function (bought) {
                connection.query(`SELECT * FROM products WHERE product_name = ?`
                    , [bought.product], function (err, item) {
                        if (err) throw err;
                        if (item[0].stock_quantity >= bought.quantity)
                            updateQuantity(item[0], bought);
                        else console.log(`Insufficient quantity!`);
                        connection.end();
                    });
            });
    });
}