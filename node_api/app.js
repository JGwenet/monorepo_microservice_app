
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const colors = require('colors');



const mongooseUrl = require('./db/config').db.url;


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "images")));


app.use(express.static(process.cwd()+"/client/dist/client/"));


app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/client/dist/client/index.html")
})


const userRoutes = require("./routes/user");
const shopRoutes = require("./routes/shop");

//app.use("/api/user", userRoutes);
app.use("/api/shop", shopRoutes);


mongoose
  .connect(mongooseUrl)
  .then(() => {
    const port = process.env.PORT || 5001;
    const server = app.listen(port, () => {
      console.log("Server running on port".magenta, colors.yellow(port));
    });
    console.log("\nConnected to".magenta, "monorepo-microservice-app".cyan, "database".magenta);
  })
  .catch(err => console.log("Error connecting to database".cyan, err));