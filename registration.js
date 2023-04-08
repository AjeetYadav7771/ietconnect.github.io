const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const uri = 'mongodb://localhost:27017/mydb';

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.post('/register', (req, res) => {
  MongoClient.connect(uri, function(err, client) {
    if (err) throw err;

    const db = client.db('mydb');
    const collection = db.collection('students');

    const data = {
      rollNumber: req.body.rollnumber,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address
    };

    collection.insertOne(data, function(err, result) {
      if (err) throw err;
      console.log('Data inserted into MongoDB');

      res.redirect('/');
      client.close();
    });
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
