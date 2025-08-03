const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'company' // Change to your actual DB name
});

db.connect(err => {
  if (err) {
    console.error('DB Connection failed:', err);
  } else {
    console.log('Connected to RDS MySQL!');
  }
});
