const Promise = require("bluebird");
const mysql = require("mysql");
const config = require("./config");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let regUser = async (input) => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    sql = "insert into register(fname,lname,phoneNo,password,email) values(?,?,?,?,?)";
    let result = await connection.queryAsync(sql, [input.fname, input.lname, input.phoneNo, input.password, input.email]);

    await connection.endAsync();

    return result;
};

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    sql = "SELECT * FROM REGISTER WHERE EMAIL=? AND PASSWORD=? ";
    let results = await connection.queryAsync(sql, [input.email,input.password]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};


module.exports = { regUser, authenticateUser };