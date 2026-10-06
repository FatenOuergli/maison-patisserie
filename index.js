const express = require("express");
const mongoose = require("mongoose");
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const dotenv = require("dotenv");
const userRoutes=require('./routes/userRoutes');

dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Db connected !!!");
  })
  .catch((error) => {
    console.error("Db not connected !!!", error);
  });

const app = express();
app.use(express.json())
app.use("/users",userRoutes);

const port = 1234;

app.listen(port, () => {
  console.log("The server is running smoothly !!!");
});


