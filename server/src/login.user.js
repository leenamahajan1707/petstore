const Promise = require("bluebird");
const mysql = require("mysql");
const config = require("./config");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let logUser = async (input) => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    sql = "insert into login(email,password) values(?,?)";
    let result = await connection.queryAsync(sql, [input.email, input.password]);

    await connection.endAsync();

    return result;
};

module.exports = { logUser };