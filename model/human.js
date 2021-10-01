const mongoose=require('mongoose');
const schema=mongoose.Schema

const HumanSchema = new schema ({
    name:{
        type:String,
        default:"name"
    },
    age:{
        type:Number,
        default:0
    }, 
    favoriteFood:{
        type:[String],
         default: undefined
    }
})

module.exports= human = mongoose.model('human', HumanSchema);