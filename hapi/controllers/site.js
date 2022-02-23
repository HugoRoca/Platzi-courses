function home(req, h) {
  return h.view("index", {
    title: "Home",
    user: req.state.user,
  });
}

function register(req, h) {
  return h.view("register", {
    title: "Register",
    user: req.state.user,
  });
}

function login(req, h) {
  return h.view("login", {
    title: "SignIn",
    user: req.state.user,
  });
}

module.exports = {
  home,
  register,
  login,
};
