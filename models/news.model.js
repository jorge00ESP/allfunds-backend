const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description:{
      type: String,
      required: true
   },
   date: {
      type: Date,
      required: true,
      default: Date.now
   },
   author: {
      type: String,
      required: true
   },
   archiveDate: {
      type: Date,
      required: false,
   }
})

module.exports = mongoose.model('news', newsSchema)