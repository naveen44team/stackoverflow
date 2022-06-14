const mongoose=require('mongoose')
const questionSchecma=new mongoose.Schema({
    title:String,
    body:String,
    tags:[],
    created_at:{
        type:Date,
        default:Date.now()
    },
    user:Object,
    comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    }
})

module.exports=mongoose.model("questions", questionSchecma); 