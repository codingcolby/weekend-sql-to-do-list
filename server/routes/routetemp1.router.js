const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET ROUTE
router.get('/', (req, res) => {
  const queryinfotemp = `SELECT * FROM "weekend_to_do_app"`;
    pool.query(queryinfotemp)
    .then((responseDB) => {
        const dbRows = responseDB.rows;
        console.log(dbRows);
        res.send(dbRows);
    })
    .catch((err) => {
        console.log('ERROR:', err);
        res.sendStatus(500);
    });
});

// POST ROUTE
router.post('/', (req, res) => {
    const datatemp = req.body;

    const querytemp = `INSERT INTO "sometablename" ("field_1", "field_2", "field_3", "field_4")
    VALUES ($1, $2, $3, $4);`;

    pool.query(querytemp, [datatemp.field_1, datatemp.field_2, datatemp.field_3, datatemp.field_4])
    .then((responseDb) => {
        console.log(responseDb);
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('ERROR:', err);
        res.sendStatus(500);
    });
});

module.exports = router;