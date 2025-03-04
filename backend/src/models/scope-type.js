const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScopeTypeSchema = new Schema({
    scope_type: {type: String, required: true}
});

var ScopeType = mongoose.model('ScopeType', ScopeTypeSchema);

module.exports = ScopeType;