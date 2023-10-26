const express = require('express');
const cron = require("node-cron");
const fs = require("fs");

cron.schedule(' */10 * * * * *', function(){
    let data = `Hi Cron Job is Running After 10 Second\n`;

    fs.appendFile('logs.txt', data, function(err){
        if(err) throw err;
        console.log('Data appended to file!');
    })
})
// const mongoose = require('mongoose');
// const route = require("./routes/route");
// const dotenv = require("dotenv").config();
// const dbConnect = require("./config/dbConnect");
const app = express();
// dbConnect()
// app.use(express.json());

// app.get("/",(req,res) => {
//   res.send("Unauthorized Access")
// })
  // app.use('/', route);

 app.listen(process.env.PORT || 3001, () => {
    console.log("Server is Running at Port " + (process.env.PORT || 3001));
  });