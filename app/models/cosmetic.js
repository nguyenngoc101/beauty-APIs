var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CosmeticSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: String,
  created_at: {
    type: Date,
    "default": Date.now
  },
  modified_at: Date,
  information: String,
  image_url: String,
  classifications: [{
    type: Schema.ObjectId,
    ref: 'Classification'
  }],
  company: {
    name: String,
    country: String,
    website: String,
    founded: Date
  },
  country: String,
  distributors: [{
    type: Schema.ObjectId,
    ref: 'Distributor'
  }],
  metadata: {
    likes: {
      count: {
        type: Number
      },
      users: [{
        type: Schema.ObjectId,
        ref: 'User'
      }]
    },
    comments: Number,
    views: Number,
    rate: {type: Number, enum: [0, 1, 2, 3, 4, 5]}
  }
});

module.exports = mongoose.model('Cosmetic', CosmeticSchema);
