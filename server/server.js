const express = require("express");
const app = express();
const cors = require('cors')

const port = 8000;

require('dotenv').config();
require("./config/mongoose.config");

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require("./routes/routes")(app);

app.listen(port, () => console.log(`Connecting on port: ${port}`));