//---------------------------đđŦ 'Zer0Power đđŦ---------------------------//
//Packages

const mongoose = require("./src/dbConnection");
const players = require("./src/schemas/playerSchema");

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const Routes = require("./routes/Routes");

const app = express();
//---------------------------đđŦ 'Zer0Power đđŦ---------------------------//

app.use(bodyParser.json());
app.use(cors());

app.listen(1010, () => {
    console.log('[đļ]Server Is Running Properly ....\n[âšī¸]Port : 1010');
});

app.use("/", Routes);
//---------------------------đđŦ 'Zer0Power đđŦ---------------------------//