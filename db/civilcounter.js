const mongoose = require('mongoose');

const counterCodingSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 },
});

const CounterCivil = mongoose.model('CounterCivil', counterCodingSchema, 'counters_civil');

module.exports = CounterCivil;
