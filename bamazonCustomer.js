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
