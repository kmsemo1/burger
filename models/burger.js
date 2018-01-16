// import orm.js
var connection = require("../config/orm.js");

// calls to orm functions
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    }
};



// export db functions for the controller
module.exports = burger;