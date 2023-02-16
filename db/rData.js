const mongoose = require('mongoose');
const CounterCoding = require('./codingcounter');
const CounterCivil = require('./civilcounter');
const CounterElectrical = require('./electricalcounter');
const CounterGaming = require('./gamingcounter');
const CounterRobotics = require('./roboticscounter');
mongoose.connect('mongodb://localhost:27017/testing', { useNewUrlParser: true });
const rdataSchema = new mongoose.Schema({_id:Number, played:{type:Number, default:0}}, { strict: false, timestamps:true, index:{unique:true}, _id:false });

rdataSchema.pre('save', function (next) {
    let doc = this;
    let counterModel;
    if (doc.constructor.modelName === 'coding') {
      counterModel = CounterCoding;
    } else if (doc.constructor.modelName === 'civil') {
      counterModel = CounterCivil;
    } else if (doc.constructor.modelName === 'electrical') {
      counterModel = CounterElectrical;
    } else if (doc.constructor.modelName === 'robotics') {
      counterModel = CounterRobotics;
    } else if (doc.constructor.modelName === 'gaming') {
      counterModel = CounterGaming;
    }
  
    counterModel.findOneAndUpdate(
      { _id: doc.constructor.modelName.toLowerCase() + '_id' },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    )
      .then(function (counter) {
        doc._id = counter.sequence_value;
        next();
      })
      .catch(function (error) {
        next(error);
      });
  });
  


const coding = mongoose.model('coding', rdataSchema);
const civil = mongoose.model('civil', rdataSchema);
const electrical = mongoose.model('electrical', rdataSchema);
const robotics = mongoose.model('robotics', rdataSchema);
const gaming = mongoose.model('gaming', rdataSchema);
module.exports = {coding,civil,electrical,robotics,gaming};