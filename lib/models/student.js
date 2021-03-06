var mongoose = require('mongoose');

var schema = mongoose.Schema({
    realname: String,
    age: Number,
    phoneNumber: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    address: String,
    createdAt: String
}, {
    versionKey: false,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

schema.options.toObject.transform = function(doc, ret, options) {
    delete ret.id;
};

schema.options.toJSON.transform = function(doc, ret, options) {
    delete ret.id;
};

module.exports = mongoose.model('student', schema);

module.exports.addOne = function(data, callback) {
    data.createdAt = parseInt((new Date()).getTime());
    this.create(data,function(err,result) {
        result?callback({addnew: true}):callback({addnew: false});
    });
};
