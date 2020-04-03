const pg = require('pg');
const Pool = pg.Pool;

// SERVER TO DATABASE CONFIGURATION
const pool = new Pool({
    database: 'weekend_to_do_app',
    host: 'localhost',
    port: 5432,
    max: 6,
    idleTimeoutMills: 24000,
});

pool.on('connect', () => {
    console.log('Time for swim, you have found the pool');
});

pool.on('error', (error) => {
  console.log('Ut oh - you are in the deep end now with error: ', error);
});

module.exports = pool;