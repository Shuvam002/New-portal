const mongoose = require('mongoose');

const counterCodingSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 },
});

const CounterEle = mongoose.model('CounterElectrical', counterCodingSchema, 'counters_electrical');

module.exports = CounterEle;
