exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = (req, res) => {
    let valid = false;
    const { username, password } = req.body;

    if (username == 'demo' && password == 'demo')
        valid = true

    if (valid) {
      res.render('home');
    } else {
      res.redirect('/login');
    }
};
