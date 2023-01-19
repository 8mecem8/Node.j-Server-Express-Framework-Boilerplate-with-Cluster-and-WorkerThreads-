

const PORT = process.env.PORT || 3000

const DB_C = process.env.DB_C

const SECRET= process.env.SECRET


const PGSQL_USER = process.env.PGSQL_USER
const PGSQL_PASSWORD = process.env.PGSQL_PASSWORD 
const PGSQL_HOST = process.env.PGSQL_HOST 
const PGSQL_PORT = process.env.PGSQL_PORT 
const PGSQL_DATABASE = process.env.PGSQL_DATABASE 


module.exports = {PORT, DB_C, SECRET,PGSQL_USER,PGSQL_PASSWORD,PGSQL_HOST,PGSQL_PORT,PGSQL_DATABASE}

