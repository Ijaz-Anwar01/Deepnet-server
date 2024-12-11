const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
}, { timestamps: true });

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  items: [menuItemSchema]
}, { timestamps: true });

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;