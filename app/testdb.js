const { Pool } = require('pg')

const pool = new Pool({
    host: 'db',
    user: 'uuu',
    password: 'ppp',
    database: 'ddd'
})

pool.query('select * from ttt')
    .then(ret => console.log(ret.rows))
    .catch(e => console.log(e.stack))