var mongoose = require('mongoose');

var schema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
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

module.exports = mongoose.model('admin', schema);

module.exports.addOne = function(data, callback) {
    this.create(data, function(err, result) {
        result?callback({addnew: true}):callback({addnew: false});
    });
};
