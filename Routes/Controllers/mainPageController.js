//Import Node.js Packages
const path = require('path')





const serverMainPage = (req,res,next)=>
{
    res.sendFile(path.join(__dirname, '../../build/index.html'))

} 





module.exports={ serverMainPage }