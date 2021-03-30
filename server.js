const express = require('express');
const myslq = require('mysql2');
const inputCheck = require('./utils/inputCheck');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const connection = myslq.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'K33p!tS3cr3t',
  database: 'employeeTracker'
});

connection.connect(function( error ){ 
  if (error) {
    console.error("error connecting", error.stack)
    return; }
    console.log("connected as id", connection.threadId)
})


// Default response for any other request (not found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });