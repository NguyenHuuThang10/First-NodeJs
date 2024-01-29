class NewsController {
  // [GET] - news
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("NEWS DEITAIL !!");
  }
}

module.exports = new NewsController();
