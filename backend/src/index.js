const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const port = 3001;

require("./config/dbConfig");

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
