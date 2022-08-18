//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
//Packages

const mongoose = require("./src/dbConnection");
const players = require("./src/schemas/playerSchema");

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const Routes = require("./routes/Routes");

const app = express();
//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//

app.use(bodyParser.json());
app.use(cors());

app.listen(1010, () => {
    console.log('[📶]Server Is Running Properly ....\n[ℹ️]Port : 1010');
});

app.use("/", Routes);
//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//