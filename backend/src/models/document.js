const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    filename: {type: String, required: true},
    type: {type: String, enum: ['txt', 'docx'], default: 'txt'},
    own: {type: Schema.Types.ObjectId, ref: 'User'},
    created_at: String,
});

var Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;