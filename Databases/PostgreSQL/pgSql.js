const { Pool } = require('pg')
const config = require('../../Utilities/config.js')
 


const pool = new Pool({
  user: config.PGSQL_USER,
  password: config.PGSQL_PASSWORD,
  host: config.PGSQL_HOST,
  port: config.PGSQL_PORT,
  database: config.PGSQL_DATABASE,
})
 





    async function query(text, params) 
    {
        const start = Date.now()
        const res = await pool.query(text, params)
        const duration = Date.now() - start
        console.log('executed query', { text, duration, rows: res.rowCount })
        return res
    }



module.exports = 
{
  query
}