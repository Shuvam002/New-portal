const mongoose = require('mongoose');

const counterCodingSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 },
});

const CounterCoding = mongoose.model('CounterCoding', counterCodingSchema, 'counters_coding');

module.exports = CounterCoding;
