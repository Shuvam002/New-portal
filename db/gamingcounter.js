const mongoose = require('mongoose');

const counterCodingSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 },
});

const CounterGaming = mongoose.model('CounterGaming', counterCodingSchema, 'counters_gaming');

module.exports = CounterGaming;
