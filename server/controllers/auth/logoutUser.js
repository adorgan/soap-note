const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      return res.json("success");
    }
  });
};

module.exports = logoutUser;
