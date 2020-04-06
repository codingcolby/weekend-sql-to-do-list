const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET ROUTE
router.get("/", (req, res) => {
  const queryinfo = `SELECT * FROM "weekend_to_do_app" ORDER BY "id"`;

    pool.query(queryinfo)
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.warn(err);
        res.sendStatus(500);
    });
});

// POST ROUTE
router.post("/", (req, res) => {
    const queryinfo = `INSERT INTO "todolist" ("task_name", "date_added", "priority_level", "resources_needed", "do_delegate","due_date", "completed")  VALUES ($1, $2, $3, $4, $5, $6, $7);`;

    pool.query(queryinfo, [req.body.info])
    .then(response => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.warn(err);
        res.sendStatus(500);
    });
});

// PUT ROUTE
router.put("/:id", (req, res) => {
    let taskDone = true;
    
    if (req.body.completed == "true") {
        taskDone = false;
    } else {
        taskDone = true;
    }
    
    const queryinfo = `UPDATE "todolist" SET "completed"=$1 WHERE id=$2;`;

    pool.query(queryinfo, [taskDone, req.params.id])
    .then(response => {
        res.sendStatus(200);
    })
    .catch(err => {
        console.warn(err);
        res.sendStatus(500);
    });
});

// DELETE ROUTE
router.delete("/:id", (req, res) => {
    const queryinfo = `DELETE FROM "todolist" WHERE id=$1`;

    pool.query(queryinfo, [req.params.id])
    .then(response => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.warn(err);
        res.sendStatus(500);
    });
});

module.exports = router;