const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {type: String, required: true},
    leader: {type: Schema.Types.ObjectId, ref: 'User'},
    pentesters: [{type: Schema.Types.ObjectId, ref: 'User'}],
    company: {type: Schema.Types.ObjectId, ref: 'Company'},
    client: {type: Schema.Types.ObjectId, ref: 'User'},
    language: {type: Schema.Types.ObjectId, ref: 'Language'},
    scopes: [{type: Schema.Types.ObjectId, ref: 'Scope'}],
    creator: [{type: Schema.Types.ObjectId, ref: 'User'}],
    date_start: String,
    description: String
});

// Get Project with ID to generate report
// Get all projects (admin)
ProjectSchema.statics.getProjects = (isAdmin, userId) => {
    return new Promise((resolve, reject) => { 
        var query = Project.find()
        if (!isAdmin)
            query.or([{creator: userId}, {pentesters: userId}])
        query.populate('leader', 'username')
        query.populate('pentesters', 'username')
        query.populate('company', 'name')
        query.populate('client', 'username')
        query.populate('language', 'language')
        query.populate('scopes', 'asset_name')
        query.populate('creator', 'username')
        query.select('id name leader pentesters company client language scopes creator')
        query.exec()
        .then((rows) => {
            resolve(rows)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;