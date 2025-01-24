const express = require("express");
const routes = require("./routes/v1");
const app = express();

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get("/api/",(req,res,next)=>{
    res.send("server is running locally!!")
})
app.use("/v1", routes);
module.exports = app;
