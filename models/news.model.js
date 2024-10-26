const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   body:{
      type: String,
      required: true
   },
   date: {
      type: Date,
      required: true,
      default: Date.now
   }
})

module.exports = mongoose.model('news', newsSchema)