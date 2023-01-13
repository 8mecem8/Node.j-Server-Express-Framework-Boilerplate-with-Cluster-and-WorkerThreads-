const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const {ObjectId} = mongoose.Schema


const userSchema = new mongoose.Schema({
  email:{
      type: String,
      required: true, 
      index: true,
      unique: true,
  },
  name: {
      type: String,
      required: true,
  },
  password: {
      type: String,
  },
  role:{
      type: String,
      required: true ,
      default:"subscriber",
  },
  cart:{
      type: Array,
      default: [],
  },
  address: String,
  wishlist: [{type: ObjectId, ref:"Product"}],
},{timestamps: true});



//To change _id with id , optional
/* userSchema.set('toJSON', {
  transform: (document, returnedObject) => 
  {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash // the passwordHash should not be revealed
  }
})
 */
userSchema.plugin(uniqueValidator)




const userModel = mongoose.model('User', userSchema)

module.exports = userModel