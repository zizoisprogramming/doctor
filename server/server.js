const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app =  express()
app.use(cors)

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:PASSWORD,
    database:"Patients"
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
  });
  
module.exports = db; // Export the connection

app.listen(3001, () => {
    console.log("Server is running");
})