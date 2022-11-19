const cors = require('cors')
const dotenv = require("dotenv");
const moment = require('moment')
const express = require("express");
const abRequire = require("abrequire");
const bodyParser = require("body-parser");

const apiRouter = abRequire("routers/api.js");
const adminRouter = abRequire("routers/admin.js");

const mongooseConnect = abRequire("config/mongoose.js");

dotenv.config();

const { PORT, MONGODB_URI } = process.env;

const port = PORT || 3005;
const url = MONGODB_URI || 'mongodb://localhost/visitor-app';

mongooseConnect(url);

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use("/admin", adminRouter);

app.get("/", (req,res) => {
    result = moment(time[1] + " " + time[2], 'hh:mm:ss A').format('HH:mm:ss')
    console.log(result)
    res.send(result)
})

app.listen(port, () => {
    console.log(`Entrylist Server is started at http://localhost:${port}`);
});