/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  info: function(req, res) {
    console.log("session:", req.session.authenticated);
    console.log("user:", req.session.user);
  },
  restricted: function(req, res) {
    return res.ok("this is restricted controller, if you find this you are authenticated");
  },
  open: function(req, res){
    return res.ok("Its open for public");
  },
  jwt: function(req, res){
    return res.ok("Yeah you are have json web token right? ");
  }
};

