module.exports = function(app, db) {

    var projects = db.get('projects');

    app.get('/api/projects', function(req, res) {
        projects.find({}, function(err, docs) {
            res.json(docs);
        });
    });

    app.post('/api/projects', function(req, res) {
        var project = req.body.project;
        projects.insert(project, function(err) {
            if (err) throw err;
            res.json('Inserted');
        });
    });

    app.put('/api/projects/:id', function(req, res) {
        var id = req.params.id;
        var project = req.body.project;
        projects.updateById(id, project, function(err) {
            if (err) throw err;
            res.json('Updated');
        });
    });

    app.delete('/api/projects/:id', function(req, res) {
        var id = req.params.id;
        projects.remove({ _id : id }, function (err) {
            if (err) throw err;
            res.json('Deleted');
        });

    });

    var insertTestData = function() {
        projects.insert({ title: 'Test Project!', description: "This is a project saved in the DB" }, function(err, doc) {
            if (err) console.log(err);
        });
        projects.insert({ title: 'Project number 2', description: "This is a project saved in the DB" }, function(err, doc) {
            if (err) console.log(err);
        });
        projects.insert({ title: 'Project number 3', description: "This is a project saved in the DB" }, function(err, doc) {
            if (err) console.log(err);
        });
        projects.insert({ title: 'Project number 4', description: "This is a project saved in the DB" }, function(err, doc) {
            if (err) console.log(err);
        });
        projects.insert({ title: 'Project number 5', description: "This is a project saved in the DB" }, function(err, doc) {
            if (err) console.log(err);
        });
    };

    //insertTestData();
};