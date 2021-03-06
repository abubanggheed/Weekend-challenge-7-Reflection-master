const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback"
                ORDER BY "id" DESC;`).then( results => {
        res.send(results.rows);
    }).catch( error => {
        console.log('ERROR:', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let bdy = req.body;
    console.log(bdy);
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [bdy.feeling, bdy.understanding, bdy.support, bdy.comments])
    .then( results => {
        res.sendStatus(201);
    }).catch( error => {
        console.log('ERROR:', error);
        res.sendStatus(500);
    });
});

router.delete('/', (req, res) => {
    pool.query(`DELETE FROM "feedback"
    WHERE "id" = $1;`, [req.query.id]).then( results => {
        res.sendStatus(200);
    }).catch( error => {
        console.log('ERROR:', error);
        res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
    pool.query(`UPDATE "feedback"
    SET "flagged" = NOT "flagged"
    WHERE "id" = $1;`, [req.query.id]).then( results => {
        res.sendStatus(200);
    }).catch( error => {
        console.log('ERROR:', error);
        res.sendStatus(500);
    });
});

module.exports = router;