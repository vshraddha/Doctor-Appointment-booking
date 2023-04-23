const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const connectDB = require("./config/db");

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});

// const url = process.env.MONGO_URL
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>{
//     app.listen(port, ()=>{
//         console.log(`server is running on ${port}`);
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })


//G4gtekkMsOEseIvn