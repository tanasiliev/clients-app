const mongoose = require('mongoose');
const clientSchema = require('../schemas/client');
const Client = mongoose.model('Client', clientSchema);

exports.findAll = function(req, res){
    Client.find({}, function(err, client){
        if(err)
            res.send(err).status(400);
        res.json(client);
    });
};

exports.create = function(req, res){
    var new_client = new Client(req.body);
    new_client.save(function(err, client){
        if(err)
            res.status(500).send(err);
        res.json(client);
    });
}


exports.findOne = function(req, res) {
    Client.findById({_id: req.params.clientId}, function(err, client) {
        if (err)
        res.status(500).send(err);
        res.json(client);
    });
};

exports.update = function(req, res) {
    Client.findOneAndUpdate({_id: req.params.clientId}, req.body, {new: true}, function(err, client) {
      if (err)
        res.status(500).send(err);
      res.json(client);
    });
};

exports.delete = function(req, res){
    Client.deleteOne({_id : req.params.clientId}, function(err){
        if(err)
            res.status(500).send(err);
        res.json({
			message: 'record deleted',
			_id: req.params.clientId,
		});
    });
};




