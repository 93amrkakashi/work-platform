require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


const userRoutes = require('./routes/users')
const projectsRoutes = require('./routes/projects')

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {

  next();
});
app.use(cors());

//routes
app.use("/api/projects", projectsRoutes);
app.use('/api/user', userRoutes)
app.get("/", (req,res) => {
  res.json({msg:"app is running"})
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
    // listening for requests
    app.listen(process.env.PORT, () => {
      console.log(`server started at port ${process.env.PORT} noooooow`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Not connected to DB");
  });
