const User = require('../../Databases/MongoDb/Models/userModel')


const createUpdateUser = async (req,res,next)=>
{
    const {name, picture, email} = req.body.user
    
    const user = await User.findOneAndUpdate({email},{name,picture},{new: true})
    
    if(user) { return res.json(user)}
    else {const newUser = await new User({email,name: email.split('@')[0],picture}).save() 
    
    return res.json(newUser)} 

}


const currentUserController = async (req,res,next)=>
{
    const {email} = req.body.user

     User.find({email: email}).exec((err,arg) => 
                                            {
                                                if(err){throw new Error(err)}

                                                res.json(arg)
                                            })

    next()
}


module.exports={ createUpdateUser,currentUserController }