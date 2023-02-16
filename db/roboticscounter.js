const mongoose = require('mongoose');

const counterCodingSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 },
});

const CounterRobotics = mongoose.model('CounterRobotics', counterCodingSchema, 'counters_robotics');

module.exports = CounterRobotics;
