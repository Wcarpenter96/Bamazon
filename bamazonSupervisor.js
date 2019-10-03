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
                message: "Welcome Supervisor! What would you like to do?",
                choices: ['View Product Sales by Department', 'Create New Department']
            },
        ])
        .then(function (menu) {
            if (menu.choice === 'View Product Sales by Department') viewSales();
            else newDepartment();
        });
};

function viewSales() {
    console.log('sales');
    connection.end();
};

function newDepartment() {
    console.log('dep');
    connection.end();
};