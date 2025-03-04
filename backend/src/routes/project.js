module.exports = function(app, io) {
    var Response = require('../lib/httpResponse');
    var Project = require('mongoose').model('Project');
    var acl = require('../lib/auth').acl;
    var reportGenerator = require('../lib/report-generator');
    var _ = require('lodash');
    var utils = require('../lib/utils');
    var Settings = require('mongoose').model('Settings');

    // Get projects list of user (all for admin) with regex filter on findings
    app.get("/api/projects", acl.hasPermission('projects:read'), function(req, res) {
        const projects = [
            {
                name: 'Project1',
                leader: 'Leader1',
                pentesters: ['Pentester1', 'Pentester2'],
                date_start: '26/02/2025',
                company: 'Company1',
                client: 'Client1',
                language: 'English',
                description: 'This is Project 1',
                scopes: ['Scope1', 'Scope2']
            },
            {
                name: 'Project2',
                leader: 'Leader2',
                pentesters: ['Pentester3', 'Pentester4'],
                date_start: '10/03/2025',
                company: 'Company2',
                client: 'Client2',
                language: 'French',
                description: 'This is Project 2',
                scopes: ['Scope3', 'Scope4']
            },
            {
                name: 'Project3',
                leader: 'Leader3',
                pentesters: ['Pentester5'],
                date_start: '15/04/2025',
                company: 'Company3',
                client: 'Client3',
                language: 'German',
                description: 'This is Project 3',
                scopes: ['Scope5']
            },
            {
                name: 'Project4',
                leader: 'Leader4',
                pentesters: ['Pentester6', 'Pentester7'],
                date_start: '30/04/2025',
                company: 'Company4',
                client: 'Client4',
                language: 'Spanish',
                description: 'This is Project 4',
                scopes: ['Scope6', 'Scope7']
            },
            {
                name: 'Project5',
                leader: 'Leader5',
                pentesters: ['Pentester8'],
                date_start: '05/05/2025',
                company: 'Company5',
                client: 'Client5',
                language: 'Japanese',
                description: 'This is Project 5',
                scopes: ['Scope8']
            },
            {
                name: 'Project6',
                leader: 'Leader6',
                pentesters: ['Pentester9', 'Pentester10'],
                date_start: '12/06/2025',
                company: 'Company6',
                client: 'Client6',
                language: 'Chinese',
                description: 'This is Project 6',
                scopes: ['Scope9', 'Scope10']
            },
            {
                name: 'Project7',
                leader: 'Leader7',
                pentesters: ['Pentester11', 'Pentester12'],
                date_start: '22/06/2025',
                company: 'Company7',
                client: 'Client7',
                language: 'Portuguese',
                description: 'This is Project 7',
                scopes: ['Scope11']
            },
            {
                name: 'Project8',
                leader: 'Leader8',
                pentesters: ['Pentester13'],
                date_start: '02/07/2025',
                company: 'Company8',
                client: 'Client8',
                language: 'Russian',
                description: 'This is Project 8',
                scopes: ['Scope12', 'Scope13']
            },
            {
                name: 'Project9',
                leader: 'Leader9',
                pentesters: ['Pentester14', 'Pentester15'],
                date_start: '18/07/2025',
                company: 'Company9',
                client: 'Client9',
                language: 'Italian',
                description: 'This is Project 9',
                scopes: ['Scope14']
            },
            {
                name: 'Project10',
                leader: 'Leader10',
                pentesters: ['Pentester16'],
                date_start: '01/08/2025',
                company: 'Company10',
                client: 'Client10',
                language: 'Korean',
                description: 'This is Project 10',
                scopes: ['Scope15', 'Scope16']
            }
        ];   
        Project.getProjects(acl.isAllowed(req.decodedToken.role, 'projects:read-all'), req.decodedToken.id)
        .then(msg => {
            console.log(msg);
            var projects = []
            msg.forEach(project => {
                var a = {}
                a._id = project._id
                a.name = project.name
                a.leader = project.leader
                a.pentesters = project.pentesters
                a.company = project.company
                a.client = project.client
                a.language = project.language
                a.scopes = project.scopes
                a.creator = project.creator
                if (acl.isAllowed(req.decodedToken.role, 'projects:users-connected')){
                    a.connected = getUsersRoom(project._id.toString())
                }
                projects.push(a)
            })
            res.status(200).json(JSON.stringify(
                {
                    status:'success',
                    projects
                }
            ));
        })
        .catch(err => Response.Internal(res, err))
    })
}