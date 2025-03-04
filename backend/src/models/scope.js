const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScopeSchema = new Schema({
    asset_name: {type: String, required: true},
    scope_type: {type: Schema.Types.ObjectId, ref: 'ScopeType'},
    type: {type: String, enum: ['in-scope', 'out-scope'], default: 'in-scope'},
    created_at: String,
    updated_at: String,
    reports: [{type: Schema.Types.ObjectId, ref: 'Report'}]
});

var Scope = mongoose.model('Scope', ScopeSchema);

module.exports = Scope;