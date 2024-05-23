"use strict";

var jwt = require("jwt-simple");
var moment = require("moment");
var secret = "habbitApp";

exports.createToken = function (user) {
  var payload = {
    sub: user.idUser,
    name: user.name,
    email: user.email,
    role: user.typeUser,
    iat: moment().unix(),
    exp: moment().add(7, "days").unix(),
  };

  return jwt.encode(payload, secret);
};
