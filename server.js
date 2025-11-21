const connectDB = require("./connections/connect");

require('dotenv').config();

const PORT = process.env.PORT || 3000 ;

const app = require("./index");

connectDB();

app.listen(PORT, () => { console.log("Server On") });