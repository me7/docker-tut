const { Pool } = require('pg')
const pool = new Pool({
    database: 'ddd',
    user: 'uuu',
    password: 'ppp'
})


function getTtt() {
    return new Promise(function (resolve, reject) {
        pool.query('select * from ttt')
            .then(ret => resolve(ret.rows))
            .catch(e => reject(e.stack))
    })
}

module.exports = {
    getTable: getTtt
}