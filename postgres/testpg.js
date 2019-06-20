const { Pool } = require('pg')

const pool = new Pool({
    user: 'uuu',
    password: 'ppp',
    database: 'ddd'
})

pool.query('select * from ttt')
    .then(ret => console.log(ret.rows))
    .catch(e => console.log(e.stack))