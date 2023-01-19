const { query } = require("../../Databases/PostgreSQL/pgSql")



exports.querypostgresql = async (req, res)=>
{
    let result = await query("SELECT * FROM information_schema.tables")

    
    res.json(result.rows)
}