const Message = require('./message');

module.exports = function(app) {
    
// Get all messages
    app.get('/messages', function(req, res) {
        Message.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json(data);
            }
        });
    });

// Create new message
    app.post('/messages', function(req, res) {
        var message = new Message({text: req.body.text});
        message.save(function(err, results) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json({success: results});
            }
        });
    });

// Get one message
    app.get('/messages/:id', function(req, res) {
        Author.findById(req.params.id, function(err, data) {
            if (err) {
                console.log(err);
                res.json({error: err});
            } else {
                res.json(data);
            }
        });
    });
}
