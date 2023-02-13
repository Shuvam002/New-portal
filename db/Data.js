const mongoose = require('mongoose');
const Counter = require('./counter');
mongoose.connect('mongodb://localhost:27017/testing', { useNewUrlParser: true });
const dataSchema = new mongoose.Schema({_id:Number}, { strict: false, timestamps:true, index:{unique:true}, _id:false });

dataSchema.pre("save",function(next){
    let doc = this;
    Counter.getSequenceNextValue("user_id").then(counter=>{
        console.log("done",counter);
        if(!counter){
            Counter.insertCounter("user_id").then(counter=>{
                doc._id=counter;
                console.log(doc)
                next();
            }).catch(error=>next(error));
        }else{
            doc._id=counter;
            next();
        }
    }).catch(error=>next(error));
});

const Data = mongoose.model('mrd', dataSchema);
module.exports = Data;

