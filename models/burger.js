// import orm.js
var connection = require("../config/orm.js");

// calls to orm functions
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("cats", condition, function (res) {
            cb(res);
        });
    },
    findOne: function (condition, cb) {
        orm.findOne("cats", condition, function (res) {
            cb(res);
        });
    }
};



// export db functions for the controller
module.exports = burger;