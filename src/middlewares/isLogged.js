export default (req, res, next) => {

  if (req.cookies.username) {
      next();
  }
  else {
      res.redirect("/register");
  }

}