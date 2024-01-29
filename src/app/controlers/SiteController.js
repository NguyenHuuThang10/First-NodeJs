const Course = require("../models/Course.js")
const { mutipleMongooseToObject } = require("../../util/mongoose.js")
class SiteController {
  // [GET] /
  async index(req, res, next) {
    await Course.find({})
      .then(courses => {
        
        res.render('home', { 
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next)
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

