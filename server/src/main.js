const Promise = require("bluebird");    //used to make our prog async
const mysql = require("mysql");
const cors = require("cors");         //used for cross platform 
const express = require("express");     //used to make url

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const app = express();
app.use(cors());
app.use(express.json()); // BODY :: RAW :: JSON

let reguser = require("./reg.user");
let forgetpassword = require("./forget.password");

app.post("/addreguser", async (req, res) => {

    try {
        const input = req.body;
        await reguser.regUser(input);

        res.json({ message: "success" });
    }
    catch (err) {
        res.json({ message: "failure" });
    }

});

app.post("/authuser", async (req, res) => {

    try {
        const input = req.body;
        await reguser.authenticateUser(input);

        res.json({ message: "success" });
    }
    catch (err) {
        res.json({ message: "failure" });
    }

});

app.post("/userforgetpass", async (req, res) => {
    try {
        const input = req.body;
        await forgetpassword.forgetPass(input);

        res.json({ message: "success" });
    }
    catch (err) {
        res.json({ message: "failure" });
    }
})
app.listen(3001);
