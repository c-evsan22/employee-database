const mysql = require(`mysql12`);

require(`dotenv`).config();

const connection = mysql.createConnection({
    host: `localhost`,
    port: 3001,
    user: `root`,
    password: "password",
    database: `employees`
});
module.exports = connection;