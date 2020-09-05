let Promise = require("bluebird");
let mysql = require("mysql");
let config = require("./config");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let forgetPass = async (input) => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    sql = "UPDATE register SET password = ? where email = ? ";
    let result = await connection.queryAsync(sql, [input.password, input.email]);

    await connection.endAsync();
    return result;
}

module.exports = { forgetPass };