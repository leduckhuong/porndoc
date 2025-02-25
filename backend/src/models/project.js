const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: { type: String },
    leaders: { type: String },
    team: { type: Array },
    startDate: { type: Date },
    company: { type: String },
    client: { type: String },
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;