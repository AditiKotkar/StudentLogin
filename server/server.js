const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'collegedata'
});


connection.connect((error) => {
  if (error){
    console.error('error while connecting to collegedata database:' , error);
    process.exit(1);
  }
  else{
    console.log(' succeccfully connected to collegedata database');
  }
});


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post("/login", (req, res) => {
  const { username, password } = req.body;
  connection.query(
    "SELECT * FROM studentinfo WHERE username = ? AND password = ?",
    [username, password],
    (err, studentResults) => {
      if (err) {
      
        res.status(500).send("Error logging in");
      } else if (studentResults.length === 0) {

        res.status(400).send("Invalid username or password");
      } else {
        
        res.status(200).send("Login successful");
      }
    }
  );
});


const PORT =  3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
