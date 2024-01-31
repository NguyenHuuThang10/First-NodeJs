const Course = require("../models/Course.js")
const { mongooseToObject, mutipleMongooseToObject } = require("../../util/mongoose.js")
class MeController {

  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    let courseQuery = Course.find({})

    if (req.query.hasOwnProperty('_sort')){
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type
      })
    }
    

    Promise.all([courseQuery, Course.countDocumentsWithDeleted({ deleted: true })])
      .then(([courses, deleteCount]) => {
          res.render('me/stored-courses', {
            deleteCount,
            courses: mutipleMongooseToObject(courses)
          })
      })
      .catch(next)

    // Course.countDocumentsDeleted()
    //   .then((deleteCount) => {
    //     console.log(deleteCount)
    //   })
    //   .catch(() => {

    //   })

    // Course.find({})
    //   .then(courses => {
    //     res.render('me/stored-courses', {
    //       courses: mutipleMongooseToObject(courses)
    //     })
    //   })
    //   .catch(next)

  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true }) // Hàm khắc phục chức năng khôi phục
      .then(courses => {
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next)
  }
}

module.exports = new MeController();

