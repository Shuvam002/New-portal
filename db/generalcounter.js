const mongoose = require('mongoose');

const counterCodingSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 },
});

const CounterGeneral = mongoose.model('CounterGeneral', counterCodingSchema, 'counters_general');

module.exports = CounterGeneral;
