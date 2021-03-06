var mongoose = require('mongoose');
var Schema = mongoose.Schema

var FakeTipSchema = new Schema({
  cosmetic: {
    type: Schema.ObjectId,
    required: true,
    ref: 'Cosmetic'
  },
  tips: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('FakeTip', FakeTipSchema);
