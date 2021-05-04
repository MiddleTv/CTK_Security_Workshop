const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'ctkusr',
    host: 'localhost',
    database: 'the_db',
    password: 'ctkpw',
    port: 5432
});

function add_user(user) {
    console.log("adding: " + user["username"])
    return new Promise(resolve => {
        const qstring = "INSERT INTO accounts (username, password) values ($1,$2) RETURNING id";
        const values = [user["username"], user["password"]];
        pool.query(qstring, values, (error, result) => {
            if (error) {
                throw error
            }
            console.log(result.rows[0]);
            resolve(result.rows[0]);
        });
    })
}

module.exports.add_user = add_user;

function check_exists(username) {
    return new Promise(resolve => {
        const qstring = "SELECT username FROM accounts WHERE username = $1";
        const value = [username];
        pool.query(qstring, value, (error, result) => {
            if (error) {
                throw error
            }
            resolve(result.rows.length > 0);
        });
    })
}

module.exports.check_exists = check_exists;