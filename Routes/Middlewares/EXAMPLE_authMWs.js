const userModel = require('../../Databases/MongoDb/Models/userModel')



//------------------------------------------------------------
const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

//------------------------------------------------------------



exports.authCheck = async (req,res,next) => 
{
    

    try {

      const token = getTokenFrom(req)
      const decodedToken = jwt.verify(token, process.env.SECRET)
  
      if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
      }

        
      const fbUser = await userModel.findById(decodedToken.id)
      req.body.user = fbUser
    } 
    
    catch (err) {
        res.status(401).json({message:"invalid or expired token"})
    }

    next()
}


exports.adminCheck = async (req, res, next) => {

  
  const { email } = req.body.user;

  const adminUser = await userModel.findOne({ email }).exec();

  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "Admin resource. Access denied.",
    });
  } else {
    next();
  }
};
