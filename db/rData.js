const mongoose = require('mongoose');
const Counter = require('./rcounter');
mongoose.connect('mongodb://localhost:27017/testing', { useNewUrlParser: true });
const rdataSchema = new mongoose.Schema({_id:Number, played:{type:Number, default:0}}, { strict: false, timestamps:true, index:{unique:true}, _id:false });

rdataSchema.pre("save",function(next){
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

const coding = mongoose.model('coding', rdataSchema);
const civil = mongoose.model('civil', rdataSchema);
const electrical = mongoose.model('electrical', rdataSchema);
const robotics = mongoose.model('robotics', rdataSchema);
const gaming = mongoose.model('gaming', rdataSchema);
module.exports = {coding,civil,electrical,robotics,gaming};