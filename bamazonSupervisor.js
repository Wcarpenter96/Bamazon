const mysql = require("mysql");
const inquirer = require("inquirer");
const { table } = require("table");

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
    let data = [];
    let header = ['department_id',
        'department_name',
        'over_head_costs',
        'product_sales',
        'total_profit'];
    data.push(header);
    connection.query(`SELECT * FROM departments`, function (err, deps) {
        if (err) throw err;
        let i = 0;
        createRow();
        function createRow() {
            connection.query(`SELECT * FROM products WHERE department_name = ?`,
                deps[i].department_name,
                function (err, products) {
                    let sales = 0;
                    if (products.length > 0) {
                        for (let j = 0; j < products.length; j++) {
                            sales = sales + products[j].product_sales;
                        }
                    }
                    let row = [deps[i].department_id,
                    deps[i].department_name,
                    deps[i].over_head_costs,
                        sales,
                    sales - deps[i].over_head_costs];
                    data.push(row);
                    i++;
                    if (data.length <= deps.length) createRow();
                    else {
                        console.log(table(data));
                        connection.end();
                    }
                });
        }
    });
};

function newDepartment() {
    inquirer
        .prompt([
            {
                name: "name",
                message: "What is the name of the the department?",
            },
            {
                name: "cost",
                type: "number",
                message: "What is the overhead cost of this department?",
            }
        ])
        .then(function (dep) {
            connection.query(
                "INSERT INTO departments SET ?",
                {
                    department_name: dep.name,
                    over_head_costs: dep.cost,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(`New ${dep.name} department created with an overhead cost of ${dep.cost}`)
                });
        });
};