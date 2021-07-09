const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000
const route = require("./routes");
const db = require("./config/db");

app.use(cors())
//connect to db
db.connect();

// parse application/json
app.use(bodyParser.json())



// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})