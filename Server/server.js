const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/addWeapons', (req, res) => {

    const name = req.body.name;
    const durability = req.body.durability;
    const number = req.body.number;
    const might = req.body.might;
    const effect = req.body.effect;
    const crit = req.body.crit;
    const weight = req.body.weight;

    db.query('INSERT INTO weapons (name, durability, number, might, effect, crit, weight) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, durability, number, might, effect, crit, weight], function(err, result) {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting data into database");
      } else {
        console.log("Data inserted successfully");
        res.status(200).send("Data inserted successfully");
      }
    });
    
});

app.get('/getWeapons', (req, res) => {
  db.query('SELECT * FROM weapons', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.send(result);
    }
  });
});

app.get('/getByMostMight', (req, res) => {
  db.query('SELECT * FROM weapons ORDER BY might DESC', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.send(result);
    }
  });
});

app.get('/getByLeastMight', (req, res) => {
  db.query('SELECT * FROM weapons ORDER BY might ASC', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.send(result);
    }
  });
});

app.post('/searchWeapons', (req, res) => {
  const name = req.body.name;
  const number = req.body.number;

  db.query('SELECT * FROM weapons WHERE name = ? AND number = ?', [name, number], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.send(result);
    }
  });
});

app.put('/updateWeapon/:name', (req, res) => {
  const name = req.params.name;
  const might = req.body.might;
  const effect = req.body.effect;
  const crit = req.body.crit;
  const weight = req.body.weight;
  const durability = req.body.durability;

  db.query('UPDATE weapons SET might = ?, effect = ?, crit = ?, weight = ? WHERE name = ?', [might, effect, crit, weight, name], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating data in database');
    } else {
      console.log('Updated successfully');
      res.sendStatus(200);
    }
  });
});

app.get('/getWeaponByName/:name', (req, res) => {
  const name = req.params.name;
  db.query('SELECT * FROM weapons WHERE name = ?', [name], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.send(result);
    }
  });
});


app.delete('/deleteWeapon/:name', (req, res) => {
  const name = req.params.name;
  db.query('DELETE FROM weapons WHERE name = ?', [name], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting data from database');
    } else {
      console.log("Deleted successfully");
      res.send("Weapon Deleted");
    }
  });
});


app.delete('/deleteAllWeapons', (req, res) => {
  db.query('DELETE FROM weapons', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting data from database');
    } else {
      console.log("Deleted successfully");
      res.send("All Weapons Deleted");
    }
    });
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'armadsDB'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
