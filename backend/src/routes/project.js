module.exports = function(app, io) {

    // Get projects list of user (all for admin) with regex filter on findings
    app.get("/api/projects", acl.hasPermission('projects:read'), function(req, res) {
        console.log('passing')
        res.status(200).json({
            "status": "success",
            "datas": [
                { "id": 1, "title": "Project A" },
                { "id": 2, "title": "Project B" }
            ]
        })
    })
}