const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: {type: String, maxLength: 255, require: true},
    description: {type: String, maxLength: 600},
    img: {type: String, maxLength: 255},
    videoId: {type: String, maxLength: 255, require: true},
    level: {type: String, maxLength: 255},
    slug: { type: String, slug: 'name', unique: true}
  }, { timestamps: true }); // Thêm thời gian tạo vào sửa

  //Add plugin 
mongoose.plugin(slug);
Course.plugin(mongooseDelete,  { 
  deletedAt : true, // Thêm khoảng thời gian xóa
  overrideMethods: 'all' 
})

  module.exports = mongoose.model('Course', Course);